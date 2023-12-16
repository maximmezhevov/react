import { Outlet } from 'react-router-dom'
import { Header } from './header'

export const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

