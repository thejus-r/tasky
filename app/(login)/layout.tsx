import '../globals.css'

export const metadata = {
  title: 'Tasky | Login',
  description: 'Login to continue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <p>Login layout goes here</p> 
        {children}</body>
    </html>
  )
}
