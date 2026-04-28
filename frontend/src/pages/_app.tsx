import type { AppProps } from 'next/app'
import Head from 'next/head'
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
