import "./tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-stone-900 text-stone-50  min-h-screen w-full p-6 ">
        <main className="w-full flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Tasks</h1>
          {children}      
        </main>
      </body>
    </html>
  );
}
