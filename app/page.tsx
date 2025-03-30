import React from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import InfinityScrollLogos from "@/components/InfiniteScrollLogos"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

function Home(): React.JSX.Element {

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <InfinityScrollLogos />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home