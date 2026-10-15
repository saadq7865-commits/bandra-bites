import { useState } from 'react';
import { Link } from '../router';
import { ARTICLES, DISCOVERY_CATEGORIES, HOMEPAGE_QA } from '../data/articles';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';

export function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'budget' | 'coastal' | 'coffee' | 'desserts'>('all');

  const filteredArticles = ARTICLES.filter((article) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'budget') {
      return ['budget-cafes', 'irani-cafes-heritage', 'street-food-cafe-crawl'].includes(article.id);
    }
    if (selectedFilter === 'coastal') {
      return ['carter-road-brunch', 'late-night-cafes', 'pali-hill-cafes'].includes(article.id);
    }
    if (selectedFilter === 'coffee') {
      return ['specialty-coffee', 'work-friendly-cafes'].includes(article.id);
    }
    if (selectedFilter === 'desserts') {
      return ['desserts-bandra-west', 'vegan-healthy-cafes'].includes(article.id);
    }
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Editorial Masthead & Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Magazine Issue Kicker */}
          <div className="border-b border-[#F6BD9B] pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-medium uppercase tracking-widest text-[#493548]/70">
            <div>Bandra West, Mumbai · Field Guide Directory</div>
            <div>Café & Culinary Discoveries · Complete 10-Article Edition</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Hero Editorial Statement */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
                  The Suburb's Culinary Compass
                </span>
                {/* Single Primary H1 for the entire Homepage */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#493548] leading-[1.12] text-balance">
                  Bandra West Café & Food Discovery Guide: Coastal Spots, Bakeries & Coffee
                </h1>

                {/* Direct Q&A in Opening Paragraph */}
                <p className="text-base sm:text-lg text-[#493548]/90 leading-relaxed max-w-2xl font-normal">
                  <strong>What makes Bandra West Mumbai's premier café destination?</strong> Bandra West seamlessly blends sleepy East Indian heritage villages, breezy Arabian Sea promenades, and third-wave artisan coffee roasteries into one walkable culinary quarter. Whether you are searching for affordable cutting chai in Ranwar Village or sun-drenched outdoor sourdough brunches along Carter Road, this curated guide answers where to go, what to order, and how to avoid the crowds.
                </p>

                {/* Contextual Internal Links with Descriptive Anchor Text */}
                <p className="text-sm text-[#493548]/80 leading-relaxed max-w-2xl font-light">
                  Start by exploring our curated guides to{' '}
                  <Link
                    href="/budget-cafes-bandra-west"
                    className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]"
                  >
                    budget cafés in Bandra West with honest brews under ₹250
                  </Link>
                  , plan a seaside morning with our{' '}
                  <Link
                    href="/brunch-near-carter-road"
                    className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]"
                  >
                    coastal morning brunch spots near Carter Road guide
                  </Link>
                  , discover roasteries in our{' '}
                  <Link
                    href="/coffee-spots-bandra-west"
                    className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]"
                  >
                    specialty coffee spots in Bandra West
                  </Link>
                  , or find sweet treats in our{' '}
                  <Link
                    href="/desserts-bandra-west"
                    className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]"
                  >
                    artisanal dessert parlours and bakeries in Bandra West
                  </Link>
                  .
                </p>
              </div>

              {/* Editorial Highlights Strip */}
              <div className="pt-4 border-t border-[#F6BD9B]/60 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-serif font-bold text-[#E76F51]">10</div>
                  <div className="text-xs text-[#493548]/70 font-medium">In-Depth Guides</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-[#84A98C]">4</div>
                  <div className="text-xs text-[#493548]/70 font-medium">Historic Enclaves</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-[#493548]">100%</div>
                  <div className="text-xs text-[#493548]/70 font-medium">Street Curated</div>
                </div>
              </div>

              {/* Call-to-action link cluster */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#articles-directory"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E76F51] hover:bg-[#d65f42] text-white text-sm font-semibold rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E76F51]"
                >
                  <span>Explore All 10 Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#faq-section"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#493548]/20 hover:border-[#493548] text-[#493548] text-sm font-medium rounded-lg transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-[#84A98C]" />
                  <span>Visitor Questions & Answers</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Framing */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#F6BD9B]/50 bg-stone-100 h-full min-h-[340px] lg:min-h-[420px]">
                <img
                  src="/assets/images/hero_bandra_cafe_1791895097942.webp"
                  alt="Sunlit artisanal café interior in Bandra West Mumbai with timber tables, pour-over coffee carafe, fresh butter croissants, and lush green window views"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#F6BD9B] font-semibold block mb-1">
                    Morning in Bandra West
                  </span>
                  <p className="text-sm font-serif italic text-white/95">
                    Sunlight filtering through arched windows onto wooden communal tables and pour-over carafes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Categories Strip */}
      <section className="bg-[#FFF3E4] border-y border-[#F6BD9B]/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#84A98C]">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548] mt-1">
              Where Can You Find the Best Cafés in Bandra West?
            </h2>
            <p className="text-sm text-[#493548]/80 mt-1">
              Choose an experience tailored to your mood, budget, or preferred time of day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DISCOVERY_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.associatedRoute}
                className="group p-6 rounded-xl bg-white border border-[#F6BD9B]/40 hover:border-[#E76F51] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#E76F51]">
                      {category.featuredBadge}
                    </span>
                    <span className="text-xs text-[#84A98C] font-medium">
                      {category.tagline}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#493548] group-hover:text-[#E76F51] transition-colors leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#493548]/70 mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F6BD9B]/30 flex items-center justify-between text-xs font-semibold text-[#493548]">
                  <span>Explore guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E76F51] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured 10 Articles Directory Section */}
      <section id="articles-directory" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#F6BD9B]">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
                Comprehensive Publication
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#493548] mt-1">
                Which Bandra West Café Guides Should You Read First?
              </h2>
              <p className="text-sm text-[#493548]/80 mt-1 max-w-xl">
                Read in-depth field notes covering budget bakes, coastal brunches, specialty coffee roasters, heritage Irani cafés, and dessert walks.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F6BD9B]/25 rounded-lg self-start md:self-auto">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === 'all'
                    ? 'bg-white text-[#493548] shadow-xs font-semibold'
                    : 'text-[#493548]/80 hover:text-[#493548]'
                }`}
              >
                All 10 Guides
              </button>
              <button
                onClick={() => setSelectedFilter('budget')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === 'budget'
                    ? 'bg-white text-[#493548] shadow-xs font-semibold'
                    : 'text-[#493548]/80 hover:text-[#493548]'
                }`}
              >
                Budget & Heritage
              </button>
              <button
                onClick={() => setSelectedFilter('coastal')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === 'coastal'
                    ? 'bg-white text-[#493548] shadow-xs font-semibold'
                    : 'text-[#493548]/80 hover:text-[#493548]'
                }`}
              >
                Coastal & Night
              </button>
              <button
                onClick={() => setSelectedFilter('coffee')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === 'coffee'
                    ? 'bg-white text-[#493548] shadow-xs font-semibold'
                    : 'text-[#493548]/80 hover:text-[#493548]'
                }`}
              >
                Coffee & Work
              </button>
              <button
                onClick={() => setSelectedFilter('desserts')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === 'desserts'
                    ? 'bg-white text-[#493548] shadow-xs font-semibold'
                    : 'text-[#493548]/80 hover:text-[#493548]'
                }`}
              >
                Desserts & Health
              </button>
            </div>
          </div>

          {/* 10-Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col rounded-2xl bg-white border border-[#F6BD9B]/50 hover:border-[#E76F51] shadow-xs hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Visual Frame */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={article.heroImage}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-medium tracking-wide uppercase text-[#F6BD9B]">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Unboxed Metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-[#493548]/70">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.publishDate}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#493548] group-hover:text-[#E76F51] transition-colors leading-tight">
                      <Link href={article.route} className="hover:underline">
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-[#493548]/80 leading-relaxed font-light line-clamp-3">
                      {article.deck}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F6BD9B]/30 flex items-center justify-between">
                    <Link
                      href={article.route}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E76F51] hover:text-[#d65f42] transition-colors"
                    >
                      <span>Read full guide to {article.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTION & ANSWER SECTION ON HOMEPAGE (Teacher Requirement) */}
      <section id="faq-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#F6BD9B] shadow-xs space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#493548]">
              Planning Your Visit: How Do You Navigate Bandra West Cafés?
            </h2>
            <p className="text-sm sm:text-base text-[#493548]/80 leading-relaxed">
              Clear, practical answers addressing the most common questions visitors ask before embarking on a café trail across Bandra West.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {HOMEPAGE_QA.map((qa, index) => (
              <div key={index} className="space-y-3 p-6 rounded-2xl bg-[#FFF3E4]/60 border border-[#F6BD9B]/50">
                {/* Question-style H2 subheading */}
                <h2 className="text-xl font-serif font-bold text-[#493548]">
                  {qa.question}
                </h2>
                {/* Clear direct answer starting response */}
                <p className="text-sm sm:text-base text-[#E76F51] font-medium leading-relaxed">
                  {qa.directAnswer}
                </p>
                {/* Useful supporting details */}
                <p className="text-xs sm:text-sm text-[#493548]/85 leading-relaxed font-light">
                  {qa.supportingDetails}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enclaves Breakdown Section */}
      <section id="enclaves" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF3E4] border border-[#F6BD9B]">
            <div className="max-w-3xl mb-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
                Geographic Anatomy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#493548] mt-1">
                What Are the Four Essential Café Enclaves of Bandra West?
              </h2>
              <p className="text-sm sm:text-base text-[#493548]/80 mt-2 leading-relaxed">
                Bandra is not a monolith; each quarter carries its own architectural texture, rhythm, and dining cadence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Enclave 1 */}
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#493548]">
                    01. Ranwar & Waroda Heritage Villages
                  </h3>
                  <span className="text-xs text-[#84A98C] font-semibold">Quiet & Indie</span>
                </div>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Centuries-old East Indian and Portuguese-style wooden cottages, narrow pedestrian passages, vibrant street murals, and shaded micro-cafés with quiet community benches.
                </p>
                <div className="text-xs text-[#E76F51] font-medium pt-1">
                  Best For: Solo journaling, budget filter coffee, slow afternoons
                </div>
              </div>

              {/* Enclave 2 */}
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#493548]">
                    02. Carter Road Promenade
                  </h3>
                  <span className="text-xs text-[#84A98C] font-semibold">Coastal & Alfresco</span>
                </div>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  A sea-facing boulevard fringed with palm trees where early runners meet breezy verandahs for sourdough eggs, fresh citrus juices, and cold brews.
                </p>
                <div className="text-xs text-[#E76F51] font-medium pt-1">
                  Best For: Weekend morning brunches, dog-friendly patios, sea breeze
                </div>
              </div>

              {/* Enclave 3 */}
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#493548]">
                    03. Pali Hill & Pali Naka
                  </h3>
                  <span className="text-xs text-[#84A98C] font-semibold">Artisanal & Chic</span>
                </div>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Lush, winding hilly roads dotted with high-end bakeries, boutique chocolate ateliers, and design-forward coffee roasteries frequented by Mumbai creatives.
                </p>
                <div className="text-xs text-[#E76F51] font-medium pt-1">
                  Best For: Single-origin espresso flights, French tarts, artisanal gelato
                </div>
              </div>

              {/* Enclave 4 */}
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#493548]">
                    04. Hill Road & Station Triangle
                  </h3>
                  <span className="text-xs text-[#84A98C] font-semibold">Lively & Fast-Paced</span>
                </div>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  The commercial heartbeat of the suburb with bustling shopping streets, beloved heritage counter bakeries, student frankie hubs, and authentic Irani chai stalls.
                </p>
                <div className="text-xs text-[#E76F51] font-medium pt-1">
                  Best For: Bun maska, savoury puff pastries, budget student bites
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Visitor Field Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-[#E76F51]" />
            <h3 className="text-xl font-serif font-bold text-[#493548]">
              Practical Field Notes for Bandra Café Hoppers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
            <div className="space-y-2">
              <span className="font-bold text-[#493548] block text-sm">
                Transit & Rickshaw Reality
              </span>
              <p>
                Parking four-wheelers inside narrow village lanes like Ranwar or on Carter Road on weekend mornings is notoriously challenging. Hop into a black-and-yellow auto-rickshaw from Bandra Railway Station (West) for an effortless commute.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-[#493548] block text-sm">
                Timing & Waitlist Strategy
              </span>
              <p>
                Popular weekend brunch patios hit peak capacity between 11:30 AM and 1:30 PM. Arriving before 10:00 AM guarantees outdoor seaside seating without 40-minute queue waits.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-[#493548] block text-sm">
                Payments & Heritage Etiquette
              </span>
              <p>
                While almost every café supports UPI and digital payments, older counter bakeries still appreciate small cash denominations for transactions under ₹100.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
