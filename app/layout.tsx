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
          </Providers>
      </body>
    </html>
  );
}
