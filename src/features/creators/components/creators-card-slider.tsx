import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Creator } from "../types/creator";
import CreatorCard from "./cards/creator-card";

export default function CreatorsCardSlider({
  creators,
}: {
  creators: Creator[];
}) {
  return (
    <Carousel>
      <CarouselContent>
        {creators.map((creator) => (
          <CarouselItem key={creator.id} className="basis-3/6">
            <CreatorCard creator={creator} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
