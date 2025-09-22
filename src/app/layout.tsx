import '../styles/globals.css'
import '../styles/folklore.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export const metadata = {
  metadataBase: new URL('https://giyatra.com'),
  title: 'GI Yatra - Discover India through GI Treasures',
  description: 'Embark on a cultural journey through India\'s Geographical Indication treasures. Experience authentic crafts, taste traditional flavors, and connect with artisans.',
  keywords: 'GI products, India, heritage, culture, travel, artisans, geographical indication',
  authors: [{ name: 'GI Yatra Team' }],
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/logo.png',
  },
  openGraph: {
    title: 'GI Yatra - Discover India through GI Treasures',
    description: 'Embark on a cultural journey through India\'s Geographical Indication treasures.',
    url: 'https://giyatra.com',
    siteName: 'GI Yatra',
    images: [
      {
        url: '/icons/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GI Yatra - Discover India through GI Treasures',
    description: 'Embark on a cultural journey through India\'s Geographical Indication treasures.',
    images: ['/icons/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff9900" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="folklore-theme">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
