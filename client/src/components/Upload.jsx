import { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";

function Upload() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputVideo, setOutputVideo] = useState("");

  const handleUpload = async () => {
    if (!video) {
      alert("Please select a video");
      return;
    }

    const formData = new FormData();
    formData.append("file", video);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/detect",
        formData
      );

      if (res.data.success) {
        setOutputVideo(
          "http://127.0.0.1:8000" +
            res.data.video +
            "?t=" +
            Date.now()
        );
      }

    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    }

    setLoading(false);
  };

  return (
    <div className="upload-card">

      <FaCloudUploadAlt className="upload-icon" />

      <h2>Upload PPE Inspection Video</h2>

      <p>
        Upload a construction site video for AI based PPE Detection.
      </p>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
      />

      {video && (
        <p className="selected-file">
          📄 {video.name}
        </p>
      )}

      <button
        className="detect-btn"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Processing..." : "🚀 Detect PPE"}
      </button>

      {outputVideo && (
        <div className="video-section">

          <h3>Processed Video</h3>

          <video controls width="100%">
            <source src={outputVideo} type="video/mp4" />
          </video>

          <a
            href={outputVideo}
            download
            className="download-btn"
          >
            ⬇ Download Video
          </a>

        </div>
      )}

    </div>
  );
}

export default Upload;