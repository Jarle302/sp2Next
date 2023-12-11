import fetchFunction from "../fetchFunction";

export default async function deleteListing(id: string) {
  const response = await fetchFunction(
    `https://api.noroff.dev/api/v1/auction/listings/${id}`,
    "DELETE"
  );
}
