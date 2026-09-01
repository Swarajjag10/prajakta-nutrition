// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

import Link from "next/link";import {Heart,Leaf,Sparkles,ClipboardCheck,ArrowRight,Baby,Salad,Scale,Flower2} from "lucide-react";import {PageShell,FinalCta} from "@/components/page-shell";
const services=[["Women’s Health","Hormonal health, menstrual wellness and everyday nourishment.","/services/womens-health",Flower2],["PCOS Nutrition","Practical, personalised nutrition support for life with PCOS.","/services/pcos-nutrition",Heart],["1:1 Consultation","A plan shaped around your health, preferences and routine.","/consultation",ClipboardCheck],["Healthy Weight","A sustainable approach without crash diets or rigid rules.","/services/weight-management",Scale],["4-Week Weight Management Journey","Structured personalised support with weekly progress guidance.","/services/4-week-weight-management",Scale],["Postpartum Nutrition","Gentle support for recovery, energy and new motherhood.","/services/postpartum-nutrition",Baby]];
export default function Home(){return <PageShell><main><section className="hero"><div className="hero-copy"><p className="eyebrow">Evidence · Empathy · Empowerment</p><h1>Nutrition that fits <em>your life.</em></h1><p className="lead">Personalised, evidence-based nutrition for women at every stage of life—designed to be practical, enjoyable and sustainable.</p><p className="intro">Hi, I’m Prajakta, a Clinical Nutritionist and Dietitian with an MSc in Clinical Nutrition and 3+ years of hospital-based experience.</p><div className="actions"><Link href="/book-consultation" className="btn">Book a Consultation</Link><Link href="/about" className="text-link">Learn about me <ArrowRight size={16}/></Link></div></div><div className="hero-art"><div className="sun"></div><img className="hero-photo" src="/images/hero-nutritionist.png" alt="Indian clinical nutritionist writing beside a balanced meal"/><p>PCOS · Postpartum · Women’s Health</p></div></section><section className="values">{[[Leaf,"Personalised","Your body and routine are unique."],[ClipboardCheck,"Evidence-based","Your health deserves informed guidance."],[Salad,"Practical","Nutrition should work in real life."],[Heart,"Sustainable","Small changes can create lasting impact."]].map(([Icon,t,d]:any)=><article key={t}><Icon/><div><h3>{t}</h3><p>{d}</p></div></article>)}</section><section className="about-preview"><div className="editorial-image"><img src="/images/balanced-indian-meal.png" alt="Balanced Indian meal with dal, vegetables, grains and salad"/><span>Rooted in science. Delivered with care.</span></div><div><p className="script">about me</p><h2>Helping women nourish their bodies with <em>confidence, clarity and care.</em></h2><p>Good nutrition isn’t about following a perfect diet. It’s about understanding your body, lifestyle and challenges—and finding an approach you can genuinely sustain.</p><p>I create realistic, easy-to-follow nutrition guidance instead of restrictive plans or short-term fixes.</p><Link href="/about" className="btn">More about me</Link></div></section><section className="services-section"><p className="script center">what I help with</p><h2>Nutrition support created around you</h2><div className="<div className="service-slider">
  <div className="service-track">
    {[...services, ...services].map(
      ([title, desc, href, Icon]: any, index) => (
        <Link
          className="service-card"
          href={href}
          key={`${title}-${index}`}
          aria-hidden={index >= services.length}
          tabIndex={index >= services.length ? -1 : undefined}
        >
          <Icon />
          <h3>{title}</h3>
          <p>{desc}</p>
          <span>
            Explore service <ArrowRight size={15} />
          </span>
        </Link>
      )
    )}
  </div>
</div>">{services.map(([title,desc,href,Icon]:any)=><Link className="service-card" href={href} key={title}><Icon/><h3>{title}</h3><p>{desc}</p><span>Explore service <ArrowRight size={15}/></span></Link>)}</div>  <Link href="/services" className="outline-btn">
    Explore all services
  </Link>
</section><Link href="/services" className="outline-btn">Explore all services</Link></section><section className="postpartum-feature"><img src="/images/postpartum-mother-baby.png" alt="Indian mother holding her baby in a calm home setting"/><div><p className="script">postpartum support</p><h2>Nourishment for the season that asks so much of you.</h2><p>Gentle, practical support for recovery, energy and new motherhood—without pressure or perfection.</p><Link href="/services/postpartum-nutrition" className="btn">Explore postpartum nutrition</Link></div></section><section className="quote-band"><p>You don’t need a perfect diet.</p><h2>You need a way of eating that works for <em>you.</em></h2><Link href="/book-consultation" className="btn btn-light">Start your journey</Link></section><section className="process"><p className="eyebrow">Simple, supportive, personal</p><h2>How it works</h2><div className="steps">{["Book your consultation","Share your story","Receive personalised guidance","Grow with ongoing support"].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><p>{["Choose a suitable service and send your details.","Talk through your routine, concerns and goals.","Get practical recommendations tailored to you.","Review progress and adapt as life changes."][i]}</p></article>)}</div></section><FinalCta/></main></PageShell>}
