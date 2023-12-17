This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Collection Chest Website

Welcome to the Collection Chest website! This project was created as my semester project with the goal of implementing a feature-rich platform for collecting and sharing items. Users can add, browse, and bid on items on this platform, and this README will guide you through the functionality and setup of the application.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered React applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that enhances code quality and development experience.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building custom designs quickly.

## Features

### User Authentication

- Users can create accounts and log in securely to the Collection Chest platform.
- Authentication ensures that only registered users can perform certain actions, such as adding items to their collections and bidding on other users listings.

### Add, Browse, and Connect

- Users can add new items to their collections, including descriptions and images.
- The platform allows collectors to browse a wide range of items from other users.

### User Profiles

- Users have their own profiles where they can view their credit, listings, and wins.

### Edit and Delete Items

- Collectors can edit or remove listings at any time.

### AI-Powered Item Descriptions

- The application leverages the OpenAI API to assist users in creating compelling item descriptions.
- Users can use the AI-powered description generator to enhance their item descriptions, making their collections more appealing to fellow collectors.

### API Limitation Disclaimer

Please note that the Noroff API used in this project had some limitations, specifically regarding searching functionality. Due to these limitations, I had to implement a recursive fetch strategy, but had to limit the total data to prevent rate limiting While this workaround allows us to provide some sorting functionality, it is not as efficient as we would like. I did my best to provide the best possible user experience within these limitations and appreciate the services provided by the Noroff API.

## Getting Started

Follow these steps to set up and run the Collection Chest website on your local machine:

1. **Clone the Repository and install dependencies**

   ```bash
   git clone  https://github.com/Jarle302/sp2Next/
   cd sp2Next
   npm i
  



2 Set Up Environment Variables:
```bash
Create a .env file in the root directory and configure your environment variables, including the Noroff API key.

env
API=you open ai api key
NEXT_PUBLIC_DESCRIPTIFY = url to ai route, as a local env it should be http://localhost:3000/ai, replace the localhost part in production. 


3. Start the developmen server

```bash
npm run dev
The application should now be running locally on http://localhost:3000.

4. Access the Website:

Open your web browser and navigate to http://localhost:3000 to use the Collection Chest website.



