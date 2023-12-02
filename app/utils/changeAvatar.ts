import { changeAvatarUrl } from "./api/endpoints";
import fetchFunction from "./fetchFunction";

export default async function changeAvatar(userName: string, avatar: string) {
  const url = changeAvatarUrl(userName);
  const body = { avatar };
  try {
    const response = await fetchFunction(url, "PUT", body);
    return response;
  } catch (error) {
    throw error;
  }
}
