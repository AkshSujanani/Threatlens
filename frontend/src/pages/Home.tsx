import { About } from '../components/About'
import { CTA } from '../components/CTA'
import { DashboardPreview } from '../components/DashboardPreview'
import { Downloads } from '../components/Downloads'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { Workflow } from '../components/Workflow'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Workflow />
      <Downloads />
      <DashboardPreview />
      <CTA />
    </>
  )
}
