import React, {useState} from 'react';
import { scaleDown as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'

export default function SidebarSlide() {

  const [isOpen, setOpen] = useState(true)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(true)
  }

  let styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      color: "#fff",
      textDecoration:"none",
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return <div>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} pageWrapId={ "sidebarWrapper" } outerContainerId={ "platform-cont" } styles={ styles }>
        <Link id="home" onClick={closeSideBar} className="menu-item" to="/platform/safehaven/safuprojects">SAFE HAVEN</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/boobytrap/scamprojects">BOOBY TRAP</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/ongoing">DYOR PROJECTS</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/ongoing/upcoming">UPCOMING PROJECTS</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/developers">DEVELOPERS</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/influencers">INFLUENCERS</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/promoters">AMA/CALL CHANNELS</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/platform/boobytrap">OTHER SERVICES</Link>
        <Link id="contact" onClick={closeSideBar} className="menu-item" to="/safehaven/ongoingprojects">BBT SQUARE</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/projectowner">INSURANCE DAO</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/developers">IEP</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/influencers">DOCS</Link>
      </Menu>
  </div>
}