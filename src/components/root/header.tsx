import { Navigation } from './navigation'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-[300px] min-h-screen p-6 pr-0 flex flex-col gap-y-3'>
      <h1>react</h1>
      <Navigation />
    </header>
  )
}