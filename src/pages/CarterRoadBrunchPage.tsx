import { Link } from '../router';
import { BRUNCH_SPOTS } from '../data/articles';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sun, 
  Wind, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Car, 
  Dog,
  Compass
} from 'lucide-react';

export function CarterRoadBrunchPage() {
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
            <span className="text-[#84A98C] font-semibold">Coastal Living & Dining</span>
            <span aria-hidden="true">·</span>
            <span>6 min read</span>
            <span aria-hidden="true">·</span>
            <span>Autumn 2026 Edition</span>
          </div>

          {/* Full Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#493548] leading-[1.18] text-balance">
            Brunch Near Carter Road: Coastal Mornings, Sourdough & Sea Breezes
          </h1>

          {/* Substantial Opening Article Paragraphs */}
          <div className="space-y-4 text-base text-[#493548]/90 font-light leading-relaxed">
            <p className="text-lg text-[#493548]/95 font-normal leading-relaxed">
              How to master the art of timing your Arabian Sea promenade walk, scoring sunny patio tables, and enjoying artisan poached eggs and pour-overs along Bandra’s celebrated coastline.
            </p>

            <p>
              There are few places in Mumbai where the city's relentless rhythm slows down quite like the Carter Road promenade. Flanked by rocky outcrops on one side and a gentle canopy of coastal trees on the other, this 1.2-kilometre stretch along the Arabian Sea is the civic runway of Bandra West. On Saturday and Sunday mornings, marathon trainees, pet parents with energetic hounds, artists, and families all naturally converge upon the same sun-drenched strip.
            </p>

            <p>
              Brunch here is not treated as a hurried mid-morning meal; it is an unhurried social ritual designed to reward an outdoor morning stroll. The coastal cafés dotted around Carter Road, Union Park bylanes, and the Otters Club vicinity have adapted to this lifestyle. They feature open-air verandas, ceiling fans spinning lazily beneath wooden eaves, carafes of cold-brew coffee, and kitchens that treat fresh sourdough and pasture-raised eggs with culinary reverence.
            </p>
          </div>

          {/* Subheading & Core Practical Details in Opening Text */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xl font-serif font-bold text-[#493548]">
              Planning the Promenade Outing: Key Visiting Decisions
            </h2>
            <p className="text-sm text-[#493548]/85 leading-relaxed">
              To make the most of your coastal morning without frustration, keep these guidelines in mind:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Target the 8:30 – 9:45 AM window:</strong> Morning sea temperatures are pleasant, sunlight is mild, and tables are available immediately without 45-minute queues.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Pair dining with promenade walking:</strong> Stroll along the seaside amphitheatre before eating, then settle into an outdoor deck with iced brews.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Leave personal vehicles behind:</strong> Street parking on Carter Road is notoriously competitive on weekends; auto-rickshaws from Bandra station are far simpler.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Featured Image & Companion Field Card */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <figure className="space-y-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-[#F6BD9B]/60 shadow-sm">
              <img
                src="/assets/images/carter_road_brunch_1791895100633.jpg"
                alt="Sun-drenched coastal patio brunch with sourdough avocado toast, poached eggs, fresh tropical fruit and cold brew coffee overlooking the sea"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-[#493548]/70 text-center sm:text-left leading-normal">
              The quintessential Carter Road rhythm: vibrant seasonal breakfast plates, single-origin cold brews, and coastal Arabian Sea light.
            </figcaption>
          </figure>

          {/* Quick Field Summary Card Aligned in Right Column */}
          <div className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3 text-xs text-[#493548]/85">
            <div className="flex items-center justify-between border-b border-[#F6BD9B]/40 pb-2">
              <span className="font-serif font-bold text-sm text-[#493548]">Coastal Field Summary</span>
              <Sun className="w-4 h-4 text-[#E76F51]" />
            </div>
            <div className="space-y-2">
              <div>
                <strong className="text-[#493548]">Primary Strip:</strong> Carter Road Promenade & Union Park Bylanes
              </div>
              <div>
                <strong className="text-[#493548]">Golden Hour:</strong> 8:30 AM – 9:45 AM (or late afternoon post-2 PM)
              </div>
              <div>
                <strong className="text-[#493548]">Signature Plates:</strong> Sourdough toasts, poached eggs, shakshuka & cold drip
              </div>
              <div>
                <strong className="text-[#493548]">Transit Reality:</strong> Avoid four-wheelers; hop in an auto or walk from Khar Danda
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUATION OF THE FULL ARTICLE BELOW */}
      <div className="border-t border-[#F6BD9B]/50 pt-10 space-y-12">
        {/* Section 1: Detailed Timing Windows Matrix */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
              Itinerary Timing
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              The Three Visiting Windows: Choosing Your Mood
            </h2>
            <p className="text-base text-[#493548]/85 leading-relaxed font-light">
              Carter Road’s energy shifts noticeably every two hours on weekend mornings. Pick the timeframe that best fits your company and agenda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#84A98C]">
                  Window 1: 8:00 – 9:30 AM
                </span>
                <Clock className="w-4 h-4 text-[#84A98C]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                The Serene Coastal Calm
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Cool morning temperatures, quiet waves, and zero waitlists. You have your pick of sea-facing outdoor tables. Ideal for reading a book, sketching, or quiet conversation over single-origin pour-overs.
              </p>
              <div className="text-xs font-semibold text-[#84A98C] pt-1">
                Crowd Factor: Low & Peaceful
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E76F51]">
                  Window 2: 11:00 AM – 1:30 PM
                </span>
                <Sun className="w-4 h-4 text-[#E76F51]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                The High-Energy Peak
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                The social heartbeat of Bandra is at full volume. Music plays, servers carry towering stacks of buttermilk hotcakes, and waitlists reach 35 to 45 minutes on prime verandas. Perfect for high-energy group gatherings.
              </p>
              <div className="text-xs font-semibold text-[#E76F51] pt-1">
                Crowd Factor: Peak Energy & Queues
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#493548]">
                  Window 3: 2:00 – 4:00 PM
                </span>
                <Wind className="w-4 h-4 text-[#493548]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                The Lazy Twilight Drift
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                As breakfast rush subsides, brunch menus give way to iced tonics, savory toasties, and chilled desserts. A soothing window to grab an outdoor corner table and watch the afternoon tide gently roll in.
              </p>
              <div className="text-xs font-semibold text-[#493548] pt-1">
                Crowd Factor: Relaxed & Unhurried
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What to Look for on the Menu */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
            Menu Navigation: What to Look for in a Coastal Brunch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/70 border border-[#F6BD9B]/40 space-y-2">
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                1. Slow-Fermented Breads
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                The backbone of a great Bandra brunch is real sourdough. Seek out kitchens that use 24-hour slow fermentation with whole grains and natural levain, providing hearty texture that stands up to poached eggs and rich spreads.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-[#F6BD9B]/40 space-y-2">
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                2. Savory Egg Preparations
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Beyond standard omelettes, coastal menus shine with shakshuka skillets simmered with cumin and peppers, poached eggs with whipped garlic labneh, and seeded avocado toast drizzled with chili crunch oil.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-[#F6BD9B]/40 space-y-2">
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                3. Hydration & Cold Brews
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Mumbai’s coastal air makes hydration essential. Pair your meal with nitrogen-infused cold brews, espresso tonics garnished with citrus peel, or fresh tropical juice blends made with coconut water and mint.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Illustrative Spot Profiles */}
        <section className="space-y-6">
          <div className="border-b border-[#F6BD9B] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
                Coastal Spotlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
                Illustrative Carter Road Brunch Profiles
              </h2>
            </div>
            <span className="text-xs text-[#84A98C] font-medium">
              Curated illustrative models for itinerary planning
            </span>
          </div>

          <p className="text-xs text-[#493548]/70 italic">
            *Note: To protect academic integrity and preserve verified factual accuracy, the profiles below represent illustrative neighbourhood archetypes based on Carter Road’s genuine dining culture rather than commercial promises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRUNCH_SPOTS.map((spot, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-serif font-bold text-[#493548]">
                      {spot.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#E76F51] whitespace-nowrap">
                      {spot.estimatedRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#84A98C] font-medium">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{spot.neighborhood}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
                    {spot.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F6BD9B]/30 space-y-1.5 text-xs text-[#493548]/80">
                  <div>
                    <strong className="text-[#493548]">Signature Brunch:</strong> {spot.typicalSpecialty}
                  </div>
                  <div>
                    <strong className="text-[#493548]">Best Window:</strong> {spot.bestHour}
                  </div>
                  <div className="text-[11px] text-[#493548]/60 italic">
                    Vibe: {spot.vibe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Practical Logistics: Parking & Pet Etiquette */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#E76F51]">
              <Car className="w-5 h-5" />
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                Transit & Parking Reality
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              Carter Road has strict municipal parking enforcement on weekends. Searching for street parking often wastes up to 30 minutes of prime morning light. The savvy approach is to take an auto-rickshaw directly from Bandra Station (West) or use the designated paid parking lots near the northern Khar Danda junction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#84A98C]">
              <Dog className="w-5 h-5" />
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                Pet-Friendly Etiquette
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              Bandra West is celebrated as Mumbai's most dog-welcoming suburb. Carter Road brunch verandas routinely provide outdoor shade and water bowls. Ensure dogs are kept on a leash during peak brunch hours, and check ahead if visiting during heavy monsoon rains.
            </p>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#493548]">
            Conclusion: The Art of the Bandra Morning
          </h2>
          <p className="text-sm text-[#493548]/85 leading-relaxed">
            A Sunday morning spent near Carter Road is one of Mumbai’s most rejuvenating rituals. By pairing physical movement along the Arabian Sea with thoughtful, well-crafted food in the open air, visitors tap into the very essence of Bandra living: coastal warmth, creative dining, and an unhurried appreciation for life by the water.
          </p>
        </section>

        {/* Inter-article Navigation Links */}
        <footer className="pt-6 border-t border-[#F6BD9B] space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-[#493548]/20 hover:border-[#493548] text-xs font-semibold uppercase tracking-wider text-[#493548] transition-colors"
            >
              ← Return to Homepage
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/budget-cafes-bandra-west"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-[#E76F51] text-[#E76F51] hover:bg-[#E76F51]/10 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                ← Budget Cafés Guide
              </Link>
              <Link
                href="/desserts-bandra-west"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg bg-[#E76F51] hover:bg-[#d65f42] text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Next: Desserts in Bandra West</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-[#493548]/60">
            Looking for a quick coffee and bun maska instead? Visit our <Link href="/budget-cafes-bandra-west" className="text-[#E76F51] underline font-medium">Budget Cafés in Bandra West</Link> guide.
          </div>
        </footer>
      </div>
    </article>
  );
}
