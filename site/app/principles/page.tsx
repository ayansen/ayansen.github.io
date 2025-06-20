'use client'

import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAnalytics } from "@/hooks/useAnalytics"

const principles = [
  {
    id: "learning",
    title: "Consistency Over Intensity",
    image: "/images/consistency.png",
    imageAlt: "Consistency Over Intensity",
    points: [
      "Small daily steps compound into extraordinary results over time.",
      "Mastery comes from consistent practice, not occasional brilliance.",
      "The battle is always with your own mind. Win it!",
      "Aim to be just a little better at it than you were yesterday."     
    ],
  },
  {
    id: "trust",
    title: "Assume Positive Intent",
    image: "/images/intent.png",
    imageAlt: "Assume Positive Intent",
    points: [
      "No one sets out to harm you—unless they believe doing so will bring them some benefit.",
      "Start with trust - believe others mean well until proven otherwise.",     
      "Approach conflicts with curiosity instead of blame, and work together to find a better solution.",
    ],
  },
  {
    id: "collaboration",
    title: "Influence Over Enforce",
    image: "/images/influence.png",
    imageAlt: "Influence Over Enforce",
    points: [
      "Enforcing without explanation signals one of two things: either you lack a solid reason, or you don’t trust others to understand it.",
      "Great things are built together. Embrace the mindset that we works better than me.",
      "Trust others' intelligence - explain decisions thoroughly.",
      "Create ownership through collaboration, not imposition.",
      
    ],
  },
  {
    id: "opportunity",
    title: "Perspective of Abundance",
    image: "/images/abundance.png",
    imageAlt: "Perspective of Abundance",
    points: [
      "Avoid zero-sum thinking - success isn't a limited resource.",
      "As long as you think critically, your personal experiences will shape a perspective that’s uniquely your own",
      "Don’t play the status game—where your gain depends on someone else’s loss",
      "If too many people are chasing a scarce resource, it’s time to look for a better one.",
    ],
  },
  {
    id: "direction",
    title: "Don't Confuse Motion for Progress",
    image: "/images/progress.png",
    imageAlt: "Don't Confuse Motion for Progress",
    points: [
      "Being busy isn't the same as being productive.",
      "Define clear goals - without direction, effort is wasted.",     
      "Define success for yourself and work towards it"
    ],
  },
  {
    id: "tradition",
    title: "No Sacred Cats",
    image: "/images/cats.png",
    imageAlt: "No Sacred Cats",
    points: [
      "Humans naturally gravitate toward rituals and ceremonies—but they should serve a clear purpose.",
      "If no one can explain why a ritual exists, it probably shouldn’t.",
      "Adapt practices to current needs, not past conditions.",
    ],
  },
  {
    id: "engagement",
    title: "Respond Over React",
    image: "/images/respond.png",
    imageAlt: "Respond Over React",
    points: [
      "Evolution helped us survive on Earth; creativity will help us flourish.",
      "When faced with a problem, don’t let your emotions take control. What sets humans apart from animals is our ability to reason—we have explanatory knowledge. Use it.",
    ],
  },
  {
    id: "vision",
    title: "Think Big and Small",
    image: "/images/think_big_and_small.png",
    imageAlt: "Think Big and Small",
    points: [
      "Vision provides direction, while progress fuels the motivation to reach it.",
      "Have a clear vision of where you want to go.",
      "Break the vision into manageable steps.",
      "Celebrate the wins on the way!",
    ],
  },
  {
    id: "demonstration",
    title: "Actions Over Words",
    image: "/images/action_over_words.png",
    imageAlt: "Actions Over Words",
    points: [
      "Doing is the best way to learn",
      "Actions reveal true priorities.",
      "When trying to understand people, pay attention to the outcomes of their actions, not just their intentions.",
    ],
  },
  {
    id: "purpose",
    title: "Hold On Tightly, Let Go Lightly",
    image: "/images/compass_and_map.png",
    imageAlt: "Hold On Tightly, Let Go Lightly",
    points: [
      "Purpose is key to happiness and also to the greatest sorrows.",
      "Let purpose guide you and principles be your compass. Carry both a Map and a Compass—the Map points to your destination, the Compass keeps you on course. When they conflict, follow the Compass.",
      "Embrace the paradox: believe in the goal while it serves you, and when the time comes, be ready to let it go.",
      "You may have to let go of the purpose, but no one can take away the learning and joy you gained on the journey."
    ],
  },
]

export default function Principles() {
  const { trackEvent } = useAnalytics()

  const handleTabChange = (value: string) => {
    trackEvent('principle_view', {
      principle_id: value,
      principle_title: principles.find(p => p.id === value)?.title
    })
  }

  return (
    <SiteLayout>
      <section className="py-4 md:py-6">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">What I believe In</h1>
          <div className="p-6 rounded-lg bg-muted/50 mb-12 hover:bg-muted transition-colors">
            <p className="text-base">
            I follow a set of core principles that guide my decisions. 
            Whenever I face a meaningful choice—whether it’s about work, relationships, or how I spend my time, money, or energy—I turn to these principles. 
            They’re deeply personal, but I’m sharing them in the hope that they offer insight into how I think and make decisions.
            </p>
          </div>
          <Tabs defaultValue={principles[0].id} className="w-11/12" onValueChange={handleTabChange}>
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              <TabsList className="flex flex-col h-fit gap-2 p-1">
                {principles.map((principle) => (
                  <TabsTrigger
                    key={principle.id}
                    value={principle.id}
                    className="text-sm md:text-base text-left h-auto py-3 px-4 justify-start"
                  >
                    {principle.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="mt-0">
                {principles.map((principle) => (
                  <TabsContent key={principle.id} value={principle.id}>
                    <div className="flex flex-col gap-8">
                      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                        <Image
                          src={principle.image}
                          alt={principle.imageAlt}
                          fill
                          className="object-container"
                        />
                      </div>
                      <div>
                        <ul className="space-y-2">
                          {principle.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </SiteLayout>
  )
}
