import WeekView from "@/components/WeekView";
import "../globals.css";

export const metadata = {
  title: "Tasky",
  description: "Manage your tasks easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-900 text-white p-4">
        <h1 className="text-xl font-medium mb-4">Tasky</h1>
        <WeekView />
        {children}
      </body>
    </html>
  );
}
