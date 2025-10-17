export const ROUTES = {
  HOME: "/",
  CREATORS: {
    ROOT: "/creators",
    DETAIL: (id: string) => `/creators/${id}`,
  },
  SEARCH: {
    ROOT: "/search",
  },
} as const;
