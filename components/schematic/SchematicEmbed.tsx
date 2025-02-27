"use client";

import { SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";

const SchematicEmbed = ({
  accessToken,
  componentId,
}: {
  accessToken: string;
  componentId: string;
}) => {
  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />;
};

export default SchematicEmbed;
