export default function validateCreateListing(
  inputName: string,
  value: string
) {
  const errors: { [key: string]: string } = {};

  switch (inputName) {
    case "title": {
      if (value?.length < 1) {
        errors[inputName] = "Title is required";
      }
      return errors;
    }
    case "description": {
      if (value?.length < 1) {
        errors[inputName] =
          "Description is optional but reccomended, if you need help write a short description you can let the ai help you";
      }
      return errors;
    }
    case "tags": {
      if (value?.length < 1) {
        errors[inputName] =
          "Tags are optional but it's reccomended to include atleast one for best results";
      }
      return errors;
    }
    case "media": {
      if (value?.length < 1) {
        errors[inputName] =
          "Media is optional, but is adviced to include a picture(validURL) for best results";
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
