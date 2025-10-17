export type Post = {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt?: Date;
  updatedAt?: Date;
  galleryImages: string[];
  coverImageUrl?: string;
  tags: string[];
  likesCount: number;
  commentsCount: number;
  isPublished: boolean;
  publishedAt?: Date;
};
