import WeekView from "@/components/WeekView";
import "./tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-full w-full bg-stone-900 p-3 md:p-6 text-stone-50 subpixel-antialiased">
        <main className="flex w-full flex-col gap-4">
          <h1 className="text-2xl font-semibold">Tasks</h1>
          <WeekView/>
          {children}
        </main>
      </body>
    </html>
  );
}
