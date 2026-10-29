function VideoPlayer({ outputVideo }) {
  if (!outputVideo) return null;

  return (
    <div className="video-card">
      <h2>Processed Video</h2>

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
  );
}

export default VideoPlayer;