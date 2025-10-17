import { SectionTitle } from "@/components/ui/section-title";
import { CreatorsProfileSlides, creatorsMock } from "@/features/creators";
import { postsMock, PostsSlider } from "@/features/posts";
export default function Home() {
  return (
    <main className="pt-4">
      <section className="mb-10">
        <SectionTitle>
          <h2>Popular Creators</h2>
        </SectionTitle>
        <CreatorsProfileSlides creators={creatorsMock} />
      </section>

      <section>
        <SectionTitle>
          <h2>Latest Posts</h2>
        </SectionTitle>
        <PostsSlider posts={postsMock} />
      </section>
    </main>
  );
}
