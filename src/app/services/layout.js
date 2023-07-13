import '../globals.css'

export const metadata = {
  title: 'Services',
  description: 'An overview of the services I offer',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
