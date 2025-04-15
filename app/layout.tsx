import { Metadata } from "next";
import { PropsWithChildren } from "react";

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
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
