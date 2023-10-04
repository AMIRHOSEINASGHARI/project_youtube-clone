//* Global CSS
import "./globals.css";
//* Components
import { Navbar } from "@/components";

export const metadata = {
  title: "Youtube Clone",
  description: "Project Youtube Clone | Next 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
