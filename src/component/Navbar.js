import React, { useEffect, useState } from 'react'
import logo from "../images/logo.png"
import trapsheetpdf from '../whitepaper/BBT _TrapSheet_V3.pdf'
import { Link } from 'react-router-dom'
import { loginProcess, initInstance, getAccount } from "./../Web3_connection/web3_methods"
import { getTokenBalance, symbol } from './../Web3_connection/ContractMethods'
import SidebarSlide from './SidebarSlide'
import client from '../client';
import {getBBTBalance} from '../Web3_connection/ContractMethods'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Navbar() {

    // Fetch required number of Tokens for accessing Safe Haven
  const [BBTLimit, setBBTLimit] = useState(undefined)

  useEffect(() => {
    client.fetch(
      `*[_type == "minHolding"]{
        minBal,
      }`
    ).then((data) => setBBTLimit(data[0].minBal)).catch(console.error)
  }, []);
  

  const [BBTBal, setBBTBal] = useState(0)
  useEffect(() => {
    const fetchBal = async() => {
      let currentBal = await getBBTBalance()
      setBBTBal(currentBal)
    }
    fetchBal()
  }, [])


    const [tokenBal, setTokenBal] = useState(0)
    const [tokensymbol, setSymbol] = useState()
    useEffect(() => {
        login();

        const init = async () => {
            const bal = await getTokenBalance();
            const sym = await symbol();
            setTokenBal(bal)
            setSymbol(sym)
        }
        setInterval(() => {
            init();
        }, 4000)

    })
    const [userAddress, setUserAddress] = useState();
    const login = async () => {
        await initInstance();
        await loginProcess();
        const user = await getAccount();
        if (user) {
            setUserAddress(user)
        }
    }

    return (
        <div id='navbar-container'>
            <nav className="navbar mx-auto navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                {BBTBal >= BBTLimit ? <Link className="nav-link" to={`/safehaven/safuprojects`}>Tokenomics</Link> : <Link className="nav-link" to={`/ineligible`}>Safe Haven</Link>}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/boobytrap/upcomingscam">Eco-System</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/boobytrap/upcomingscam">Roadmap</Link>
                            </li>
                            <li className="nav-item">
                                <a href={trapsheetpdf} target="_blank" rel="noreferrer" className="nav-link">Trapsheet</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/boobytrap/upcomingscam">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/boobytrap/upcomingscam">Contact Us</Link>
                            </li>
                        </ul>
                        <a href="https://t.me/boobytrapbsc" target="_blank" rel="noreferrer" className="nav-socials"><FaTelegramPlane/></a>
                        <a href="https://twitter.com/BoobyTrapBsc" target="_blank" rel="noreferrer" className="nav-socials"><FaTwitter/></a>
                        <button type="button" className="btn button-blue m-1" onClick={() => login()}>Platform</button>

                    </div>
                    <div className="mob-nav">
                        <a href="https://t.me/boobytrapbsc" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-dark m-1"><FaTelegramPlane/></a>
                        <button type="button" className="btn button-blue m-1" onClick={() => login()}>{userAddress ? `${userAddress.slice(0, 5)}...${userAddress.slice(38)}` : `Connect Wallet`}</button>
                        <SidebarSlide right />
                    </div>
                </div>
            </nav>
        </div>
    )
}
