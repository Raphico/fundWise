import { socials } from "../constants"

function Footer() {
  const socialElements = socials.map(social => <a 
    key={social.url}
    href={social.url}>
      <img src={social.imgPath} alt={social.url} />
    </a>)

  return (
    <footer id="contacts" className="mt-page flow">
      <div className="bar"></div>
      <div className="socials flex">
        <p>
          Copyright 2023 FundWise. All Rights Reserved.
        </p>

        <div className="flex" style={{ "--gap": "2rem" }}>
          {socialElements}
        </div>
      </div>
    </footer>
  )
}

export default Footer
