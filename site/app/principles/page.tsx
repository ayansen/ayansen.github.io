import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"

export default function Principles() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I believe In</h1>

          <div className="space-y-16">
            {/* Principle 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Learning Compounds Like Interest</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Power of Daily Habits: Engaging consistently, even at a minimal level, compounds over time to
                      generate extraordinary expertise.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Avoid the Optimization Trap: Frequent shifting in pursuit of optimal strategies disrupts learning
                      and delays mastery.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Build Momentum Through Repetition: Doing one thing regularly builds muscle memory, confidence, and
                      foundational depth.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Mastery Is a Long Game: Excellence is rarely the result of a breakthrough; it's usually the
                      product of consistent small gains.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/consistency.png"
                  alt="Consistency Over Intensity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/intent.png"
                  alt="Assume Positive Intent"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Build Trust Through Perspective</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Start With Trust: Believe that others mean well unless proven otherwise. It opens channels for
                      honest collaboration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Understand Before Judging: Harmful behavior often stems from misunderstanding or pressure—seek to
                      understand motives.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Resolve Through Dialogue: Confront with curiosity. Work together on solutions rather than
                      assigning blame.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Foster a Supportive Culture: Positive intent reduces defensiveness and encourages openness,
                      fueling a resilient team.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Great things are built together</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Lead With Reason: Enforcing without explanation can mean either you don't have a good explanation or you don't trust the intelligence of others to understand you
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Respect Intelligence: Explain decisions thoroughly—people rise to challenges when trusted with
                      context.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Empower, Don't Impose: Co-creation breeds ownership; enforcement breeds resistance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>We &gt; I: Great outcomes emerge from synergy, not top-down directives.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/influence.png"
                  alt="Influence Over Enforce"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Principle 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/abundance.png"
                  alt="Perspective of Abundance"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Opportunity Isn't Scarce—Vision Is</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Don't Play Zero Sum Games: Don't participate in activities where your winning depends on someone
                      else losing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Your Uniqueness is Value: Critical thinking and creativity differentiate you—there's always room
                      for originality.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Seek New Frontiers: Crowded paths signal it's time to explore better, overlooked opportunities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Amplify Others: Helping others grow doesn't diminish you—it expands the whole ecosystem.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 5 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Activity Without Direction Is Just Noise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Define Success Clearly: Without a destination, effort risks becoming wheel-spinning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Busy ≠ Productive: Motion often looks impressive but doesn't always move you forward.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Evaluate Effort Impact: Regularly assess whether your actions are aligned with outcomes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Prioritize Intentional Work: Deliberate, high-leverage tasks yield real progress over scattered
                      activity.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/progress.png"
                  alt="Don't Confuse Motion for Progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Principle 6 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cats.png"
                  alt="No Sacred Cats"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Challenge Tradition, Embrace Purpose</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Rituals Need Reasons: Practices should serve a purpose—not persist just because they're familiar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Interrogate the Why: If no one can explain a tradition's value, it may be time to rethink it.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Evolve With Context: What worked in the past might hinder progress today—adaptation is essential.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Value Over Habit: Retain rituals that deliver results, discard those that are inertia-driven.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 7 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Engage Thoughtfully, Not Instinctively</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Pause Before Action: Reactions are reflexive; responses are considered. Take a breath before you
                      decide.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Choose Creativity Over Instinct: Instincts help us survive; critical thinking helps us thrive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Use Explanatory Knowledge: Understanding a problem allows you to design a solution rather than
                      escalate conflict.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Elevate Above Emotion: You're not your nervous system—conscious response is uniquely human.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/respond.png"
                  alt="Respond Over React"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Principle 8 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/think_big_and_small.png"
                  alt="Think Big and Small"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Think Big and Small</h3>
                <p className="text-lg mb-4">Balance Vision With Daily Progress</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Start With Vision: A compelling long-term goal offers direction and motivation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Anchor With Small Wins: Daily achievements sustain momentum and reinforce the bigger picture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Bridge the Gap: Turn ambitions into actionable steps—strategy connects dreams to execution.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Reflect and Re-align: Check often if your steps still lead toward your vision and adjust
                      accordingly.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 9 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Demonstrate, Don't Declare</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Show, Don't Tell: Behavior reveals true priorities more clearly than statements ever could.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Build Trust Through Consistency: Reliable action creates credibility; promises alone create
                      skepticism.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Lead By Example: Demonstrate the standard you expect—it's more powerful than any directive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Value Results Over Intentions: Good intentions matter, but outcomes define impact.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 md:h-96 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/action_over_words.png"
                  alt="Actions Over Words"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Principle 10 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/compass_and_map.png"
                  alt="Hold On Tightly, Let Go Lightly"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Hold On Tightly, Let Go Lightly</h3>
                <p className="text-lg mb-4">Purpose With Flexibility</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Live With a Compass and a Map: Purpose gives direction (Map); principles guide your response
                      (Compass). Trust the compass in conflict.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Purpose Is Powerful—And Dangerous: Deep belief in a goal can motivate you—or blind you. Stay
                      aware.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Release Gracefully: Let go of goals when they no longer serve your growth or well-being.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>
                      Treasure the Journey: Even if the goal is lost, the learning and joy remain yours forever.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
