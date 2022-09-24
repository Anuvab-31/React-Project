import { Box, Drawer } from '@mui/material'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutUs from './aboutUs'
import Customersay from './customerSay'
import Footer from './footer'
import HomePage from './homePage'
import LatestNews from './latestnews'
import MajorClients from './majorClients'
import OurServices from './ourServices'
import WhyUs from './whyUs'
import NavBar from './navBar'
import Header from './header'

export default function Home() {

  return (
    <>
      {/* <NavBar></NavBar> */}
      <Header></Header>
      <HomePage></HomePage>
      <OurServices></OurServices>
      <AboutUs></AboutUs>
      <WhyUs></WhyUs>
      <LatestNews></LatestNews>
      <Customersay></Customersay>
      <MajorClients></MajorClients>
      <Footer></Footer>
    </>

  )
}
