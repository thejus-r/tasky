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
      <body className='bg-stone-900 text-white'>
        <p>This layout only for homepage</p>
        {children}</body>
    </html>
  )
}
