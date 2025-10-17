import React from "react";
import { Creator } from "../..";

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <div>
      <div>
        <img src={creator.profileImageUrl} alt={creator.name} />
      </div>
      <h3>{creator.name}</h3>
      <p>{creator.bio}</p>
    </div>
  );
}
