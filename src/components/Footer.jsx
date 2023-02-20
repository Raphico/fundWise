import { socials } from "../constants"
import { motion } from "framer-motion"
import { footerVariants } from "../utils/motion"

function Footer() {
  const socialElements = socials.map(social => <a 
    key={social.url}
    href={social.url}>
      <img src={social.imgPath} alt={social.url} />
    </a>)

  return (
    <motion.footer 
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      id="contacts" 
      className="mt-page flow"
    >
      <div className="bar"></div>
      <div className="socials flex">
        <p>
          Copyright 2023 FundWise. All Rights Reserved.
        </p>

        <div className="flex" style={{ "--gap": "2rem" }}>
          {socialElements}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
