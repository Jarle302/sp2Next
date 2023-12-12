export default function validateCreateListing({
  title,
  description,
  tags,
  media,
  endsAt,
}: {
  title: string;
  description: string;
  tags: string[];
  media: string[];
  endsAt: string;
}) {
  const errors = {
    title: "",
    description: "",
    tags: [""],
    media: [""],
    endsAt: "",
  };
  if (title.length < 1) {
    errors.title = "Title is required";
  }
  if (description.length < 1) {
    errors.description =
      "Write a short description, best result is if you write a short description and let the ai help if you need help.";
  }
  if (tags.length < 1) {
    errors.tags[0] =
      "Tags are optional but it's reccomended to include atleast one for best results";
  }
  if (media.length < 1) {
    errors.media[0] =
      "Media is optional, but is adviced to include a picture(validURL) for best results";
  }
  if (endsAt?.length < 1) {
    errors.endsAt = "End date is required";
  }
  return errors;
}
