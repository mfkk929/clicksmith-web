// src/lib/trades-data.ts
// Single source of truth for all 12 trade-specific marketing pages.
// Each trade has unique hero, pain points, channel mix, services, case study,
// seasonal play, FAQs and search patterns — no template-swap penalty.

export type ChannelMix = {
  channel: string;
  percentage: number;
  why: string;
};

export type RecommendedService = {
  name: string;
  why: string;
  href: string;
};

export type CaseStudy = {
  name: string;
  suburb: string;
  before: string;
  after: string;
  result: string;
};

export type Seasonal = {
  peak: string;
  trough: string;
  prepTime: string;
  play: string;
};

export type FAQ = { q: string; a: string };

export type Trade = {
  slug: string;
  name: string;
  plural: string;
  singular: string;
  icon: string; // lucide icon name
  hero: { eyebrow: string; h1: string; sub: string };
  intro: string;
  painPoints: { title: string; body: string }[];
  channelMix: ChannelMix[];
  recommendedServices: RecommendedService[];
  caseStudy: CaseStudy;
  seasonal: Seasonal;
  faqs: FAQ[];
  searchPatterns: string[];
  metaTitle: string;
  metaDescription: string;
  related: string[]; // related trade slugs for internal linking
};

export const trades: Trade[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. BUILDERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "builders",
    name: "Builders",
    plural: "Builders",
    singular: "Builder",
    icon: "Hammer",
    hero: {
      eyebrow: "Marketing for Builders",
      h1: "A builder's website earns trust before the first phone call.",
      sub: "Custom homes, knockdown rebuilds, extensions — they all share one thing: a 3–6 month research cycle. We build the marketing engine that keeps you top-of-mind from first Pinterest save to signed contract.",
    },
    intro:
      "Builders don't compete on price — you compete on trust. Buyers research for months, scroll Instagram, save pins, ask for references and shop 3–5 quotes before signing. ClickSmith builds the digital reputation that gets you onto that shortlist and keeps you there.",
    painPoints: [
      {
        title: "The 'we'll think about it' death spiral",
        body: "Build leads marinate for months. Without a nurture sequence, 70% drift to whoever follows up first — usually not the best builder, just the most persistent one.",
      },
      {
        title: "Instagram is your portfolio — but you're posting to ghosts",
        body: "Random posts of finished jobs don't convert. We turn your build progress into reels, carousels and time-lapses that rank, save and get shared.",
      },
      {
        title: "Architects send leads — but only to builders they trust",
        body: "Without a polished web presence, architects, designers and high-end real estate agents won't refer you. Your portfolio page is the silent sales rep working while you're on site.",
      },
      {
        title: "Quote roulette: shopped against 4 others, undercut every time",
        body: "When buyers can't tell builders apart, they default to price. We position you so the conversation starts at quality and craftsmanship, not the lowest line item.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram & Pinterest portfolio",
        percentage: 35,
        why: "Build clients save inspiration for months. Visual platforms are where they shortlist.",
      },
      {
        channel: "Google Business Profile + local SEO",
        percentage: 25,
        why: "'Custom builders [suburb]' is the highest-intent search in your funnel.",
      },
      {
        channel: "Long-form nurture email",
        percentage: 20,
        why: "3–6 month consideration window means email is where deals get won (or lost).",
      },
      {
        channel: "Architect & designer partnerships",
        percentage: 15,
        why: "One referring architect = 4–8 builds a year at premium margins.",
      },
      {
        channel: "Weekend Magnet retargeting",
        percentage: 5,
        why: "When they're scrolling on Saturday, your last project should be the ad they see.",
      },
    ],
    recommendedServices: [
      {
        name: "SEO Foundation",
        why: "Rank for 'custom builder [suburb]', 'knockdown rebuild [city]' and project-type keywords with high commercial intent.",
        href: "/services#seo",
      },
      {
        name: "Content Engine (Instagram + portfolio)",
        why: "Turn every job site into 8–12 pieces of content: reels, carousels, time-lapses, before/afters, owner testimonials.",
        href: "/services#content",
      },
      {
        name: "Email Nurture (6-month sequence)",
        why: "Catch leads at week 1, week 4, month 3 and month 6 — when they're finally ready to sign.",
        href: "/services#email",
      },
    ],
    caseStudy: {
      name: "Coast Custom Homes",
      suburb: "Kiama, NSW",
      before: "12 enquiries/month, 1 build per quarter",
      after: "47 enquiries/month, 4 reno bookings ($180K pipeline) in January alone",
      result: "From feast-or-famine quarterly builds to a 6-month booked pipeline at higher margins.",
    },
    seasonal: {
      peak: "Sep–Nov (spring research) and Jan–Mar (post-holiday decisions)",
      trough: "Jun–Aug winter slowdown",
      prepTime: "Start nurture campaigns in May/June for September lock-in",
      play: "Use winter to publish 8–12 cornerstone case studies — they'll rank in time for spring searches.",
    },
    faqs: [
      {
        q: "How long before a builder marketing campaign delivers signed contracts?",
        a: "First enquiries within 3–4 weeks. Signed contracts typically 3–6 months later — that's the natural research window for builds. The leads come fast; the conversions follow your normal sales cycle.",
      },
      {
        q: "We do mostly word-of-mouth. Why would we need marketing?",
        a: "Word-of-mouth is great until your best referrer retires, moves or stops building. Marketing is the insurance policy: a steady stream of qualified leads so your pipeline never depends on one person.",
      },
      {
        q: "Should we focus on Instagram or Google for builders?",
        a: "Both, but Instagram first. Build buyers shortlist on visuals (saved posts, design inspiration) then verify on Google (reviews, website, license). Skip Instagram and you don't make the shortlist.",
      },
      {
        q: "How do we compete against volume builders on price?",
        a: "You don't. You compete on craftsmanship, trust and the buyer's life-long satisfaction. Our positioning work moves the conversation away from $/m² and onto outcomes — which is where custom builders win.",
      },
      {
        q: "Do you handle architect and designer outreach?",
        a: "Yes. Part of our builder package is a 'partner channel' setup — co-branded content, referral incentives, and warm-intro campaigns to architects and designers in your service area.",
      },
      {
        q: "What's a realistic enquiry-to-quote-to-sign ratio for builders?",
        a: "Industry average: 100 enquiries → 20 site visits → 6 quotes → 1.5 signs. We optimise the front of that funnel so the leads who reach quote stage are pre-qualified — pushing the win rate to 1 in 4.",
      },
    ],
    searchPatterns: [
      "marketing for builders",
      "lead generation for custom builders",
      "Google Ads for builders Australia",
      "builder website design",
      "how to get more leads as a builder",
    ],
    metaTitle:
      "Marketing for Builders in Australia | AI-Driven Lead Generation | ClickSmith",
    metaDescription:
      "Custom builders, knockdown rebuilds, extensions — we build the digital trust engine that wins 6-month sales cycles. 10 leads in 60 days, guaranteed.",
    related: ["renovators", "concreters", "landscapers"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. SOLAR
  // ─────────────────────────────────────────────────────────────
  {
    slug: "solar",
    name: "Solar",
    plural: "Solar Installers",
    singular: "Solar Installer",
    icon: "Sun",
    hero: {
      eyebrow: "Marketing for Solar Installers",
      h1: "30% of Aussie homes have solar. Why doesn't yours have the next 30?",
      sub: "Solar buyers shop 3–5 quotes over 6–12 months. The installers who win are the ones still in their inbox at month 5. We build the long-cycle nurture engine that turns interest into installs.",
    },
    intro:
      "Solar is a high-consideration purchase: $8K–$25K, 6–12 month decision window, 3–5 quotes shopped. The winners aren't the cheapest — they're the ones who stay top-of-mind through the entire buyer journey. ClickSmith builds the nurture, retargeting and review engine that makes you the installer they trust.",
    painPoints: [
      {
        title: "60% of 'interested' leads never get a follow-up",
        body: "Solar enquiries that go cold for 7 days are 80% less likely to convert. Without an automated nurture, half your marketing spend leaks through the cracks.",
      },
      {
        title: "Quote shopping kills your margins",
        body: "Buyers get 3–5 quotes. If you can't differentiate beyond panel brand and price, you race to the bottom. We position your warranty, install quality and post-sale service as the actual product.",
      },
      {
        title: "Seasonal whiplash: Dec–Mar boom, Jun–Aug crickets",
        body: "Most installers ride the summer wave then panic in winter. We build the off-season demand pipeline — heat-pump bundles, battery upgrades, commercial leads — that smooths revenue.",
      },
      {
        title: "Reviews drive everything but you have 23 of them on Google",
        body: "Solar buyers scrutinise reviews more than any other trade. We build the review engine that turns every install into a 5-star Google profile, Product Review and Facebook recommendation.",
      },
    ],
    channelMix: [
      {
        channel: "Email nurture (8–12 touchpoints over 6 months)",
        percentage: 30,
        why: "The single biggest lever in solar. 6-month consideration windows demand 8+ touchpoints.",
      },
      {
        channel: "Facebook & Instagram ads (retargeting heavy)",
        percentage: 25,
        why: "Visual savings calculators and customer testimonials work brilliantly here.",
      },
      {
        channel: "Google Ads (intent capture)",
        percentage: 20,
        why: "'Solar quote [suburb]' converts at 8–12% with the right landing page.",
      },
      {
        channel: "Google Business Profile + reviews",
        percentage: 15,
        why: "Trust signal #1 for high-ticket purchases. Buyers compare star ratings before clicking.",
      },
      {
        channel: "Referral & partnership program",
        percentage: 10,
        why: "Existing customers refer 1.4 new installs per year on average — if you ask.",
      },
    ],
    recommendedServices: [
      {
        name: "Email Nurture Engine",
        why: "8–12 touchpoint sequence over 6 months: education, savings calculator, social proof, urgency, close.",
        href: "/services#email",
      },
      {
        name: "Paid Ads (Meta + Google)",
        why: "Lead-gen forms with savings calculators feeding directly into the nurture sequence.",
        href: "/services#paid-ads",
      },
      {
        name: "Review & Reputation System",
        why: "Automated post-install review requests across Google, Product Review, and Facebook.",
        href: "/services#reviews",
      },
    ],
    caseStudy: {
      name: "Coastal Co Solar",
      suburb: "Wollongong, NSW",
      before: "$12K–$18K monthly install revenue, 30% lead-to-quote rate",
      after: "$100K booked in 4 weeks, 56% lead-to-quote rate, 8-month forward pipeline",
      result: "Turned a one-man marketing setup into a system that books out winter months in advance.",
    },
    seasonal: {
      peak: "Dec–Mar (post-bill summer urgency)",
      trough: "Jun–Aug winter (energy use shifts to gas)",
      prepTime: "Build retargeting audiences in Sep–Nov for summer launch",
      play: "Pre-summer 'lock-in your panel price' urgency campaigns + winter battery/heat-pump bundle promotions.",
    },
    faqs: [
      {
        q: "How long is the typical solar buyer's journey?",
        a: "6–12 months from first enquiry to install. Most installers give up after 30 days. We build a 6-month sequence so you're still in their inbox when they're ready to sign.",
      },
      {
        q: "Should we do Facebook ads or Google ads for solar?",
        a: "Both, but for different jobs. Facebook captures 'browsing' demand with savings calculators. Google captures 'ready-to-buy' demand with quote requests. Run them together for full funnel coverage.",
      },
      {
        q: "How do we stand out when everyone sells the same panels?",
        a: "Move the conversation from product to process. Your warranty length, install crew quality, post-sale support and SLA on faults are the differentiators. We build the messaging system that surfaces those.",
      },
      {
        q: "What's the right cost-per-lead for solar in Australia?",
        a: "$80–$200 per qualified lead is normal. Cost-per-install ranges $400–$900. We optimise to the lower end of those bands within 60–90 days.",
      },
      {
        q: "How do we handle the winter slump?",
        a: "Three plays: (1) battery upsells to existing customers, (2) heat-pump hot water bundles, (3) commercial solar (business buyers don't follow residential seasonality). Combined, they fill the trough.",
      },
      {
        q: "Do you work with both residential and commercial solar?",
        a: "Yes. Commercial solar has a different funnel — longer sales cycle (9–18 months), LinkedIn-heavy outbound, and partnerships with commercial real estate. We build that as a separate channel.",
      },
    ],
    searchPatterns: [
      "marketing for solar installers",
      "solar lead generation Australia",
      "Facebook ads for solar",
      "solar SEO Australia",
      "how to get solar leads",
    ],
    metaTitle:
      "Marketing for Solar Installers in Australia | Lead Generation Engine | ClickSmith",
    metaDescription:
      "Solar buyers shop 6–12 months. We build the nurture engine that wins long-cycle deals. $100K booked in 4 weeks. AI-driven, data-backed.",
    related: ["roofers", "electricians", "hvac"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. POOL BUILDERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pool-builders",
    name: "Pool Builders",
    plural: "Pool Builders",
    singular: "Pool Builder",
    icon: "Waves",
    hero: {
      eyebrow: "Marketing for Pool Builders",
      h1: "Pool buyers don't pick a pool. They pick a backyard transformation.",
      sub: "$60K–$200K average build, 4–8 month sales cycle, every quote shopped against 3 competitors. We build the visual, video-led marketing that wins on lifestyle, not lowest price.",
    },
    intro:
      "Pool builds are pure aspiration purchases — buyers are imagining summer Saturdays, kids' birthdays, sunset wines. The pool builders who win are the ones whose Instagram, website and ads sell the lifestyle, not the litres. ClickSmith builds that visual storytelling system from end to end.",
    painPoints: [
      {
        title: "Cheap-pool-quote competitors poison the well",
        body: "Buyers see $40K shell pools online and assume yours should match. We build the messaging that justifies your $80K+ price tag with craftsmanship, longevity and end-to-end service.",
      },
      {
        title: "Drone shots are everywhere but yours look like phone photos",
        body: "Pool marketing in 2026 is won with cinematic drone reels. We connect you with operators or build the in-house process so every finished pool becomes a piece of viral content.",
      },
      {
        title: "Council approval delays kill momentum",
        body: "Buyers go cold during the 4–8 week approval wait. We build the 'in-progress' email sequence that keeps them excited, sharing on Instagram, and referring friends — turning approval downtime into pre-sold leads.",
      },
      {
        title: "Sept–Nov tsunami, May–Jul drought",
        body: "Most pool builders triple-book in spring and starve in winter. We build off-season demand: renovation/refresh campaigns, equipment upgrades, and commercial pool work to smooth revenue.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram + Pinterest (drone reels, transformations)",
        percentage: 35,
        why: "Pool buyers save inspo for months. Visual platforms are where dreams take shape.",
      },
      {
        channel: "Google Ads + GBP (high-intent buyers)",
        percentage: 25,
        why: "'Pool builder [suburb]' converts at 5–9% with quote-comparison landing pages.",
      },
      {
        channel: "Email nurture (4–6 month cycle)",
        percentage: 20,
        why: "Buyers wait for school holidays, tax returns, mortgage refinances — email keeps you front-of-mind.",
      },
      {
        channel: "YouTube cinematic case studies",
        percentage: 15,
        why: "10-minute 'build journey' videos rank, get embedded in your site and crush trust objections.",
      },
      {
        channel: "Real estate & landscaper partnerships",
        percentage: 5,
        why: "Property values jump 10–15% with a pool — agents become a quiet referral channel.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (drone reels + cinematic case studies)",
        why: "Every finished pool becomes 12–15 pieces of content across Instagram, YouTube, and your website.",
        href: "/services#content",
      },
      {
        name: "Paid Social (Meta lead ads)",
        why: "Quote-request lead forms with backyard imagery, fed into a 4–6 month email sequence.",
        href: "/services#paid-ads",
      },
      {
        name: "SEO Foundation",
        why: "Rank for 'pool builder [suburb]', 'concrete pool [city]', 'plunge pool builder [region]'.",
        href: "/services#seo",
      },
    ],
    caseStudy: {
      name: "Ocean Edge Pools",
      suburb: "Shellharbour, NSW",
      before: "8 builds/year, dependent on word-of-mouth",
      after: "23 builds booked, 4-month deposit waitlist, 3 commercial contracts",
      result: "Doubled annual revenue and unlocked premium commercial pool work in 9 months.",
    },
    seasonal: {
      peak: "Sep–Dec (pre-summer urgency)",
      trough: "May–Jul winter approvals",
      prepTime: "Run 'lock in summer 2027' campaigns from June onwards",
      play: "Use winter for case-study production + 'rejuvenation' campaigns to existing customers (resurfacing, equipment upgrades).",
    },
    faqs: [
      {
        q: "How do we justify $80K+ pricing when competitors quote $40K?",
        a: "Stop competing on the pool. Compete on the project: site management, council liaison, landscape integration, equipment quality, warranty. Our positioning work makes the buyer compare experiences, not specifications.",
      },
      {
        q: "What's the right balance between Instagram and Google for pool builders?",
        a: "70% visual (Instagram, Pinterest, YouTube), 30% intent (Google, GBP). Pool buyers fall in love before they search. Then they Google to verify. Get both right or you're invisible at one stage.",
      },
      {
        q: "How long is a pool sales cycle?",
        a: "4–8 months from first enquiry to deposit, then another 6–14 weeks to install. Total: 6–14 months. Marketing must be built for that timeline, not 30-day campaigns.",
      },
      {
        q: "Should we offer financing partnerships in our marketing?",
        a: "Yes — and prominently. Pool finance unlocks 30–40% more buyers, especially in the $60K–$120K bracket. We integrate financing partners (Lend, Plenti, etc.) directly into your funnel.",
      },
      {
        q: "What's the deal with drone footage?",
        a: "Drone reels of finished pools convert 3–5x better than ground-level video. We either connect you with local operators or train your team to capture cinematic shots in 30 minutes per finished job.",
      },
      {
        q: "Can you market commercial pool builds (hotels, apartments)?",
        a: "Yes. Commercial pool work has a separate funnel — LinkedIn outreach, hospitality publications, architect partnerships. We build that as a distinct channel alongside residential.",
      },
    ],
    searchPatterns: [
      "marketing for pool builders",
      "pool builder lead generation",
      "Instagram ads for pool builders",
      "pool builder SEO Australia",
      "how to get pool quotes",
    ],
    metaTitle:
      "Marketing for Pool Builders in Australia | Cinematic Lead Generation | ClickSmith",
    metaDescription:
      "Pool builds sell on lifestyle, not litres. Drone reels, lifestyle ads, 4–6 month nurture. 23 builds booked in 9 months. AI-driven marketing for pool builders.",
    related: ["builders", "landscapers", "concreters"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. RENOVATORS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "renovators",
    name: "Renovators",
    plural: "Renovators",
    singular: "Renovator",
    icon: "Home",
    hero: {
      eyebrow: "Marketing for Renovators",
      h1: "Renos win on transformation. Show the journey, win the job.",
      sub: "Kitchens, bathrooms, full-house renos — every reno is a story buyers want to follow. We build the before/after, time-lapse and case-study engine that turns scrolls into signed contracts.",
    },
    intro:
      "Renovation buyers are emotional. They've stared at their dated kitchen for 3 years. The renovator who wins is the one whose marketing makes the buyer say 'yes, that's the transformation I want.' ClickSmith builds the visual story machine — before/afters, time-lapses, owner reactions — that converts research into deposits.",
    painPoints: [
      {
        title: "Quote-shoppers compare you to handymen",
        body: "Buyers don't always know the difference between a registered renovator and someone with a ute. We build the credentialing, licensing-display and process-transparency content that separates you in 10 seconds.",
      },
      {
        title: "Reno hesitation: 'we'll do it next year' for 5 years",
        body: "70% of reno enquiries are 6–18 months out. Without nurture, they pick whoever's most convenient at decision time. Our long-cycle email keeps you the obvious choice.",
      },
      {
        title: "Trades juggling kills your reputation",
        body: "Reno reviews are dominated by 'they disappeared mid-job.' We position your project management, communication SLAs and finish dates as the differentiator — because they are.",
      },
      {
        title: "Pinterest is full of US-priced inspo, you can't compete",
        body: "Buyers come in expecting $30K bathrooms after seeing American Pinterest pricing. We build the 'real Australian costs' content that resets expectations before the quote conversation.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram & TikTok (transformation reels)",
        percentage: 35,
        why: "Before/afters and time-lapses are the highest-saved content in the reno category.",
      },
      {
        channel: "SEO + content (cost guides, planning content)",
        percentage: 25,
        why: "'How much does a kitchen reno cost in [city]' is the #1 entry point — own that traffic.",
      },
      {
        channel: "Email nurture (12-month consideration cycle)",
        percentage: 20,
        why: "Buyers plan renos around tax, school holidays and bonus seasons — be there at every trigger.",
      },
      {
        channel: "Google Ads + GBP (intent capture)",
        percentage: 15,
        why: "'Bathroom renovator [suburb]' is high-intent and converts at 6–10%.",
      },
      {
        channel: "Pinterest + design partnerships",
        percentage: 5,
        why: "Pinterest sends pre-qualified inspo-stage traffic; designers send pre-qualified ready-to-buy traffic.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (transformation reels)",
        why: "Every reno = 15+ pieces of content: drone before, demolition reel, time-lapse, owner reaction, finished walkthrough.",
        href: "/services#content",
      },
      {
        name: "SEO Foundation (cost guides + suburb pages)",
        why: "Capture the planning-stage traffic with 'how much does X cost' and 'best renovator [suburb]' content.",
        href: "/services#seo",
      },
      {
        name: "Email Nurture (12-month sequence)",
        why: "Plan content around tax time, bonus season, school holidays — natural reno-decision triggers.",
        href: "/services#email",
      },
    ],
    caseStudy: {
      name: "Hinterland Reno Co",
      suburb: "Berry, NSW",
      before: "3–4 reno enquiries/month, 1 booked",
      after: "31 enquiries/month, 6 reno bookings, 11-month forward calendar",
      result: "Built a transformation-content engine that fills the calendar a year in advance.",
    },
    seasonal: {
      peak: "Jan–Mar (post-Christmas tax-return planning), Aug–Oct (pre-summer push)",
      trough: "Nov–Dec (pre-Christmas), Jun–Jul (winter)",
      prepTime: "Pre-tax-time campaigns from May onwards",
      play: "Tax-time content ('claim your reno costs') + EOFY pricing urgency. Winter quotes for autumn deposits.",
    },
    faqs: [
      {
        q: "How do we differentiate from 'handyman' competitors?",
        a: "Lead every page and ad with your licensing, insurance, registered builder status (where applicable) and guarantees. The buyer's #1 fear is 'will this person disappear mid-job' — answer it before they ask.",
      },
      {
        q: "Should we focus on bathrooms, kitchens or full-house renos?",
        a: "Pick a hero offer (whichever has the best margin and shortest sales cycle) and lead with that. Your Instagram, ads and SEO should all point one way. Diversify only after the lead engine is humming.",
      },
      {
        q: "What's a realistic enquiry-to-booking ratio for renovators?",
        a: "10:1 typical, 6:1 optimised. Most leakage happens in the quote-to-sign stage where buyers ghost. We add nurture, follow-up automation and trust content to close that gap.",
      },
      {
        q: "How do we deal with quote shoppers?",
        a: "Don't quote first. Run a 15-minute 'design call' before quoting — it qualifies serious buyers, builds rapport and lets you scope the job properly. Our funnel design includes that step natively.",
      },
      {
        q: "Do reno buyers actually use Pinterest?",
        a: "Yes — Pinterest is the #1 inspiration platform for kitchens and bathrooms. We set up Pinterest SEO around your portfolio so your reno work appears in 'Australian kitchen ideas' boards.",
      },
      {
        q: "Can you handle the 'unrealistic budget' problem?",
        a: "Yes. We publish real pricing benchmarks for your service area on your blog and use them in the buyer-education email sequence. By the time the quote conversation happens, the buyer has reset their expectations.",
      },
    ],
    searchPatterns: [
      "marketing for renovators",
      "kitchen renovation lead generation",
      "bathroom renovator marketing Australia",
      "renovator SEO",
      "how to get renovation leads",
    ],
    metaTitle:
      "Marketing for Renovators in Australia | Transformation Lead Engine | ClickSmith",
    metaDescription:
      "Kitchens, bathrooms, full renos — buyers buy transformations. We build the before/after content engine that books your year. AI-driven marketing for renovators.",
    related: ["builders", "painters", "tilers"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. HVAC
  // ─────────────────────────────────────────────────────────────
  {
    slug: "hvac",
    name: "HVAC",
    plural: "HVAC Contractors",
    singular: "HVAC Contractor",
    icon: "ThermometerSun",
    hero: {
      eyebrow: "Marketing for HVAC Contractors",
      h1: "When the aircon dies in a 38°C heatwave, top-of-Google wins.",
      sub: "HVAC is feast or famine: 250–600% peak/trough swings, summer aircon installs and winter heating crises. We build the always-on marketing that smooths revenue across the year.",
    },
    intro:
      "HVAC is the most seasonal trade in Australia. Summer heatwaves and winter cold snaps create demand spikes — but the contractors who win consistently are the ones whose Google rankings, GBP profile and service contracts keep them busy when the weather isn't doing the marketing for them. ClickSmith builds the year-round demand engine.",
    painPoints: [
      {
        title: "When it's hot, you're maxed. When it's cool, the phone's dead.",
        body: "Most HVAC contractors ride the seasonal wave then panic. We build the off-season pipeline — service contracts, commercial work, heating-system upgrades — that flattens the curve.",
      },
      {
        title: "Emergency searches are won in seconds, not minutes",
        body: "When someone's aircon dies in 38°C, they call the first 3 results on Google. If you're #4, you don't exist. GBP optimisation and local SEO are the difference between a $400 service call and silence.",
      },
      {
        title: "Service contracts are gold — but no one sells them",
        body: "Every HVAC contractor has hundreds of past customers. Most never get a service-reminder email. We build the recurring-revenue email engine that turns one-off jobs into 5-year relationships.",
      },
      {
        title: "Brand name confusion: customers don't know Daikin from Dimplex",
        body: "When buyers can't tell brands apart, they default to price. We build the buyer-education content that positions your brand expertise as the actual product.",
      },
    ],
    channelMix: [
      {
        channel: "Google Ads + GBP (emergency intent)",
        percentage: 35,
        why: "Heatwave searches convert in minutes. You either dominate the first 3 results or you don't ring.",
      },
      {
        channel: "Service-contract email engine",
        percentage: 25,
        why: "Past customers are the cheapest source of new revenue. Annual service reminders convert at 18–24%.",
      },
      {
        channel: "Local SEO (suburb pages)",
        percentage: 20,
        why: "'Aircon installer [suburb]' is the highest-intent residential search.",
      },
      {
        channel: "Commercial outreach + LinkedIn",
        percentage: 15,
        why: "Commercial HVAC = 5–10x residential job size. Filling commercial through summer and winter cancels out residential troughs.",
      },
      {
        channel: "Facebook ads (pre-season urgency)",
        percentage: 5,
        why: "Pre-summer service campaigns + early-winter heating-tune-up promotions hit during planning windows.",
      },
    ],
    recommendedServices: [
      {
        name: "Local SEO + GBP Optimisation",
        why: "Emergency searches won in your service area. Suburb pages, GBP posts, schema markup.",
        href: "/services#seo",
      },
      {
        name: "Service Contract Email Engine",
        why: "Automated service reminders, system-age upgrade prompts, and warranty-renewal sequences for past customers.",
        href: "/services#email",
      },
      {
        name: "Commercial Outreach (LinkedIn + cold email)",
        why: "Build a B2B funnel for retail, hospitality, office and strata customers — flattens seasonal residential swings.",
        href: "/services#outreach",
      },
    ],
    caseStudy: {
      name: "South Coast Climate Control",
      suburb: "Nowra, NSW",
      before: "Summer-only revenue, 8 staff lay-offs each May",
      after: "Pre-summer service campaign 89 bookings, 3 commercial contracts, year-round payroll",
      result: "Eliminated seasonal lay-offs and built a 12-month payroll-stable business.",
    },
    seasonal: {
      peak: "Nov–Feb (cooling) and Jun–Aug (heating)",
      trough: "Mar–May (between seasons)",
      prepTime: "Pre-season campaigns must launch 6–8 weeks before each peak",
      play: "Sept: pre-summer service campaign. April: pre-winter heating tune-ups. Year-round commercial outreach.",
    },
    faqs: [
      {
        q: "How do we win emergency 'aircon dead in heatwave' calls?",
        a: "Three things: top 3 GBP rankings in your service area, 24/7 click-to-call landing pages, and Google Ads with 'emergency response' ad copy. We optimise all three so when the heatwave hits, the calls come.",
      },
      {
        q: "What's the off-season strategy for HVAC?",
        a: "Service contracts to past customers + commercial work + heating-system upgrades. Each smooths the calendar in different ways. We build all three pipelines simultaneously.",
      },
      {
        q: "Should we run Google Ads year-round?",
        a: "Yes, but with seasonal bid adjustments. Increase budget 200–300% during heatwaves and cold snaps; trim to brand defence in shoulder seasons. We manage the bid pacing automatically.",
      },
      {
        q: "How important is GBP for HVAC?",
        a: "It's the single biggest local-SEO lever. 70% of emergency HVAC searches click GBP results before going to organic. We optimise GBP weekly with posts, photos, Q&A and review responses.",
      },
      {
        q: "Can you handle commercial HVAC marketing too?",
        a: "Yes. Commercial HVAC has its own funnel: LinkedIn outreach to facility managers, partnerships with commercial real estate agents, and case studies from comparable buildings. We build that channel separately.",
      },
      {
        q: "How do we combat 'cheap aircon installer' competitors?",
        a: "Lead with your warranty, install quality and service-after-sale. Cheap installs fail in 2–3 years. Our positioning content makes the buyer think long-term, not initial-cost.",
      },
    ],
    searchPatterns: [
      "marketing for HVAC contractors",
      "aircon installer lead generation",
      "HVAC SEO Australia",
      "Google Ads for aircon installer",
      "how to get HVAC leads",
    ],
    metaTitle:
      "Marketing for HVAC Contractors in Australia | Year-Round Lead Engine | ClickSmith",
    metaDescription:
      "HVAC swings 250–600% peak to trough. We build the year-round demand engine. 89 pre-summer bookings, eliminated layoffs. AI-driven HVAC marketing.",
    related: ["plumbers", "electricians", "solar"],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. ROOFERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "roofers",
    name: "Roofers",
    plural: "Roofers",
    singular: "Roofer",
    icon: "TreePine",
    hero: {
      eyebrow: "Marketing for Roofers",
      h1: "Storms make customers. Marketing makes them call you.",
      sub: "Hail, gale, leak — every storm creates a 72-hour window of high-intent buyers. We build the storm-response, insurance-partner, builder-network engine that wins those windows every time.",
    },
    intro:
      "Roofing is event-driven: a hailstorm hits, and 500 homeowners need someone now. The roofers who win are the ones whose Google rankings, Facebook ads and insurance partnerships activate in the first 24 hours. ClickSmith builds the rapid-response system that captures storm windows + the steady pre-winter inspection pipeline that fills the calendar.",
    painPoints: [
      {
        title: "Storm chaos: first to respond wins, not best",
        body: "When a hailstorm hits, the first roofer with a clean website, fast phone answer and 'storm response' messaging wins. Out-of-area chasers steal jobs from local roofers who didn't activate fast enough.",
      },
      {
        title: "Insurance work isn't direct work — different funnel needed",
        body: "47% of residential roofing in Australia is insurance-paid. Insurance assessors choose roofers from approved-contractor lists. Without that relationship, you're locked out of half the market.",
      },
      {
        title: "Pre-winter inspections are pure money — but no one sells them",
        body: "March–May is the planning window for every homeowner whose roof is 'maybe getting a bit old.' Most roofers wait for leaks. We build the proactive inspection-booking campaigns.",
      },
      {
        title: "Builder partnerships are the quiet goldmine",
        body: "New-build and reno roofs are spec'd by builders. One referring builder = 6–12 roofs/year. Without partnership outreach, you only ever see the residential leftovers.",
      },
    ],
    channelMix: [
      {
        channel: "Google Ads + GBP (storm-trigger campaigns)",
        percentage: 30,
        why: "Storm windows are 72 hours. Bid spikes + GBP posts capture the demand before competitors react.",
      },
      {
        channel: "Insurer & assessor partnerships",
        percentage: 25,
        why: "47% of residential roofing flows through insurers — get on the approved-contractor list or stay locked out.",
      },
      {
        channel: "Local SEO (suburb pages, roof types)",
        percentage: 20,
        why: "'Tile roof repair [suburb]' and 'metal roof restoration [city]' have steady year-round demand.",
      },
      {
        channel: "Pre-winter Facebook ads (autumn inspections)",
        percentage: 15,
        why: "March–May proactive inspection campaigns book the planned-replacement work.",
      },
      {
        channel: "Builder referral outreach",
        percentage: 10,
        why: "One builder partnership = 6–12 roofs/year at consistent margins.",
      },
    ],
    recommendedServices: [
      {
        name: "Local SEO + GBP (storm-ready)",
        why: "Suburb pages, storm-response landing pages, GBP posts pre-loaded for activation when weather hits.",
        href: "/services#seo",
      },
      {
        name: "Paid Ads (storm-trigger + pre-winter)",
        why: "Budget pacing system that detects weather events and ramps spend within hours.",
        href: "/services#paid-ads",
      },
      {
        name: "Partnership Engine (insurers + builders)",
        why: "Outreach campaigns to assessors and builders, with co-branded case studies and referral incentives.",
        href: "/services#outreach",
      },
    ],
    caseStudy: {
      name: "Highlands Roofing",
      suburb: "Bowral, NSW",
      before: "Storm-dependent, 0 builder partnerships",
      after: "Storm response: 22 inspections in 10 days; 4 builder partnerships = 38 roofs/year",
      result: "Stabilised revenue across storm cycles + locked in 38 builder roofs/year baseline.",
    },
    seasonal: {
      peak: "Storm events (variable) + March–May (pre-winter inspections)",
      trough: "Dec–Feb (between insurance work and direct demand)",
      prepTime: "Pre-load storm-response campaigns in October before storm season",
      play: "October: pre-storm-season ad creatives loaded. March: pre-winter inspection campaigns. Year-round: builder/insurer outreach.",
    },
    faqs: [
      {
        q: "How fast can a storm-response campaign actually go live?",
        a: "Within 4 hours of a major weather event. We pre-build creative, copy and landing pages in advance, and have the BOM weather-trigger system ready. When the storm hits, ads go live before competitors finish coffee.",
      },
      {
        q: "How do we get on insurer approved-contractor lists?",
        a: "Reputation, SLA performance and proactive outreach. We build a credentials package (licensing, insurance, past insurance work) and run a structured outreach to assessors in your service area. Typically 2–4 panels added in 90 days.",
      },
      {
        q: "Should we do tile roofs, metal roofs or both?",
        a: "Both — but lead with whichever has the best margin in your area. Service-area mapping influences this. We tailor the messaging by roof type and suburb so each landing page hits its specific buyer.",
      },
      {
        q: "Is roof restoration a separate marketing play?",
        a: "Yes — restoration is preventive ('your roof's 12 years old, before it leaks…') versus repair (reactive). We run separate campaigns with different creatives and timing.",
      },
      {
        q: "How do we handle out-of-area storm chasers?",
        a: "Local-trust positioning. We weaponise your years-in-business, local reviews, licensing visibility and insurer relationships. 'Local since 1998' beats 'storm chaser arrived yesterday' every time.",
      },
      {
        q: "Do you do commercial roofing marketing?",
        a: "Yes. Commercial roofing (factories, warehouses, schools) has its own funnel — LinkedIn, facility-manager outreach and partnerships with commercial real estate. We build that as a distinct channel.",
      },
    ],
    searchPatterns: [
      "marketing for roofers",
      "roofer lead generation Australia",
      "storm response roofing marketing",
      "roof restoration SEO",
      "how to get roofing leads",
    ],
    metaTitle:
      "Marketing for Roofers in Australia | Storm Response Lead Engine | ClickSmith",
    metaDescription:
      "Storms create customers. We build the rapid-response Google Ads, insurer-partner, builder-network engine that wins every weather window. AI-driven roofer marketing.",
    related: ["builders", "solar", "plumbers"],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. PLUMBERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "plumbers",
    name: "Plumbers",
    plural: "Plumbers",
    singular: "Plumber",
    icon: "Wrench",
    hero: {
      eyebrow: "Marketing for Plumbers",
      h1: "Most plumbers are 1 storm away from being fully booked. We make sure that storm is your phone ringing.",
      sub: "Burst pipes, blocked drains, hot water failures — emergencies don't pick the best plumber. They pick the first one. We build the GBP, Google Ads and 24/7 capture system that puts you first.",
    },
    intro:
      "Plumbing is 73% emergency-driven. The buyer's not researching — they're panicking. Whoever appears in the top 3 GBP results, has a click-to-call number, and answers in 2 rings, wins. ClickSmith builds the local search dominance and missed-call recovery system that makes you the obvious choice in every emergency.",
    painPoints: [
      {
        title: "The missed-call tax: every unanswered call = $400 lost",
        body: "Plumbers miss 30–40% of incoming calls (showering, on a job, after hours). Each missed emergency = $400 average job lost forever. We build the SMS auto-reply + callback system that recovers them.",
      },
      {
        title: "Out-ranking the franchise networks (Pulse, Dial-A-Plumber)",
        body: "National franchises buy local search results. Without a sharp local SEO and GBP strategy, you're invisible. We optimise the levers franchises don't bother with: service-area landing pages, hyper-local content, GBP posts.",
      },
      {
        title: "Reviews that sound fake versus reviews that build trust",
        body: "Cookie-cutter '5 stars - great service' reviews don't convert. We build the review prompt system that gets specific, story-rich reviews that actually persuade the next caller.",
      },
      {
        title: "Commercial plumbing is silent revenue — but residential dominates your time",
        body: "Strata, real estate property managers and commercial buildings pay better and pay on time. Without B2B outreach, you're stuck in the residential emergency churn.",
      },
    ],
    channelMix: [
      {
        channel: "Google Business Profile + local SEO",
        percentage: 35,
        why: "73% of plumber searches start with 'plumber near me' — GBP wins or loses you the call.",
      },
      {
        channel: "Google Ads (emergency + service-area)",
        percentage: 25,
        why: "Emergency intent converts at 12–18% with the right landing page and phone tracking.",
      },
      {
        channel: "24/7 missed-call recovery (SMS + callback)",
        percentage: 15,
        why: "Recovers 30–40% of missed calls — single biggest revenue lever after GBP.",
      },
      {
        channel: "Strata + property manager outreach",
        percentage: 15,
        why: "Commercial contracts = predictable monthly revenue, less seasonality.",
      },
      {
        channel: "Review engine (Google + Product Review)",
        percentage: 10,
        why: "Reviews are the trust shortcut for emergency callers — drive volume + quality.",
      },
    ],
    recommendedServices: [
      {
        name: "Local SEO + GBP Domination",
        why: "Top-3 GBP rankings in every suburb you service, schema markup, suburb-specific landing pages.",
        href: "/services#seo",
      },
      {
        name: "Google Ads (emergency funnels)",
        why: "Service-area ads with click-to-call CTAs and emergency-specific landing pages.",
        href: "/services#paid-ads",
      },
      {
        name: "Missed-Call Recovery System",
        why: "Automatic SMS + callback when calls go unanswered — recovers 30–40% of leakage.",
        href: "/services#automation",
      },
    ],
    caseStudy: {
      name: "Pacific Plumbing Co",
      suburb: "Wollongong, NSW",
      before: "8 jobs/week, 35% missed-call rate, no commercial work",
      after: "14 jobs/week, missed-call recovery 11 jobs/month, 2 strata contracts",
      result: "Doubled job volume in 6 weeks + locked in commercial baseline.",
    },
    seasonal: {
      peak: "Winter (burst pipes, hot water failures) + storm events",
      trough: "Spring/early autumn (mild weather)",
      prepTime: "Pre-winter content campaigns from May onwards",
      play: "May: hot-water-system replacement campaigns. Year-round: GBP optimisation + emergency capture. Storm seasons: rapid bid increases.",
    },
    faqs: [
      {
        q: "How do we beat the franchise plumbers (Dial-A-Plumber, etc.)?",
        a: "Hyper-local. Franchises run national campaigns; you run suburb-specific. We build a landing page for each suburb you service, with local phone numbers, local reviews, and area-specific case studies. Local always beats national in plumbing.",
      },
      {
        q: "What's the right cost-per-lead for plumbers?",
        a: "$40–$80 per call lead is typical in Australian metros, $25–$50 in regional. Cost-per-job ranges $80–$150 once you account for unqualified calls. We optimise to the lower end of each band within 60 days.",
      },
      {
        q: "Should we run ads 24/7?",
        a: "Yes for emergency keywords, no for service keywords. Emergency demand is round-the-clock; planned demand isn't. We dayparting-segment your account so you spend smart.",
      },
      {
        q: "How do we get more 5-star reviews fast?",
        a: "Automated post-job SMS with a 1-tap review link, sent within 30 minutes of payment. We've seen plumbers go from 23 reviews to 180 in 6 months with this system.",
      },
      {
        q: "Is commercial plumbing worth the marketing investment?",
        a: "Yes — commercial contracts (strata, property managers, retail chains) are 5–10x your residential job size and pay on net-30 terms. We build a B2B outreach channel separate from your residential funnel.",
      },
      {
        q: "Do we need a plumbing-specific website or is a generic trade site fine?",
        a: "Plumbing-specific. Buyers' eyes are scanning for emergency cues, service area, license numbers and phone visibility. A generic trade template loses 40–50% of visitors before they call.",
      },
    ],
    searchPatterns: [
      "marketing for plumbers",
      "plumber lead generation",
      "Google Ads for plumbers Australia",
      "plumber SEO",
      "how to get plumbing leads",
    ],
    metaTitle:
      "Marketing for Plumbers in Australia | Emergency Lead Generation | ClickSmith",
    metaDescription:
      "Plumbing is 73% emergency. We build the GBP, Google Ads, and 24/7 missed-call recovery that makes you the first call. AI-driven plumber marketing.",
    related: ["electricians", "hvac", "roofers"],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. ELECTRICIANS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "electricians",
    name: "Electricians",
    plural: "Electricians",
    singular: "Electrician",
    icon: "Zap",
    hero: {
      eyebrow: "Marketing for Electricians",
      h1: "Sparkies don't lose to bad sparkies. They lose to faster sparkies.",
      sub: "5-minute quote response wins the job. We build the lead-capture, follow-up automation and GBP system that makes your sparky business the fastest in your service area.",
    },
    intro:
      "Electrical is 58% emergency, 42% planned. The 58% is won on response speed (GBP, click-to-call, missed-call recovery). The 42% is won on quote quality, follow-up speed and review trust. ClickSmith builds both engines so you're winning across the full demand spectrum.",
    painPoints: [
      {
        title: "Slow quote response = lost job (every time)",
        body: "Buyers contact 3–4 sparkies. Whoever quotes first within 5 minutes wins ~40% of the time. Without quote automation, you're losing jobs you should win.",
      },
      {
        title: "Solar + EV charger demand is exploding — are you positioned for it?",
        body: "Every new solar install and EV charger needs an electrician. Without the right SEO and partnership setup, the solar/EV companies bring in their preferred sparkies and lock you out.",
      },
      {
        title: "Switchboard upgrades and rewires are pure margin — but no one promotes them",
        body: "$5K–$25K rewire jobs hide in plain sight in older suburbs. We build the audit-and-quote campaigns that create demand for big-ticket electrical work.",
      },
      {
        title: "Commercial electrical pays better, but residential dominates your week",
        body: "Strata, retail and small-business electrical = predictable B2B revenue. Without dedicated outreach, you stay stuck in the $200 residential job churn.",
      },
    ],
    channelMix: [
      {
        channel: "GBP + local SEO",
        percentage: 30,
        why: "'Electrician near me' is the dominant intent — GBP top-3 wins the click.",
      },
      {
        channel: "Google Ads (emergency + service)",
        percentage: 25,
        why: "Emergency electrical converts at 10–14% with proper landing pages.",
      },
      {
        channel: "Solar/EV partnership channel",
        percentage: 15,
        why: "Co-marketing with solar installers = 4–8 new install jobs per partnership per month.",
      },
      {
        channel: "Quote-speed automation",
        percentage: 15,
        why: "First-to-quote wins ~40% of all multi-quote jobs. Automation makes you first.",
      },
      {
        channel: "Switchboard/rewire awareness ads",
        percentage: 10,
        why: "Older-suburb targeting + 'is your switchboard 1990s?' messaging unlocks high-margin work.",
      },
      {
        channel: "Commercial outreach",
        percentage: 5,
        why: "Strata + small-business outreach = predictable B2B revenue.",
      },
    ],
    recommendedServices: [
      {
        name: "GBP + Local SEO",
        why: "Top-3 rankings, suburb pages, schema, weekly GBP posts and review velocity.",
        href: "/services#seo",
      },
      {
        name: "Quote Automation Engine",
        why: "Automated 5-minute SMS+email quote acknowledgement and callback scheduling.",
        href: "/services#automation",
      },
      {
        name: "Solar/EV Partnership Outreach",
        why: "Build a co-marketing channel with local solar and EV charger companies.",
        href: "/services#outreach",
      },
    ],
    caseStudy: {
      name: "Illawarra Electrical",
      suburb: "Shellharbour, NSW",
      before: "Quote response 4–8 hours, close rate 12%",
      after: "Quote response 4 minutes, close rate 41%, 3 solar partnerships",
      result: "More than tripled close rate by being first-to-respond + locked in solar referral pipeline.",
    },
    seasonal: {
      peak: "Pre-summer (Oct–Dec) for AC + solar install support, post-storm spikes",
      trough: "Mid-winter (Jul–Aug)",
      prepTime: "Solar partnership building from August onwards",
      play: "Pre-summer EV charger + AC install partnerships. Year-round GBP + emergency. Storm seasons: rapid bid response.",
    },
    faqs: [
      {
        q: "How do we get into the solar/EV charger market?",
        a: "Two paths: (1) become the preferred sparky for 2–3 local solar installers (we run the partnership outreach), (2) rank for 'EV charger installation [suburb]' and capture direct demand. We build both channels.",
      },
      {
        q: "What's the right cost-per-lead for electricians?",
        a: "$35–$70 per call lead is typical. Cost-per-job: $70–$140 once you exclude unqualified calls. We optimise to the lower bound of each band within 90 days.",
      },
      {
        q: "How important is response speed?",
        a: "Critical. First-to-quote wins ~40% of multi-quote jobs (industry data, replicated across our clients). Quote automation alone often doubles close rate. It's the #1 lever after GBP.",
      },
      {
        q: "Should we promote switchboard upgrades and rewires?",
        a: "Yes — they're high-margin and underserved. Most homeowners in 1970s/80s/90s housing stock are due for upgrades. We run audit-style ads that identify candidates and quote them.",
      },
      {
        q: "Do you handle data, comms and commercial electrical?",
        a: "Yes — these are separate funnels. Data/comms is B2B and partnership-driven; commercial is property-manager and strata outreach. We build them as distinct channels alongside residential.",
      },
      {
        q: "How do reviews actually convert for electricians?",
        a: "Massively. Buyers compare 3+ sparkies and pick on review volume × quality. We run an automated review-request system post-job that lifts review velocity 5–10x within 6 months.",
      },
    ],
    searchPatterns: [
      "marketing for electricians",
      "electrician lead generation",
      "Google Ads for electricians",
      "electrician SEO Australia",
      "how to get electrical leads",
    ],
    metaTitle:
      "Marketing for Electricians in Australia | Quote Speed Lead Engine | ClickSmith",
    metaDescription:
      "First-to-quote wins. We build the GBP, Google Ads and 4-minute quote automation that makes your sparky the fastest. AI-driven electrician marketing.",
    related: ["solar", "plumbers", "hvac"],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. LANDSCAPERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "landscapers",
    name: "Landscapers",
    plural: "Landscapers",
    singular: "Landscaper",
    icon: "TreeDeciduous",
    hero: {
      eyebrow: "Marketing for Landscapers",
      h1: "Beautiful gardens beat cheap quotes. Show the work. Win the year.",
      sub: "Pool surrounds, garden makeovers, hardscaping — landscape buyers fall in love before they enquire. We build the Instagram, Pinterest and case-study engine that turns dreams into deposits.",
    },
    intro:
      "Landscaping is two trades in one: maintenance (recurring, low-margin) and design/build (project-based, high-margin). The design/build buyer plans for 4–6 months, hunts inspiration on Instagram and Pinterest, and shortlists landscapers whose portfolios match their dream. ClickSmith builds the visual portfolio engine + maintenance-recurring email machine.",
    painPoints: [
      {
        title: "Long sales cycle: most enquiries are 4–6 months out",
        body: "Landscape design buyers plan around school holidays, summer parties and home sales. Without a 6-month nurture, they pick whoever's most convenient at decision time.",
      },
      {
        title: "'Just mow my lawn' callers waste your day",
        body: "Maintenance enquiries flood your phone when you should be focused on design/build profit. We segment your funnel so the right enquiries reach the right service line.",
      },
      {
        title: "Pinterest is sending Aussie buyers US-priced inspo",
        body: "Buyers come in expecting $20K hardscapes after seeing American Pinterest pricing. We build the Australian-pricing content that resets expectations before the quote conversation.",
      },
      {
        title: "Spring + autumn peaks then dead winters",
        body: "Most landscapers ride the seasonal wave. We build the off-season pipeline: design-only winter packages, indoor/conservatory work, commercial maintenance contracts.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram + Pinterest portfolio",
        percentage: 40,
        why: "Landscape buyers save 50–200 inspiration images before enquiring. Visual platforms are decision-makers.",
      },
      {
        channel: "Email nurture (4–6 month cycle)",
        percentage: 20,
        why: "Buyers wait for tax time, school holidays and pre-summer urgency — be there at every trigger.",
      },
      {
        channel: "Local SEO + GBP",
        percentage: 15,
        why: "'Landscaper [suburb]' captures the ready-to-buy 30% of demand.",
      },
      {
        channel: "Google Ads (project keywords)",
        percentage: 15,
        why: "'Garden design [suburb]' and 'paver installer [city]' convert at 6–10%.",
      },
      {
        channel: "Real estate + builder partnerships",
        percentage: 10,
        why: "Pre-sale styling + new-build landscaping = predictable referral revenue.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (Instagram + Pinterest)",
        why: "Every project = 12+ pieces of content: drone, time-lapse, transformation, plant guide, owner walkthrough.",
        href: "/services#content",
      },
      {
        name: "Email Nurture (project + maintenance)",
        why: "Two parallel sequences: 6-month design/build nurture + 12-month maintenance retention.",
        href: "/services#email",
      },
      {
        name: "SEO Foundation (suburb + project pages)",
        why: "Rank for 'landscaper [suburb]', 'pool surround', 'paver installer', 'garden design'.",
        href: "/services#seo",
      },
    ],
    caseStudy: {
      name: "Coastal Greens Landscaping",
      suburb: "Kiama, NSW",
      before: "Maintenance-heavy, 4 design jobs/year",
      after: "Pool transformation Instagram ad → $28,400 in 90 days, 14 design bookings, 6-month forward calendar",
      result: "Pivoted to design-led pipeline + locked in 14 high-margin builds in a single quarter.",
    },
    seasonal: {
      peak: "Aug–Nov (spring) + Mar–May (autumn)",
      trough: "Dec–Feb (peak summer maintenance only) + Jun–Jul (winter)",
      prepTime: "Spring campaign launches in May/June",
      play: "Winter: design-only packages (drawings + plant lists). Summer: maintenance contract upgrades. Spring/autumn: design/build push.",
    },
    faqs: [
      {
        q: "Should we focus on maintenance or design/build marketing?",
        a: "Design/build for margin, maintenance for stability. We build separate funnels for each — design/build runs on Instagram + nurture, maintenance runs on local SEO + retention email.",
      },
      {
        q: "How long is the design/build sales cycle?",
        a: "4–6 months from first enquiry to deposit, then 4–12 weeks to install. Total: 5–9 months. Marketing must run on that timeline, not 30-day campaigns.",
      },
      {
        q: "What's the right cost-per-lead for landscapers?",
        a: "$40–$100 per qualified lead for design/build. Cost-per-job: $400–$1,200 (which is fine on $15K+ jobs). We optimise to the lower bound within 60–90 days.",
      },
      {
        q: "Can you build out a Pinterest strategy?",
        a: "Yes — Pinterest is the #1 inspiration platform for landscaping. We set up keyword-rich pin descriptions, board structure and idea pins so your portfolio appears in 'Australian backyard ideas' searches.",
      },
      {
        q: "How do we deal with US-priced Pinterest inspo?",
        a: "Buyer education content: 'real Australian landscaping costs by project type.' We publish it on your blog, link from emails, and reference in the quote conversation. Resets expectations before they quote-shop.",
      },
      {
        q: "Do you handle commercial landscaping?",
        a: "Yes. Commercial landscape (strata, retail, hospitality, schools) has its own funnel — LinkedIn outreach, facility-manager partnerships, RFP-targeted content. We build that channel separately.",
      },
    ],
    searchPatterns: [
      "marketing for landscapers",
      "landscaper lead generation Australia",
      "garden design marketing",
      "landscaper SEO",
      "how to get landscaping leads",
    ],
    metaTitle:
      "Marketing for Landscapers in Australia | Visual Lead Engine | ClickSmith",
    metaDescription:
      "Landscape buyers fall in love on Instagram. We build the visual portfolio + 6-month nurture that turns dreams into deposits. AI-driven landscaper marketing.",
    related: ["pool-builders", "concreters", "builders"],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. CONCRETERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "concreters",
    name: "Concreters",
    plural: "Concreters",
    singular: "Concreter",
    icon: "Box",
    hero: {
      eyebrow: "Marketing for Concreters",
      h1: "Driveways sell themselves. Your portfolio's the only sales rep that matters.",
      sub: "Decorative driveways, exposed-aggregate patios, polished floors — concrete buyers compare finish quality side-by-side. We build the portfolio-led marketing that wins on craft, not lowest cubic-metre price.",
    },
    intro:
      "Concrete is the most underrated marketing trade. Buyers can't tell quality concrete from average concrete in a quote — they can only see it in finished photos. Whoever has the best portfolio + most reviews + strongest GBP wins. ClickSmith builds the visual content engine that turns every pour into 12+ pieces of marketing.",
    painPoints: [
      {
        title: "'Just a slab' commodity perception kills your margin",
        body: "Buyers see all concreters as the same. Without finish-quality content, you race to the bottom on $/m³. We build the differentiation messaging that justifies premium decorative work.",
      },
      {
        title: "Builder partnerships are quiet but huge",
        body: "Every new build, extension and reno needs slabs and driveways. One referring builder = 20–40 pours/year. Without partnership outreach, you fight for residential leftovers.",
      },
      {
        title: "Decorative concrete demand is exploding — are you positioned for it?",
        body: "Exposed aggregate, stencilled, polished finishes are the highest-margin work. Most concreters still market 'driveways from $X/m³'. We reposition you to lead with finishes.",
      },
      {
        title: "Commercial slabs pay better than residential — but residential dominates your week",
        body: "Warehouse floors, retail fit-outs and industrial slabs = 5–20x residential job size. Without B2B outreach, you stay stuck in driveway churn.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram + Pinterest (finish-quality portfolio)",
        percentage: 30,
        why: "Buyers shortlist concreters on visible finish quality. Photo + video are non-negotiable.",
      },
      {
        channel: "Builder partnerships",
        percentage: 25,
        why: "One builder = 20–40 pours/year. The most undervalued channel for concreters.",
      },
      {
        channel: "Local SEO + GBP",
        percentage: 20,
        why: "'Concreter [suburb]' is high-intent and converts at 6–10%.",
      },
      {
        channel: "Google Ads (decorative + driveway)",
        percentage: 15,
        why: "Decorative concrete keywords convert at 10–14% — premium-margin traffic.",
      },
      {
        channel: "Commercial outreach (warehouses, retail)",
        percentage: 10,
        why: "Commercial slabs = high job size, predictable B2B funnel.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (every pour = portfolio piece)",
        why: "Drone before, pour reel, finish close-up, owner walkthrough — 12+ pieces per job.",
        href: "/services#content",
      },
      {
        name: "Builder Partnership Outreach",
        why: "Co-branded case studies, referral incentives, structured outreach to builders in your service area.",
        href: "/services#outreach",
      },
      {
        name: "SEO + GBP (decorative-led)",
        why: "Rank for 'exposed aggregate [suburb]', 'polished concrete [city]', 'decorative driveway'.",
        href: "/services#seo",
      },
    ],
    caseStudy: {
      name: "Sapphire Coast Concrete",
      suburb: "Berry, NSW",
      before: "Driveway-heavy, 1 builder partnership",
      after: "8-week wait list from one viral exposed-aggregate post, 5 builder partnerships, $480K commercial contract",
      result: "Repositioned from commodity slabs to decorative + commercial — 3x revenue in 14 months.",
    },
    seasonal: {
      peak: "Spring (Sep–Nov) + autumn (Mar–May)",
      trough: "Mid-winter (Jul–Aug) — concrete cure issues",
      prepTime: "Pre-spring campaigns from June onwards",
      play: "Winter: portfolio production + builder outreach + commercial pipeline. Spring/autumn: residential push + decorative campaigns.",
    },
    faqs: [
      {
        q: "How do we differentiate from $/m³ commodity concreters?",
        a: "Lead with finishes, not pours. Your decorative work, your stamping, your polished floors — these are 30–60% margin work. We rebuild your marketing so 70% of inbound is decorative or commercial, not driveway.",
      },
      {
        q: "Are builder partnerships really worth the effort?",
        a: "Massively. A single builder doing 6 builds/year = 18+ slabs and driveways. Five builders = your annual revenue base. We run structured outreach with co-branded case studies and referral systems.",
      },
      {
        q: "What's the right cost-per-lead for concreters?",
        a: "$40–$90 for residential leads. Builder/commercial leads come through outreach (no per-lead cost — paid via retainer activity). We optimise residential within 60 days; builder work compounds over 6–12 months.",
      },
      {
        q: "Should we run Google Ads or focus on SEO?",
        a: "Both. Google Ads captures the 'now' demand (1–2 weeks out); SEO captures the 'planning' demand (1–6 months out). Concreters need both feeding the funnel year-round.",
      },
      {
        q: "How do we handle commercial slab work marketing?",
        a: "Separate funnel: LinkedIn outreach to commercial real estate developers, partnerships with general contractors, and case-study content focused on factories, retail and warehouse projects. We build it alongside residential.",
      },
      {
        q: "Do drone shots actually matter for concrete?",
        a: "Yes — overhead drone shots of finished driveways and decorative work convert 3–4x better than ground-level photos. We provide a 1-page shot list every concreter can hand to a local drone op or capture themselves.",
      },
    ],
    searchPatterns: [
      "marketing for concreters",
      "concreter lead generation Australia",
      "decorative concrete SEO",
      "Google Ads for concreters",
      "how to get concrete leads",
    ],
    metaTitle:
      "Marketing for Concreters in Australia | Decorative-Led Lead Engine | ClickSmith",
    metaDescription:
      "Concrete competes on finish, not price. Portfolio engine, builder partnerships, decorative SEO. 3x revenue in 14 months. AI-driven concreter marketing.",
    related: ["builders", "landscapers", "pool-builders"],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. PAINTERS
  // ─────────────────────────────────────────────────────────────
  {
    slug: "painters",
    name: "Painters",
    plural: "Painters",
    singular: "Painter",
    icon: "Paintbrush",
    hero: {
      eyebrow: "Marketing for Painters",
      h1: "Painters lose work in seconds. Before/afters win it back.",
      sub: "Interior repaints, exterior refreshes, pre-sale styling — painting is the highest-saved 'before/after' content category online. We build the visual marketing engine that books your year.",
    },
    intro:
      "Painters fight a tough market: low barriers to entry, cheap quote competitors and price-shopping buyers. The painters who win are the ones whose Instagram is a constant before/after reel + GBP that dominates local search + email engine that converts pre-sale styling enquiries. ClickSmith builds all three.",
    painPoints: [
      {
        title: "Cheap-paint-quote competitors race to the bottom",
        body: "Backyard painters quote 30–40% under registered painters. Without trust signals (insurance, dust-control, prep quality), buyers default to cheapest. We build the differentiation content.",
      },
      {
        title: "Pre-sale residential styling is a goldmine — most painters miss it",
        body: "60% of residential painting is pre-sale (real estate agents recommending refreshes). Without agent partnerships, you're locked out of this high-velocity, fast-paying segment.",
      },
      {
        title: "Before/after content is the #1 saved category — yours look like phone snaps",
        body: "Buyers screenshot painter portfolios. Lighting, framing and timing matter. We build the photo + reel system so every job becomes 8+ pieces of marketing.",
      },
      {
        title: "Spring/autumn peaks then dead winters",
        body: "Most painters wait for the seasons. We build the off-season demand: interior-only winter campaigns, commercial work, body-corp/strata contracts.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram + TikTok (before/after reels)",
        percentage: 35,
        why: "Before/after is the highest-saved content in the painting category. Reels drive enquiries directly.",
      },
      {
        channel: "GBP + local SEO",
        percentage: 20,
        why: "'Painter [suburb]' is the highest-intent search — GBP top-3 wins the call.",
      },
      {
        channel: "Real estate agent partnerships",
        percentage: 20,
        why: "60% of residential painting is pre-sale — agents become your referral channel.",
      },
      {
        channel: "Facebook ads (pre-sale + interior winter)",
        percentage: 15,
        why: "Targeted at homeowners 6–18 months from listing + winter interior repaints.",
      },
      {
        channel: "Strata/body-corp + commercial outreach",
        percentage: 10,
        why: "Recurring B2B contracts smooth seasonal swings.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (before/after reels)",
        why: "Every job = 8+ pieces of content: room before, prep, mid-paint, finish, owner reaction.",
        href: "/services#content",
      },
      {
        name: "Real Estate Agent Partnership Channel",
        why: "Co-branded pre-sale styling case studies, referral incentives, agent newsletters.",
        href: "/services#outreach",
      },
      {
        name: "GBP + Local SEO",
        why: "Top-3 rankings in suburbs you service, schema markup, weekly GBP posts.",
        href: "/services#seo",
      },
    ],
    caseStudy: {
      name: "Coastal Coats Painting",
      suburb: "Wollongong, NSW",
      before: "Word-of-mouth only, 3-week booked window",
      after: "5-day pre-sale turnaround, $45K over reserve sale on partner listing, 6-month forward calendar",
      result: "Locked in 4 real estate agency partnerships and built a 6-month forward booking pipeline.",
    },
    seasonal: {
      peak: "Spring (Sep–Nov) + autumn (Mar–May) — exterior",
      trough: "Mid-winter (Jul–Aug) — exterior cure issues",
      prepTime: "Pre-sale partnerships built year-round",
      play: "Winter: interior-only campaigns + agent partnership building. Spring/autumn: exterior + body-corp push.",
    },
    faqs: [
      {
        q: "How do we beat cheap-quote painters?",
        a: "Trust signals up front: license, insurance, dust-control system, prep process, warranty. Our copywriting and landing pages lead with these so the buyer sees you as 'qualified' before they see your price.",
      },
      {
        q: "How do we build real estate agent partnerships?",
        a: "Structured outreach: leave-behind case studies of pre-sale turnarounds, co-branded social content, referral fees if you offer them. We run a 90-day program that typically lands 3–5 agent relationships.",
      },
      {
        q: "What's a realistic cost-per-lead for painters?",
        a: "$30–$60 for residential, $80–$200 for commercial/body-corp. We optimise within 60 days. Per-job cost typically $80–$150 once unqualified leads are filtered.",
      },
      {
        q: "Is interior or exterior more profitable?",
        a: "Depends on climate and crew size. Generally: exterior is higher per-job, interior is higher per-day-revenue. We segment your funnel so you can shift weight by season.",
      },
      {
        q: "Should we do roof painting and specialty finishes?",
        a: "Roof painting is its own funnel (more like roofing — see /trades/roofers for that). Specialty finishes (Venetian, lime wash, decorative) command premium pricing — we build them as a separate brand pillar in your content.",
      },
      {
        q: "Do you handle commercial painting marketing?",
        a: "Yes. Commercial painting (strata, body-corp, retail, schools) runs on outreach + RFP/tender response, not residential ads. We build that channel separately with its own messaging and content.",
      },
    ],
    searchPatterns: [
      "marketing for painters",
      "painter lead generation Australia",
      "Instagram ads for painters",
      "painter SEO",
      "how to get painting leads",
    ],
    metaTitle:
      "Marketing for Painters in Australia | Before/After Lead Engine | ClickSmith",
    metaDescription:
      "Before/afters convert. Real estate partnerships compound. We build the visual portfolio + agent channel that books your year. AI-driven painter marketing.",
    related: ["renovators", "builders", "concreters"],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. PEST CONTROL
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pest-control",
    name: "Pest Control",
    plural: "Pest Control Operators",
    singular: "Pest Controller",
    icon: "Bug",
    hero: {
      eyebrow: "Marketing for Pest Control Operators",
      h1: "Pests don't book. Panicked customers do. Be the first call, every time.",
      sub: "Termite inspections, cockroach treatments, rodent emergencies — pest control is 80% same-day intent. We build the GBP, Google Ads and recurring-treatment email engine that owns your service area.",
    },
    intro:
      "Pest control is one of the most underrated high-margin trade marketing opportunities. Same-day intent dominates (80%+), recurring treatments lock in lifetime customers, and termite work is pure margin gold. The operators who win dominate GBP, Google Ads and post-treatment retention. ClickSmith builds all three.",
    painPoints: [
      {
        title: "Same-day intent: top 3 GBP results win 70% of calls",
        body: "When someone sees a cockroach, they call the first 3 results on Google. If you're #4, you don't exist. GBP optimisation is the single biggest lever in pest control marketing.",
      },
      {
        title: "Termite inspections are pure margin — and most operators don't promote them",
        body: "Pre-sale termite inspections (real estate driven) and 5-year-warranty inspections are $300–$800 jobs with 60–70% margin. Without targeted outreach to agents and warranty-due customers, you leave it on the table.",
      },
      {
        title: "Annual recurring treatments are gold — but no one sells them",
        body: "Every customer is a 5–10 year recurring revenue stream if you remind them. Most operators send zero post-treatment emails. We build the retention engine that converts 40–50% of one-offs into annuals.",
      },
      {
        title: "Real estate + property manager partnerships dominate the high-volume channel",
        body: "Strata + property managers + real estate agents drive the steadiest pest revenue. Without dedicated outreach, you compete only on residential ads.",
      },
    ],
    channelMix: [
      {
        channel: "GBP + local SEO",
        percentage: 35,
        why: "Same-day intent wins on top-3 GBP rankings. The single biggest lever.",
      },
      {
        channel: "Google Ads (emergency + termite)",
        percentage: 25,
        why: "'Cockroach treatment [suburb]' and 'termite inspection [city]' convert at 12–18%.",
      },
      {
        channel: "Recurring-treatment email engine",
        percentage: 20,
        why: "Past customers = cheapest source of revenue. Annual reminders convert at 35–45%.",
      },
      {
        channel: "Real estate + property manager outreach",
        percentage: 15,
        why: "Pre-sale termite inspections + recurring property manager contracts = predictable revenue.",
      },
      {
        channel: "Facebook ads (seasonal pest awareness)",
        percentage: 5,
        why: "Spring rats, summer cockroaches, autumn termites — seasonal pest content drives demand spikes.",
      },
    ],
    recommendedServices: [
      {
        name: "GBP + Local SEO Domination",
        why: "Top-3 rankings in every suburb, schema markup, weekly GBP posts, review velocity.",
        href: "/services#seo",
      },
      {
        name: "Recurring Treatment Email Engine",
        why: "Annual reminders, warranty-renewal sequences, post-treatment review requests.",
        href: "/services#email",
      },
      {
        name: "Real Estate Partnership Channel",
        why: "Pre-sale termite inspection partnerships, property manager outreach, co-branded checklists.",
        href: "/services#outreach",
      },
    ],
    caseStudy: {
      name: "Southern Coast Pest Control",
      suburb: "Nowra, NSW",
      before: "Residential-only, no recurring program, 0 agent partnerships",
      after: "47% recurring conversion rate, 6 agency partnerships, 38% YoY revenue growth",
      result: "Built recurring revenue base + locked in pre-sale inspection pipeline = predictable monthly income.",
    },
    seasonal: {
      peak: "Spring (rats), summer (cockroaches/spiders), pre-summer (termite inspections)",
      trough: "Mid-winter (Jun–Jul)",
      prepTime: "Termite season campaigns from August onwards",
      play: "Winter: real estate partnership building + content production. Spring/summer: pest-specific ad campaigns. Year-round: recurring-treatment retention.",
    },
    faqs: [
      {
        q: "How do we win the 'I just saw a cockroach' panic call?",
        a: "Top-3 GBP rankings + click-to-call landing pages + 24/7 SMS auto-reply. Same-day intent doesn't have time for a return-call tomorrow. We build all three layers so panicked customers reach you within 30 seconds.",
      },
      {
        q: "Are termite inspections worth marketing?",
        a: "Massively. Pre-sale termite inspections (real estate driven) and 5-year warranty inspections are $300–$800 jobs at 60–70% margin. We build a dedicated agent partnership channel that drives 8–15 inspections per agency per year.",
      },
      {
        q: "How do we build a recurring treatment program?",
        a: "Three pieces: (1) post-treatment email asking about ongoing protection, (2) annual reminder 11 months later, (3) 'recurring program' upsell at quote stage. Together these convert 40–50% of one-offs into annuals.",
      },
      {
        q: "What's the right cost-per-lead for pest control?",
        a: "$25–$60 for residential, $40–$90 for commercial/property managers. Cost-per-job: $50–$120 typically. We optimise within 60 days.",
      },
      {
        q: "Do you handle commercial pest control marketing?",
        a: "Yes. Commercial pest (food service, retail, hospitality, strata) runs on outreach, partnerships and contract-renewal cycles — not residential ads. We build that as a separate channel with its own messaging.",
      },
      {
        q: "Should we do termite-only marketing or general pest?",
        a: "Both — but with separate landing pages and ad accounts. Termite buyers are different from cockroach buyers (planning vs panicked). We segment the funnel so each gets the right message.",
      },
    ],
    searchPatterns: [
      "marketing for pest control operators",
      "pest control lead generation Australia",
      "termite inspection marketing",
      "Google Ads for pest control",
      "how to get pest control leads",
    ],
    metaTitle:
      "Marketing for Pest Control Operators in Australia | Same-Day Lead Engine | ClickSmith",
    metaDescription:
      "Pest control is 80% same-day intent. We build the GBP, Google Ads and recurring-treatment engine that owns your service area. AI-driven pest control marketing.",
    related: ["plumbers", "electricians", "roofers"],
  },
];

// ─────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────

export function getTradeBySlug(slug: string): Trade | undefined {
  return trades.find((t) => t.slug === slug);
}

export function getAllTradeSlugs(): string[] {
  return trades.map((t) => t.slug);
}

export function getRelatedTrades(slug: string): Trade[] {
  const trade = getTradeBySlug(slug);
  if (!trade) return [];
  return trade.related
    .map((s) => getTradeBySlug(s))
    .filter((t): t is Trade => Boolean(t));
}
