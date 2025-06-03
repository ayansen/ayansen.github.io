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
                  I'm a Principal Engineer with a track record of bringing products from inception to impact—shaping technical vision,
                  driving execution, and influencing both executive leadership and engineering teams.
                  My core passion lies in architecting multi-tenant, API-first platforms and building reactive, 
                  event-driven systems using functional programming paradigms.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <p className="text-base">
                  Over the years, I've built scalable distributed systems, extensible control planes, streaming analytics platforms, 
                  business-critical domain models, IAM frameworks, and cloud-native infrastructure layers. 
                  I contribute actively to open-source projects and believe in open, collaborative, and democratic approaches to software development.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <p className="text-base">
                  Lately, I've been working on agentic applications powered by large language models—exploring how autonomous 
                  workflows can redefine software interaction. I'm deeply excited about the potential of this frontier to transform how we build and use intelligent systems.
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
      <section className="py-8 md:py-12 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Believe In</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Choose Consistency Over Intensity</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-centre">Assume Positive Intent</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Influence Over Enforce</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Perspective of Abundance</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Don't Confuse Motion for Progress</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">No Sacred Cats</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Respond Over React</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Think Big and Small</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Actions Over Words</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-center">Hold On Tightly, Let Go Lightly</CardTitle>
              </CardHeader>
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
