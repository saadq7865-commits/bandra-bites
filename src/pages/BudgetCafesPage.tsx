import { Link } from '../router';
import { BUDGET_SPOTS } from '../data/articles';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Coffee,
  Coins,
  Compass,
  Clock
} from 'lucide-react';

export function BudgetCafesPage() {
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
            <span className="text-[#E76F51] font-semibold">Pocket-Friendly Guide</span>
            <span aria-hidden="true">·</span>
            <span>7 min read</span>
            <span aria-hidden="true">·</span>
            <span>Autumn 2026 Edition</span>
          </div>

          {/* Full Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#493548] leading-[1.18] text-balance">
            Budget Cafés in Bandra West: Pocket-Friendly Brews & Authentic Street Buns
          </h1>

          {/* Substantial Opening Article Paragraphs */}
          <div className="space-y-4 text-base text-[#493548]/90 font-light leading-relaxed">
            <p className="text-lg text-[#493548]/95 font-normal leading-relaxed">
              How to bypass high minimum spends and enjoy steaming cardamom chai, freshly toasted bun maska, and quiet college-adjacent coffee corners without burning a hole in your wallet.
            </p>

            <p>
              Bandra West carries a reputation across Mumbai as a playground of celebrity haunts, luxury lifestyle stores, and ₹450 single-origin pour-overs. Yet behind the glossy glass facades of Pali Hill and Waterfield Road lies one of the city's most resilient and welcoming ecosystems of affordable community dining. If you know how to step off the primary commercial arteries, Bandra remains a student haven, a writers’ sanctuary, and an everyday neighbourhood where you can spend an unhurried afternoon over honest coffee for well under ₹250.
            </p>

            <p>
              The key to navigating the suburb affordably is understanding its geographic and social anatomy. Bandra is not a uniform commercial grid; it is an organic mosaic of centuries-old East Indian gaothans (villages), Christian church squares, busy station shopping corridors, and historic college campuses. Each of these enclaves developed its own culinary customs long before modern specialty roasteries existed.
            </p>
          </div>

          {/* Subheading & Core Practical Details in Opening Text */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xl font-serif font-bold text-[#493548]">
              Finding Value in the Bylanes: Core Hopper Principles
            </h2>
            <p className="text-sm text-[#493548]/85 leading-relaxed">
              To enjoy Bandra West without overspending, seasoned locals rely on three simple rules:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Step into village passages:</strong> Turning off Hill Road into Ranwar or Waroda Village drops overhead costs dramatically, swapping air-conditioned surcharges for breezy outdoor benches.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Embrace counter service:</strong> Traditional bakery counters and walk-up hatch windows charge strictly for the item, completely bypassing discretionary service charges.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Follow student hubs:</strong> The streets surrounding St. Andrew’s and National College offer hearty grilled sandwiches, rolls, and cold brews engineered for student budgets.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Featured Image & Companion Field Card */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <figure className="space-y-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-[#F6BD9B]/60 shadow-sm">
              <img
                src="/src/assets/images/budget_cafe_chai_1791895098769.jpg"
                alt="Traditional cutting chai in flared glasses and buttery toasted bun maska on vintage marble tabletop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-[#493548]/70 text-center sm:text-left leading-normal">
              The enduring benchmark of Mumbai hospitality: hot spiced cutting chai paired with golden toasted bun maska on marble.
            </figcaption>
          </figure>

          {/* Quick Field Summary Card Aligned in Right Column */}
          <div className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3 text-xs text-[#493548]/85">
            <div className="flex items-center justify-between border-b border-[#F6BD9B]/40 pb-2">
              <span className="font-serif font-bold text-sm text-[#493548]">Field Pocket Summary</span>
              <Coins className="w-4 h-4 text-[#E76F51]" />
            </div>
            <div className="space-y-2">
              <div>
                <strong className="text-[#493548]">Target Enclaves:</strong> Ranwar Village, Waroda Road, St. Andrew's Corridor
              </div>
              <div>
                <strong className="text-[#493548]">Estimated Budget:</strong> ₹80 – ₹250 per person
              </div>
              <div>
                <strong className="text-[#493548]">Classic Orders:</strong> Cardamom cutting chai, bun maska, cold brew & toasties
              </div>
              <div>
                <strong className="text-[#493548]">Transit Strategy:</strong> Auto-rickshaw from Bandra West Station (₹23 minimum meter)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUATION OF THE FULL ARTICLE BELOW */}
      <div className="border-t border-[#F6BD9B]/50 pt-10 space-y-12">
        {/* Section 1: Detailed Enclaves Breakdown */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
              Geographic Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              The Three Budget Enclaves of Bandra West
            </h2>
            <p className="text-base text-[#493548]/85 leading-relaxed font-light">
              Knowing exactly which quarter of the suburb matches your mood and wallet makes all the difference for an affordable day out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                1. The Ranwar & Waroda Bylanes
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Tucked between century-old Portuguese-style cottages, independent micro-cafés here operate with low overheads. Instead of expansive dining halls with compulsory service charges, patrons sit on outdoor wooden benches sipping single-estate South Indian filter coffee or cold brews under flowering bougainvillea.
              </p>
              <div className="text-xs font-semibold text-[#E76F51] pt-1">
                Typical Spend: ₹120 – ₹250
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                2. The College Campus Corridor
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                The streets connecting St. Andrew’s, National, and MMK colleges are lined with legendary sandwich counters, frankie stalls, and student hangouts. Expect chilled coffees whipped with chocolate and milk, spicy paneer toasties, and generous portions built for student allowances.
              </p>
              <div className="text-xs font-semibold text-[#E76F51] pt-1">
                Typical Spend: ₹90 – ₹180
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <h3 className="text-lg font-serif font-bold text-[#493548]">
                3. Heritage Bakery Counters
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Local residents know that standing at an old-school bakery counter on Hill Road or Bazaar Road provides unbeatable value. Hot vegetable or mushroom patties, warm chicken pattice, custard rolls, and mawa cakes cost between ₹35 and ₹70 straight from the oven.
              </p>
              <div className="text-xs font-semibold text-[#E76F51] pt-1">
                Typical Spend: ₹60 – ₹140
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Illustrative Spot Profiles */}
        <section className="space-y-6">
          <div className="border-b border-[#F6BD9B] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
                Neighbourhood Spotlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
                Illustrative Pocket-Friendly Spot Profiles
              </h2>
            </div>
            <span className="text-xs text-[#84A98C] font-medium">
              Carefully modelled illustrative examples
            </span>
          </div>

          <p className="text-xs text-[#493548]/70 italic">
            *Note: To protect academic integrity and maintain factual accuracy, the listings below represent illustrative neighbourhood archetypes reflecting Bandra’s genuine culinary culture rather than commercial claims.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BUDGET_SPOTS.map((spot, idx) => (
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
                    <strong className="text-[#493548]">Signature Order:</strong> {spot.typicalSpecialty}
                  </div>
                  <div>
                    <strong className="text-[#493548]">Ideal Hour:</strong> {spot.bestHour}
                  </div>
                  <div className="text-[11px] text-[#493548]/60 italic">
                    Vibe: {spot.vibe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Budget Breakdown Table */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#493548]">
            Illustrative Budget Breakdown: What ₹300 Buys You
          </h2>
          <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
            Planning a realistic visit means knowing how far a simple ₹300 note can stretch when paired with smart menu choices.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#F6BD9B]/50 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm text-[#493548]">
              <thead className="bg-[#FFF3E4] border-b border-[#F6BD9B]/50 text-xs uppercase tracking-wider font-semibold text-[#493548]">
                <tr>
                  <th className="py-3 px-4">Experience Archetype</th>
                  <th className="py-3 px-4">Typical Combination</th>
                  <th className="py-3 px-4 text-right">Estimated Spend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F6BD9B]/30">
                <tr>
                  <td className="py-3 px-4 font-medium">Traditional Morning Chai</td>
                  <td className="py-3 px-4 text-[#493548]/80">Double cutting chai + freshly buttered bun maska</td>
                  <td className="py-3 px-4 text-right font-mono font-medium text-[#E76F51]">₹80 – ₹130</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Heritage Bakery Counter</td>
                  <td className="py-3 px-4 text-[#493548]/80">Warm mushroom patty + custard roll + bottled water</td>
                  <td className="py-3 px-4 text-right font-mono font-medium text-[#E76F51]">₹110 – ₹160</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Village Alleyway Cold Brew</td>
                  <td className="py-3 px-4 text-[#493548]/80">Single-estate cold brew + spiced cheese sourdough toast</td>
                  <td className="py-3 px-4 text-right font-mono font-medium text-[#E76F51]">₹220 – ₹290</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Student Campus Hangout</td>
                  <td className="py-3 px-4 text-[#493548]/80">Thick iced cold coffee + toasted paneer roll</td>
                  <td className="py-3 px-4 text-right font-mono font-medium text-[#E76F51]">₹150 – ₹220</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Practical Tips & Ordering Advice */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFF3E4] border border-[#F6BD9B] space-y-3">
            <h3 className="text-lg font-serif font-bold text-[#493548] flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[#E76F51]" />
              <span>Ordering Strategy: Beans vs. House Brews</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              When ordering in specialty cafés, single-origin pour-overs often come with steep premium markups. Opting for house blends, batch-brewed filter coffee, or standard Americanos usually cuts the beverage cost by 35% to 45% without sacrificing flavour or quality.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF3E4] border border-[#F6BD9B] space-y-3">
            <h3 className="text-lg font-serif font-bold text-[#493548] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#84A98C]" />
              <span>Midday Student Hours (1:30 PM – 4:00 PM)</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              The sweet spot for budget cafe hoppers is between 1:30 PM and 4:00 PM. Morning rush crowds have departed, college students populate communal tables for study sessions, and many casual spots offer lunch combo pricing on sandwiches and beverages.
            </p>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#493548]">
            Conclusion: The Enduring Soul of Bandra West
          </h2>
          <p className="text-sm text-[#493548]/85 leading-relaxed">
            Bandra’s café charm was never built solely on trendy neon signs or expensive imported equipment. It was forged in vintage Irani cafés with checkered tile floors, in village bakeries that scented the morning air with fresh yeast, and on quiet stone steps where neighbours paused to share conversation over cutting chai. By exploring with an open mind and a sensible budget, you experience not just a meal, but the living heritage of Queen of the Suburbs.
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
                href="/brunch-near-carter-road"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg bg-[#E76F51] hover:bg-[#d65f42] text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Next Guide: Brunch Near Carter Road</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-[#493548]/60">
            Also exploring sweets? Check our guide to <Link href="/desserts-bandra-west" className="text-[#E76F51] underline font-medium">Desserts in Bandra West</Link>.
          </div>
        </footer>
      </div>
    </article>
  );
}
