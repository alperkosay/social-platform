import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Post } from "../types/posts";
import { PostCard } from "./cards/post-card";

export function PostsSlider({ posts }: { posts: Post[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id} className="basis-3/6">
            <PostCard post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
