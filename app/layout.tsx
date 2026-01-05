import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import Providers from "./providers/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
           <Navbar />
          {children}
           <Footer />
          </Providers>
      </body>
    </html>
  );
}
