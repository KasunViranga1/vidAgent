import React from "react";
import SchematicEmbed from "./SchematicEmbed";
import { getTemporaryAcessToken } from "@/action/getTemporaryAcessToken";

async function SchematicComponent({ componentId }: { componentId: string }) {
  if (!componentId) {
    return null;
  }

  //   get access token
  const accessToken = await getTemporaryAcessToken();

  if (!accessToken) {
    throw new Error("Failed to get access token");
  }

  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />;
}

export default SchematicComponent;
