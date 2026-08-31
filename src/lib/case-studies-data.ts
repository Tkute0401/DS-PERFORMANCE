export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  image: string;
  proofImage?: string;
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
    heroHeadline: "How to stop paying ₹3,000 for a student lead that ghosts you.",
    heroSubheadline: "Code Hub India had a great course, but their ads were burning cash on students who just wanted free PDFs. We fixed the math.",
    overview: "Founders think 'EdTech is saturated.' Reality? You're just targeting students who are scrolling memes at 2 AM with generic 'Learn to Code' ads. Code Hub was bleeding cash on bad leads. We didn't need a new logo; we needed a ruthless, intent-based acquisition system.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    proofImage: "/codehub-screenshot.png",
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
    heroHeadline: "Stop selling trading courses to 18-year-olds with no money.",
    heroSubheadline: "Scaling a Nashik-based trading academy by completely re-engineering who they talk to.",
    overview: "The finance niche is a bloodbath of fake gurus and high CPMs. Trading Monk had a phenomenal product, but their ads were bringing in cheap, low-intent traffic that never bought. We had to completely re-engineer who they were talking to.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    proofImage: "/trading-monk-screenshot.png",
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
    heroHeadline: "Taking a local giant and teaching it how to survive the internet.",
    heroSubheadline: "Moving a legacy offline brand to Shopify usually takes 6 months of corporate meetings. We did it in 60 days.",
    overview: "Sarvital had great products and offline loyalty, but zero digital footprint. Moving a legacy offline brand to Shopify usually takes 6 months of corporate meetings. We did it in 60 days, built the funnel, and maintained a 3.5x ROAS out of the gate.",
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
    heroHeadline: "Fixing a webinar funnel that was bleeding cash.",
    heroSubheadline: "You spend ₹1 Lakh to get people to register, and 15 people show up. We plugged the holes.",
    overview: "You spend ₹1 Lakh to get people to register for a webinar, and only 15 people show up. That's the visceral pain Finanthropist was facing. Their traffic wasn't the problem; their qualification and reminder systems were non-existent. We plugged the holes.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
    proofImage: "/finanthropist-screenshot.jpeg",
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
  },
  "rohit-saraf": {
    slug: "rohit-saraf",
    client: "Rohit Saraf",
    industry: "Trading Coach",
    heroHeadline: "Unlocking 400+ conversions in the restricted finance niche.",
    heroSubheadline: "Mastering Meta Ads compliance without SEBI registration to scale a high-ticket trading offer.",
    overview: "Before our intervention, the client was trapped in a cycle of frustration. With a high-ticket trading offer, they were struggling to break past a stagnant 1 to 2 conversions per month. Every attempt to scale ad spend was met with the anxiety of potential account bans due to Meta's aggressive compliance crackdowns. We engineered a bespoke Meta Ads Compliance Funnel to unlock their growth.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    proofImage: "/rohit-saraf-screenshot.png",
    challenges: [
      "No SEBI Registration acting as a shield.",
      "Constant threat of permanent ad account bans.",
      "Stuck at 1-2 conversions/month, making it impossible to scale."
    ],
    strategy: [
      {
        title: "The Architecture of Trust",
        description: "We engineered a bespoke Meta Ads Compliance Funnel, analyzing every single ad creative, copy, and landing page through four separate, rigorous compliance checks."
      },
      {
        title: "Compliance Scoring",
        description: "Achieved a Meta Ad Compliance Score of 95-100%—virtually unheard of in the trading niche for non-registered entities."
      },
      {
        title: "Aggressive Scaling",
        description: "Once the accounts were stabilized and trusted by Meta, we aggressively scaled ad spend to ₹1.2M while maintaining profitability."
      }
    ],
    results: [
      { metric: "₹4M+", label: "Total Revenue Generated" },
      { metric: "400+", label: "Total Conversions" },
      { metric: "3x+", label: "Return on Ad Spend" }
    ],
    testimonial: {
      quote: "I was struggling with getting banned constantly and stuck at 1-2 conversions a month. The compliance funnel they built not only stabilized our accounts but completely unlocked our scale. We're now consistently doing 60+ conversions monthly without worrying about SEBI registration bans.",
      author: "Rohit Saraf, Trading Coach"
    }
  }
};
