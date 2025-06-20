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
                I’m a Principal Engineer who turns ideas into real, useful products.
                I’m good at setting a clear vision and leading teams to build things that work. 
                I specialize in designing complex systems and writing clean code. 
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
            I follow a set of core principles that guide my decisions. 
            Whenever I face a meaningful choice—whether it’s about work, relationships, or how I spend my time, money, or energy—I turn to these principles. 
            They’re deeply personal, but I’m sharing them in the hope that they offer insight into how I think and make decisions.
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
