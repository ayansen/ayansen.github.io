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
      "Power of Daily Habits: Engaging consistently, even at a minimal level, compounds over time to generate extraordinary expertise.",
      "Avoid the Optimization Trap: Frequent shifting in pursuit of optimal strategies disrupts learning and delays mastery.",
      "Build Momentum Through Repetition: Doing one thing regularly builds muscle memory, confidence, and foundational depth.",
      "Mastery Is a Long Game: Excellence is rarely the result of a breakthrough; it's usually the product of consistent small gains.",
    ],
  },
  {
    id: "trust",
    title: "Assume Positive Intent",
    image: "/images/intent.png",
    imageAlt: "Assume Positive Intent",
    points: [
      "Start With Trust: Believe that others mean well unless proven otherwise. It opens channels for honest collaboration.",
      "Understand Before Judging: Harmful behavior often stems from misunderstanding or pressure—seek to understand motives.",
      "Resolve Through Dialogue: Confront with curiosity. Work together on solutions rather than assigning blame.",
      "Foster a Supportive Culture: Positive intent reduces defensiveness and encourages openness, fueling a resilient team.",
    ],
  },
  {
    id: "collaboration",
    title: "Influence Over Enforce",
    image: "/images/influence.png",
    imageAlt: "Influence Over Enforce",
    points: [
      "Lead With Reason: Enforcing without explanation can mean either you don't have a good explanation or you don't trust the intelligence of others to understand you",
      "Respect Intelligence: Explain decisions thoroughly—people rise to challenges when trusted with context.",
      "Empower, Don't Impose: Co-creation breeds ownership; enforcement breeds resistance.",
      "We &gt; I: Great outcomes emerge from synergy, not top-down directives.",
    ],
  },
  {
    id: "opportunity",
    title: "Perspective of Abundance",
    image: "/images/abundance.png",
    imageAlt: "Perspective of Abundance",
    points: [
      "Don't Play Zero Sum Games: Don't participate in activities where your winning depends on someone else losing.",
      "Your Uniqueness is Value: Critical thinking and creativity differentiate you—there's always room for originality.",
      "Seek New Frontiers: Crowded paths signal it's time to explore better, overlooked opportunities.",
      "Amplify Others: Helping others grow doesn't diminish you—it expands the whole ecosystem.",
    ],
  },
  {
    id: "direction",
    title: "Don't Confuse Motion for Progress",
    image: "/images/progress.png",
    imageAlt: "Don't Confuse Motion for Progress",
    points: [
      "Define Success Clearly: Without a destination, effort risks becoming wheel-spinning.",
      "Busy ≠ Productive: Motion often looks impressive but doesn't always move you forward.",
      "Evaluate Effort Impact: Regularly assess whether your actions are aligned with outcomes.",
      "Prioritize Intentional Work: Deliberate, high-leverage tasks yield real progress over scattered activity.",
    ],
  },
  {
    id: "tradition",
    title: "No Sacred Cats",
    image: "/images/cats.png",
    imageAlt: "No Sacred Cats",
    points: [
      "Rituals Need Reasons: Practices should serve a purpose—not persist just because they're familiar.",
      "Interrogate the Why: If no one can explain a tradition's value, it may be time to rethink it.",
      "Evolve With Context: What worked in the past might hinder progress today—adaptation is essential.",
      "Value Over Habit: Retain rituals that deliver results, discard those that are inertia-driven.",
    ],
  },
  {
    id: "engagement",
    title: "Respond Over React",
    image: "/images/respond.png",
    imageAlt: "Respond Over React",
    points: [
      "Pause Before Action: Reactions are reflexive; responses are considered. Take a breath before you decide.",
      "Choose Creativity Over Instinct: Instincts help us survive; critical thinking helps us thrive.",
      "Use Explanatory Knowledge: Understanding a problem allows you to design a solution rather than escalate conflict.",
      "Elevate Above Emotion: You're not your nervous system—conscious response is uniquely human.",
    ],
  },
  {
    id: "vision",
    title: "Think Big and Small",
    image: "/images/think_big_and_small.png",
    imageAlt: "Think Big and Small",
    points: [
      "Start With Vision: A compelling long-term goal offers direction and motivation.",
      "Anchor With Small Wins: Daily achievements sustain momentum and reinforce the bigger picture.",
      "Bridge the Gap: Turn ambitions into actionable steps—strategy connects dreams to execution.",
      "Reflect and Re-align: Check often if your steps still lead toward your vision and adjust accordingly.",
    ],
  },
  {
    id: "demonstration",
    title: "Actions Over Words",
    image: "/images/action_over_words.png",
    imageAlt: "Actions Over Words",
    points: [
      "Show, Don't Tell: Behavior reveals true priorities more clearly than statements ever could.",
      "Build Trust Through Consistency: Reliable action creates credibility; promises alone create skepticism.",
      "Lead By Example: Demonstrate the standard you expect—it's more powerful than any directive.",
      "Value Results Over Intentions: Good intentions matter, but outcomes define impact.",
    ],
  },
  {
    id: "purpose",
    title: "Hold On Tightly, Let Go Lightly",
    image: "/images/compass_and_map.png",
    imageAlt: "Hold On Tightly, Let Go Lightly",
    points: [
      "Live With a Compass and a Map: Purpose gives direction (Map); principles guide your response (Compass). Trust the compass in conflict.",
      "Purpose Is Powerful—And Dangerous: Deep belief in a goal can motivate you—or blind you. Stay aware.",
      "Release Gracefully: Let go of goals when they no longer serve your growth or well-being.",
      "Treasure the Journey: Even if the goal is lost, the learning and joy remain yours forever.",
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
