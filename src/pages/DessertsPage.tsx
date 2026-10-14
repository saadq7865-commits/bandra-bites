import { Link } from '../router';
import { DESSERT_SPOTS } from '../data/articles';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  ThermometerSnowflake,
  Cake,
  Sparkles,
  Clock
} from 'lucide-react';

export function DessertsPage() {
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
            <span className="text-[#E76F51] font-semibold">Artisanal Patisserie Guide</span>
            <span aria-hidden="true">·</span>
            <span>8 min read</span>
            <span aria-hidden="true">·</span>
            <span>Autumn 2026 Edition</span>
          </div>

          {/* Full Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#493548] leading-[1.18] text-balance">
            Desserts in Bandra West: From Heritage Village Ovens to Parisian Patisseries
          </h1>

          {/* Substantial Opening Article Paragraphs */}
          <div className="space-y-4 text-base text-[#493548]/90 font-light leading-relaxed">
            <p className="text-lg text-[#493548]/95 font-normal leading-relaxed">
              An afternoon journey tracking down decadent dark chocolate ganache tarts, flaky fruit mille-feuille, gooey fudge brownies, and small-batch gelato tucked into Bandra's leafy enclaves.
            </p>

            <p>
              Long before Mumbai embraced trendy Basque cheesecakes and pistachio kunafa desserts, Bandra was already celebrated as the baking epicentre of the city. For centuries, the Anglo-Indian and East Indian Christian families living in Bandra’s historic gaothans nurtured beloved baking traditions. From seasonal Christmas marzipan and spiced guava cheese to semolina coconut baath cakes and buttery nankhatai cookies, baking was an art woven deeply into local community life.
            </p>

            <p>
              Over the last decade, that foundational baking culture has blossomed into India's most sophisticated and innovative dessert landscape. Today, graduates of classical European culinary institutes work alongside generational bakers in the quiet lanes of Pali Naka, Ranwar, and Waroda Road. Within a ten-minute walk, you can transition seamlessly from an unpretentious wooden bakery counter to an atelier producing single-origin South Indian cacao tarts and seasonal fruit tarts.
            </p>
          </div>

          {/* Subheading & Core Practical Details in Opening Text */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xl font-serif font-bold text-[#493548]">
              Navigating the Sweet Enclaves: Key Tasting Decisions
            </h2>
            <p className="text-sm text-[#493548]/85 leading-relaxed">
              To experience Bandra’s dessert scene at its peak, consider these practical rules of thumb:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Consume laminated pastry immediately:</strong> Mumbai’s sea air quickly diminishes the crispness of croissants and mille-feuille; enjoy them on-site with an espresso.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Visit patisseries between 2:30 – 5:30 PM:</strong> Afternoon displays showcase fresh, unbroken tarts and delicate choux right out of midday prep.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                <span><strong>Save gelato for evening strolls:</strong> Small-batch ice cream and sorbet parlours around Pali Naka hit their vibrant social peak after 8:30 PM.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Featured Image & Companion Field Card */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <figure className="space-y-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-[#F6BD9B]/60 shadow-sm">
              <img
                src="/assets/images/bandra_desserts_pastries_1791895099315.jpg"
                alt="Artisanal dessert spread with decadent dark chocolate ganache tart, layered berry mille-feuille, and delicate pistachio macaron"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-[#493548]/70 text-center sm:text-left leading-normal">
              The craft of Bandra's sweet kitchens: single-origin 72% dark chocolate ganache, crisp berry mille-feuille, and roasted pistachio creams.
            </figcaption>
          </figure>

          {/* Quick Field Summary Card Aligned in Right Column */}
          <div className="p-5 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3 text-xs text-[#493548]/85">
            <div className="flex items-center justify-between border-b border-[#F6BD9B]/40 pb-2">
              <span className="font-serif font-bold text-sm text-[#493548]">Dessert Trail Summary</span>
              <Cake className="w-4 h-4 text-[#E76F51]" />
            </div>
            <div className="space-y-2">
              <div>
                <strong className="text-[#493548]">Key Enclaves:</strong> Pali Naka, Ranwar Village & Chimbai Road
              </div>
              <div>
                <strong className="text-[#493548]">Prime Hours:</strong> 3:30 – 5:30 PM (tea bakes) & 8:30 – 10:30 PM (gelato walk)
              </div>
              <div>
                <strong className="text-[#493548]">Signature Treats:</strong> 72% Malabar dark chocolate tart, coconut baath & choux
              </div>
              <div>
                <strong className="text-[#493548]">Storage Advice:</strong> Ventilated bakery boxes only; avoid sealed plastic bags
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUATION OF THE FULL ARTICLE BELOW */}
      <div className="border-t border-[#F6BD9B]/50 pt-10 space-y-12">
        {/* Section 1: Detailed Breakdown of the 4 Sweet Traditions */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
              Culinary Taxonomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
              The Four Sweet Traditions Coexisting in Bandra West
            </h2>
            <p className="text-base text-[#493548]/85 leading-relaxed font-light">
              Bandra’s dessert landscape is exceptionally diverse. Here is how to distinguish between the four principal styles available across the suburb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-[#493548]">
                  1. Modern French Patisseries
                </h3>
                <span className="text-xs font-semibold text-[#E76F51]">Precision & Craft</span>
              </div>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Characterized by razor-sharp pastry lamination, mirror-glazed entremets, and crisp choux au craquelin filled with hazelnut praline or Madagascar vanilla. Best savoured on-site with an unsweetened Americano to balance the cultured butter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-[#493548]">
                  2. Heritage Village Ovens
                </h3>
                <span className="text-xs font-semibold text-[#84A98C]">Generational Heritage</span>
              </div>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Nostalgic wooden storefronts with warm glass vitrines. Look for dense, aromatic coconut baath cakes made with roasted semolina, cardamom mawa cakes, custard rolls, and butter cookies that evoke classic Bombay teatimes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-[#493548]">
                  3. Fudgy Brownie & Melted Chunk Cookies
                </h3>
                <span className="text-xs font-semibold text-[#E76F51]">Comfort & Decadence</span>
              </div>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                American-style bake bars specializing in dense, crackly-topped dark chocolate fudge brownies with sea salt and palm-sized chocolate chunk cookies featuring molten centres. Ideal for an afternoon sugar recharge.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F6BD9B]/50 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-[#493548]">
                  4. Small-Batch Gelato & Pure Sorbets
                </h3>
                <span className="text-xs font-semibold text-[#84A98C]">Artisan Churning</span>
              </div>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Churned daily in small batches using organic dairy or pure seasonal fruit pulp. Highlights include pure Alphonso mango during summer months, roasted Sicilian pistachio, and rich 70% dark chocolate dairy-free sorbets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Illustrative Spot Profiles */}
        <section className="space-y-6">
          <div className="border-b border-[#F6BD9B] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
                Artisanal Spotlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
                Illustrative Dessert & Pastry Profiles
              </h2>
            </div>
            <span className="text-xs text-[#84A98C] font-medium">
              Curated illustrative archetypes in Bandra West
            </span>
          </div>

          <p className="text-xs text-[#493548]/70 italic">
            *Note: To protect academic integrity and maintain full informational accuracy, the listings below represent illustrative neighbourhood archetypes reflecting Bandra’s genuine pastry traditions rather than commercial promises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DESSERT_SPOTS.map((spot, idx) => (
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
                    <strong className="text-[#493548]">Recommended Treat:</strong> {spot.typicalSpecialty}
                  </div>
                  <div>
                    <strong className="text-[#493548]">Peak Service Time:</strong> {spot.bestHour}
                  </div>
                  <div className="text-[11px] text-[#493548]/60 italic">
                    Atmosphere: {spot.vibe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Pairing Suggestions */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#493548]">
            Pairing Guide: Elevating Pastries with Specialty Brews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/70 border border-[#F6BD9B]/40 space-y-2">
              <h3 className="text-base font-serif font-bold text-[#493548]">
                Dark Chocolate & Single-Origin Pour-Overs
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Rich 70%+ ganache tarts benefit from the clean acidity of a light-roast washed coffee, cutting through heavy cocoa fats and highlighting fruity notes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-[#F6BD9B]/40 space-y-2">
              <h3 className="text-base font-serif font-bold text-[#493548]">
                Laminated Croissants & Flat Whites
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Flaky butter layers need velvety microfoam. A balanced double-shot flat white melts into buttery viennoiserie without overpowering delicate yeast nuances.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-[#F6BD9B]/40 space-y-2">
              <h3 className="text-base font-serif font-bold text-[#493548]">
                Berry Tarts & Citrus Espresso Tonics
              </h3>
              <p className="text-xs sm:text-sm text-[#493548]/80 leading-relaxed">
                Fresh raspberry or lemon curd tarts pair impeccably with chilled tonic espresso, enhancing botanical and crisp notes during warm coastal afternoons.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Practical Takeaway & Humidity Care */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#FFF3E4] border border-[#F6BD9B] space-y-4">
          <h3 className="text-lg font-serif font-bold text-[#493548] flex items-center gap-2">
            <ThermometerSnowflake className="w-5 h-5 text-[#84A98C]" />
            <span>The Humidity Factor: Caring for Takeaway Pastries in Mumbai</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#493548]/85 leading-relaxed">
            <div className="space-y-1">
              <strong className="text-[#493548] block">Ventilated Boxes:</strong>
              <p>Never seal hot or warm baked goods in plastic bags; condensation instantly destroys crispy crusts and laminations.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#493548] block">2-Hour Fresh Window:</strong>
              <p>Choux pastry, éclairs, and cream-filled tarts should be refrigerated within two hours to preserve dairy texture.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#493548] block">Oven Reheating Rule:</strong>
              <p>Avoid microwave reheating. Refresh croissants and tarts in a preheated oven at 170°C for 3–4 minutes for restored flakiness.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[#F6BD9B]/60 shadow-xs space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#493548]">
            Conclusion: The Sweet Soul of the Queen of Suburbs
          </h2>
          <p className="text-sm text-[#493548]/85 leading-relaxed">
            Bandra’s sweet trail represents the finest qualities of Mumbai’s creative spirit: deep respect for generational culinary history paired with fearless contemporary craft. Whether you are holding a paper cup of warm chai with a coconut baath slice in a village lane or spooning delicate pistachio praline choux in a sleek Pali Naka salon, Bandra West invites you to slow down, share a table, and savour every bite.
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
                Budget Cafés Guide
              </Link>
              <Link
                href="/brunch-near-carter-road"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg bg-[#E76F51] hover:bg-[#d65f42] text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Carter Road Brunch Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-[#493548]/60">
            Want a savory breakfast first? Read our coastal guide to <Link href="/brunch-near-carter-road" className="text-[#E76F51] underline font-medium">Brunch Near Carter Road</Link>.
          </div>
        </footer>
      </div>
    </article>
  );
}
