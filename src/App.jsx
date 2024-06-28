import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experiance from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

export default function hh() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experiance/>
        <Contact/>
        <Footer/>
      </div>
      <Toaster/>
    </>
  )
}