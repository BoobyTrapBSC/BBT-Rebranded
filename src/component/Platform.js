import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Link, Outlet } from "react-router-dom";
import {ABI} from './../ABI/Rating'
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
import WalletConnectProvider from "@walletconnect/web3-provider";

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
  const [WalletProvider, setWalletProvider] = useState()
  // useEffect(()=>{
  //   const ConnectWallet =async()=> {
  //     await initInstance();
  //     window.ethereum.enable();
  //     const address = await getAccount();
  //     setUserAddress(address);
  // }
  // },[])

  const ConnectWalletMetaMask = async()=> {
    window.w3 = undefined
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
        var provider = new WalletConnectProvider({
          rpc: {
            56: "https://bsc-dataseed1.ninicoin.io"
            // ...
          },
          bridge: 'https://bridge.walletconnect.org',
        });
        await provider.enable();
        setWalletProvider(provider)
        const web3 = new Web3(provider);
        window.w3 = web3
        await initInstance(web3)
        const acount = await getAccount();
        setUserAddress(acount)
        console.log("connect",web3, acount)
      } catch (error) {
        console.log("authenticate failed", error);
      }
      await renderApp();

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
      console.log("provider",WalletProvider)
      setUserAddress(undefined)
      await WalletProvider.disconnect();
    } catch (error) {
      console.log('logOut failed', error);
    }
    result = '';
    // await renderApp();
  }

  const fetchBal = async () => {
    console.log("balance fetch")
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
      await enableWeb3();
      await fetchBal();
      await TokenDetails();
  }

  const giverating = async()=>{
    try{
      const contract = new window.w3.eth.Contract(ABI, "0x2EffB2656506c45d3D7661e2944A8879C7a94401")
      const data = await contract.methods.addReview(17,5).send({
        from: userAddress
      });
    }
    catch(e){
      console.log(e)
    }
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
      const acount = await getAccount();
      console.log("connect", acount)
    } catch (error) {
      console.log('testCall failed', error);
    }
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
<<<<<<< Updated upstream
            </button> */}
            {userAddress ? <button id='btn-auth' className="btn" onClick={() => logout()}>
=======
             
            </button>
            {/* {userAddress ? <button id='btn-auth' className="btn" onClick={() => logout()}>
>>>>>>> Stashed changes
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
                <h3>{(BBTBal).toFixed(2)} </h3>
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
            <div className="disclaimer" style={window.location.pathname.includes("upcoming") === true? {display:"true"}:{display:"none"}}>
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
