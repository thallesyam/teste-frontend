import React, { useState } from 'react'

import {
  Bars,
  Close,
  BarMobile,
  NavMobile,
  LinkMenu,
  ItemNavbar,
  ListContainer,
  ItemToggle
} from '../styles/pages/components/MobileNav'

const MobileNav = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <BarMobile className="navbar">
        <LinkMenu href="/">
          <a onClick={showSidebar}>
            <Bars />
          </a>
        </LinkMenu>
      </BarMobile>
      <NavMobile className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ListContainer className="nav-menu-items" onClick={showSidebar}>
          <ItemToggle className="navbar-toggle">
            <LinkMenu href="/">
              <a>
                <Close />
              </a>
            </LinkMenu>
          </ItemToggle>
          <ItemNavbar>
            <LinkMenu href="/">
              <a>Minha Conta</a>
            </LinkMenu>
          </ItemNavbar>
        </ListContainer>
      </NavMobile>
    </>
  )
}

export default MobileNav
