import { CssBaseline } from '@mui/material'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </>
  )
}
