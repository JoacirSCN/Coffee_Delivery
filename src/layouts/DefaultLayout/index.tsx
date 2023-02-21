import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'
import { LayoutContainer } from './styled'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
