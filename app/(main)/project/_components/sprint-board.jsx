"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import SprintManager from "./sprint-manager";

export default function SprintBoard({ sprints, projectId, orgId }) { 


  const [currentSprint, setCurrentSprint] = useState(
    sprints.find((spr) => spr.status === "ACTIVE") || sprints[0]
  );

  return(
    <div>
    <SprintManager
        sprint={currentSprint}
        setSprint={setCurrentSprint}
        sprints={sprints}
        projectId={projectId}
      />
    </div>);

}