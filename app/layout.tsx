import type { Metadata } from "next";
import { openS } from "./ui/fonts/fonts";
import "./globals.css";
import Nav from "./ui/components/Nav";
import SideNav from "./ui/components/SideNav";
import ContextContainer from "./ui/components/ContextContainer";
import NavProvider from "./ui/components/NavProvider";
import ListingReducerContext from "./ui/components/ListingReducerContext";
import recursiveFetch from "./utils/recursiveFetch";
import getTimeRemaining from "./utils/getTimeRemaining";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await recursiveFetch(0, []);

  console.log(data);

  return (
    <html lang="en">
      <body
        className={
          openS.className +
          " bg-orange-100 flex flex-col min-h-screen text-gray-600 bg-orange-100"
        }>
        {" "}
        <ListingReducerContext data={data}>
          <ContextContainer>
            {" "}
            <NavProvider>
              <Nav />
              <div className="grid gridCustom h-[100%]">
                <SideNav />

                <div className="flex-grow h-[100vh] overflow-y-auto">
                  {children}
                </div>
              </div>
            </NavProvider>
          </ContextContainer>
        </ListingReducerContext>
      </body>
    </html>
  );
}
