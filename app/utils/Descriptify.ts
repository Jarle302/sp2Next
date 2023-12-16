import fetchFunction from "@/app/utils/fetchFunction";

const Descriptify = async ({
  title,
  description,
}: {
  title: string | undefined;
  description: string | undefined;
}) => {
  const url = process.env.NEXT_PUBLIC_DESCRIPTIFY;

  try {
    const data = await fetchFunction(url || "", "POST", {
      body: ` Rewrite the following title and description into a more engaging and concise format for an auction listing, ensuring it is appealing and likely to attract buyers. Keep the rewritten description short and suitable for display in a paragraph element on a website. Use max 250 characters including spaces.

    Title: ${title}
    Description: ${description}
    
    New Auction Listing Description:
    `,
    });
console.log(data, "descriptify")
    return data;
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export default Descriptify;
