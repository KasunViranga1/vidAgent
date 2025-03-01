"use server";

import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  //   const videoId = "123" //fake id
  const videoId = getVideoIdFromUrl(url);
  // console.log(videoId);
  if (!videoId) return;

  // Refirect to the new post
  redirect(`/video/${videoId}/analysis`);
}
