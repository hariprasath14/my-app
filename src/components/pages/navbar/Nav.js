import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/nav.scss'
const menuIcon = <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24.75px" height="24.75px" viewBox="0 0 24.75 24.75"><g><path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  const menuList = [
    { name: "Home", url: "/" },
     { name: "Movies", url: "/movies" }, 
     { name: "Tournament", url: "/tournament" }, 
     { name: "Login", url: "/login" }]
  return (
    <>
      <nav>
        <ul className={` ${openMenu ? 'd-flex' : 'd-none'}`}>
          <li>
            <Link to="#" className='nav-close'>
              <svg onClick={() => { setOpenMenu(false) }} className="my-menu-close-icon" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" /></svg>
            </Link>
          </li>
          {menuList && menuList?.length > 0 && menuList.map((menu, i) => {
            return <li key={i}>
              <Link to={menu.url}>
                {menu.name}
              </Link>
            </li>
          })}
        </ul>
        {!openMenu && <div className='nav-menu my-menu-icon p-2' >
          <span className='cursor-pointer' onClick={() => { setOpenMenu(true) }}>
            {menuIcon}
          </span>
        </div>}
      </nav>
    </>
  );
}

export default Nav;
