import "./globals.css";

export const metadata = {
  title: "Youtube Clone",
  description: "Project Youtube Clone | Next 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
