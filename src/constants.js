import instagram from "./assets/instagram.svg"
import facebook from "./assets/facebook.svg"
import twitter from "./assets/twitter.svg"
import linkedin from "./assets/linkedin.svg"
import smartMatch from "./assets/smart-match.png"
import billing from "./assets/billing.png"
import flexPay from "./assets/flex-pay.png"
import person1 from "./assets/person1.svg"
import person2 from "./assets/person2.svg"
import person3 from "./assets/person3.svg"
import airbnb from "./assets/airbnb.png"
import binance from "./assets/binance.png"
import coinbase from "./assets/coinbase.png"
import dropbox from "./assets/dropbox.png"

export const navigation = [
  {
    id: 1,
    name: "Features",
    navigate: "#features"
  },
  {
    id: 2,
    name: "Testimonials",
    navigate: "#testimonials"
  },
  {
    id: 3,
    name: "Clients",
    navigate: "#clients"
  },
  {
    id: 4,
    name: "Contacts",
    navigate: "#contacts"
  },
]

export const features = [
  {
    title: "Introducing SmartMatch Technology",
    img: smartMatch,
    feature: "Save time and Effort when looking for financing options, FundWise's SmartMatch technology streamlines the process and presents you with most relevant and suitable financing options for their needs"
  },
  {
    title: "Flexible Payment Option With FlexPay",
    img: flexPay,
    feature: "Tailor your repayment schedule to meet your needs, and have more flexibility in your repayment schedules, allowing you to better manage your cash flow and align your repayments with you revenue streams",
  },
  {
    title: "Easily Control Your Billing & Invoice",
    img: billing,
    feature: "Reduce the time and effort required to manage your finances. Easily track payments and see when payments are due, allowing you to stay on top of your cash flow and avoid late payments."
  }
]

export const testimonials = [
  {
    feedback: "FundWise's flexible repayment schedule made it easy for me to manage my cash flow. Highly recommend!",
    name: "Aaron Patel",
    position: "Business Owner",
    img: person1
  },
  {
    feedback: "FundWise was a breeze. They understood my business and financial goals and created a solution that met my needs.",
    name: "Rachel Kim",
    position: "Business Owner",
    img: person2
  },
  {
    feedback: "FundWise provided me with the financing I needed to keep my business running smoothly. I'm so grateful for their help!",
    name: "Laura Rodriguez",
    position: "Business Owner",
    img: person3
  }
]

export const clients = [
  {
    id: 1,
    img: airbnb
  },
  {
    id: 2,
    img: binance
  },
  {
    id: 3,
    img: coinbase
  },
  {
    id: 4,
    img: dropbox
  },
]

export const socials = [
  {
    imgPath: instagram,
    url: "https://instagram.com"
  },
  {
    imgPath: facebook,
    url: "https://facebook.com"
  },
  {
    imgPath: twitter,
    url: "https://twitter.com"
  },
  {
    imgPath: linkedin,
    url: "https://linkedin.com"
  }
]
