export function isValidUrl(url: string) {
  if (url.length < 1) return false;
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%_.~+]*)*" + // path
      "(\\?[;&amp;a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!urlPattern.test(url);
}

export default function changeAvatarFormEval(inputName: string, value: string) {
  const errors: { [key: string]: string } = {};
  if (!isValidUrl(value)) {
    errors[inputName] =
      "Please enter a valid url"
  } else errors[inputName] = "";
  return errors;
}
