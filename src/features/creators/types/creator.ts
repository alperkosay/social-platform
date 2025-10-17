export type Creator = {
  id: string;
  username: string;
  name: string;
  profileImageUrl: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isVerified?: boolean | null;
  isFollowing?: boolean | null;
};
