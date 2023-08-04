import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'keen-slider/keen-slider.min.css'
import '../components/DescontoFunction/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}
