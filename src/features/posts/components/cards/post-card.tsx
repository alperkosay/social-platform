import React from "react";
import { Post } from "../../types/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-lg p-4 shadow-sm">
      {/* Cover Image */}
      {post.coverImageUrl && (
        <img
          src={post.coverImageUrl}
          alt={post.title}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

      {/* Gallery */}
      {post.galleryImages && post.galleryImages.length > 0 && (
        <div className="flex gap-2 overflow-x-auto mb-3">
          {post.galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      {/* Content */}
      <p className=" mb-3">{post.content}</p>

      {/* Tags */}
      <div className="mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 rounded px-2 py-0.5 mr-2 text-xs text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Meta Info */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>👍 {post.likesCount}</span>
        <span>💬 {post.commentsCount}</span>
        {post.publishedAt && (
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        )}
      </div>
    </div>
  );
}
