from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import shutil
import os
import subprocess
import sys

app = FastAPI(title="PPE Detection API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
OUTPUT_DIR = "outputs"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)


@app.get("/")
def home():
    return {"message": "PPE Detection API is Running 🚀"}


@app.post("/detect")
async def detect_video(file: UploadFile = File(...)):
    try:
        # Save uploaded video
        input_path = os.path.join(UPLOAD_DIR, "test.mp4")

        with open(input_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Run AI Detection
        subprocess.run(
            [sys.executable, "detect_video.py"],
            check=True
        )

        output_path = os.path.join(OUTPUT_DIR, "output.mp4")

        if not os.path.exists(output_path):
            return JSONResponse(
                status_code=500,
                content={"error": "Output video not generated"}
            )

        return {
            "success": True,
            "video": "/output"
        }

    except subprocess.CalledProcessError as e:
        return JSONResponse(
            status_code=500,
            content={"error": f"Detection failed: {str(e)}"}
        )

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )


@app.get("/output")
def get_output():
    output_path = os.path.join(OUTPUT_DIR, "output.mp4")

    if not os.path.exists(output_path):
        return JSONResponse(
            status_code=404,
            content={"error": "Output video not found"}
        )

    return FileResponse(
        output_path,
        media_type="video/mp4",
        filename="output.mp4"
    )