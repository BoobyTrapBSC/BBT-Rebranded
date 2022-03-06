import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiMissileLauncher, GiRocketFlight, GiPoliceBadge, GiMetalBoot} from 'react-icons/gi'

export default function Roadmap() {

  return (
    <div id="roadmap-cont">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Dec 2021 - Feb 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiMissileLauncher />}
        >
          <h3 className="vertical-timeline-element-title">PHASE I</h3>
          <h4 className="vertical-timeline-element-subtitle">PRE-LAUNCH</h4>
          <p>
          • Private Sale to collect funds for development of platform &AMP; presale marketing<br/>
          • Beta Version of $BBT platform with "Safe Haven"<br/>
          • Presale Marketing and promotions<br/>
          • Listing of 100+ Project Owners, Developers, Influencers/Promoters
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="March 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiRocketFlight />}
        >
          <h3 className="vertical-timeline-element-title">PHASE II</h3>
          <h4 className="vertical-timeline-element-subtitle">POST LAUNCH</h4>
          <p>
          • V1 of $BBT platform launch<br/>
          • Listing of more Project Owners, Developers, Influencers/Promoters<br/>
          • Post launch marketing campaign<br/>
          • Major Listings &amp; Tendings
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiPoliceBadge />}
        >
          <h3 className="vertical-timeline-element-title">PHASE III</h3>
          <h4 className="vertical-timeline-element-subtitle">INSURING DEFI</h4>
          <p>
          • Launch of Insurance on blockchain for $BBT holders<br/>
          • Marketing campaign for Insurance platform<br/>
          • Partnerships with major Insurance players
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun - Jul 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiMetalBoot />}
        >
          <h3 className="vertical-timeline-element-title">PHASE IV</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
          • Launchpad for projects willing to list on $BBT platform<br/>
          • VC Funding and Presale platforms<br/>
          • NFT Marketplace to be launched in Metaverse<br/>
          • First Insurance provider in Metaverse
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}