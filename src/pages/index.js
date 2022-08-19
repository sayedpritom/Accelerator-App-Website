import * as React from "react"
import Community from "../Components/Community/Community"
import Features from "../Components/Features/Features"
import Header from "../Components/Header/Header"
import Navbar from "../Components/Navbar/Navbar"
import Reputation from "../Components/Reputation/Reputation"
import './index.css'
import { Helmet } from 'react-helmet';
import Footer from "../Components/Footer/Footer"

const IndexPage = () => {
  return (
    <main className="index">
      <Helmet>
        <title>Accelerator App</title>
      </Helmet>
      <Header />
      <Community />
      <Features />
      <Reputation />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
