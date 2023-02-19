import "./tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen w-full  bg-stone-900 p-6 text-stone-50 ">
        <main className="flex w-full flex-col gap-4">
          <h1 className="text-2xl font-semibold">Tasks</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
