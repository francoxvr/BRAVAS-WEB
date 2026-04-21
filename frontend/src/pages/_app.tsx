import type { AppProps } from 'next/app'
import Head from 'next/head'

// estilos globales
import '@/styles/globals.css'

// context
import { ThemeProvider } from '@/context/ThemeContext'

// layout
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// ui
import ScrollToTop from '@/components/ui/ScrollToTop'
import ScrollToBottom from '@/components/ui/ScrollToBottom'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bravas Marketing</title>
        <meta
          name="description"
          content="Estrategias de marketing digital que funcionan. Más ventas, más clientes, más resultados."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/assets/icons/pwa/logo192.png" />
      </Head>

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