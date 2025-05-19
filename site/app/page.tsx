import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Ayan Sen</span>
            </h1>
            <p className="text-xl text-muted-foreground">Coder | Platform Architect | Principal Engineer</p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#about">About Me</a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/experience">My Experience</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="https://media.licdn.com/dms/image/v2/C4D03AQH0-Wfyu6_s_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517578024080?e=1753315200&v=beta&t=vwSiFLReT44y7ecwKuy7_u4PrdHkdmx53LDkkFTbP0A"
                alt="Ayan Sen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                I am a principal engineer with experience in building multiple products from inception to outcome,
                setting the tech vision and strategy, and influencing executive leadership, and software teams.
              </p>
              <p className="text-lg mb-6">
                My passion is designing multi-tenant, API-first platforms, building event-driven reactive systems, and
                writing functional code. I have built extensible control planes, scalable distributed systems, streaming
                and analytics platforms, business domains, identity and access management systems, and infrastructure
                platforms.
              </p>
              <p className="text-lg mb-6">
                I contribute to open-source projects and believe in collaborative and democratic software development.
              </p>
              <div className="mt-6 flex gap-4">
                <Button variant="outline" asChild>
                  <Link href="https://linkedin.com/in/ayansen89" target="_blank" rel="noopener noreferrer">
                    <span className="i-lucide-linkedin mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Engineering Systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Belief Summary Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Believe In</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Value steady action over perfect strategy—growth is compounded.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Empathy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Assume good intent—trust opens more than doubt ever could.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reflection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Respond with thought, not reflex. Insight follows pause.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adaptability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Challenge ritual. Let purpose—not history—shape the path.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/principles">View All Principles</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
