import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'


function Layout () {
  return (
    <div className='App'>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout