import Header from "@/components/common/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CartCraze",
  description:
    "Welcome to CartCraze, your ultimate destination for all your shopping needs. Discover a wide range of products from electronics to fashion, all at your fingertips. With our user-friendly interface and secure checkout process, shopping has never been easier. Explore exclusive deals, browse through top brands, and enjoy hassle-free shopping experience with CartCraze. Shop now and let your cart go wild with CartCraze!",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          poppins.className
        )}
      >
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
