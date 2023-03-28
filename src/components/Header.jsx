import '../styles/HeaderStyle.css'


function Header () {
  return (

    <header className='header'>
      <div className='header-logo'>
        <center><img src='/assets/img/logo.svg'/></center>
      </div>
      <div className='header-menu'>
        <nav>
          <span>
            <a href='/'>QUI SOMMES NOUS ?</a>
          </span>
          <span>
            <a href='/'>NOTRE PRODUIT</a>
          </span>
          <span>
            <a href='/'>CONTACTEZ-NOUS</a>
          </span>
        </nav>
      </div>
      </header>
  )
}

export default Header