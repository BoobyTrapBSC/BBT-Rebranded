import React, {useState, forwardRef, useImperativeHandle} from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import logo from '../images/logo-text.png'
import { FaGem, FaList, FaCode, FaSuitcase, FaTelegramPlane, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import { SiCrowdsource} from "react-icons/si";
import { BsFillFileEarmarkLockFill} from "react-icons/bs";
import {MdOutlineCastForEducation} from 'react-icons/md'
import {GiWolfTrap, GiNewShoot, GiBugleCall, GiPayMoney} from 'react-icons/gi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {Link} from 'react-router-dom'

export default function SidebarSlide(props, ref) {

  const [isCollapse, setIsCollapse] = useState(false)

  useImperativeHandle(ref, () => ({
    toggleCollapse(){
      // setIsCollapse(!isCollapse)
      console.log("Clicked")
    }
  }))

  return (
    <ProSidebar collapsed={isCollapse} toggled={false} breakPoint="lg">
      <SidebarHeader>
        <Link id="pro-sidebar-brand" to="/safehaven" onClick={() => setIsCollapse(!isCollapse)}><img src={logo} alt="" /></Link>
        <Link to="/" className="fs-6 text-secondary fw-normal ms-4">Back to Main Site</Link>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem fontSize={20} />}><Link id="pro-sidebar-link" to="/safehaven">SAFE HAVEN</Link></MenuItem>
          <MenuItem icon={<GiWolfTrap fontSize={25} />}><Link id="pro-sidebar-link" to="/boobytrap">BOOBYTRAP</Link></MenuItem>
          <MenuItem icon={<FaList />}><Link id="pro-sidebar-link" to="/">DYOR PROJECTS</Link></MenuItem>
          <MenuItem icon={<GiNewShoot fontSize={20} />}><Link id="pro-sidebar-link" to="/">UPCOMING PROJECTS</Link></MenuItem>
          <MenuItem icon={<FaCode fontSize={20} />}><Link id="pro-sidebar-link" to="/">DEVELOPERS</Link></MenuItem>
          <MenuItem icon={<SiCrowdsource fontSize={20} />}><Link id="pro-sidebar-link" to="/">INFLUENCERS</Link></MenuItem>
          <MenuItem icon={<GiBugleCall fontSize={20} />}><Link id="pro-sidebar-link" to="/">AMA/CALL CHANNELS</Link></MenuItem>
          <MenuItem icon={<FaSuitcase fontSize={20} />}><Link id="pro-sidebar-link" to="/">OTHER SERVICES</Link></MenuItem>
          <MenuItem icon={<GiPayMoney fontSize={20} />}><Link id="pro-sidebar-link" to="/">BBT SQUARE</Link></MenuItem>
          <MenuItem icon={<BsFillFileEarmarkLockFill fontSize={20} />}><Link id="pro-sidebar-link" to="/">INSURANCE DAO</Link></MenuItem>
          <MenuItem icon={<MdOutlineCastForEducation fontSize={20} />}><Link id="pro-sidebar-link" to="/">IEP</Link></MenuItem>
          <MenuItem icon={<HiOutlineDocumentText fontSize={20} />}><Link id="pro-sidebar-link" to="/">DOCS</Link></MenuItem>
        </Menu>
        {/* <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="With Suffix"
          >
            <MenuItem> 1 </MenuItem>
            <MenuItem> 2 </MenuItem>
            <MenuItem> 3 </MenuItem>
          </SubMenu>
        </Menu> */}
      </SidebarContent>
      <SidebarFooter style={isCollapse === false ? {display:"block"} : {display:"none"}}>
        <div className="pro-sidebar-social mt-1">
          <a href="https://twitter.com/BoobyTrapBsc" target = "_blank" rel="noreferrer"><FaTwitter/></a>
          <a href="http://tiktok.com/@boobytrapbsc" target = "_blank" rel="noreferrer"><FaTiktok/></a>
          <a href="https://t.me/boobytrapbsc" target = "_blank" rel="noreferrer"><FaTelegramPlane/></a>
          <a href="https://instagram.com/boobytrap_bsc" target = "_blank" rel="noreferrer"><FaInstagram/></a>
        </div>
        <p className="fs-6 text-center mt-2 mb-0">E-mail: <a href="mailto:info@boobytrap.live" target = "_blank" rel="noreferrer">info@boobytrap.live</a></p>
        <p className="fs-6 text-center mb-0">&copy; BoobyTrap All Rights Reserved</p>
      </SidebarFooter>
    </ProSidebar>
  );
}
