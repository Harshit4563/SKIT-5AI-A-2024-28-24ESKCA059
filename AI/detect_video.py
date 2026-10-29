import cv2
from ultralytics import YOLO
import subprocess
import os

# Load model
model = YOLO("models/ppe.pt")

video_path = "uploads/test.mp4"

# Temporary AVI
temp_output = "outputs/temp_output.avi"

# Final browser compatible MP4
final_output = "outputs/output.mp4"

# FFmpeg path
ffmpeg_path = r"D:\ffmpeg-8.1.2-essentials_build\ffmpeg-8.1.2-essentials_build\bin\ffmpeg.exe"

cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print("❌ Could not open video")
    exit()

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)

if fps <= 0:
    fps = 30

fourcc = cv2.VideoWriter_fourcc(*"XVID")
out = cv2.VideoWriter(temp_output, fourcc, fps, (width, height))

frame_count = 0

while True:
    ret, frame = cap.read()

    if not ret:
        break

    frame_count += 1

    # Har 5th frame detect hoga (fast)
    if frame_count % 5 == 0:

        small = cv2.resize(frame, (640, 360))

        result = model.predict(
            small,
            imgsz=640,
            verbose=False
        )[0]

        annotated = result.plot()

        annotated = cv2.resize(annotated, (width, height))

        out.write(annotated)

    else:
        out.write(frame)

cap.release()
out.release()

print("Converting to browser compatible MP4...")

if os.path.exists(final_output):
    os.remove(final_output)

subprocess.run([
    ffmpeg_path,
    "-y",
    "-i",
    temp_output,
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    final_output
], check=True)

print("✅ Done!")
print("Saved:", final_output)