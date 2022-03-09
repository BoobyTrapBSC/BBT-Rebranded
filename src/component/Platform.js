import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SafeHaven from "./SafeHaven";
import {
  initInstance,
  loginProcess,
  getAccount,
} from "./../Web3_connection/web3_methods";
import "./style.css";
import {
  getBBTBalance,
  getTokenBalance,
} from "./../Web3_connection/ContractMethods";
import SidebarSlide from "./SidebarSlide";
import Logo from "./../images/badge.png";
import axios from "axios";
const Moralis = require("moralis");
Moralis.initialize("3Amct4xq6AlkAngmYLPFJSJeFRe4nxbbyvzlIcOC");
Moralis.serverURL = "https://4bffcvuqchek.usemoralis.com:2053/server";
const provider = "walletconnect";
let user;
let web3;
let result = "";

export default function Platform() {
  const [userAddress, setUserAddress] = useState();
  const [BBTBal, setBBTBal] = useState(0);
  const [price, setPrice] = useState(0);
  const [bbtian, setBBTian] = useState(0);
  // useEffect(()=>{
  //   const ConnectWallet =async()=> {
  //     await initInstance();
  //     window.ethereum.enable();
  //     const address = await getAccount();
  //     setUserAddress(address);
  // }
  // },[])

  const ConnectWalletMetaMask = async()=> {
    await initInstance()
    const isConnect = await loginProcess()
    if (isConnect) {
      const address = await getAccount()
      setUserAddress(address)
      fetchBal();
      TokenDetails();
    }
  }

  const authButton = document.getElementById('btn-auth');
  const resultBox = document.getElementById('result');

  const ConnectWallet = async () => {
    try {
      try {
        user = await Moralis.Web3.authenticate({ provider });
        web3 = await Moralis.Web3.enable({ provider });
      } catch (error) {
        console.log("authenticate failed", error);
      }
      await renderApp();

      // await initInstance()
      // const isConnect = await loginProcess()
      // if (isConnect) {
      //   const address = await getAccount()
      //   setUserAddress(address)
      //   fetchBal();
      //   TokenDetails();
      // }
    } catch (e) {
      //
    }
  };
  
  

  const TokenDetails = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=booby-trap&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then(function (response) {
        setPrice(response.data[0].current_price);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function logout() {
    try {
      await Moralis.User.logOut();
      setUserAddress(undefined)
    } catch (error) {
      console.log('logOut failed', error);
    }
    result = '';
    // await renderApp();
  }

  const fetchBal = async () => {
    let currentBal = await getBBTBalance();
    let titan = await getTokenBalance();
    setBBTian(titan);
    setBBTBal(currentBal);
  };

  const Slicing = (add) => {
    const first = add.slice(0, 10);
    const second = add.slice(32);
    return first + "..." + second;
  };

  async function renderApp() {
    user = Moralis.User.current(); 
   if (user) {
      console.log("user is ",user.get('ethAddress'))
      setUserAddress(user.get('ethAddress'))
      if(userAddress){
        await fetchBal();
        await TokenDetails();
        console.log("connected")

      }
      await enableWeb3();
      await fetchBal();
      await TokenDetails();
     
    } else {
      authButton.style.display = 'inline-block';
    }
    resultBox.innerText = result;
  }

  

  async function testCall() {
    try {
      result = await web3.eth.personal.sign('Hello world', user.get('ethAddress'));
    } catch (error) {
      console.log('testCall failed', error);
    }
    renderApp();
  }

  async function enableWeb3() {
    try {
      web3 = await Moralis.Web3.enableWeb3({ provider });
      console.log(web3)
    } catch (error) {
      console.log('testCall failed', error);
    }
    // renderApp();
  }

  return (
    <div id="platform-cont">
      <SidebarSlide />
      <div id="sidebarWrapper">
        <div className="container-fluid">
          <div className="topBar d-flex flex-row-reverse pt-3">
          <button id='btn-auth' className="btn" onClick={() => ConnectWalletMetaMask()}>
              {userAddress ? Slicing(userAddress) : 'Connect Wallet'}{' '}
              {userAddress ? (
                <img className="mr-1" src={Logo} width={30} height={30} />
              ) : (
                ''
              )}
             
            </button>
            {/* {userAddress ? <button id='btn-auth' className="btn" onClick={() => logout()}>
              {userAddress ? Slicing(userAddress) : 'Connect Wallet'}{' '}
              {userAddress ? (
                <img className="mr-1" src={Logo} width={30} height={30} />
              ) : (
                ''
              )}
             
            </button> :
            <button id='btn-auth' className="btn" onClick={() => ConnectWallet()}>
              {userAddress ? Slicing(userAddress) : 'Connect Wallet'}{' '}
              {userAddress ? (
                <img className="mr-1" src={Logo} width={30} height={30} />
              ) : (
                ''
              )}
             
            </button>} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76"
              className="btn"
            >
              BUY $BBT
            </a>
          </div>
          <div className="container">
            <div className="row my-5 justify-content-around">
              <div className="col-md-3">
                <h3>${(BBTBal).toFixed(2)} </h3>
                <span>Your $BBT Balance</span>
              </div>
              <div className="col-md-3">
                <h3>${(price*881909880.6534261).toFixed(2)}</h3>
                <span>Market Cap</span>
              </div>
              <div className="col-md-3">
                <h3>${price}</h3>
                <span>Token Price</span>
              </div>
              <div className="col-md-3">
                <h3>{bbtian} </h3>
                <span>$BBTians</span>
              </div>
            </div>
            <div className="disclaimer">
              <div
                className="container-fluid text-start overflow-hidden position-relative marquee"
                style={{
                  backgroundColor: "#2A2C34",
                  color: "#b4b7bd",
                  height: "24px",
                }}
              >
                <p>
                  <b>Disclaimer</b>: Due to unavailability of detailed
                  information on upcoming projects, BoobyTrap Team is unable to
                  provide Trap Points (Expert Opinion) at the moment. Trap
                  points will be updated in due course after launch. DYOR and
                  exercise caution while investing in any Private/Presale in
                  such projects.
                </p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
