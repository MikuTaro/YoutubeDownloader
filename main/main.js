function downloadVideo(resolution) {
    const videoUrlInput = document.getElementById('videoUrl').value.trim();

    if (!videoUrlInput) {
        alert('Please enter a video URL.');
        return;
    }

    let videoUrl;
    switch (resolution) {
        case '420p':
            videoUrl = `${videoUrlInput}?resolution=420p`;
            break;
        case '720p':
            videoUrl = `${videoUrlInput}?resolution=720p`;
            break;
        case '1080p':
            videoUrl = `${videoUrlInput}?resolution=1080p`;
            break;
        default:
            console.log('Invalid resolution');
            return;
    }

    console.log(`Downloading video from: ${videoUrl}`);

    const a = document.createElement('a');
    a.href = videoUrl;
    a.target = '_blank'; // Open the URL in a new tab
    a.download = `video_${resolution}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
