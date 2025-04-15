import "./globals.css"
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import NavigationBar from "./components/navigation-bar/navigation-bar";

export const metadata: Metadata = {
  title: "cobalt",
  openGraph: {
    title: " cobalt is an example project",
    description: "cobalt is an element",
    images: {
      url: "https://cobalt54.vercel.app/og-card.png",
      width: 1200,
      height: 628,
    },
  },
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-stretch">
           <NavigationBar/>
        {props.children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
