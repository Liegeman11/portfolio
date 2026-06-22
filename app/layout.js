import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Taiwo Micheal Emmanuel — Data Scientist & ML Engineer",
  description: "Senior Data Scientist, ML Engineer, Data Engineer and Backend Engineer based in Nigeria. Open to remote, freelance and relocation opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}