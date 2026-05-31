import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import '@/styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ScrollToBottom from '@/components/ui/ScrollToBottom'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { useScrollAnimation } from '@/utils/useScrollAnimation'

export default function MyApp({ Component, pageProps }: AppProps) {
  useScrollAnimation()

  return (
    <>
      <Head>
        <title>Bravas Marketing</title>
        <meta
          name="description"
          content="Estrategias de marketing digital que funcionan. Más ventas, más clientes, más resultados."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bravas Marketing — Estrategias digitales que generan resultados" />
        <meta property="og:description" content="Agencia de marketing digital en Córdoba. Publicidad, branding, contenido y analítica para hacer crecer tu negocio." />
        <meta property="og:image" content="https://bravasmarketing.com/og-image.png" />
        <meta property="og:url" content="https://bravasmarketing.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bravas Marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bravasmarketing.com/og-image.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/pwa/logo192.png" />
        <link rel="apple-touch-icon" href="/assets/icons/pwa/logo192.png" />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SF3KX3R5C2" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SF3KX3R5C2');
      `}</Script>

      <ThemeProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <ScrollToTop />
        <ScrollToBottom />
        <WhatsAppButton />
      </ThemeProvider>
    </>
  )
}
