import fetchFunction from "@/app/utils/fetchFunction";

const Descriptify = async ({
  title,
  description,
}: {
  title: string | undefined;
  description: string | undefined;
}) => {
  const data = await fetchFunction(
    process.env.NEXT_PUBLIC_DESCRIPTIFY,
    "POST",
    {
      body: ` Rewrite the following title and description into a more engaging and concise format for an auction listing, ensuring it is appealing and likely to attract buyers. Keep the rewritten description short and suitable for display in a paragraph element on a website.

    Title: ${title}
    Description: ${description}
    
    New Auction Listing Description:
    `,
    }
  );

  return data;
};

export default Descriptify;