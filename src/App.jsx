import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experiance from "./components/Experience"
import Footer from "./components/Footer"

export default function hh() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Footer/>
    </>
  )
}