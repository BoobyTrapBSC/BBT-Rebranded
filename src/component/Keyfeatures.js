import React from 'react'
import {FaLock, FaGlobeAsia, FaStarOfLife, FaHandHoldingWater} from 'react-icons/fa'

export default function Keyfeatures() {
    return (
        <div id='keyfeatures-cont' className='py-3'>
            <div className="row">
                <div className="col-md-3">
                    <FaLock id='featureIco'/>&nbsp;
                    <p>Locked Liquidity<br/>for 1 Year</p>
                </div>
                <div className="col-md-3">
                    <FaHandHoldingWater id='featureIco'/>&nbsp;
                    <p>Strong<br/>Liquidity</p>
                </div>
                <div className="col-md-3">
                    <FaGlobeAsia id='featureIco'/>&nbsp;
                    <p>Community<br/>Driven</p>
                </div>
                <div className="col-md-3">
                    <FaStarOfLife id='featureIco'/>&nbsp;
                    <p>Aggressive<br/>Marketing</p>
                </div>
            </div>
        </div>
    )
}
