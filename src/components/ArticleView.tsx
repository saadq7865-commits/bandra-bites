import { Article } from '../types';
import { Link } from '../router';
import { ARTICLES, BUDGET_SPOTS, BRUNCH_SPOTS, DESSERT_SPOTS } from '../data/articles';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Coffee, 
  Coins, 
  Clock, 
  HelpCircle,
  Sparkles,
  Compass,
  Sun,
  Cake,
  Footprints,
  Leaf,
  Moon,
  Laptop
} from 'lucide-react';

interface ArticleViewProps {
  article: Article;
}

export function ArticleView({ article }: ArticleViewProps) {
  // Find related articles to build descriptive internal links
  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedArticleRoutes.includes(a.route)
  );

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      {/* Back to Home Navigation Bar */}
      <div className="flex items-center justify-between border-b border-[#F6BD9B]/50 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E76F51] hover:text-[#d65f42] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Bandra Bites Home</span>
        </Link>
        <span className="text-xs text-[#493548]/70">
          Field Guide · Bandra West
        </span>
      </div>

      {/* MAIN SIDE-BY-SIDE SECTION: Desktop 2-Column with Substantial Content & Image */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Category, Full Heading, Extensive Opening Article Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#493548]/70 font-medium">
            <span className="text-[#E76F51] font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
          </div>

          {/* Full Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#493548] leading-[1.18] text-balance">
            {article.headline}
          </h1>

          {/* Substantial Opening Article Paragraphs */}
          <div className="space-y-4 text-base text-[#493548]/90 font-light leading-relaxed">
            <p className="text-lg text-[#493548]/95 font-normal leading-relaxed">
              {article.deck}
            </p>

            <p>
              Bandra West has long stood as Mumbai’s most storied creative and culinary quarter. Behind its bustling commercial boulevards lies an intricate labyrinth of sleepy East Indian gaothans, quiet seaside promenades, and sun-dappled residential bylanes that cultivate one of the country’s most diverse café cultures.
            </p>

            <p>
              Whether you are an early morning runner seeking an unhurried seaside brew or an afternoon remote worker looking for a quiet table under flowering bougainvillea, navigating Bandra West requires a street-level understanding of each micro-enclave’s culinary traditions.
            </p>
          </div>

          {/* Core Practical Principles in Opening Section */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-serif font-bold text-[#493548]">
              Essential Takeaways for Visitors
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Featured Image & Companion Field Card */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <figure className="space-y-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-[#F6BD9B]/60 shadow-sm">
              <img
                src={article.heroImage}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-[#493548]/70 text-center sm:text-left leading-normal">
              {article.imageCaption}
            </figcaption>
          </figure>

          {/* Quick Field Summary Card Aligned in Right Column */}
          <div className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3 text-xs text-[#493548]/85">
            <div className="flex items-center justify-between border-b border-[#F6BD9B]/40 pb-2">
              <span className="font-serif font-bold text-sm text-[#493548]">Field Pocket Summary</span>
              <Compass className="w-4 h-4 text-[#E76F51]" />
            </div>
            <div className="space-y-2">
              <div>
                <strong className="text-[#493548]">Target Enclaves:</strong> {article.fieldSummary.focusArea}
              </div>
              <div>
                <strong className="text-[#493548]">Planning Factor:</strong> {article.fieldSummary.budgetOrTime}
              </div>
              <div>
                <strong className="text-[#493548]">Signatures:</strong> {article.fieldSummary.signatures}
              </div>
              <div>
                <strong className="text-[#493548]">Local Tip:</strong> {article.fieldSummary.localTip}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUATION OF THE FULL ARTICLE BELOW */}
      <div className="border-t border-[#F6BD9B]/50 pt-10 space-y-12">
        {/* Specific Article Content: Specialized Sections */}
        {article.id === 'budget-cafes' && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              Where Are the Best Affordable Cafés Located in Bandra West?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#493548]">1. Ranwar & Waroda Bylanes</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Tucked between century-old Portuguese-style cottages, independent micro-cafés operate with low overheads. Instead of expansive dining halls with compulsory service charges, patrons sit on outdoor benches enjoying single-estate filter coffee and toasties.
                </p>
                <div className="text-xs font-semibold text-[#E76F51] pt-1">Typical Spend: ₹120 – ₹250</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#493548]">2. College Campus Corridor</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  The streets connecting St. Andrew’s, National, and MMK colleges are lined with legendary sandwich counters, frankie stalls, and student hangouts. Expect chilled coffees whipped with chocolate and spicy paneer toasties at student rates.
                </p>
                <div className="text-xs font-semibold text-[#E76F51] pt-1">Typical Spend: ₹90 – ₹180</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
                <h3 className="text-lg font-serif font-bold text-[#493548]">3. Heritage Bakery Counters</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Standing at an old-school bakery counter on Hill Road or Bazaar Road provides unbeatable value. Hot vegetable patties, chicken pattice, custard rolls, and mawa cakes cost between ₹35 and ₹70 straight from the oven.
                </p>
                <div className="text-xs font-semibold text-[#E76F51] pt-1">Typical Spend: ₹60 – ₹140</div>
              </div>
            </div>

            {/* Contextual Internal Links with Descriptive Anchor Text */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF3E4] border border-[#F6BD9B] text-xs sm:text-sm text-[#493548]/85 space-y-2">
              <span className="font-serif font-bold text-[#493548] text-sm block">Recommended Route Connections:</span>
              <p className="leading-relaxed">
                If you wish to follow your morning cutting chai with coastal sea breezes, read our{' '}
                <Link href="/brunch-near-carter-road" className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]">
                  guide to brunch near Carter Road and coastal morning spots
                </Link>
                . For fresh pastries and mawa cakes, explore our{' '}
                <Link href="/desserts-bandra-west" className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]">
                  guide to bakeries and desserts in Bandra West
                </Link>
                , or compare value with single-origin beans in our{' '}
                <Link href="/coffee-spots-bandra-west" className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]">
                  specialty coffee spots and roasters guide for Bandra West
                </Link>
                .
              </p>
            </div>

            {/* Illustrative spots */}
            <div className="pt-4 space-y-4">
              <div className="border-b border-[#F6BD9B] pb-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#493548]">Which Budget Café Specialties Offer the Best Value in Bandra?</h2>
                <span className="text-xs text-[#84A98C]">Carefully modelled illustrative neighbourhood archetypes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {BUDGET_SPOTS.map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif font-bold text-[#493548] text-base">{s.name}</h4>
                      <span className="text-xs text-[#E76F51] font-semibold">{s.estimatedRange}</span>
                    </div>
                    <div className="text-xs text-[#84A98C]">{s.neighborhood}</div>
                    <p className="text-xs text-[#493548]/80">{s.highlight}</p>
                    <div className="text-[11px] text-[#493548]/70 pt-2 border-t border-[#F6BD9B]/30">
                      <strong>Order:</strong> {s.typicalSpecialty} · <strong>Hour:</strong> {s.bestHour}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {article.id === 'carter-road-brunch' && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              What Is the Best Time for Coastal Brunch Near Carter Road?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase text-[#84A98C]">8:00 – 9:30 AM</div>
                <h3 className="text-lg font-serif font-bold text-[#493548]">Serene Coastal Calm</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Cool morning temperatures, quiet waves, and zero waitlists. You have your pick of sea-facing outdoor tables. Ideal for reading a book, sketching, or quiet conversation over pour-overs.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase text-[#E76F51]">11:00 AM – 1:30 PM</div>
                <h3 className="text-lg font-serif font-bold text-[#493548]">High-Energy Peak</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  The social heartbeat of Bandra is at full volume. Music plays, servers carry stacks of buttermilk hotcakes, and waitlists reach 35 to 45 minutes on prime verandas.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase text-[#493548]">2:00 – 4:00 PM</div>
                <h3 className="text-lg font-serif font-bold text-[#493548]">Lazy Twilight Drift</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  As the breakfast rush subsides, brunch menus give way to iced tonics, savory toasties, and chilled desserts. A soothing window to grab an outdoor corner table and watch the tide.
                </p>
              </div>
            </div>

            {/* Contextual Internal Links with Descriptive Anchor Text */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF3E4] border border-[#F6BD9B] text-xs sm:text-sm text-[#493548]/85 space-y-2">
              <span className="font-serif font-bold text-[#493548] text-sm block">Recommended Route Connections:</span>
              <p className="leading-relaxed">
                If you are looking for affordable post-promenade bites under ₹250, consult our{' '}
                <Link href="/budget-cafes-bandra-west" className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]">
                  guide to budget cafés in Bandra West and cheap bakes
                </Link>
                . For a sweet treat after your coastal brunch, browse our{' '}
                <Link href="/desserts-bandra-west" className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]">
                  guide to artisanal desserts and pastry shops in Bandra West
                </Link>
                , or discover specialty single-origin roasters in our{' '}
                <Link href="/coffee-spots-bandra-west" className="font-semibold text-[#E76F51] underline hover:text-[#d65f42]">
                  specialty coffee spots and pour-over guide for Bandra West
                </Link>
                .
              </p>
            </div>

            {/* Illustrative spots */}
            <div className="pt-4 space-y-4">
              <div className="border-b border-[#F6BD9B] pb-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#493548]">Which Carter Road Cafés Offer the Best Coastal Breakfast Menu?</h2>
                <span className="text-xs text-[#84A98C]">Curated illustrative models for itinerary planning</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {BRUNCH_SPOTS.map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif font-bold text-[#493548] text-base">{s.name}</h4>
                      <span className="text-xs text-[#E76F51] font-semibold">{s.estimatedRange}</span>
                    </div>
                    <div className="text-xs text-[#84A98C]">{s.neighborhood}</div>
                    <p className="text-xs text-[#493548]/80">{s.highlight}</p>
                    <div className="text-[11px] text-[#493548]/70 pt-2 border-t border-[#F6BD9B]/30">
                      <strong>Brunch:</strong> {s.typicalSpecialty} · <strong>Hour:</strong> {s.bestHour}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {article.id === 'desserts-bandra-west' && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              The Four Sweet Traditions Coexisting in Bandra West
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                <h3 className="text-lg font-serif font-bold text-[#493548]">1. Modern French Patisseries</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Characterized by razor-sharp pastry lamination, mirror-glazed entremets, and crisp choux au craquelin filled with hazelnut praline or Madagascar vanilla. Best savoured on-site with an unsweetened Americano.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                <h3 className="text-lg font-serif font-bold text-[#493548]">2. Heritage Village Ovens</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Nostalgic wooden storefronts with warm glass vitrines. Look for dense, aromatic coconut baath cakes made with roasted semolina, cardamom mawa cakes, custard rolls, and butter cookies that evoke classic Bombay teatimes.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                <h3 className="text-lg font-serif font-bold text-[#493548]">3. Fudgy Brownie & Melted Chunk Cookies</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  American-style bake bars specializing in dense, crackly-topped dark chocolate fudge brownies with sea salt and palm-sized chocolate chunk cookies featuring molten centres.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                <h3 className="text-lg font-serif font-bold text-[#493548]">4. Small-Batch Gelato & Pure Sorbets</h3>
                <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                  Churned daily in small batches using organic dairy or pure seasonal fruit pulp. Highlights include pure Alphonso mango during summer months, roasted Sicilian pistachio, and rich 70% dark chocolate dairy-free sorbets.
                </p>
              </div>
            </div>

            {/* Illustrative spots */}
            <div className="pt-4 space-y-4">
              <div className="border-b border-[#F6BD9B] pb-2">
                <h3 className="text-xl font-serif font-bold text-[#493548]">Illustrative Dessert & Pastry Profiles</h3>
                <span className="text-xs text-[#84A98C]">Curated pastry archetypes in Bandra West</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {DESSERT_SPOTS.map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif font-bold text-[#493548] text-base">{s.name}</h4>
                      <span className="text-xs text-[#E76F51] font-semibold">{s.estimatedRange}</span>
                    </div>
                    <div className="text-xs text-[#84A98C]">{s.neighborhood}</div>
                    <p className="text-xs text-[#493548]/80">{s.highlight}</p>
                    <div className="text-[11px] text-[#493548]/70 pt-2 border-t border-[#F6BD9B]/30">
                      <strong>Recommended:</strong> {s.typicalSpecialty} · <strong>Peak:</strong> {s.bestHour}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dynamic In-Depth Sections for all articles */}
        {article.id !== 'budget-cafes' && article.id !== 'carter-road-brunch' && article.id !== 'desserts-bandra-west' && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              Understanding the Suburb’s Culinary Craft
            </h2>
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-4">
              <p className="text-sm sm:text-base text-[#493548]/85 leading-relaxed">
                Exploring this facet of Bandra West reveals how traditional Mumbai customs blend seamlessly with modern artisanal innovation. From generational recipes perfected in family kitchens to precision temperature-controlled extractions, the area thrives on attention to detail and honest community hospitality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FFF3E4]/70 border border-[#F6BD9B]/40 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E76F51]">What to Seek Out</span>
                  <p className="text-xs text-[#493548]/80 leading-relaxed">
                    Look for small independent spots that roast their own beans, bake their own breads, or source directly from local farms. These places offer the truest expression of Bandra’s culinary spirit.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FFF3E4]/70 border border-[#F6BD9B]/40 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#84A98C]">Visiting Etiquette</span>
                  <p className="text-xs text-[#493548]/80 leading-relaxed">
                    Respect the residential character of Bandra’s heritage lanes. Keep voices gentle in quiet courtyard enclaves, and avoid blocking narrow village passages with vehicles.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* QUESTION & ANSWER PARAGRAPHS WITH QUESTION-STYLE H2 SUBHEADINGS (Teacher Requirement) */}
        <section className="space-y-6 pt-2">
          <div className="border-b border-[#F6BD9B] pb-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
              Essential Answers & Insights
            </span>
            <p className="text-xs text-[#493548]/70 mt-1">
              Direct, practical guidance addressing the most common questions visitors ask about this topic.
            </p>
          </div>

          <div className="space-y-6">
            {article.qaSections.map((qa, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3"
              >
                {/* Question-style H2 subheading */}
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#493548]">
                  {qa.question}
                </h2>
                {/* Clear direct answer starting response */}
                <p className="text-base text-[#E76F51] font-medium leading-relaxed">
                  {qa.directAnswer}
                </p>
                {/* Useful supporting details */}
                <p className="text-sm text-[#493548]/85 leading-relaxed font-light">
                  {qa.supportingDetails}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DESCRIPTIVE INTERNAL LINKS TO RELATED ARTICLES (Teacher Requirement) */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#FFF3E4] border border-[#F6BD9B] space-y-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#E76F51]" />
            <h2 className="text-xl font-serif font-bold text-[#493548]">
              What Other Bandra West Food Guides Should You Read Next?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
            Expand your culinary itinerary with these closely related Bandra West discovery articles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={rel.route}
                className="group p-4 rounded-xl bg-white border border-[#F6BD9B]/50 hover:border-[#E76F51] shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#84A98C]">
                    {rel.category}
                  </span>
                  {/* Descriptive anchor text explaining destination content */}
                  <h3 className="text-sm font-serif font-bold text-[#493548] group-hover:text-[#E76F51] transition-colors leading-snug">
                    Read our complete guide to {rel.title}
                  </h3>
                  <p className="text-xs text-[#493548]/70 line-clamp-2">
                    {rel.deck}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#F6BD9B]/30 flex items-center justify-between text-xs font-semibold text-[#E76F51]">
                  <span>Explore article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Article Conclusion */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#493548]">
            How Do You Make the Most of Your Bandra West Café Trail?
          </h2>
          <p className="text-sm text-[#493548]/85 leading-relaxed">
            Bandra West rewards the curious and unhurried explorer. Whether you are holding a paper cup of cutting chai in a century-old village lane, lingering over slow-drip pour-overs on a sunlit veranda, or tasting small-batch gelato under coastal streetlights, this suburb's culinary landscape is defined by community warmth and enduring character. Slow down, take the side alleys, and savor the distinct flavors that make Bandra truly unforgettable.
          </p>
        </section>

        {/* Inter-article Navigation Links */}
        <footer className="pt-6 border-t border-[#F6BD9B] space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-[#493548]/20 hover:border-[#493548] text-xs font-semibold uppercase tracking-wider text-[#493548] transition-colors"
            >
              ← Return to Homepage Directory
            </Link>

            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end text-xs text-[#493548]/80">
              <span className="font-semibold text-[#493548]">Quick Guides:</span>
              <Link href="/budget-cafes-bandra-west" className="hover:text-[#E76F51] underline">Budget</Link>
              <span>·</span>
              <Link href="/brunch-near-carter-road" className="hover:text-[#E76F51] underline">Brunch</Link>
              <span>·</span>
              <Link href="/desserts-bandra-west" className="hover:text-[#E76F51] underline">Desserts</Link>
              <span>·</span>
              <Link href="/coffee-spots-bandra-west" className="hover:text-[#E76F51] underline">Coffee Spots</Link>
              <span>·</span>
              <Link href="/food-near-hill-road-bandra" className="hover:text-[#E76F51] underline">Hill Road</Link>
              <span>·</span>
              <Link href="/bakeries-bun-maska-bandra-west" className="hover:text-[#E76F51] underline">Bakeries</Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
