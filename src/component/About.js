import React from 'react'
import aboutImg from '../images/badge.png'

export default function About() {
  return (
    <div id='about-cont'>
      <div className="row my-5">
        <div className="col-md-6">
          <img src={aboutImg} alt="" id='aboutImg' />
        </div>
        <div className="col-md-6">
          <h2>What Makes <span>Booby Trap</span> Different?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia eos placeat nesciunt maiores reiciendis quos alias eum hic? Labore perspiciatis quos repellendus accusantium eius est odit illo repudiandae maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia eos placeat nesciunt maiores reiciendis quos alias eum hic? Labore perspiciatis quos repellendus accusantium eius est odit illo repudiandae maxime?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolores nulla. Voluptatem eveniet excepturi earum quisquam quas repellendus ut quae accusantium rerum a sed, nesciunt dicta cumque facilis error veritatis.</p>
          <ul id='aboutList'>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
            <li>Point 5</li>
            <li>Point 6</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
