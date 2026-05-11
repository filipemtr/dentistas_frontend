import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dentistas Caruaru",
  description: "Clínica odontológica profissional"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  )
}