const baseUrl: string = "https://api.noroff.dev/api/v1/auction";

export const changeAvatarUrl = (userId: string) =>
  `${baseUrl}/profiles/${userId}/media`;

export const allListings: string = `${baseUrl}/listings`;

export const filterByTag = (tag: string) =>
  `${baseUrl}/listings?_tag=${tag}&_active=true`;

export const sortListingBy = (sort: string, order: string = "asc") =>
  `${allListings}?_sort=${sort}&_order=${order}&_active=true`;
