import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import MarqueeBanner from './sections/MarqueeBanner'
import GridFeed from './sections/GridFeed'
import Gallery from './sections/Gallery'
import Reservations from './sections/Reservations'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import GrainOverlay from './components/GrainOverlay'
import DynamicBackground from './components/DynamicBackground'

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans antialiased">
      <DynamicBackground />
      <GrainOverlay />
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <GridFeed />
        <Gallery />
        <Reservations />
      </main>
      <Footer />
    </div>
  )
}
