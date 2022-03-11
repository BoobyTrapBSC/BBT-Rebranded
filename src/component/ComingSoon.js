import React from 'react'
import {Link} from 'react-router-dom'

export default function ComingSoon() {
  return (
    <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", textAlign:"center"}}>
        <h1>COMING SOON!</h1>
        <p>Press here to Navigate to <Link to="/platform/safehaven/safuprojects">Platform</Link> or <a href="/">Home</a></p>
    </div>
  )
}
