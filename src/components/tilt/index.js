import React from "react"
import useTilt from "../../hooks/useTilt"

import background from "images/img_parallax.jpg"
import "./style.scss"

const TiltCard = ({ detail }) => {
  const imageRef = useTilt(true)

  return (
    <div
      ref={imageRef}
      className="tilt"
      style={{
        "--offset": 0,
        "--dir": 1,
      }}
    >
      <div
        className="tiltContent"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="tiltContentInner">
          <h2 className="tiltTitle">{detail.title}</h2>
          <h3 className="tiltSubtitle">{detail.type}</h3>
          {/* <p className="tiltDescription">{detail.desc}</p> */}
        </div>
      </div>
    </div>
  )
}

export default TiltCard
