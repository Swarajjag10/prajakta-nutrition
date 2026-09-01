import Link from "next/link"
import {
  Heart,
  Leaf,
  ClipboardCheck,
  ArrowRight,
  Baby,
  Salad,
  Scale,
  Flower2,
} from "lucide-react"

import { PageShell, FinalCta } from "@/components/page-shell"

const services = [
  [
    "Women’s Health",
    "Hormonal health, menstrual wellness and everyday nourishment.",
    "/services/womens-health",
    Flower2,
  ],
  [
    "PCOS Nutrition",
    "Practical, personalised nutrition support for life with PCOS.",
    "/services/pcos-nutrition",
    Heart,
  ],
  [
    "1:1 Consultation",
    "A plan shaped around your health, preferences and routine.",
    "/consultation",
    ClipboardCheck,
  ],
  [
    "Healthy Weight",
    "A sustainable approach without crash diets or rigid rules.",
    "/services/weight-management",
    Scale,
  ],
  [
    "4-Week Weight Management Journey",
    "Structured personalised support with weekly progress guidance.",
    "/services/4-week-weight-management",
    Scale,
  ],
  [
    "Postpartum Nutrition",
    "Gentle support for recovery, energy and new motherhood.",
    "/services/postpartum-nutrition",
    Baby,
  ],
]

export default function Home() {
  return (
    <PageShell>
      <main>
        {/* Hero section */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Evidence · Empathy · Empowerment</p>

            <h1>
              Nutrition that fits <em>your life.</em>
            </h1>

            <p className="lead">
              Personalised, evidence-based nutrition for women at every stage
              of life—designed to be practical, enjoyable and sustainable.
            </p>

            <p className="intro">
              Hi, I’m Prajakta, a Clinical Nutritionist and Dietitian with an
              MSc in Clinical Nutrition and 3+ years of hospital-based
              experience.
            </p>

            <div className="actions">
              <Link href="/book-consultation" className="btn">
                Book a Consultation
              </Link>

              <Link href="/about" className="text-link">
                Learn about me <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero-art">
            <div className="sun"></div>

            <img
              className="hero-photo"
              src="/images/hero-nutritionist.png"
              alt="Indian clinical nutritionist writing beside a balanced meal"
            />

            <p>PCOS · Postpartum · Women’s Health</p>
          </div>
        </section>

        {/* Values */}
        <section className="values">
          {[
            [Leaf, "Personalised", "Your body and routine are unique."],
            [
              ClipboardCheck,
              "Evidence-based",
              "Your health deserves informed guidance.",
            ],
            [Salad, "Practical", "Nutrition should work in real life."],
            [Heart, "Sustainable", "Small changes can create lasting impact."],
          ].map(([Icon, title, description]: any) => (
            <article key={title}>
              <Icon />

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </section>

        {/* About preview */}
        <section className="about-preview">
          <div className="editorial-image">
            <img
              src="/images/balanced-indian-meal.png"
              alt="Balanced Indian meal with dal, vegetables, grains and salad"
            />

            <span>Rooted in science. Delivered with care.</span>
          </div>

          <div>
            <p className="script">about me</p>

            <h2>
              Helping women nourish their bodies with{" "}
              <em>confidence, clarity and care.</em>
            </h2>

            <p>
              Good nutrition isn’t about following a perfect diet. It’s about
              understanding your body, lifestyle and challenges—and finding an
              approach you can genuinely sustain.
            </p>

            <p>
              I create realistic, easy-to-follow nutrition guidance instead of
              restrictive plans or short-term fixes.
            </p>

            <Link href="/about" className="btn">
              More about me
            </Link>
          </div>
        </section>

        {/* Moving services slider */}
        <section className="services-section">
          <p className="script center">what I help with</p>

          <h2>Nutrition support created around you</h2>

          <div className="service-slider">
            <div className="service-track">
              {[...services, ...services].map(
                ([title, description, href, Icon]: any, index) => (
                  <Link
                    className="service-card"
                    href={href}
                    key={`${title}-${index}`}
                    aria-hidden={index >= services.length}
                    tabIndex={index >= services.length ? -1 : undefined}
                  >
                    <Icon />

                    <h3>{title}</h3>

                    <p>{description}</p>

                    <span>
                      Explore service <ArrowRight size={15} />
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>

          <Link href="/services" className="outline-btn">
            Explore all services
          </Link>
        </section>

        {/* Postpartum feature */}
        <section className="postpartum-feature">
          <img
            src="/images/postpartum-mother-baby.png"
            alt="Indian mother holding her baby in a calm home setting"
          />

          <div>
            <p className="script">postpartum support</p>

            <h2>Nourishment for the season that asks so much of you.</h2>

            <p>
              Gentle, practical support for recovery, energy and new
              motherhood—without pressure or perfection.
            </p>

            <Link href="/services/postpartum-nutrition" className="btn">
              Explore postpartum nutrition
            </Link>
          </div>
        </section>

        {/* Quote section */}
        <section className="quote-band">
          <p>You don’t need a perfect diet.</p>

          <h2>
            You need a way of eating that works for <em>you.</em>
          </h2>

          <Link href="/book-consultation" className="btn btn-light">
            Start your journey
          </Link>
        </section>

        {/* Process */}
        <section className="process">
          <p className="eyebrow">Simple, supportive, personal</p>

          <h2>How it works</h2>

          <div className="steps">
            {[
              "Book your consultation",
              "Share your story",
              "Receive personalised guidance",
              "Grow with ongoing support",
            ].map((title, index) => (
              <article key={title}>
                <b>0{index + 1}</b>

                <h3>{title}</h3>

                <p>
                  {
                    [
                      "Choose a suitable service and send your details.",
                      "Talk through your routine, concerns and goals.",
                      "Get practical recommendations tailored to you.",
                      "Review progress and adapt as life changes.",
                    ][index]
                  }
                </p>
              </article>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>
    </PageShell>
  )
}