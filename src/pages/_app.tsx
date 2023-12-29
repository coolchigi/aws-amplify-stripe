import '@/styles/globals.css'
import { Amplify } from 'aws-amplify'
import '../styles/reset.css'
import '../styles/globals.css'
import { studioTheme } from '../ui-components'
import { ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import '@fontsource/inter'

import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={studioTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
  
  
  
}
