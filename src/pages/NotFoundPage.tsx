import { Link } from '../router';
import { ArrowLeft, Compass, Coffee } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 mx-auto rounded-full bg-[#F6BD9B]/40 flex items-center justify-center text-[#E76F51]">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#E76F51]">
          Lost in the Village Lanes?
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#493548]">
          Page Not Found (404)
        </h1>
        <p className="text-sm sm:text-base text-[#493548]/80 leading-relaxed max-w-md mx-auto">
          The bylane or café guide you are looking for isn't on our map. Let’s head back to the main Bandra Bites directory.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#E76F51] hover:bg-[#d65f42] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>

      <div className="pt-8 border-t border-[#F6BD9B]/50 text-xs text-[#493548]/70 space-y-2">
        <div className="font-semibold text-[#493548]">Or jump directly to an editorial guide:</div>
        <div className="flex flex-wrap justify-center gap-4 text-[#E76F51]">
          <Link href="/budget-cafes-bandra-west" className="hover:underline">Budget Cafés</Link>
          <span>·</span>
          <Link href="/brunch-near-carter-road" className="hover:underline">Carter Rd Brunch</Link>
          <span>·</span>
          <Link href="/desserts-bandra-west" className="hover:underline">Desserts & Patisserie</Link>
        </div>
      </div>
    </div>
  );
}
