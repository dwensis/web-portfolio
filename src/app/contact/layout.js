import '../globals.css'

export const metadata = {
  title: 'Contact',
  description: "Contact me if you're interested in working together",
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
