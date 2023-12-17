export default function validateCreateListing(
  inputName: string,
  value: string
) {
  const errors: { [key: string]: string } = {};

  switch (inputName) {
    case "title": {
      if (value?.trim().length < 1) {
        errors[inputName] = "Title is required";
      }
      return errors;
    }
    case "description": {
      if (value.length >280 ) {
        errors[inputName] = "Description can't be longer than 280 characters";
      }
      return errors;
    }
    case "tags": {
      
      return errors;
    }
    case "media": {
      if (!isValidUrl(value) ) {
        errors[inputName] =
          "All images needs to have a valid url";
      }
      return errors;
    }
    case "endsAt": {
      if (value?.length < 1) {
        errors[inputName] = "End date is required";
      }
      return errors;
    }
  }
}




function isValidUrl(url: string) {
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

