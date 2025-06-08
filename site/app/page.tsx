import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted">
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

                src="/images/profile.jpeg"
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
      <section id="about" className="py-8 px-8 px-12 md:py-12 md:px-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <p className="text-base">
                  I'm a Principal Engineer who transforms ideas into impactful products. I excel at product vision,
                  execution and technical leadership. My expertise lies in designing complex platforms and writing clean code. 
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <p className="text-base">
                  I've built scalable distributed systems, intelligent, secure and multitenant control planes and various business domains related to travel, e-commerce and developer tools.
                  I'm an active open-source contributor and advocate for collaborative, democratic software development. 
                  Currently, I'm building agentic applications powered by large language models. 
                  I'm excited about how autonomous workflows can transform how we build and use intelligent systems.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <p className="text-base">
                  Beyond code, I'm a curious thinker guided by the scientific method. I'm always seeking to understand how and why things work.
                  When I'm not deep in tech or geeking out over science, you'll find me fixing things around the house, enjoying the outdoors through sports, or listening closely as my family shares their stories and challenges..
                </p>
              </div>
            </div>
            <div className="sticky top-24">
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/introduction.png"
                  alt="Engineering Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Belief Summary Section */}
      <section className="py-4 md:py-6 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What I Believe In</h2>
          <div className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <p className="text-base">
              I follow my core principles that guide my decisions: consistency over intensity, positive intent,
              influence over enforcement, abundance mindset, real progress over busywork, and questioning outdated norms.
              I respond rather than react, think big and small, act more than speak, and commit deeply without attachment.
              These principles keep me grounded and focused on what matters.
            </p>
          </div>
          <div className="text-center mt-4">
            <Button asChild>
              <Link href="/principles">View All Principles</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout >
  )
}
