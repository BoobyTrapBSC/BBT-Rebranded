import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Link, Outlet } from "react-router-dom";
import { ABI } from "./../ABI/Rating";
import {AiOutlineLogout} from "react-icons/ai"
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
import Logo from "./../images/logo-circle.png";
import axios from "axios";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Metamask from "./../images/metamask.png";
import WalletConnect from "./../images/walletconnect.png";
import { Interface } from "@ethersproject/abi";
import video from '../videos/video-background.m4v'

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
  const [WalletProvider, setWalletProvider] = useState();
  const [modal, setModal] = useState(false);
  const [showDis, setShowDis] = useState(false);
  const [preventDuble, setPreventDuble] = useState(true)
  // useEffect(()=>{
  //   const ConnectWallet =async()=> {
  //     await initInstance();
  //     window.ethereum.enable();
  //     const address = await getAccount();
  //     setUserAddress(address);
  // }
  // },[])
  useEffect(async()=>{
    var provider = new WalletConnectProvider({
      rpc: {
        56: "https://bsc-dataseed1.ninicoin.io",
        // ...
      },
      bridge: "https://bridge.walletconnect.org",
    });
    console.log('Wallet is ',provider)
    if(provider.isWalletConnect == true){
      await provider.disconnect();
    }
  },[])

  const ConnectWalletMetaMask = async () => {
    toggleModal();
    window.w3 = undefined;
    await initInstance();
    const isConnect = await loginProcess();
    if (isConnect) {
      const address = await getAccount();
      setUserAddress(address);
      fetchBal();
      TokenDetails();
    }
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const authButton = document.getElementById("btn-auth");
  const resultBox = document.getElementById("result");

  const ConnectWallet = async () => {
    toggleModal();
      try {
        var provider = new WalletConnectProvider({
          rpc: {
            56: "https://bsc-dataseed1.ninicoin.io",
            // ...
          },
          bridge: "https://bridge.walletconnect.org",
        });
        
        if(preventDuble){
          const pro = await provider.enable();
          if(pro){
            setUserAddress(pro[0])
          }
        }
        setPreventDuble(false)
        setWalletProvider(provider);
        const web3 = new Web3(provider);
        window.w3 = web3;
        await initInstance(web3);
        const acount = await getAccount();
        setUserAddress(acount);
        console.log("connect", web3, acount);
      } catch (error) {
        console.log("authenticate failed", error);
      }
      await renderApp();
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
      setUserAddress(undefined);
      await WalletProvider.disconnect();
    
      setPreventDuble(true)
      setShowDis(false)
      // window.location.reload();
    } catch (error) {
      console.log("logOut failed", error);
    }
    result = "";
    // await renderApp();
  }

  const fetchBal = async () => {

    let currentBal = await getBBTBalance();
    let titan = await getTokenBalance();

    setBBTian(titan);
    setBBTBal(currentBal);
  };

  const Slicing = (add) => {
    const first = add.slice(0, 5);
    const second = add.slice(35);
    return first + "..." + second;
  };

  async function renderApp() {
    await enableWeb3();
    await fetchBal();
    await TokenDetails();
  }

  // const giverating = async () => {
  //   try {
  //     const contract = new window.w3.eth.Contract(
  //       ABI,
  //       "0x2EffB2656506c45d3D7661e2944A8879C7a94401"
  //     );
  //     const data = await contract.methods.addReview(17, 5).send({
  //       from: userAddress,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  async function testCall() {
    try {
      result = await web3.eth.personal.sign(
        "Hello world",
        user.get("ethAddress")
      );
    } catch (error) {
      console.log("testCall failed", error);
    }
    renderApp();
  }

  async function enableWeb3() {
    try {
      const acount = await getAccount();
      console.log("connect", acount);
    } catch (error) {
      console.log("testCall failed", error);
    }
  }

  const showDisconnect =()=>{
    if(!showDis){
      setShowDis(true)
    }
    else{
      setShowDis(false)
    }
  }

  return (
    <div id="platform-cont">
      <SidebarSlide />
      <video id="videoBg" src={video} autoplay='' muted loop></video>
      <div id="sidebarWrapper" className="position-relative">
        <div className="container-fluid">
          <div className="topBar d-flex flex-row-reverse pt-3">
            {/* <button id='btn-auth' className="btn" onClick={() => ConnectWalletMetaMask()}>
              {userAddress ? Slicing(userAddress) : 'Connect Wallet'}{' '}
              {userAddress ? (
                <img className="mr-1" src={Logo} width={30} height={30} />
              ) : (
                ''
              )}
             
            </button> */}
            {showDis ? <button className="Connect-drop btn btnOutline" onClick={()=> logout()}>Disconnect</button>:''}
            {!userAddress ? (
              <button className="btn btnOutline ms-2" onClick={() => toggleModal()}>
                Connect Wallet
              </button>
            ) : (
              <div className="">
                <button className="btn btnOutline ms-2" onClick={() => showDisconnect()}>
                  {Slicing(userAddress)}{" "}
                  <img className="mr-1" src={Logo} width={30} height={30} /> {" "}&nbsp;&nbsp;<AiOutlineLogout fill='#ffffff' size={20}/>
                </button><br/>
              </div>
            )}
            <br />

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
            {modal && (
              <div style={{ zIndex: "5" }}>
                <div
                  onClick={() => toggleModal()}
                  className="overlay-popup"
                ></div>
                <div className="modal-content wallet-select">
                  <label
                    for="category"
                    style={{backgroundColor:"#161C24"}}
                    className="form-label fw-bold py-3 text-center"
                  >
                    Select Wallet
                  </label>
                  <div className="wallte-menu">
                    <button
                      className="metamask-btn btn text-light"
                      onClick={() => ConnectWalletMetaMask()}
                    >
                      <img src={Metamask} width={32} /> MetaMask
                    </button>
                    <button
                      className="metamask-btn btn text-light"
                      onClick={() => ConnectWallet()}
                    >
                      <img src={WalletConnect} width={32} /> WalletConnect
                    </button>
                  </div>
                </div>
              </div>
            )}

            <a
              target="_blank"
              rel="noreferrer"
              href="https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76"
              className="btn btnOutline"
            >
              BUY $BBT
            </a>

          </div>
          <div className="container">
            <div className="row  my-5 justify-content-around">
              <div className="col-md-3 currentStat">
                <h3>{BBTBal.toFixed(2)} </h3>
                <span>Your $BBT Balance</span>
              </div>
              <div className="col-md-3 currentStat">
                <h3>${(price * 881909880.6534261).toFixed(2)}</h3>
                <span>Market Cap</span>
              </div>
              <div className="col-md-3 currentStat">
                <h3>${price}</h3>
                <span>Token Price</span>
              </div>
              <div className="col-md-3 currentStat">
                <h3>{bbtian} </h3>
                <span>$BBTians</span>
              </div>
            </div>
            <div
              className="disclaimer"
              style={
                window.location.pathname.includes("upcoming") === true
                  ? { display: "true" }
                  : { display: "none" }
              }
            >
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
