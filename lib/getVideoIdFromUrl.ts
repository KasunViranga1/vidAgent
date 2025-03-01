export function getVideoIdFromUrl(url: string): string | null {
  let videoId: string | null = null;

  if (url.includes("youtu.be/")) {
    // stortened URL format: https://youtu.be/VIDEO_ID
    videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0] || null;
  } else if (url.includes("youtube.com/shorts/")) {
    // stortened URL format: https://youtube.oom/shorts/VIDEO_ID
    videoId = url.split("youtube.com/shorts/")[1]?.split(/[?#]/)[0] || null;
  } else if (url.includes("v=")) {
    // stortened URL format: https://youtube.com/watch?v=VIDEO_ID
    videoId = url.split("v=")[1]?.split(/[?#]/)[0] || null;
  }

  return videoId;
}
