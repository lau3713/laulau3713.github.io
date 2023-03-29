import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'


function Layout () {
  return (
    <div className='App'>
      <Header />
      <main className='content'>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout