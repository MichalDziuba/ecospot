import { Header } from "@/components/header/header";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { ContentWrapper } from "@/components/contentWrapper/contentWrapper";
import { CirclesBackground } from "@/components/circlesBackground/circlesBackground";

const quicksand = Quicksand({ subsets: ["latin"] });
export const metadata = {
  title: "Ecospot",
  description: "Fight for a green tomorrow",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-primary text-primary relative`}>
        <div className="min-h-screen flex flex-col items-center  ">
          <ContentWrapper>
            <Header />
          </ContentWrapper>

          <main className=" w-full flex flex-col items-center h-fit ">
            {children}
          </main>
          <Footer />
        </div>
        <CirclesBackground />
      </body>
    </html>
  );
}
