import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { SiteEffects } from './SiteEffects'

export function PageShell({children}: {children: ReactNode}) {
  return <><SiteEffects /><Navbar /><main>{children}</main><Footer /></>
}
