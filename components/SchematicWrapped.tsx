import { useUser } from "@clerk/nextjs";
import { useSchematicEvents } from "@schematichq/schematic-react";
import React, { useEffect } from "react";

const SchematicWrapped = ({ children }: { children: React.ReactNode }) => {
  const { identify } = useSchematicEvents();
  const { user } = useUser();

  useEffect(() => {
    const userName =
      user?.username ??
      user?.fullName ??
      user?.emailAddresses[0]?.emailAddress ??
      user?.id;

    //   we can set up schematic in company level and user level
    // B2B and B2C
    // in this app we are considering the company and user are same

    if (user?.id) {
      identify({
        // Company level Key
        company: {
          keys: {
            id: user.id,
          },
          name: userName,
        },
        // User level Key
        keys: {
          id: user.id,
        },
        name: userName,
      });
    }
  }, [identify, user]);

  return children;
};

export default SchematicWrapped;
