import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <nav className='flex flex-col'>
        <Link to='about'>about</Link>
        <Link to='router-example'>router-example</Link>
        <Link to='redux-example'>redux-example</Link>
      </nav>
    </>
  )
}