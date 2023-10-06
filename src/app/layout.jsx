//* Global CSS
import "./globals.css";
//* Components
import { Category, Navbar, Sidebar } from "@/components";
//* Context
import ContextProvider from "@/utils/ContextProvider";

export const metadata = {
  title: "Youtube Clone",
  description: "Project Youtube Clone | Next 13",
};

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <body>
          <Navbar />
          <Category />
          <div className="flex">
            <Sidebar />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ContextProvider>
  );
}
