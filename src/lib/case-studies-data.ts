export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  image: string;
  challenges: string[];
  strategy: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "codehub": {
    slug: "codehub",
    client: "Code Hub India",
    industry: "EdTech",
    heroHeadline: "Driving a 120% Increase in Admissions",
    heroSubheadline: "How we positioned an affordable coding EdTech startup as the go-to platform for Gen-Z college students.",
    overview: "Code Hub India is a trusted EdTech startup dedicated to making high-quality coding education accessible. They needed a highly targeted approach to break through a saturated market and reach 18-24 year-old college students.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    challenges: [
      "Low brand awareness in a highly saturated EdTech market.",
      "Previous marketing efforts were not driving qualified leads.",
      "Difficulty convincing students of course value to drive actual enrollments."
    ],
    strategy: [
      {
        title: "Hyper-Targeted Segmentation",
        description: "Focused strictly on the 18-24 demographic using behavioral targeting, achieving highly efficient ad spend allocation (Cost per result ~₹27)."
      },
      {
        title: "High-Intent Messaging",
        description: "Initiated 408 direct messaging conversations at just ₹19 per conversation, drastically improving lead quality."
      },
      {
        title: "Video Performance",
        description: "Leveraged reels and short-form video, generating over 24k plays and securing strong hook rates for organic visibility."
      }
    ],
    results: [
      { metric: "120%", label: "Increase in Admissions" },
      { metric: "70%", label: "Conversion Rate Boost" },
      { metric: "408", label: "Qualified Conversations" }
    ],
    testimonial: {
      quote: "Exceptional growth partner! Their targeted performance marketing brought in high-quality leads and boosted our admissions by 70%. The team is data-driven, proactive, and results-oriented.",
      author: "Shantanu Shimpi, Founder"
    }
  },
  "trading-monk": {
    slug: "trading-monk",
    client: "Trading Monk",
    industry: "Finance Education",
    heroHeadline: "Accelerating Business Growth by 3X",
    heroSubheadline: "Scaling a Nashik-based trading academy with hyper-efficient lead generation and community building.",
    overview: "Trading Monk offers comprehensive online and offline trading courses. Despite a growing market demand, they struggled with low initial brand recognition and inefficient customer acquisition costs.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    challenges: [
      "Low initial brand recognition in a fiercely competitive trading education space.",
      "Inefficient lead generation campaigns bleeding ad spend.",
      "Limited social media presence failing to build community trust."
    ],
    strategy: [
      {
        title: "Lead Gen Optimization",
        description: "Launched aggressively A/B tested Facebook and Instagram campaigns specifically optimized to drive down Cost Per Lead (CPL)."
      },
      {
        title: "Authority Content",
        description: "Developed and distributed high-value educational videos, carousels, and interactive stories to build thought leadership."
      },
      {
        title: "Strategic Scaling",
        description: "Scaled budgets strategically only on winning ad creatives while implementing advanced retargeting to nurture warm leads."
      }
    ],
    results: [
      { metric: "3X", label: "Business Growth" },
      { metric: "497", label: "High-Quality Leads" },
      { metric: "₹43", label: "Cost Per Lead" }
    ],
    testimonial: {
      quote: "Most agencies brought us cheap leads that never converted. They didn't just lower our CPL, they completely re-engineered our funnel. We're seeing 3X growth because the intent of the traffic is ruthless. They don't run ads; they build acquisition systems.",
      author: "Founder, Trading Monk"
    }
  },
  "sarvital": {
    slug: "sarvital",
    client: "Sarvital",
    industry: "D2C E-commerce",
    heroHeadline: "From Offline-Only to Digital Powerhouse",
    heroSubheadline: "Building a complete e-commerce infrastructure and acquisition engine from zero.",
    overview: "Sarvital, a health supplement brand, had a loyal local following driving sales purely through offline word-of-mouth. They lacked any digital presence, e-commerce infrastructure, or online acquisition strategy.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2487&auto=format&fit=crop",
    challenges: [
      "Zero online sales capability or customer journey mapping.",
      "Outdated packaging that wouldn't compete on digital shelves.",
      "Completely invisible online presence and zero social audience."
    ],
    strategy: [
      {
        title: "Brand & E-commerce Redesign",
        description: "Designed premium packaging and developed a high-converting Shopify store from scratch, integrated with Kwikengage for retention."
      },
      {
        title: "Omni-Channel Launch",
        description: "Architected and launched targeted Meta and Google Ads campaigns to drive high-intent traffic immediately upon launch."
      },
      {
        title: "Organic Social Engine",
        description: "Produced highly engaging, educational supplement content across social channels to build community trust."
      }
    ],
    results: [
      { metric: "0 to 1", label: "Digital Infrastructure" },
      { metric: "3.5x", label: "ROAS Maintained" },
      { metric: "60 Days", label: "To Profitable Momentum" }
    ],
    testimonial: {
      quote: "We had zero digital footprint. I expected a 6-month timeline to get online. In 60 days, they built a premium e-commerce experience and an omnipresent ad strategy. We went from local word-of-mouth to maintaining a 3.5X ROAS at scale. They are an elite growth partner.",
      author: "Director, Sarvital"
    }
  },
  "finanthropist": {
    slug: "finanthropist",
    client: "Finanthropist",
    industry: "High-Ticket Coaching",
    heroHeadline: "Doubling High-Ticket Trading Course Sales",
    heroSubheadline: "Fixing a bleeding webinar funnel with automated nurture and creative overhauls.",
    overview: "Finanthropist is a premier trading coach relying on weekly live webinars to sell high-ticket courses. Despite strong demand, their funnel was severely bottlenecked by ghosting leads and unsustainable ad costs.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
    challenges: [
      "Staggeringly high Cost Per Lead (CPL) eating into profit margins.",
      "Terrible show-up rates for live webinars (leads ghosting).",
      "Low back-end conversions due to unqualified traffic."
    ],
    strategy: [
      {
        title: "Creative Overhaul & Qualification",
        description: "Designed new ad creatives to boost CTR and built custom landing pages to strictly pre-qualify high-intent prospects."
      },
      {
        title: "WhatsApp Automations",
        description: "Deployed an aggressive, value-driven WhatsApp reminder flow to eliminate ghosting and keep registrants excited."
      },
      {
        title: "Sales CRM Implementation",
        description: "Armed the internal sales team with a robust CRM system to ensure zero warm leads slipped through post-webinar."
      }
    ],
    results: [
      { metric: "2X", label: "Course Conversions" },
      { metric: "50%", label: "CPL Reduction" },
      { metric: "80%", label: "Webinar Show-Up Rate" }
    ],
    testimonial: {
      quote: "Our webinar funnel was bleeding cash because leads were ghosting. They stepped in, ripped up our creatives, and deployed an aggressive automation sequence that pushed our show-up rate to 80%. They doubled our course sales in a saturated market. Do not hire anyone else.",
      author: "CEO, Finanthropist"
    }
  }
};
