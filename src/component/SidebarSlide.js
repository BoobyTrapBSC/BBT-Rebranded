import React, {useState} from 'react';
import { scaleRotate as Menu } from 'react-burger-menu'
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
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return <div>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} pageWrapId={ "sidebarWrapper" } outerContainerId={ "platform-cont" } styles={ styles }>
        <h4><u>Safe Haven</u></h4>
        <Link id="home" onClick={closeSideBar} className="menu-item" to="/safehaven/safuprojects">Safu Projects</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/safehaven/upcomingprojects">Upcoming Projects</Link>
        <Link id="contact" onClick={closeSideBar} className="menu-item" to="/safehaven/ongoingprojects">Ongoing Projects</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/projectowner">Project Owners</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/developers">Developers</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/influencers">Influencers</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/promoters">AMA/Call Channels</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/promoters">Other Services</Link>
        <hr />
        <h4><u>Booby Trap</u></h4>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/boobytrap/upcomingscam">Upcoming Projects</Link>
        <Link id="contact" onClick={closeSideBar} className="menu-item" to="/boobytrap/ongoingscam">Ongoing Projects</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/boobytrap/scamowner">Project Owners</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/boobytrap/scamdev">Developers</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/boobytrap/scaminfluencer">Influencers</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/boobytrap/scampromoter">AMA/Call Channels</Link>
        <hr />
        <a className="menu-item" target="_blank" rel="noreferrer" onClick={closeSideBar} href="https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76">Buy $BBT</a>
        <a className="menu-item" target="_blank" rel="noreferrer" onClick={closeSideBar} href="https://poocoin.app/tokens/0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76">View Chart</a>
        <a className="menu-item" target="_blank" rel="noreferrer" onClick={closeSideBar} href="https://yachtpad.club/launchpad/BoobyTrap">Claim Presale</a>
        <a className="menu-item" target="_blank" rel="noreferrer" onClick={closeSideBar} href="https://privatesale.boobytrap.live/">Claim Pvt Sale</a>
      </Menu>
  </div>
}