import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Building } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"

export default function Experience() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h1>

          <div className="space-y-12">
            {/* Current Role */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Executive Director, Sr Principal Software Engineer</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>JPMorgan Chase & Co.</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Aug 2023 - Present · 1 yr 10 mos</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Seattle, Washington, United States · Hybrid</p>
              <div className="space-y-4">
                <p>Part of the Core Platform Engineering Team, building out the API Management Platform</p>

                <div className="mt-6 border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-semibold">API Marketplace</h4>
                  <p className="text-muted-foreground mb-2">Aug 2023 - Present</p>
                  <p className="mb-2">
                    Led the design and expansion of an enterprise-wide API Marketplace at JPMorgan Chase to enable
                    seamless publishing, discovery, subscription, and observability of both internal and external APIs.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Streamlined API lifecycle management, enforced security and compliance standards, and enhanced
                      reusability across business units
                    </li>
                    <li>
                      Implemented automated onboarding workflows, role-based access controls, and detailed usage
                      analytics
                    </li>
                    <li>Integrated with governance frameworks to ensure regulatory adherence</li>
                    <li>
                      Accelerated development velocity and fostered a culture of API-first architecture across the
                      organization
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">Enterprise Architecture</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">Platform as a Service (PAAS)</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">API Management</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">API Marketplace</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">Security & Compliance</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">Governance</span>
                </div>
              </div>
            </div>

            {/* Expedia Group Experience */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Expedia Group</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Multiple Roles</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>10 yrs 9 mos</span>
                </div>
              </div>

              <div className="space-y-8 mt-4">
                {/* Principal Role */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Principal Software Engineer</h4>
                  <p className="text-muted-foreground mb-2">
                    Jul 2020 - Aug 2023 · 3 yrs 2 mos | Seattle, Washington, United States
                  </p>
                  <div className="space-y-2">
                    <p>
                      Worked as a platform architect designing the control plane and identity domains, leading the
                      Platform-as-a-Product tech vision partnering with product and engineering teams.
                    </p>
                    <p className="mt-2">
                      <strong>Open World Platform:</strong> Led the development of a purpose-built platform where
                      partners of any size can leverage and configure the products and services they need to participate
                      and succeed in the travel ecosystem.
                    </p>
                    <p className="mt-2">
                      <strong>Configuration Management:</strong> Developed a system for modeling partner-specific
                      behavior as configurations, which was featured in a publication on Expedia Group's tech blog.
                    </p>
                  </div>
                </div>

                {/* Senior SDE Role 1 */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Senior Software Development Engineer</h4>
                  <p className="text-muted-foreground mb-2">Sep 2019 - Jul 2020 · 11 mos | Greater Seattle Area</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Connected Trips - Trips Domain:</strong> Designed and developed the trips domain, a
                      foundational capability established on the EG Travel Platform that groups travel items together as
                      one trip, even when booked separately.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Led initiatives to build event-driven platforms to provide proactive customer service</li>
                      <li>Led the platform for observability</li>
                      <li>Mentored junior developers in the organization</li>
                    </ul>
                  </div>
                </div>

                {/* Senior SDE Role 2 */}
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Senior Software Development Engineer</h4>
                  <p className="text-muted-foreground mb-2">Sep 2017 - Sep 2019 · 2 yrs 1 mo | Gurgaon, India</p>
                  <div className="space-y-2">
                    <p>Focused on Distributed Systems and Data Streaming</p>
                    <p className="mt-2">
                      <strong>Haystack:</strong> Contributed to a resilient, scalable tracing and analysis system.
                      Haystack is an Expedia-backed open source distributed tracing project to facilitate detection and
                      remediation of problems in microservice architectures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Enterprise Architecture</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Platform as a Service</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">API Development</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Distributed Systems</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Data Streaming</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Event-Driven Architecture</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Open Source</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Coaching & Mentoring</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Team Mentoring</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Configuration Management</span>
              </div>
            </div>

            {/* HPE Role */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Systems Software Engineer</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Hewlett Packard Enterprise</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Aug 2011 - Dec 2012 · 1 yr 5 mos</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Bangalore</p>
              <div className="space-y-2">
                <p>
                  Part of the Enterprise ePrint team working on mobile printing solutions using Microsoft Dot Net (C#)
                  and C++
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">C#</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">C++</span>
                  <span className="px-2 py-1 bg-muted rounded-md text-xs">.NET</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">National Institute of Technology Durgapur</h4>
                  <p className="text-muted-foreground">Bachelor of Technology (B.Tech.), Computer Engineering</p>
                </div>
              </div>
              <p>
                Activities and societies: Training Placement Representative, Member of the university team in soccer,
                cricket and table tennis.
              </p>
            </div>
          </div>

          {/* Publications */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Configuration Management at Expediagroup</h4>
                  <p className="text-muted-foreground">Medium - Expedia Group Tech · August 2023</p>
                </div>
                <div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://medium.com/expedia-group-tech/configuration-management-at-expediagroup-4b5a76ce0e5d"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
              <p className="mt-2">How Expediagroup modeled partner-specific behavior as configurations</p>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-2">API Marketplace</h4>
                <p className="text-muted-foreground mb-4">Aug 2023 - Present | JPMorgan Chase & Co.</p>
                <p className="mb-2">
                  An enterprise-wide platform enabling seamless publishing, discovery, subscription, and observability
                  of both internal and external APIs.
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                  <li>Streamlined API lifecycle management with security and compliance standards</li>
                  <li>Automated onboarding workflows and role-based access controls</li>
                  <li>Integrated with governance frameworks for regulatory adherence</li>
                  <li>Accelerated development velocity and fostered API-first architecture</li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-2">Open World</h4>
                <p className="text-muted-foreground mb-4">Jan 2020 - Aug 2023 | Expedia Group</p>
                <p>
                  A purpose-built platform where any size partner can leverage and configure the products and services
                  they need to participate and succeed in the travel ecosystem.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-2">Connected Trips - Trips Domain</h4>
                <p className="text-muted-foreground mb-4">Jan 2019 - Jul 2020 | Expedia Group</p>
                <p>
                  A foundational capability established on the EG Travel Platform. It groups travel items together as
                  one trip, even when booked separately, providing a unified experience for travelers.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-2">Haystack</h4>
                <p className="text-muted-foreground mb-4">2017 - 2019 | Expedia Group</p>
                <p>
                  A resilient, scalable tracing and analysis system. Haystack is an Expedia-backed open source
                  distributed tracing project to facilitate detection and remediation of problems in microservice
                  architectures.
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://expediadotcom.github.io/haystack/" target="_blank" rel="noopener noreferrer">
                      Project Website
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-2">Configuration Management</h4>
                <p className="text-muted-foreground mb-4">2020 - 2023 | Expedia Group</p>
                <p>
                  Developed a system for modeling partner-specific behavior as configurations, enabling flexible and
                  scalable customization of the platform for different partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
