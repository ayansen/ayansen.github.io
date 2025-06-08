import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const principles = [
  {
    id: "learning",
    title: "Consistency Over Intensity",
    image: "/images/consistency.png",
    imageAlt: "Consistency Over Intensity",
    points: [
      "Small daily steps compound into extraordinary results over time.",
      "Focus on showing up regularly rather than occasional bursts of effort.",
      "Build momentum through steady, sustainable progress.",
      "Mastery comes from consistent practice, not occasional brilliance.",
    ],
  },
  {
    id: "trust",
    title: "Assume Positive Intent",
    image: "/images/intent.png",
    imageAlt: "Assume Positive Intent",
    points: [
      "Start with trust - believe others mean well until proven otherwise.",
      "Seek to understand before making judgments.",
      "Approach conflicts with curiosity, not blame.",
      "Build a culture where people feel safe to be open and honest.",
    ],
  },
  {
    id: "collaboration",
    title: "Influence Over Enforce",
    image: "/images/influence.png",
    imageAlt: "Influence Over Enforce",
    points: [
      "Explain your reasoning - if you can't, reconsider your position.",
      "Trust others' intelligence - explain decisions thoroughly.",
      "Create ownership through collaboration, not imposition.",
      "Achieve more together than any individual could alone.",
    ],
  },
  {
    id: "opportunity",
    title: "Perspective of Abundance",
    image: "/images/abundance.png",
    imageAlt: "Perspective of Abundance",
    points: [
      "Avoid zero-sum thinking - success isn't a limited resource.",
      "Your unique perspective creates value that others can't replicate.",
      "Look for opportunities others miss.",
      "Help others grow - it expands possibilities for everyone.",
    ],
  },
  {
    id: "direction",
    title: "Don't Confuse Motion for Progress",
    image: "/images/progress.png",
    imageAlt: "Don't Confuse Motion for Progress",
    points: [
      "Define clear goals - without direction, effort is wasted.",
      "Being busy isn't the same as being productive.",
      "Regularly check if your actions align with your goals.",
      "Focus on high-impact work that moves you forward.",
    ],
  },
  {
    id: "tradition",
    title: "No Sacred Cats",
    image: "/images/cats.png",
    imageAlt: "No Sacred Cats",
    points: [
      "Question traditions - keep what works, discard what doesn't.",
      "If no one can explain why we do something, it's time to rethink it.",
      "Adapt practices to current needs, not past conditions.",
      "Value results over habits - change what isn't working.",
    ],
  },
  {
    id: "engagement",
    title: "Respond Over React",
    image: "/images/respond.png",
    imageAlt: "Respond Over React",
    points: [
      "Take a breath before acting - choose response over reaction.",
      "Use critical thinking, not just instinct.",
      "Understand problems before trying to solve them.",
      "Rise above emotional impulses - think before you act.",
    ],
  },
  {
    id: "vision",
    title: "Think Big and Small",
    image: "/images/think_big_and_small.png",
    imageAlt: "Think Big and Small",
    points: [
      "Have a clear vision of where you want to go.",
      "Celebrate small wins that build momentum.",
      "Break big goals into manageable steps.",
      "Regularly check if your actions align with your vision.",
    ],
  },
  {
    id: "demonstration",
    title: "Actions Over Words",
    image: "/images/action_over_words.png",
    imageAlt: "Actions Over Words",
    points: [
      "Show, don't tell - actions reveal true priorities.",
      "Build trust through consistent behavior.",
      "Lead by example - demonstrate the standard you expect.",
      "Focus on results, not just good intentions.",
    ],
  },
  {
    id: "purpose",
    title: "Hold On Tightly, Let Go Lightly",
    image: "/images/compass_and_map.png",
    imageAlt: "Hold On Tightly, Let Go Lightly",
    points: [
      "Use purpose as your guide, principles as your compass.",
      "Stay aware of how purpose can both motivate and blind you.",
      "Let go of goals that no longer serve you.",
      "Value the journey as much as the destination.",
    ],
  },
]

export default function Principles() {
  return (
    <SiteLayout>
      <section className="py-4 md:py-6">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">What I believe In</h1>
          <div className="p-6 rounded-lg bg-muted/50 mb-12 hover:bg-muted transition-colors">
            <p className="text-base">
              I believe in a few core principles that guide every decision I make.
              I value consistency over intensity, assume positive intent, and prefer influence over enforcement.
              I believe in abundance, prioritize real progress over busywork, and question outdated norms.
              I aim to respond, not react; think big and small; act more than speak; and commit deeply without attachment.
              These principles help me stay grounded, intentional, and aligned with what truly matters.
            </p>
          </div>
          <Tabs defaultValue={principles[0].id} className="w-11/12">
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
