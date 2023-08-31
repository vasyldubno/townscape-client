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
      <div className="flex flex-col h-screen">
        <div className="flex-shrink-0">
          <Header />
        </div>
        <div className="flex-grow">{children}</div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </>
  )
}
