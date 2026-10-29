import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import MarqueeBanner from './sections/MarqueeBanner'
import GridFeed from './sections/GridFeed'
import Footer from './components/Footer'
import DynamicBackground from './components/DynamicBackground'

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans antialiased">
      <DynamicBackground />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <GridFeed />
      </main>
      <Footer />
    </div>
  )
}
