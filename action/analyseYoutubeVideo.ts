"use server";

import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  //   const videoId = getVideoIdFromUrl(url);
  const videoId = "abc"; // fake video id
  if (!videoId) return;

  // Refirect to the new post
  redirect(`/video/${videoId}/analysis`);
}
