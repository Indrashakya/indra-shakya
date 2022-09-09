import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-out'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-out'>Thank you for visiting my website feel free please connect with me.</p>
      </footer>
    </>
  )
}

export default Footer;
