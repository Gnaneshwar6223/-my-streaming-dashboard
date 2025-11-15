import "./globals.css";

export const metadata = {
  title: "StreamDash",
  description: "Streaming Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <div className="max-w-5xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
