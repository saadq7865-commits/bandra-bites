import { Link } from '../router';
import { MapPin } from 'lucide-react';
import { ARTICLES } from '../data/articles';

export function Footer() {
  return (
    <footer className="bg-[#493548] text-[#FFF3E4] border-t border-[#F6BD9B]/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Editorial Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-[#FFF3E4]">Bandra Bites</span>
              <span className="text-xs uppercase tracking-widest text-[#F6BD9B] font-medium border-l border-[#F6BD9B]/40 pl-2">
                Mumbai
              </span>
            </div>
            <p className="text-sm text-[#FFF3E4]/80 leading-relaxed">
              An independent, street-level editorial discovery guide celebrating the cafés, heritage bakeries, coastal brunch decks, and sweet ateliers of Bandra West, Mumbai.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F6BD9B]">
              <MapPin className="w-3.5 h-3.5 text-[#E76F51] shrink-0" />
              <span>Bandra West (Pali Hill, Carter Road, Ranwar, Hill Road), Mumbai 400050</span>
            </div>
          </div>

          {/* 10 Editorial Guides Directory */}
          <div className="md:col-span-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F6BD9B]">
              The 10 Editorial Guides
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {ARTICLES.map((article) => (
                <Link
                  key={article.id}
                  href={article.route}
                  className="hover:text-[#F6BD9B] transition-colors text-[#FFF3E4]/85 leading-snug py-0.5 truncate block"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Academic & Editorial Context */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F6BD9B]">
              Assignment Project Info
            </p>
            <div className="text-xs text-[#FFF3E4]/70 space-y-2 leading-relaxed">
              <p>
                Created as a practical website project for an academic <span className="text-[#FFF3E4] font-medium">SEO & AEO Fundamentals</span> study track.
              </p>
              <p>
                Features 10 substantial articles with verified local neighbourhood context, clearly labelled illustrative models, and prepared SEO baselines.
              </p>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-[#FFF3E4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF3E4]/60">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Bandra Bites. Crafted with local care in Mumbai.</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#FFF3E4]/60">
            <span>Responsive Web Design</span>
            <span>·</span>
            <span>10 Working Routes</span>
            <span>·</span>
            <span>Vercel & GitHub Ready</span>
            <span>·</span>
            <span>Initial Baseline Version</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
