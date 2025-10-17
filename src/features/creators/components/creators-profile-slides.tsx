import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Creator } from "../types/creator";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

export function CreatorsProfileSlides({ creators }: { creators: Creator[] }) {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent>
        {creators.map((creator) => (
          <CarouselItem
            key={creator.id}
            style={{
              flex: " 0 0 auto",
            }}
          >
            <Link
              href={ROUTES.CREATORS.DETAIL(creator.username)}
              className="inline-flex w-28 flex-col items-center gap-2"
            >
              <img
                src={creator.profileImageUrl}
                alt={creator.name}
                className="rounded-full"
              />
              <span className="line-clamp-1 text-sm font-medium">
                {creator.name}
              </span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
