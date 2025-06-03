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
                  <h3 className="text-2xl font-bold">JPMorgan Chase & Co.</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Executive Director, Sr Principal Software Engineer</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Aug 2023 - Present · 1 yr 10 mos</span>
                </div>
              </div>
              <div className="space-y-4">

                <div className="mt-6 border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-semibold">API Marketplace</h4>
                  <p className="text-muted-foreground mb-2">Executive Director, Sr Principal Software Engineer | Seattle, Washington, United States | Aug 2023 - Present </p>
                  <p className="mb-2">
                    Led the design and expansion of an enterprise-wide API Marketplace at JPMorgan Chase to enable
                    seamless publishing, discovery, subscription, and observability of both internal and external APIs.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Served as a Senior Individual Contributor on API Marketplace, providing technical direction and guidance to over 100 engineers.
                    </li>
                    <li>
                      Set up the engineering culture to foster a culture of API-first architecture across the team and collaborate using design documents and contract reviews.
                    </li>
                    <li>
                      Led the design and development of the API Marketplace product, delivering over 15 services and agentic experiences spanning identity, analytics and intelligence, user experience, API gateway, lifecycle management, and governance controls
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
                  <h4 className="text-xl font-semibold">Platform Architecture </h4>
                  <p className="text-muted-foreground mb-2">
                    Principal Software Engineer | Seattle, Washington, United States  | Jul 2020 - Aug 2023 · 3 yrs 2 mos
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
                  <h4 className="text-xl font-semibold">Trips</h4>
                  <p className="text-muted-foreground mb-2">Senior Software Development Engineer | Greater Seattle Area | Sep 2019 - Jul 2020 · 11 mos</p>
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
                  <h4 className="text-xl font-semibold">Brand Expedia -  Platform</h4>
                  <p className="text-muted-foreground mb-2">Senior Software Development Engineer | December 2012 - Sep 2019 · 6 yrs 9 mo | Gurgaon, India</p>
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

            {/* LifeLyk Role */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Lifelyk</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Founding Engineer</span>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="text-xl font-semibold">Lifelyk</h4>
                    <p className="text-muted-foreground mb-2">Founding Engineer | Bangalore, India | December 2011 - Dec 2012 · 1 yr </p>
                    <div className="space-y-2">
                      <p>
                        As the founder of Lifelyk (now sunset), I led the end-to-end design and development of a platform that connected photographers and artists with global audiences.
                        Built from the ground up with another engineer, Lifelyk enabled creators to sell high-quality photographs and paintings, build a following, and monetize their work.
                        I defined the technical architecture, implemented core marketplace features, and shaped the product vision from concept to launch.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">System Design</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Ownership</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HPE Role */}
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Hewlett Packard Enterprise</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Systems Software Engineer</span>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="text-xl font-semibold">ePrint Enterprise</h4>
                    <p className="text-muted-foreground mb-2">Systems Software Engineer | Bangalore, India | Aug 2011 - Dec 2012 · 1 yr 5 mos</p>
                    <div className="space-y-2">
                      <p>
                        Part of the Enterprise ePrint team working on mobile printing solutions using Microsoft Dot Net (C#)
                        and C++
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">C#</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">C++</span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">.NET</span>
                  </div>
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
              I earned a Bachelor’s degree in Computer Science and Engineering, where I completed a comprehensive curriculum covering core subjects such as Algorithms, Data Structures, Compiler Design, Operating Systems, and Computer Networks, along with foundational engineering courses over four years.              </p>
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
                      href="https://medium.com/expedia-group-tech/configuration-management-at-expedia-group-a23a7563a348"
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
                  An enterprise-wide platform that simplifies the publishing, discovery, subscription, and observability of internal and external APIs.
                  It features AI-driven agentic experiences powered by LLMS(large language models) and MCP(model context protocol) servers, along with semantic search and summarization to enhance API understanding.
                  A custom Envoy-based API Gateway meets platform-specific needs and integrates easily with standard gateways like Apigee and Kong via a flexible plug-in system.
                  The platform supports the entire API lifecycle—from onboarding and versioning to retirement—while enforcing security, compliance, and governance.
                  With role-based access, usage analytics, and deployment across cloud and on-premise environments, it ensures secure, consistent, and efficient API consumption across the organization.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-2">Open World</h4>
                <p className="text-muted-foreground mb-4">Jan 2020 - Aug 2023 | Expedia Group</p>
                <p>
                  A purpose-built platform where any size partner can leverage and configure the products and services
                  they need to participate and succeed in the travel ecosystem.
                </p>
                <div className="mt-4"> 
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://partner.expediagroup.com/en-us/partnership" target="_blank"  rel="noopener noreferrer">
                      Open Portal
                    </Link>
                  </Button>
                </div>
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
                <div className="mt-4"> 
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://medium.com/expedia-group-tech/configuration-management-at-expedia-group-a23a7563a348"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}