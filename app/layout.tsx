// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "StreamClone",
  description: "Streaming dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)]">
        <Navbar />
        
        <div className="pt-20 min-h-screen">{children}</div>

      </body>
    </html>
  );
}
