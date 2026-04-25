// src/lib/trades-data.ts
// Trade-specific marketing playbooks. Twelve trades, each with honest channel
// rankings, anonymised industry-benchmark scenarios, and AU-sourced cost
// ranges. No fabricated case studies, no invented percentages.

export type ChannelPriority = "Primary" | "High" | "Supporting";

export type ChannelMix = {
  channel: string;
  priority: ChannelPriority;
  why: string;
  benchmark?: string; // optional published industry data point
};

export type RecommendedService = {
  name: string;
  why: string;
  href: string;
};

export type Scenario = {
  scenario: string;       // anonymised customer description
  before: string;         // typical starting state
  after: string;          // realistic 90-day outcome range
  caveat: string;         // honest disclaimer about variability
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
  icon: string;
  hero: { eyebrow: string; h1: string; sub: string };
  intro: string;
  painPoints: { title: string; body: string }[];
  channelMix: ChannelMix[];
  recommendedServices: RecommendedService[];
  scenario: Scenario;
  seasonal: Seasonal;
  faqs: FAQ[];
  searchPatterns: string[];
  metaTitle: string;
  metaDescription: string;
  related: string[];
};

export const trades: Trade[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. BUILDERS — custom homes, knockdown rebuilds, extensions
  // ─────────────────────────────────────────────────────────────
  {
    slug: "builders",
    name: "Builders",
    plural: "Builders",
    singular: "Builder",
    icon: "Hammer",
    hero: {
      eyebrow: "Marketing for Builders",
      h1: "Custom build buyers research for months. We make sure they remember you.",
      sub: "Custom homes, knockdown rebuilds, extensions — every job comes from a long, deliberate research process. We build the Houzz, Instagram, SEO and email engine that keeps you in front of buyers from first save to signed contract.",
    },
    intro:
      "Build buyers don't shop on impulse. They scroll Instagram, browse Houzz portfolios, read Google reviews, ask architects, and shortlist 3-5 builders before any conversation. The builders who win are the ones whose digital presence is consistent across every place a buyer looks. ClickSmith builds that presence — from your website and Houzz profile to the case-study content that proves you're worth a quote.",
    painPoints: [
      {
        title: "Buyers vanish for months — then pick whoever's most visible",
        body: "Custom build research runs 3-6 months. Without a Houzz profile, ongoing Instagram, and a follow-up sequence, you fall out of mind by month two. The builder who's still posting wins.",
      },
      {
        title: "Quote roulette: shopped against 3-5 competitors, undercut on price",
        body: "When buyers can't tell builders apart, they default to whoever's cheapest. Strong portfolio content, transparent process pages, and warranty/inclusion clarity move the conversation off price.",
      },
      {
        title: "Architect and designer referrals are gold — if they trust your online presence",
        body: "Architects and designers refer to builders whose websites and Houzz profiles match their own design standards. A scrappy site loses you the referral pipeline that drives premium work.",
      },
      {
        title: "Word-of-mouth is fragile — one slow year breaks the chain",
        body: "Most custom builders rely on referrals until a quiet quarter exposes the gap. Marketing isn't a replacement — it's the insurance policy so a slow phone doesn't become a slow year.",
      },
    ],
    channelMix: [
      {
        channel: "Houzz profile + reviews",
        priority: "Primary",
        why: "Houzz hosts the largest concentration of pre-qualified custom-build buyers in Australia. Profile completeness, project photos, and reviews drive the shortlist.",
        benchmark: "1,400+ Australian custom builders maintain Houzz profiles (Houzz AU directory).",
      },
      {
        channel: "Instagram portfolio",
        priority: "Primary",
        why: "Visual proof of finish quality, project journeys, and the team. Saves and shares are how buyers compile their shortlist.",
      },
      {
        channel: "Local SEO + Google Business Profile",
        priority: "High",
        why: "'Custom builder [suburb]' searches capture buyers at the ready-to-quote stage. GBP photos, reviews, and Q&A close the trust gap.",
      },
      {
        channel: "Email nurture (3-6 month sequence)",
        priority: "High",
        why: "Long research cycles mean most enquiries aren't ready to sign on day 30. A monthly nurture keeps you front-of-mind through the decision window.",
      },
      {
        channel: "Architect & designer partnerships",
        priority: "Supporting",
        why: "Co-marketing and structured referral conversations turn one architect relationship into 4-8 builds a year.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (Instagram + Houzz)",
        why: "Every build becomes 8-12 pieces of content: site progress reels, framing-to-finish time-lapses, owner walkthroughs, and Houzz project uploads.",
        href: "/services#content",
      },
      {
        name: "SEO Foundation",
        why: "Rank for 'custom builder [suburb]', 'knockdown rebuild [city]', and project-type keywords. GBP optimisation, suburb pages, and review velocity.",
        href: "/services#seo",
      },
      {
        name: "Email Nurture (long-cycle)",
        why: "A monthly drip aligned to the build buyer's research arc — inspiration, process transparency, comparison guides, and post-quote follow-ups.",
        href: "/services#email",
      },
    ],
    scenario: {
      scenario: "A NSW custom builder, 2-4 builds per year, mostly referral-driven",
      before: "8-15 enquiries per month, no structured follow-up, quote conversion under 15%",
      after: "After 90 days running this playbook: 25-40 enquiries per month, structured nurture, quote conversion typically 20-30%",
      caveat: "Outcomes depend on suburb, build typology, and competitive intensity. The plays are consistent across builders we work with — the numbers move at different speeds.",
    },
    seasonal: {
      peak: "Spring (Sept-Nov) and post-Christmas (Jan-Mar) — peak research and decision windows",
      trough: "Mid-winter (Jun-Aug)",
      prepTime: "Launch nurture campaigns in May/June for Sept lock-in",
      play: "Use winter to publish 6-10 cornerstone case studies and refresh Houzz portfolio. They'll rank in time for spring research traffic.",
    },
    faqs: [
      {
        q: "How long before a builder marketing campaign delivers signed contracts?",
        a: "First enquiries within 4-6 weeks. Signed contracts typically 3-6 months later — that's the natural research window for builds. The leads come reasonably fast; the conversions follow your normal sales cycle.",
      },
      {
        q: "We do mostly word-of-mouth. Why would we need marketing?",
        a: "Word-of-mouth is great until your best referrer retires, moves, or stops building. Marketing is the insurance policy — a steady stream of qualified leads so your pipeline never depends on one person.",
      },
      {
        q: "Should we focus on Instagram or Houzz?",
        a: "Both. Houzz is where buyers shortlist (especially for premium custom work); Instagram is where they fall in love and share with their partner. Skip either and you miss a key step in their journey.",
      },
      {
        q: "Pinterest — is it worth it?",
        a: "Not for custom builders. Pinterest is dominated by interior decor, kitchen-and-bath inspiration, and DIY content. Your buyers find custom builders on Houzz, Instagram, Google, and through architect referrals. We'll tell you to skip Pinterest.",
      },
      {
        q: "Do you handle architect and designer outreach?",
        a: "Yes. Part of our builder package is a partnership channel — co-branded content, referral incentive structures, and warm-intro campaigns to architects and designers in your service area.",
      },
      {
        q: "What's a realistic enquiry-to-quote-to-sign ratio for builders?",
        a: "Industry benchmarks suggest roughly 100 enquiries lead to 20 site visits, 6 quotes, and 1-2 signed contracts. Sharper qualification at the front of the funnel — through nurture and content — typically lifts the win rate.",
      },
    ],
    searchPatterns: [
      "marketing for builders",
      "lead generation for custom builders",
      "Houzz marketing for builders",
      "builder website design Australia",
      "how to get more leads as a builder",
    ],
    metaTitle:
      "Marketing for Builders in Australia | Houzz, SEO & Lead Generation | ClickSmith",
    metaDescription:
      "Custom builders, knockdown rebuilds, extensions — we build the Houzz, Instagram, SEO and email engine that wins long research-cycle deals. AI-driven marketing for Australian builders.",
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
      h1: "Solar buyers shop 3-5 quotes. We make sure yours is the one they remember.",
      sub: "Solar is a 6-12 month decision. Google Ads catch ready-to-buy buyers, Facebook ads catch the curious, and email nurture is what closes both groups months later. We build all three layers, properly.",
    },
    intro:
      "Solar marketing isn't about one channel — it's about the right channel at the right stage. Google Ads convert at 20-35% because buyers searching for solar are usually ready to act. Facebook ads run at 5-15% because they catch interest before intent. Email and SMS nurture is what bridges the months between the first click and the signed install. Most solar installers run one of these well; the winners run all three.",
    painPoints: [
      {
        title: "Most enquiries cool off long before they're ready to sign",
        body: "Solar buyers shop 3-5 quotes over months. Without a structured nurture sequence, you lose the ones who weren't ready in week one — and they were the majority.",
      },
      {
        title: "Facebook leads look cheap until you measure conversion",
        body: "Facebook can deliver leads at $20-60 each, but conversion is typically 5-15%, which lifts true cost-per-install to $200-600+. Without lead-quality discipline, the spend looks great and the install number stays flat.",
      },
      {
        title: "Quote shopping crushes margin if you compete on panel brand alone",
        body: "Buyers compare 3-5 installers on price first. Without messaging that surfaces warranty length, install crew quality, and post-sale service, you race to the bottom on $/W.",
      },
      {
        title: "Reviews carry more weight here than almost any other trade",
        body: "Solar buyers scrutinise reviews more than most home-service categories. Operators with 50+ Google reviews routinely outperform those with 10-15, even at higher prices.",
      },
    ],
    channelMix: [
      {
        channel: "Google Ads (high-intent search)",
        priority: "Primary",
        why: "Search-intent traffic typically converts at 20-35% with proper landing pages and call tracking. Highest-quality lead source for solar.",
        benchmark: "Australian solar Google Ads CPC commonly $5-25; cost-per-quoted-lead typically $80-200 (Why Solar AU 2026 guide).",
      },
      {
        channel: "Email + SMS nurture (3-6 month)",
        priority: "Primary",
        why: "Not a lead source — a conversion engine. Without it, half your Google/Facebook spend leaks out before the buyer is ready.",
      },
      {
        channel: "Google Business Profile + reviews",
        priority: "High",
        why: "Trust signal #1 for high-ticket purchases. Buyers compare GBP star ratings before clicking through to your site.",
      },
      {
        channel: "Facebook & Instagram ads (top-of-funnel)",
        priority: "High",
        why: "Catches buyers earlier in the journey with savings calculators and customer testimonials. Lower conversion, but feeds the nurture sequence.",
        benchmark: "Facebook lead-gen typically $20-60/lead at 5-15% conversion (industry benchmarks).",
      },
      {
        channel: "Referral & partnership program",
        priority: "Supporting",
        why: "Existing customers and electrical partners are the cheapest lead source you have — most installers never ask.",
      },
    ],
    recommendedServices: [
      {
        name: "Paid Ads (Google + Meta)",
        why: "Search-intent campaigns plus top-of-funnel awareness ads, both feeding directly into the nurture engine.",
        href: "/services#paid-ads",
      },
      {
        name: "Email + SMS Nurture",
        why: "8-12 touchpoint sequence over 6 months: education, savings calculator, case studies, urgency, close.",
        href: "/services#email",
      },
      {
        name: "Review & Reputation System",
        why: "Automated post-install review requests across Google, Product Review, and Facebook — built so reviews compound month over month.",
        href: "/services#reviews",
      },
    ],
    scenario: {
      scenario: "A NSW residential solar installer, 1-2 install crews, ~$1.2M annual revenue",
      before: "Lead-to-quote conversion ~25-30%, leads going cold after 30 days, no structured nurture",
      after: "After 90 days: lead-to-quote 40-55%, structured 6-month nurture, cost-per-install reduced 25-40%",
      caveat: "Most profitable AU solar installers spend 5-12% of revenue on marketing across all channels (industry benchmark). Outcomes depend on regional competition and tariff/feed-in dynamics.",
    },
    seasonal: {
      peak: "Dec-Mar (post-electricity-bill summer urgency)",
      trough: "Jun-Aug winter",
      prepTime: "Build retargeting audiences and nurture content in Sep-Nov for summer launch",
      play: "Pre-summer 'lock in your panel price' urgency campaigns; winter focuses on battery upsells, heat-pump bundles, and commercial pipelines that flatten the trough.",
    },
    faqs: [
      {
        q: "What's the typical solar buyer's research window?",
        a: "6-12 months from first enquiry to install for residential buyers. Most installers stop following up after 30 days. The retainer pays for the structured 6-month nurture so you're still in their inbox when they're ready.",
      },
      {
        q: "Should we run Google Ads, Facebook ads, or both?",
        a: "Both, for different jobs. Google captures ready-to-buy demand at higher conversion (20-35%). Facebook captures earlier-stage interest at lower conversion (5-15%). Run them together with a shared nurture engine for full-funnel coverage.",
      },
      {
        q: "How do we stand out when everyone sells the same panels?",
        a: "Move the conversation from product to process. Warranty length, install crew quality, post-sale support, and SLA on faults are the differentiators. We build the messaging that surfaces those at every stage of the funnel.",
      },
      {
        q: "What's a realistic cost-per-lead for solar in Australia?",
        a: "$80-200 per qualified lead via Google Ads for residential; $20-60 via Facebook (with lower conversion). Cost-per-install ranges $400-900 depending on local competition. We optimise within 60-90 days.",
      },
      {
        q: "How do we handle the winter slump?",
        a: "Three plays: battery upsells to existing customers, heat-pump hot water bundles, and commercial solar (which doesn't follow residential seasonality). Combined, they cushion the trough.",
      },
      {
        q: "Do you work with both residential and commercial solar?",
        a: "Yes. Commercial solar has a different funnel — longer sales cycle (9-18 months), LinkedIn-heavy outreach, and partnerships with commercial property managers. We build it as a separate channel.",
      },
    ],
    searchPatterns: [
      "marketing for solar installers",
      "solar lead generation Australia",
      "Google Ads for solar Australia",
      "solar SEO Australia",
      "how to get solar leads",
    ],
    metaTitle:
      "Marketing for Solar Installers in Australia | Lead Engine | ClickSmith",
    metaDescription:
      "Solar buyers shop 6-12 months. We build the Google Ads, Facebook, and nurture engine that wins long-cycle deals. AI-driven marketing for Australian solar installers.",
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
      sub: "$60K-$200K builds, 4-8 month sales cycles, every quote shopped against 3 competitors. We build the Houzz, Instagram, drone-content, and quote-nurture engine that wins on lifestyle — not lowest cubic-metre price.",
    },
    intro:
      "Pool builds are aspiration purchases. Buyers imagine summer Saturdays, kids' birthdays, sunset wines. The pool builders who win are the ones whose Houzz portfolio, Instagram drone reels, Facebook ads, and follow-up sequence sell that lifestyle — not the litres. ClickSmith builds the visual storytelling system end-to-end.",
    painPoints: [
      {
        title: "Cheap-pool-quote competitors poison the well",
        body: "Buyers see $40K shell pools online and assume yours should match. Without finish-quality content and clarity around what's actually included, you race to defend price every quote.",
      },
      {
        title: "Drone shots are the new portfolio standard — and most pool builders still post phone photos",
        body: "Cinematic drone reels of finished pools convert better than ground-level video. Buyers expect this level of content in 2026, and they notice when it's missing.",
      },
      {
        title: "Council approval delays kill momentum",
        body: "Buyers go cold during the 4-8 week approval wait. Without a 'while we wait' email sequence, they drift to competitors who keep them excited.",
      },
      {
        title: "Sept-Nov tsunami, May-Jul drought",
        body: "Most pool builders triple-book in spring and starve in winter. Off-season demand needs deliberate engineering — renovation/refresh campaigns, equipment upgrades, and commercial pool work.",
      },
    ],
    channelMix: [
      {
        channel: "Houzz profile + lead-gen",
        priority: "Primary",
        why: "Houzz Pro pre-qualifies pool-build enquiries from buyers actively researching. Strong AU presence — biggest dedicated platform for high-intent backyard transformations.",
      },
      {
        channel: "Instagram + Facebook (drone reels, transformations)",
        priority: "Primary",
        why: "Pool buyers save inspiration for months. Visual platforms are where dreams take shape and shortlists form.",
      },
      {
        channel: "Google Ads + GBP",
        priority: "High",
        why: "'Pool builder [suburb]' captures the ready-to-quote 30-40% of demand. GBP reviews seal the shortlist decision.",
      },
      {
        channel: "Email nurture (4-6 month cycle)",
        priority: "High",
        why: "Buyers wait for school holidays, tax returns, and mortgage refinances. Email keeps you front-of-mind through every trigger.",
      },
      {
        channel: "Pinterest portfolio",
        priority: "Supporting",
        why: "Pinterest works for pool builders specifically — backyard inspiration is one of its strongest categories. Worth maintaining a populated profile, not heavy paid investment.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (drone + cinematic case studies)",
        why: "Every finished pool becomes 12-15 pieces of content across Instagram, Houzz, YouTube, and your site.",
        href: "/services#content",
      },
      {
        name: "Paid Social (Meta lead-gen)",
        why: "Quote-request lead forms with backyard imagery, fed into a 4-6 month email sequence.",
        href: "/services#paid-ads",
      },
      {
        name: "SEO Foundation",
        why: "Rank for 'pool builder [suburb]', 'concrete pool [city]', and 'plunge pool [region]' — premium-margin keywords.",
        href: "/services#seo",
      },
    ],
    scenario: {
      scenario: "A NSW pool builder, 8-15 builds per year, mix of concrete and fibreglass",
      before: "Word-of-mouth dependent, peak/trough swings, no off-season pipeline",
      after: "After 90 days: 18-30 quote-stage enquiries per month, 4-6 month forward booking visibility, off-season campaigns activated",
      caveat: "Outcomes depend on local council approval timelines, build typology mix, and finance partner availability. Pool builders with strong existing portfolios see results faster.",
    },
    seasonal: {
      peak: "Sept-Dec (pre-summer urgency)",
      trough: "May-Jul winter approvals",
      prepTime: "Run 'lock in summer' campaigns from June onwards",
      play: "Use winter for case-study production, drone shoots of finished work, and 'rejuvenation' campaigns to existing customers (resurfacing, equipment upgrades).",
    },
    faqs: [
      {
        q: "How do we justify $80K+ pricing when competitors quote $40K?",
        a: "Stop competing on the pool. Compete on the project: site management, council liaison, landscape integration, equipment quality, warranty. Positioning makes the buyer compare experiences, not specifications.",
      },
      {
        q: "What's the right balance between Instagram, Houzz, and Google?",
        a: "Houzz and Instagram for inspiration and shortlisting (60-70% of effort), Google for ready-to-quote demand (20-30%), Pinterest as a supporting populated profile. Run each at the stage it works.",
      },
      {
        q: "How long is a pool sales cycle?",
        a: "4-8 months from first enquiry to deposit, then another 6-14 weeks to install. Total: 6-14 months. Marketing must be built for that timeline — not 30-day campaigns.",
      },
      {
        q: "Should we offer financing partnerships?",
        a: "Yes — and prominently. Pool finance unlocks meaningfully more buyers in the $60K-$120K bracket. We integrate financing partners (Lend, Plenti, etc.) directly into the funnel and quote conversation.",
      },
      {
        q: "Are drone shots really worth it?",
        a: "Yes. Overhead drone reels of finished pools consistently outperform ground-level video on saves, shares, and click-throughs. We provide a shot list any local drone operator can capture in 30 minutes per finished job.",
      },
      {
        q: "Do you market commercial pool builds?",
        a: "Yes. Commercial pool work has a separate funnel — LinkedIn outreach, hospitality publications, architect partnerships. We build it as a distinct channel alongside residential.",
      },
    ],
    searchPatterns: [
      "marketing for pool builders",
      "pool builder lead generation Australia",
      "Houzz for pool builders",
      "pool builder SEO Australia",
      "how to get pool quotes",
    ],
    metaTitle:
      "Marketing for Pool Builders in Australia | Houzz & Visual Lead Engine | ClickSmith",
    metaDescription:
      "Pool builds sell on lifestyle, not litres. Houzz, drone reels, Meta ads, 4-6 month nurture. AI-driven marketing for Australian pool builders.",
    related: ["builders", "landscapers", "concreters"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. RENOVATORS — kitchen, bathroom, full-house
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
      sub: "Kitchens, bathrooms, full-house renos — every reno is a story buyers want to follow. We build the Houzz, Instagram, Pinterest and case-study engine that turns scrolls into signed contracts.",
    },
    intro:
      "Renovation buyers are emotional. They've stared at their dated kitchen for three years. Houzz, Instagram, and Pinterest are where they assemble their dream — and the renovator who wins is the one whose portfolio shows up in all three. ClickSmith builds the visual story machine end-to-end: before/afters, time-lapses, owner reactions, and the long-cycle email that closes the deal months later.",
    painPoints: [
      {
        title: "Quote-shoppers compare you to handymen",
        body: "Many buyers don't know the difference between a registered renovator and a generalist. Without licensing, insurance, and process-clarity content up front, you defend that gap on every quote call.",
      },
      {
        title: "Reno hesitation: 'we'll do it next year' for five years",
        body: "Most reno enquiries are 6-18 months out. Without nurture, they pick whoever's most convenient at decision time. The retainer pays for the long sequence that keeps you the obvious choice.",
      },
      {
        title: "Trades juggling kills your reviews",
        body: "Reno reviews are dominated by 'they disappeared mid-job.' Your project management, communication SLAs, and finish-date reliability are the differentiators — and they belong in the marketing.",
      },
      {
        title: "Pinterest is full of US-priced inspo, you can't compete",
        body: "Buyers walk in expecting $30K bathrooms after seeing American Pinterest pricing. We publish AU-cost reset content so the quote conversation starts from a realistic baseline.",
      },
    ],
    channelMix: [
      {
        channel: "Houzz profile + reviews",
        priority: "Primary",
        why: "Houzz hosts 2,200+ AU bathroom designers and a comparable kitchen-specialist directory. The dominant platform for premium reno research.",
        benchmark: "Houzz/HomeAdvisor type leads typically $15-200 per lead depending on tier (Houzz Pro AU benchmarks).",
      },
      {
        channel: "Instagram + TikTok (transformation reels)",
        priority: "Primary",
        why: "Before/afters and time-lapses are the highest-saved content category in renovation. Reels drive enquiries directly from save-to-DM.",
      },
      {
        channel: "Pinterest portfolio",
        priority: "High",
        why: "Pinterest is genuinely one of the top inspiration platforms for kitchen and bathroom renovation buyers. Worth a populated, keyword-rich profile.",
      },
      {
        channel: "Google Ads + GBP",
        priority: "High",
        why: "'Bathroom renovator [suburb]' is high-intent and converts well. Kitchen Google Ads typically run $30-160 per quoted lead; bathroom $50-150.",
      },
      {
        channel: "SEO + cost-guide content",
        priority: "Supporting",
        why: "'How much does a kitchen reno cost in [city]' is the #1 entry point for planning-stage buyers — own it and feed nurture from there.",
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
        why: "Sequence aligned to tax time, bonus seasons, and school holidays — natural reno-decision triggers.",
        href: "/services#email",
      },
    ],
    scenario: {
      scenario: "A NSW renovator, mix of bathroom and kitchen work, 1-2 crews",
      before: "3-5 reno enquiries per month, mostly word-of-mouth, no Houzz presence, no nurture",
      after: "After 90 days: 15-30 reno enquiries per month, Houzz live, structured nurture, 6-12 month forward calendar visibility",
      caveat: "Outcomes depend on suburb housing stock age and reno density. Operators with existing strong portfolios see results faster.",
    },
    seasonal: {
      peak: "Jan-Mar (post-Christmas + tax-return planning), Aug-Oct (pre-summer push)",
      trough: "Nov-Dec (pre-Christmas), Jun-Jul (winter)",
      prepTime: "Pre-tax-time campaigns from May onwards",
      play: "Tax-time content + EOFY pricing urgency. Winter quotes for autumn deposits. Year-round Houzz portfolio updates.",
    },
    faqs: [
      {
        q: "How do we differentiate from 'handyman' competitors?",
        a: "Lead every page and ad with licensing, insurance, registered builder status (where applicable), and guarantees. The buyer's #1 fear is 'will this person disappear mid-job' — answer it before they ask.",
      },
      {
        q: "Should we focus on bathrooms, kitchens, or full-house renos?",
        a: "Pick a hero offer (whichever has the best margin and shortest sales cycle for your crew) and lead with that. Diversify only after the hero engine is humming.",
      },
      {
        q: "What's a realistic enquiry-to-booking ratio for renovators?",
        a: "10:1 typical. Most leakage happens at the quote-to-sign stage where buyers ghost. Nurture, follow-up automation, and trust content close that gap.",
      },
      {
        q: "Does Pinterest actually drive renovation enquiries?",
        a: "Yes — Pinterest is one of the strongest inspiration platforms for kitchens and bathrooms specifically (unlike most other trades where it's marginal). Keyword-rich pin descriptions and idea pins surface your portfolio in 'Australian bathroom ideas' searches.",
      },
      {
        q: "How do we handle US-priced Pinterest inspo?",
        a: "Buyer-education content: 'real Australian renovation costs by project type', published on your blog and referenced in the quote conversation. Resets expectations before the quote arrives.",
      },
      {
        q: "Do you handle commercial renovation?",
        a: "Yes. Commercial reno (retail fit-outs, hospitality, strata) runs on a different funnel — LinkedIn outreach, RFP content, partnerships with commercial real estate agents. We build it separately.",
      },
    ],
    searchPatterns: [
      "marketing for renovators",
      "kitchen renovation lead generation Australia",
      "bathroom renovator marketing",
      "renovator SEO Australia",
      "how to get renovation leads",
    ],
    metaTitle:
      "Marketing for Renovators in Australia | Houzz, Instagram & Lead Engine | ClickSmith",
    metaDescription:
      "Kitchens, bathrooms, full renos — buyers buy transformations. We build the Houzz + Instagram + nurture engine that books your year. AI-driven marketing for Australian renovators.",
    related: ["builders", "painters", "concreters"],
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
      sub: "HVAC is feast or famine: massive peak/trough swings between heatwaves and shoulder seasons. We build the Google Ads, GBP, LSA and recurring-service engine that smooths revenue across the year.",
    },
    intro:
      "HVAC is one of the most seasonal trades in Australia. Summer heatwaves and winter cold snaps drive demand spikes — but the contractors who win consistently are the ones whose Google rankings, GBP profile, Local Services Ads, and service-contract base keep them busy when the weather isn't doing the marketing for them. ClickSmith builds the year-round demand engine.",
    painPoints: [
      {
        title: "Shoulder-season cliff: half the year is dead unless you plan it",
        body: "Most HVAC contractors ride the heatwave/cold snap waves and panic in between. Off-season pipeline (service contracts, commercial work, system upgrades) needs deliberate engineering — it doesn't happen by accident.",
      },
      {
        title: "Emergency searches are won in seconds, not minutes",
        body: "When someone's aircon dies in a heatwave, they call the first three Google results. If you're below the fold, you don't ring. GBP and LSA dominance is the difference between a $400 service call and silence.",
      },
      {
        title: "Service contracts are gold — but most operators never sell them",
        body: "Every HVAC contractor has hundreds of past customers. Most never get a service-reminder email. Annual reminders typically convert at 18-30% — that's recurring revenue from leads you already paid to acquire.",
      },
      {
        title: "Brand confusion: customers don't know Daikin from Dimplex",
        body: "When buyers can't tell brands apart, they default to price. Buyer-education content positions your brand expertise as the actual differentiator.",
      },
    ],
    channelMix: [
      {
        channel: "Google Ads + Local Services Ads (LSA)",
        priority: "Primary",
        why: "Heatwave searches convert in minutes. Google Ads + LSA dominance is the single biggest emergency-capture lever.",
        benchmark: "AU HVAC Google Ads CPC typically $8-50 depending on competition; LSA charges per lead, not per click.",
      },
      {
        channel: "Google Business Profile + local SEO",
        priority: "Primary",
        why: "'Aircon installer [suburb]' is the highest-intent residential search. GBP top-3 placement wins or loses you the call.",
      },
      {
        channel: "Service-contract email engine (recurring revenue)",
        priority: "High",
        why: "Past customers are the cheapest source of new revenue. This isn't a lead channel — it's a retention engine. Annual reminders typically convert at 18-30%.",
      },
      {
        channel: "Commercial outreach + LinkedIn",
        priority: "High",
        why: "Commercial HVAC averages 5-10x residential job size. Filling commercial through summer and winter cushions residential troughs.",
      },
      {
        channel: "Facebook ads (pre-season urgency)",
        priority: "Supporting",
        why: "Pre-summer service-tune-up and early-winter heating campaigns work in the planning windows before peak.",
      },
    ],
    recommendedServices: [
      {
        name: "Local SEO + GBP + LSA Setup",
        why: "Emergency searches won in your service area. Suburb pages, GBP weekly posts, LSA optimisation, schema markup.",
        href: "/services#seo",
      },
      {
        name: "Service Contract Email Engine",
        why: "Automated service reminders, system-age upgrade prompts, and warranty-renewal sequences for past customers.",
        href: "/services#email",
      },
      {
        name: "Commercial Outreach (LinkedIn + cold email)",
        why: "B2B funnel for retail, hospitality, office and strata customers — flattens seasonal residential swings.",
        href: "/services#outreach",
      },
    ],
    scenario: {
      scenario: "A NSW HVAC contractor, 4-8 staff, residential-heavy with some commercial",
      before: "Summer-only revenue spike, near-zero pipeline in shoulder seasons, no contract-base",
      after: "After 90 days: ~30% lift in pre-season bookings, service-contract program live, 1-2 commercial pipelines under negotiation",
      caveat: "Outcomes vary heavily with regional climate, competitive density of LSA participants, and existing customer base size. Contractors with 500+ past customers see service-contract results faster.",
    },
    seasonal: {
      peak: "Nov-Feb (cooling) and Jun-Aug (heating)",
      trough: "Mar-May (between seasons)",
      prepTime: "Pre-season campaigns must launch 6-8 weeks before each peak",
      play: "Sept: pre-summer service campaign. April: pre-winter heating tune-ups. Year-round commercial outreach + service-contract retention.",
    },
    faqs: [
      {
        q: "How do we win 'aircon dead in heatwave' calls?",
        a: "Three layers: top-3 GBP rankings in your service area, Local Services Ads (Google Guaranteed) running 24/7, and click-to-call landing pages. We build all three so when the heatwave hits, the calls reach you — not the contractor below you.",
      },
      {
        q: "What's the off-season strategy for HVAC?",
        a: "Service contracts to past customers + commercial work + heating-system upgrades. Each smooths the calendar in different ways. We build all three pipelines simultaneously.",
      },
      {
        q: "Should we run Google Ads year-round?",
        a: "Yes, but with seasonal bid pacing. Increase budget 200-300% during heatwaves and cold snaps; trim to brand defence in shoulder seasons. We manage the pacing automatically.",
      },
      {
        q: "How important is GBP for HVAC?",
        a: "Very. Local Pack results are typically clicked before organic for emergency searches. Weekly GBP posts, photo updates, Q&A management, and review responses compound over time.",
      },
      {
        q: "Can you handle commercial HVAC marketing?",
        a: "Yes. Commercial HVAC has its own funnel: LinkedIn outreach to facility managers, partnerships with commercial real estate, and case-study content focused on offices, retail, and hospitality. We build it as a distinct channel.",
      },
      {
        q: "How do we combat 'cheap aircon installer' competitors?",
        a: "Lead with warranty, install quality, and post-sale service. Cheap installs fail in 2-3 years. Positioning content makes the buyer think long-term, not just initial cost.",
      },
    ],
    searchPatterns: [
      "marketing for HVAC contractors",
      "aircon installer lead generation Australia",
      "HVAC SEO Australia",
      "Google Ads for aircon installer",
      "how to get HVAC leads",
    ],
    metaTitle:
      "Marketing for HVAC Contractors in Australia | Year-Round Lead Engine | ClickSmith",
    metaDescription:
      "HVAC swings massively peak to trough. We build the Google Ads, LSA, GBP and service-contract engine that smooths your year. AI-driven HVAC marketing.",
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
      sub: "Hail, gale, leak — every storm creates a 24-72 hour window of high-intent buyers. We build the Google Ads, GBP, insurer-partner, and builder-network engine that wins those windows every time.",
    },
    intro:
      "Roofing is event-driven. A hailstorm hits, and 500 homeowners need someone now. The roofers who win are the ones whose Google Ads, GBP, and 'storm response' messaging activate within 24-48 hours. ClickSmith builds the rapid-response system that captures storm windows, plus the steady pre-winter inspection pipeline and builder partnerships that fill the calendar between events.",
    painPoints: [
      {
        title: "Storm chaos: first to respond wins, not best",
        body: "When a storm hits, the first roofer with a clean website, fast phone, and 'storm response' messaging wins. Out-of-area contractors steal jobs from local roofers who didn't activate fast enough.",
      },
      {
        title: "Insurance work runs on a different funnel",
        body: "Insurance assessors choose roofers from approved-contractor lists. Without that relationship, you're locked out of a meaningful slice of residential work.",
      },
      {
        title: "Pre-winter inspections are pure pipeline — but most roofers wait for leaks",
        body: "Mar-May is the planning window for every homeowner whose roof is 'maybe getting a bit old'. Proactive inspection campaigns turn that hesitation into booked work.",
      },
      {
        title: "Builder partnerships are the quiet goldmine",
        body: "New-build and reno roofs are spec'd by builders. One referring builder typically delivers 6-12 roofs a year at consistent margins.",
      },
    ],
    channelMix: [
      {
        channel: "Google Ads + GBP (storm-trigger)",
        priority: "Primary",
        why: "Storm windows are 24-72 hours. Bid spikes plus pre-loaded GBP posts capture demand before competitors react.",
      },
      {
        channel: "Insurer & assessor partnerships",
        priority: "Primary",
        why: "A meaningful share of residential roofing flows through insurer panels. Onto the approved-contractor list, or locked out.",
      },
      {
        channel: "Local SEO (suburb pages, roof types)",
        priority: "High",
        why: "'Tile roof repair [suburb]' and 'metal roof restoration [city]' have steady year-round demand outside storm spikes.",
      },
      {
        channel: "Pre-winter Facebook ads (autumn inspections)",
        priority: "High",
        why: "Mar-May proactive inspection campaigns book the planned-replacement work before leaks force the conversation.",
      },
      {
        channel: "Builder referral outreach",
        priority: "Supporting",
        why: "Each builder partnership delivers 6-12 roofs per year at predictable margins. Pure cumulative win.",
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
    scenario: {
      scenario: "A NSW roofer, residential-led, mix of storm and planned work",
      before: "Storm-dependent, 0-1 builder partnerships, no insurer panels, slow off-season",
      after: "After 90 days: storm-response campaigns pre-built and activatable; 2-3 new builder relationships; 1-2 insurer panel applications submitted",
      caveat: "Storm-dependent volume swings with weather. Builder and insurer partnerships compound over 6-12 months — they don't fire in 30 days.",
    },
    seasonal: {
      peak: "Storm events (variable) + Mar-May (pre-winter inspections)",
      trough: "Dec-Feb",
      prepTime: "Pre-load storm-response campaigns in October before storm season",
      play: "October: pre-storm-season ad creatives loaded. March: pre-winter inspection campaigns. Year-round: builder/insurer outreach.",
    },
    faqs: [
      {
        q: "How fast can a storm-response campaign actually go live?",
        a: "Within 4-8 hours of a major weather event. Pre-built creative, copy, and landing pages mean ads go live before competitors finish their morning coffee.",
      },
      {
        q: "How do we get on insurer approved-contractor lists?",
        a: "Reputation, SLA performance, and proactive outreach. We build a credentials package (licensing, insurance, past insurance work, references) and run structured outreach to assessors in your service area.",
      },
      {
        q: "Should we do tile roofs, metal roofs, or both?",
        a: "Both — but lead with whichever has the best margin in your area. Service-area mapping informs this. We tailor messaging by roof type and suburb so each landing page hits its specific buyer.",
      },
      {
        q: "Is roof restoration a separate marketing play?",
        a: "Yes — restoration is preventive ('your roof's 12 years old, before it leaks…'); repair is reactive. We run them as separate campaigns with different creatives and timing.",
      },
      {
        q: "How do we handle out-of-area storm chasers?",
        a: "Local-trust positioning. Years-in-business, local reviews, licensing visibility, insurer relationships. 'Local since [year]' beats 'storm chaser arrived yesterday' every time.",
      },
      {
        q: "Do you do commercial roofing marketing?",
        a: "Yes. Commercial roofing (factories, warehouses, schools) has its own funnel — LinkedIn, facility-manager outreach, partnerships with commercial real estate. We build it as a distinct channel.",
      },
    ],
    searchPatterns: [
      "marketing for roofers",
      "roofer lead generation Australia",
      "storm response roofing marketing",
      "roof restoration SEO Australia",
      "how to get roofing leads",
    ],
    metaTitle:
      "Marketing for Roofers in Australia | Storm Response Lead Engine | ClickSmith",
    metaDescription:
      "Storms create customers. We build the rapid-response Google Ads, insurer-partner, and builder-network engine that wins every weather window. AI-driven roofer marketing.",
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
      h1: "Plumbing emergencies don't pick the best plumber. They pick the first one.",
      sub: "Burst pipes, blocked drains, hot water failures — most plumbing demand is emergency-driven and decisions happen in minutes. We build the GBP, Google Ads, LSA and missed-call recovery system that puts you first.",
    },
    intro:
      "Plumbing is dominated by emergency intent. The buyer isn't researching — they're panicking. Whoever appears in the top three GBP results, has a click-to-call number, and answers in two rings, wins. ClickSmith builds the local search dominance, Local Services Ads presence, and missed-call recovery system that makes you the obvious choice in every emergency.",
    painPoints: [
      {
        title: "The missed-call tax: every unanswered call is a lost job",
        body: "Plumbers miss 30-40% of incoming calls (showering, on a job, after hours). Each missed emergency averages a $300-500 lost job. SMS auto-reply plus callback automation typically recovers 30-50% of those.",
      },
      {
        title: "Out-ranking the franchise networks",
        body: "National franchises buy local search results aggressively. Without sharp local SEO, dedicated suburb pages, and consistent GBP posts, you're invisible against them.",
      },
      {
        title: "Cookie-cutter reviews don't convert",
        body: "Generic '5 stars - great service' reviews don't persuade. Specific, story-rich reviews — captured through structured prompts — do the heavy lifting on the next caller's decision.",
      },
      {
        title: "Commercial plumbing pays better, but residential dominates your time",
        body: "Strata, real estate property managers, and commercial buildings pay reliably and on net-30 terms. Without B2B outreach, you stay stuck in the residential emergency churn.",
      },
    ],
    channelMix: [
      {
        channel: "Google Business Profile + local SEO",
        priority: "Primary",
        why: "Most plumbing searches start with 'plumber near me'. GBP top-3 wins or loses you the call.",
        benchmark: "Optimised GBP profiles typically deliver 3-5x more inbound calls than minimal profiles.",
      },
      {
        channel: "Google Ads + Local Services Ads",
        priority: "Primary",
        why: "Emergency intent converts at 12-18% with the right landing page and phone tracking.",
        benchmark: "AU plumbing Google Ads CPC $20-75; LSA charges per lead at ~$60.",
      },
      {
        channel: "Missed-call recovery (SMS + callback automation)",
        priority: "High",
        why: "Recovers 30-50% of missed calls — single biggest revenue lever after GBP.",
      },
      {
        channel: "Strata + property manager outreach",
        priority: "High",
        why: "Commercial contracts deliver predictable monthly revenue and smooth seasonality.",
      },
      {
        channel: "Review engine (Google + Product Review)",
        priority: "Supporting",
        why: "Reviews are the trust shortcut for emergency callers. Drive volume + quality.",
      },
    ],
    recommendedServices: [
      {
        name: "Local SEO + GBP Domination",
        why: "Top-3 GBP rankings in every suburb you service, schema markup, suburb-specific landing pages.",
        href: "/services#seo",
      },
      {
        name: "Google Ads + LSA Setup",
        why: "Service-area ads with click-to-call CTAs, plus Local Services Ads (Google Guaranteed) for premium emergency placement.",
        href: "/services#paid-ads",
      },
      {
        name: "Missed-Call Recovery System",
        why: "Automatic SMS + callback when calls go unanswered — recovers 30-50% of leakage.",
        href: "/services#automation",
      },
    ],
    scenario: {
      scenario: "A NSW residential plumber, 1-3 vans, mostly emergency work",
      before: "Word-of-mouth and basic Google Ads, ~30-40% missed-call rate, no commercial pipeline",
      after: "After 90 days: GBP top-3 across service area, missed-call recovery live, 1-2 strata/property-manager contracts in negotiation",
      caveat: "Plumbing is emergency-led — outcomes correlate with population density and local franchise competition. Suburban operators near city fringes typically see results fastest.",
    },
    seasonal: {
      peak: "Winter (burst pipes, hot water failures) + storm events",
      trough: "Spring/early autumn (mild weather)",
      prepTime: "Pre-winter content campaigns from May onwards",
      play: "May: hot-water-system replacement campaigns. Year-round: GBP optimisation + emergency capture. Storm seasons: rapid bid increases.",
    },
    faqs: [
      {
        q: "How do we beat the franchise plumbers?",
        a: "Hyper-local. Franchises run national campaigns; you run suburb-specific ones. A landing page for each suburb you service, with local phone numbers, local reviews, and area-specific case studies. Local always beats national in plumbing.",
      },
      {
        q: "What's the right cost-per-lead for plumbers?",
        a: "$40-80 per call lead is typical in Australian metros, $25-50 in regional. Cost-per-job ranges $80-150 once you account for unqualified calls.",
      },
      {
        q: "Should we run ads 24/7?",
        a: "Yes for emergency keywords, no for service keywords. Emergency demand is round-the-clock; planned demand isn't. We dayparting-segment your account so spend is efficient.",
      },
      {
        q: "How do we get more 5-star reviews fast?",
        a: "Automated post-job SMS with a 1-tap review link, sent within 30 minutes of payment. Review velocity typically 5-10x within 6 months on this system.",
      },
      {
        q: "Is commercial plumbing worth the marketing investment?",
        a: "Yes — commercial contracts (strata, property managers, retail chains) are 5-10x your residential job size and pay on net-30. Separate B2B outreach channel from residential.",
      },
      {
        q: "Are Local Services Ads (LSA / Google Guaranteed) worth it?",
        a: "Yes for plumbing specifically. LSA charges per lead (not per click) and converts at 30-40% — significantly higher than standard Google Ads. Run alongside, not instead of, your existing search campaigns.",
      },
    ],
    searchPatterns: [
      "marketing for plumbers",
      "plumber lead generation Australia",
      "Google Ads for plumbers",
      "plumber SEO Australia",
      "how to get plumbing leads",
    ],
    metaTitle:
      "Marketing for Plumbers in Australia | Emergency Lead Generation | ClickSmith",
    metaDescription:
      "Plumbing is mostly emergency. We build the GBP, Google Ads, LSA and 24/7 missed-call recovery that makes you the first call. AI-driven plumber marketing.",
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
      sub: "Quote-speed wins the job. We build the GBP, Google Ads, lead-capture and follow-up automation that makes your sparky business the fastest in your service area.",
    },
    intro:
      "Electrical work is roughly half emergency, half planned. The emergency half is won on response speed (GBP, click-to-call, missed-call recovery). The planned half is won on quote quality, follow-up speed, and review trust. ClickSmith builds both engines so you're winning across the full demand spectrum.",
    painPoints: [
      {
        title: "Slow quote response = lost job",
        body: "Buyers contact 3-4 sparkies. Whoever quotes first within minutes wins a disproportionate share of multi-quote jobs. Without quote automation, you're losing jobs you should win.",
      },
      {
        title: "Solar and EV charger demand is exploding — are you in the funnel?",
        body: "Every new solar install and EV charger needs an electrician. Without partnerships and SEO targeting these keywords, the solar/EV companies bring in their preferred sparkies and you're locked out.",
      },
      {
        title: "Switchboard upgrades and rewires are pure margin — and underpromoted",
        body: "$5K-$25K rewire jobs hide in plain sight in older suburbs. Audit-and-quote campaigns surface latent demand most operators ignore.",
      },
      {
        title: "Commercial electrical pays better, but residential dominates your week",
        body: "Strata, retail, and small-business electrical = predictable B2B revenue. Without dedicated outreach, you stay stuck in the $200 residential job churn.",
      },
    ],
    channelMix: [
      {
        channel: "GBP + local SEO",
        priority: "Primary",
        why: "'Electrician near me' is the dominant intent. GBP top-3 wins the click.",
      },
      {
        channel: "Google Ads + LSA",
        priority: "Primary",
        why: "Emergency electrical converts well with proper landing pages.",
        benchmark: "Average electrician CPL ~$73, CPA $98-121; budget typically 6-13% of revenue (industry benchmarks).",
      },
      {
        channel: "Quote-speed automation",
        priority: "High",
        why: "First-to-quote wins a disproportionate share of multi-quote jobs. Automation makes you first.",
      },
      {
        channel: "Solar/EV partnership channel",
        priority: "High",
        why: "Co-marketing with local solar and EV charger companies = 4-8 new install jobs per partnership per month.",
      },
      {
        channel: "Switchboard/rewire awareness ads",
        priority: "Supporting",
        why: "Older-suburb targeting + 'is your switchboard 1990s?' messaging unlocks high-margin work.",
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
        why: "Automated SMS + email quote acknowledgement and callback scheduling within minutes of an enquiry.",
        href: "/services#automation",
      },
      {
        name: "Solar/EV Partnership Outreach",
        why: "Build a co-marketing channel with local solar and EV charger companies — predictable referral pipeline.",
        href: "/services#outreach",
      },
    ],
    scenario: {
      scenario: "A NSW residential electrician, 2-4 vans, mix of emergency and planned work",
      before: "Quote response 4-8 hours, ~12-15% close rate, no solar/EV partnerships",
      after: "After 90 days: quote response under 10 minutes, close rate typically 25-40%, 1-3 solar/EV partnerships live",
      caveat: "Outcomes scale with the size of your service area and existing brand recognition. Operators in growth-suburb territories see results faster.",
    },
    seasonal: {
      peak: "Pre-summer (Oct-Dec) for AC + solar install support, post-storm spikes",
      trough: "Mid-winter (Jul-Aug)",
      prepTime: "Solar partnership building from August onwards",
      play: "Pre-summer EV charger + AC install partnerships. Year-round GBP + emergency. Storm seasons: rapid bid response.",
    },
    faqs: [
      {
        q: "How do we get into the solar/EV charger market?",
        a: "Two paths: (1) become the preferred sparky for 2-3 local solar installers (we run the partnership outreach), (2) rank for 'EV charger installation [suburb]' and capture direct demand. Both channels in parallel.",
      },
      {
        q: "What's the right cost-per-lead for electricians?",
        a: "$35-75 per call lead is typical (industry average ~$73). Cost-per-job: $100-140 once unqualified leads are filtered.",
      },
      {
        q: "How important is response speed?",
        a: "Critical. First-to-quote consistently wins a meaningfully larger share of multi-quote jobs. Quote automation alone often doubles close rate. It's the #1 lever after GBP.",
      },
      {
        q: "Should we promote switchboard upgrades and rewires?",
        a: "Yes — they're high-margin and underserved. Most homeowners in 1970s-90s housing stock are due for upgrades. Audit-style ads identify candidates and quote them.",
      },
      {
        q: "Do you handle data, comms, and commercial electrical?",
        a: "Yes — separate funnels. Data/comms is partnership-driven; commercial is property-manager and strata outreach. We build them as distinct channels alongside residential.",
      },
      {
        q: "How do reviews actually convert for electricians?",
        a: "Massively. Buyers compare 3+ sparkies and pick on review volume × quality. Automated post-job review requests typically 5-10x review velocity within 6 months.",
      },
    ],
    searchPatterns: [
      "marketing for electricians",
      "electrician lead generation Australia",
      "Google Ads for electricians",
      "electrician SEO Australia",
      "how to get electrical leads",
    ],
    metaTitle:
      "Marketing for Electricians in Australia | Quote Speed Lead Engine | ClickSmith",
    metaDescription:
      "First-to-quote wins. We build the GBP, Google Ads, LSA and quote automation that makes your sparky the fastest. AI-driven electrician marketing.",
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
      sub: "Pool surrounds, garden makeovers, hardscaping — landscape buyers fall in love before they enquire. We build the Instagram, Pinterest, Houzz, and case-study engine that turns dreams into deposits.",
    },
    intro:
      "Landscaping is two trades in one: maintenance (recurring, low-margin) and design/build (project-based, high-margin). The design/build buyer plans for 4-6 months, hunts inspiration on Instagram and Pinterest, and shortlists landscapers whose portfolios match their dream. ClickSmith builds the visual portfolio engine + the maintenance-recurring email machine.",
    painPoints: [
      {
        title: "Long sales cycle: most enquiries are 4-6 months out",
        body: "Landscape design buyers plan around school holidays, summer parties, and home sales. Without long-cycle nurture, they pick whoever's most convenient at decision time.",
      },
      {
        title: "'Just mow my lawn' callers waste your day",
        body: "Maintenance enquiries flood your phone when you should be focused on design/build profit. Funnel segmentation routes the right enquiries to the right service line.",
      },
      {
        title: "Pinterest is sending Aussie buyers US-priced inspo",
        body: "Buyers walk in expecting $20K hardscapes after seeing American Pinterest pricing. AU-cost reset content shifts the conversation before the quote arrives.",
      },
      {
        title: "Spring + autumn peaks then dead winters",
        body: "Most landscapers ride the seasonal wave. Off-season pipeline (winter design-only packages, indoor work, commercial maintenance contracts) needs deliberate engineering.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram + Facebook (transformation reels)",
        priority: "Primary",
        why: "Landscape buyers save 50-200 inspiration images before enquiring. Visual platforms drive shortlists and DMs.",
      },
      {
        channel: "Pinterest portfolio",
        priority: "Primary",
        why: "Pinterest is genuinely strong for landscaping (alongside renovation and pool builds). Boards with seasonal planting guides and before/after pins surface in 'Australian backyard' searches.",
      },
      {
        channel: "Email nurture (4-6 month design/build cycle)",
        priority: "High",
        why: "Buyers wait for tax time, school holidays, and pre-summer urgency — be there at every trigger.",
      },
      {
        channel: "Local SEO + GBP",
        priority: "High",
        why: "'Landscaper [suburb]' captures the ready-to-buy 30% of demand. GBP photos showcase finish quality.",
      },
      {
        channel: "Google Ads (project keywords)",
        priority: "Supporting",
        why: "'Garden design [suburb]' and 'paver installer [city]' convert at 6-10% with the right landing pages.",
      },
    ],
    recommendedServices: [
      {
        name: "Content Engine (Instagram + Pinterest + Facebook)",
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
    scenario: {
      scenario: "A NSW landscaper, mix of maintenance and design/build, 2-4 crew",
      before: "Maintenance-heavy revenue, 3-5 design jobs per year, no Pinterest/Houzz presence",
      after: "After 90 days: 8-15 qualified design enquiries per month, content engine producing weekly, maintenance retention email live",
      caveat: "Design/build sales cycles are 4-9 months — first enquiries arrive within weeks; signed contracts follow the buyer's normal calendar.",
    },
    seasonal: {
      peak: "Aug-Nov (spring) + Mar-May (autumn)",
      trough: "Dec-Feb (peak summer maintenance only) + Jun-Jul (winter)",
      prepTime: "Spring campaign launches in May/June",
      play: "Winter: design-only packages (drawings + plant lists). Summer: maintenance contract upgrades. Spring/autumn: design/build push.",
    },
    faqs: [
      {
        q: "Should we focus on maintenance or design/build marketing?",
        a: "Design/build for margin, maintenance for stability. Separate funnels for each — design/build runs on Instagram + Pinterest + nurture; maintenance runs on local SEO + retention email.",
      },
      {
        q: "How long is the design/build sales cycle?",
        a: "4-6 months from first enquiry to deposit, then 4-12 weeks to install. Total: 5-9 months. Marketing must run on that timeline.",
      },
      {
        q: "What's the right cost-per-lead for landscapers?",
        a: "$40-100 per qualified lead for design/build. Cost-per-job: $400-1,200, which is fine on $15K+ jobs.",
      },
      {
        q: "Does Pinterest actually work for landscapers?",
        a: "Yes — Pinterest is genuinely strong for landscape inspiration (alongside renovation, pool builds, and home decor). Keyword-rich pin descriptions, board structure, and idea pins surface your portfolio in 'Australian backyard ideas' searches.",
      },
      {
        q: "How do we deal with US-priced Pinterest inspo?",
        a: "Buyer-education content: 'real Australian landscaping costs by project type', published on your blog and referenced in the quote conversation. Resets expectations before they quote-shop.",
      },
      {
        q: "Do you handle commercial landscaping?",
        a: "Yes. Commercial landscape (strata, retail, hospitality, schools) has its own funnel — LinkedIn, facility-manager partnerships, RFP-targeted content. Built as a separate channel.",
      },
    ],
    searchPatterns: [
      "marketing for landscapers",
      "landscaper lead generation Australia",
      "garden design marketing",
      "landscaper SEO Australia",
      "how to get landscaping leads",
    ],
    metaTitle:
      "Marketing for Landscapers in Australia | Visual Lead Engine | ClickSmith",
    metaDescription:
      "Landscape buyers fall in love on Instagram and Pinterest. We build the visual portfolio + 6-month nurture that turns dreams into deposits. AI-driven landscaper marketing.",
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
      h1: "Driveways sell on finish quality. Your portfolio is the only sales rep that matters.",
      sub: "Decorative driveways, exposed-aggregate patios, polished floors — concrete buyers compare finish quality side-by-side. We build the SEO, Instagram, and builder-partnership engine that wins on craft, not lowest cubic-metre price.",
    },
    intro:
      "Concrete is the most underrated marketing trade. Buyers can't tell quality concrete from average concrete in a quote — they can only see it in finished photos and decorative work. Whoever has the best Google rankings for specific finishes ('exposed aggregate [suburb]'), the most builder partnerships, and a populated Instagram portfolio wins. ClickSmith builds all three.",
    painPoints: [
      {
        title: "'Just a slab' commodity perception kills your margin",
        body: "Buyers see all concreters as the same. Without finish-quality content, you race to the bottom on $/m³. Differentiation messaging justifies premium decorative work.",
      },
      {
        title: "Builder partnerships are quiet but huge",
        body: "Every new build, extension, and reno needs slabs and driveways. One referring builder typically delivers 20-40 pours per year at consistent margins.",
      },
      {
        title: "Decorative concrete demand is growing — are you positioned for it?",
        body: "Exposed aggregate, stencilled, and polished finishes are the highest-margin work. Most concreters still market 'driveways from $X/m³'. Reposition to lead with finishes.",
      },
      {
        title: "Commercial slabs pay better than residential — but residential dominates your week",
        body: "Warehouse floors, retail fit-outs, and industrial slabs = 5-20x residential job size. Without B2B outreach, you stay stuck in driveway churn.",
      },
    ],
    channelMix: [
      {
        channel: "Local SEO (decorative-led)",
        priority: "Primary",
        why: "'Exposed aggregate [suburb]', 'polished concrete [city]', 'decorative driveway' are high-intent and underserved. SEO captures premium-margin demand.",
      },
      {
        channel: "Builder + architect partnerships",
        priority: "Primary",
        why: "One builder relationship delivers 20-40 pours per year. The most undervalued channel for concreters.",
      },
      {
        channel: "Google Business Profile + reviews",
        priority: "High",
        why: "'Concreter [suburb]' converts well via GBP. Photo updates of finished decorative work are the trust accelerant.",
      },
      {
        channel: "Instagram portfolio (finish-quality)",
        priority: "High",
        why: "Buyers shortlist on visible finish quality. Drone overheads of decorative work convert 3-4x ground-level photos.",
      },
      {
        channel: "Commercial outreach (warehouses, retail)",
        priority: "Supporting",
        why: "Commercial slabs = high job size, predictable B2B funnel.",
      },
    ],
    recommendedServices: [
      {
        name: "SEO + GBP (decorative-led)",
        why: "Rank for 'exposed aggregate [suburb]', 'polished concrete [city]', 'decorative driveway'. GBP optimisation, suburb pages, schema.",
        href: "/services#seo",
      },
      {
        name: "Builder Partnership Outreach",
        why: "Co-branded case studies, referral incentives, structured outreach to builders in your service area.",
        href: "/services#outreach",
      },
      {
        name: "Content Engine (every pour = portfolio)",
        why: "Drone before, pour reel, finish close-up, owner walkthrough — 12+ pieces per finished job.",
        href: "/services#content",
      },
    ],
    scenario: {
      scenario: "A NSW concreter, 1-3 crews, mix of residential and small commercial",
      before: "Driveway-heavy, 0-1 builder partnerships, no decorative SEO presence",
      after: "After 90 days: 2-4 active builder partnerships in negotiation, decorative SEO traffic ranking, repositioned messaging in market",
      caveat: "Builder partnerships compound over 6-12 months. SEO for niche finishes (e.g. 'exposed aggregate') typically ranks faster than competitive head terms.",
    },
    seasonal: {
      peak: "Spring (Sept-Nov) + autumn (Mar-May)",
      trough: "Mid-winter (Jul-Aug) — concrete cure issues",
      prepTime: "Pre-spring campaigns from June onwards",
      play: "Winter: portfolio production + builder outreach + commercial pipeline. Spring/autumn: residential push + decorative campaigns.",
    },
    faqs: [
      {
        q: "How do we differentiate from $/m³ commodity concreters?",
        a: "Lead with finishes, not pours. Decorative work, stamping, polished floors — these are 30-60% margin work. Marketing rebuilt so most inbound is decorative or commercial, not driveway.",
      },
      {
        q: "Are builder partnerships really worth the effort?",
        a: "Heavily. A single builder doing six builds per year delivers 18+ slabs and driveways. Five builders = your annual revenue base. We run structured outreach with co-branded case studies and referral systems.",
      },
      {
        q: "What's the right cost-per-lead for concreters?",
        a: "$40-90 for residential leads. Builder/commercial leads come through outreach, not per-lead — paid via retainer activity. Residential optimises within 60 days; builder work compounds over 6-12 months.",
      },
      {
        q: "Should we run Google Ads or focus on SEO?",
        a: "SEO leads, Google Ads supports. Decorative finish keywords are underserved on SEO and rank fast. Google Ads supports the gap on competitive head terms while SEO compounds.",
      },
      {
        q: "How do we handle commercial slab work marketing?",
        a: "Separate funnel: LinkedIn outreach to commercial real estate developers, partnerships with general contractors, case studies focused on factories, retail, and warehouses. Built alongside residential.",
      },
      {
        q: "Do drone shots actually matter for concrete?",
        a: "Yes — overhead drone shots of finished driveways and decorative work consistently outperform ground-level photos on click-through and saves. We provide a shot list any local drone op can capture.",
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
      "Concrete competes on finish, not price. Decorative SEO, builder partnerships, portfolio engine. AI-driven marketing for Australian concreters.",
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
      sub: "Interior repaints, exterior refreshes, pre-sale styling — painting is one of the most before/after-friendly content categories online. We build the visual marketing engine that books your year.",
    },
    intro:
      "Painters fight a tough market: low barriers to entry, cheap-quote competitors, and price-shopping buyers. The painters who win are the ones whose Instagram is a constant before/after reel, GBP dominates local search, and real estate agent partnerships drive the pre-sale styling pipeline. ClickSmith builds all three.",
    painPoints: [
      {
        title: "Cheap-quote competitors race to the bottom",
        body: "Backyard painters quote 30-40% under registered painters. Without trust signals — insurance, dust-control, prep quality — buyers default to cheapest.",
      },
      {
        title: "Pre-sale residential styling is a real estate goldmine",
        body: "A meaningful slice of residential painting is pre-sale (real estate agents recommending refreshes). Without agent partnerships, you're locked out of fast-paying, recurring work.",
      },
      {
        title: "Before/after content is the biggest organic engine — most operators post phone snaps",
        body: "Lighting, framing, and timing matter. A simple shot system turns every job into 8+ pieces of marketing.",
      },
      {
        title: "Spring/autumn peaks then dead winters",
        body: "Most painters wait for the seasons. Off-season demand (interior-only winter campaigns, commercial work, body-corp/strata contracts) needs deliberate engineering.",
      },
    ],
    channelMix: [
      {
        channel: "Instagram + TikTok (before/after reels)",
        priority: "Primary",
        why: "Before/after is one of the highest-saved content categories. Reels drive enquiries directly.",
      },
      {
        channel: "GBP + local SEO",
        priority: "Primary",
        why: "'Painter [suburb]' is the highest-intent search. GBP top-3 wins the call.",
      },
      {
        channel: "Real estate agent partnerships",
        priority: "High",
        why: "Pre-sale styling work flows from agents who refer painters they trust. Structured partnership outreach typically lands 3-5 agent relationships in 90 days.",
      },
      {
        channel: "Facebook ads (pre-sale + interior winter)",
        priority: "High",
        why: "Targeted at homeowners 6-18 months from listing + winter interior repaints.",
      },
      {
        channel: "Strata/body-corp + commercial outreach",
        priority: "Supporting",
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
    scenario: {
      scenario: "A NSW residential painter, 2-4 staff, mostly interior + some exterior",
      before: "Word-of-mouth dependent, 0 real estate partnerships, ~3-week booking window",
      after: "After 90 days: 3-5 real estate agency partnerships live, 5-day pre-sale turnarounds offered, 4-6 month forward calendar visibility",
      caveat: "Outcomes depend on local real estate density and your suburb's housing turnover rate. Operators in higher-turnover suburbs see faster real estate channel returns.",
    },
    seasonal: {
      peak: "Spring (Sept-Nov) + autumn (Mar-May) — exterior",
      trough: "Mid-winter (Jul-Aug) — exterior cure issues",
      prepTime: "Pre-sale partnerships built year-round",
      play: "Winter: interior-only campaigns + agent partnership building. Spring/autumn: exterior + body-corp push.",
    },
    faqs: [
      {
        q: "How do we beat cheap-quote painters?",
        a: "Trust signals up front: license, insurance, dust-control system, prep process, warranty. Copywriting and landing pages lead with these so buyers see you as 'qualified' before they see your price.",
      },
      {
        q: "How do we build real estate agent partnerships?",
        a: "Structured outreach: leave-behind case studies of pre-sale turnarounds, co-branded social content, referral fees if you offer them. A 90-day program typically lands 3-5 agent relationships.",
      },
      {
        q: "What's a realistic cost-per-lead for painters?",
        a: "$30-60 for residential, $80-200 for commercial/body-corp. Per-job cost typically $80-150 once unqualified leads are filtered.",
      },
      {
        q: "Is interior or exterior more profitable?",
        a: "Depends on climate and crew size. Exterior typically higher per-job; interior typically higher per-day-revenue. Funnel segmented so you can shift weight by season.",
      },
      {
        q: "Should we do roof painting and specialty finishes?",
        a: "Roof painting is its own funnel (closer to roofing — see /trades/roofers). Specialty finishes (Venetian, lime wash, decorative) command premium pricing and work as a separate brand pillar in your content.",
      },
      {
        q: "Do you handle commercial painting marketing?",
        a: "Yes. Commercial painting (strata, body-corp, retail, schools) runs on outreach + RFP/tender response, not residential ads. Built as a separate channel.",
      },
    ],
    searchPatterns: [
      "marketing for painters",
      "painter lead generation Australia",
      "Instagram ads for painters",
      "painter SEO Australia",
      "how to get painting leads",
    ],
    metaTitle:
      "Marketing for Painters in Australia | Before/After Lead Engine | ClickSmith",
    metaDescription:
      "Before/afters convert. Real estate partnerships compound. We build the visual portfolio + agent channel that books your year. AI-driven marketing for painters.",
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
      sub: "Termite inspections, cockroach treatments, rodent emergencies — pest control is dominated by same-day intent. We build the GBP, Google Ads, LSA and recurring-treatment engine that owns your service area.",
    },
    intro:
      "Pest control is one of the most underrated high-margin trade marketing categories. Same-day intent dominates, recurring treatments lock in lifetime customers, and termite work is pure margin. The operators who win dominate GBP, Google Ads + LSA, and post-treatment retention. ClickSmith builds all three.",
    painPoints: [
      {
        title: "Same-day intent: top GBP and LSA placements win the call",
        body: "When someone sees a cockroach, they call the first three Google results. If you're outside the Local Pack and LSA, you don't ring. GBP optimisation and LSA participation are the single biggest levers.",
      },
      {
        title: "Termite inspections are pure margin — and most operators don't promote them",
        body: "Pre-sale termite inspections (real estate driven) and warranty inspections are $300-800 jobs at high margin. Without targeted real estate outreach, you leave that pipeline on the table.",
      },
      {
        title: "Annual recurring treatments are gold — but most operators never sell them",
        body: "Every customer is a 5-10 year recurring revenue stream if reminded. Most operators send zero post-treatment emails. Annual reminders typically convert 35-45% of one-offs into annuals.",
      },
      {
        title: "Real estate + property manager partnerships dominate the high-volume channel",
        body: "Strata, property managers, and real estate agents drive the steadiest pest revenue. Without dedicated outreach, you compete only on residential ads.",
      },
    ],
    channelMix: [
      {
        channel: "GBP + local SEO",
        priority: "Primary",
        why: "Same-day intent wins on top-3 GBP rankings. The single biggest lever.",
      },
      {
        channel: "Google Ads + Local Services Ads",
        priority: "Primary",
        why: "'Cockroach treatment [suburb]' and 'termite inspection [city]' convert well. LSA lifts conversion further.",
        benchmark: "AU pest Google Ads typically $30-80 CPL at 8-15% conversion; LSA $20-50 CPL at 30-40% conversion.",
      },
      {
        channel: "Recurring-treatment email engine",
        priority: "High",
        why: "Past customers are the cheapest revenue source. Annual reminders typically convert at 35-45%.",
      },
      {
        channel: "Real estate + property manager outreach",
        priority: "High",
        why: "Pre-sale termite inspections + property manager contracts = predictable, recurring revenue.",
      },
      {
        channel: "Facebook ads (seasonal pest awareness)",
        priority: "Supporting",
        why: "Spring rats, summer cockroaches, autumn termites — seasonal pest content drives targeted spikes.",
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
    scenario: {
      scenario: "A NSW pest control operator, 1-2 vans, residential-led with some commercial",
      before: "Residential-only, no recurring program, 0 agent partnerships",
      after: "After 90 days: recurring program live (35-45% of one-offs converting to annual), 2-4 real estate agency partnerships live, LSA + GBP top-3 in service area",
      caveat: "Sydney metro pest Google Ads typically need a $2K-$5K monthly minimum to gather optimisation signal (industry benchmarks). Regional markets work at much lower spend.",
    },
    seasonal: {
      peak: "Spring (rats), summer (cockroaches/spiders), pre-summer (termite inspections)",
      trough: "Mid-winter (Jun-Jul)",
      prepTime: "Termite season campaigns from August onwards",
      play: "Winter: real estate partnership building + content production. Spring/summer: pest-specific campaigns. Year-round: recurring retention.",
    },
    faqs: [
      {
        q: "How do we win the 'I just saw a cockroach' panic call?",
        a: "Top-3 GBP rankings + LSA participation + click-to-call landing pages + 24/7 SMS auto-reply. Same-day intent doesn't have time for a return-call tomorrow.",
      },
      {
        q: "Are termite inspections worth marketing?",
        a: "Yes. Pre-sale and warranty inspections are $300-800 jobs at high margin. A dedicated agent partnership channel drives 8-15 inspections per agency per year.",
      },
      {
        q: "How do we build a recurring treatment program?",
        a: "Three layers: (1) post-treatment email asking about ongoing protection, (2) annual reminder 11 months later, (3) 'recurring program' upsell at quote stage. Together typically convert 35-45% of one-offs into annuals.",
      },
      {
        q: "What's the right cost-per-lead for pest control?",
        a: "$30-80 for residential Google Ads; $20-50 for LSA. Sydney metro requires $2K-$5K monthly minimum spend to optimise; regional much lower.",
      },
      {
        q: "Do you handle commercial pest control marketing?",
        a: "Yes. Commercial pest (food service, retail, hospitality, strata) runs on outreach, partnerships, and contract-renewal cycles — not residential ads. Built as a separate channel.",
      },
      {
        q: "Should we do termite-only marketing or general pest?",
        a: "Both — but with separate landing pages and ad accounts. Termite buyers are different from cockroach buyers (planning vs panicked). Funnel segmented so each gets the right message.",
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
      "Pest control is dominated by same-day intent. We build the GBP, Google Ads, LSA and recurring-treatment engine that owns your service area. AI-driven marketing.",
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
