import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSync — Prescription Interaction Checker',
  description: 'Track medications, check dangerous interactions, and optimize timing for maximum effectiveness. Your personal medication safety companion.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="97aa7e33-eb1b-4ab9-a15d-69840d518e89"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
