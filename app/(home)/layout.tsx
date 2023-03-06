import '../globals.css'

export const metadata = {
  title: 'Tasky',
  description: 'Manage your tasks easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
