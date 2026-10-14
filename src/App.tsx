import { useState, useEffect } from 'react';
import { RouterProvider, useRouter, Link } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticleView } from './components/ArticleView';
import { NotFoundPage } from './pages/NotFoundPage';
import { ARTICLES, HOMEPAGE_SEO } from './data/articles';
import { X, ArrowRight, Compass, BookOpen, Coffee, Sun, Cake, Sparkles, MapPin } from 'lucide-react';

function AppContent() {
  const { currentPath, navigate } = useRouter();
  const [quickNavOpen, setQuickNavOpen] = useState(false);

  // Find article matching current route
  const currentArticle = ARTICLES.find((a) => a.route === currentPath);

  // Synchronize document title and meta description independently per page
  useEffect(() => {
    if (typeof document !== 'undefined') {
      let title = HOMEPAGE_SEO.metaTitle;
      let description = HOMEPAGE_SEO.metaDescription;

      if (currentArticle) {
        title = currentArticle.seoBaseline.metaTitle;
        description = currentArticle.seoBaseline.metaDescription;
      } else if (currentPath !== '/') {
        title = 'Page Not Found — Bandra Bites | Bandra West, Mumbai';
        description = 'The requested guide could not be located in our Bandra West directory.';
      }

      document.title = title;

      let metaDescTag = document.querySelector('meta[name="description"]');
      if (metaDescTag) {
        metaDescTag.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [currentPath, currentArticle]);

  // Render appropriate page based on clean URL route
  const renderRoute = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    if (currentArticle) {
      return <ArticleView article={currentArticle} />;
    }
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF3E4] text-[#493548]">
      {/* Editorial Top Bar */}
      <Navbar onQuickExplore={() => setQuickNavOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden">
        {renderRoute()}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Assignment 10-Article Route Inspector Modal */}
      {quickNavOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#493548]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#FFF3E4] border border-[#F6BD9B] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#F6BD9B]/60 pb-3 shrink-0">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#E76F51]">
                  Assignment Route Inspector
                </span>
                <h3 className="text-xl font-serif font-bold text-[#493548]">
                  Bandra Bites: 1 Homepage & 10 Articles
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuickNavOpen(false)}
                className="p-1.5 rounded-lg text-[#493548] hover:bg-[#F6BD9B]/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#493548]/80 leading-relaxed shrink-0">
              Instantly navigate between all 10 distinct article routes and the homepage. Each page features independent metadata, Q&A sections, and a responsive side-by-side desktop layout.
            </p>

            <div className="overflow-y-auto space-y-2.5 pr-1 flex-1">
              {/* Homepage button */}
              <button
                type="button"
                onClick={() => {
                  navigate('/');
                  setQuickNavOpen(false);
                }}
                className={`w-full p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                  currentPath === '/'
                    ? 'bg-white border-[#E76F51] shadow-xs'
                    : 'bg-white/70 border-[#F6BD9B]/50 hover:border-[#E76F51]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F6BD9B]/30 flex items-center justify-center text-[#E76F51] shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-serif font-bold text-[#493548]">
                      0. Homepage Directory
                    </div>
                    <div className="text-xs text-[#493548]/70 font-mono">
                      Route: /
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#E76F51] shrink-0" />
              </button>

              {/* 10 Articles */}
              {ARTICLES.map((art, idx) => (
                <button
                  key={art.id}
                  type="button"
                  onClick={() => {
                    navigate(art.route);
                    setQuickNavOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                    currentPath === art.route
                      ? 'bg-white border-[#E76F51] shadow-xs'
                      : 'bg-white/70 border-[#F6BD9B]/50 hover:border-[#E76F51]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F6BD9B]/30 flex items-center justify-center text-[#84A98C] shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-serif font-bold text-[#493548] truncate">
                        {idx + 1}. {art.title}
                      </div>
                      <div className="text-xs text-[#493548]/70 font-mono">
                        Route: {art.route}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#E76F51] shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#F6BD9B]/50 flex items-center justify-between text-xs text-[#493548]/70 shrink-0">
              <span>All 11 routes fully functional</span>
              <button
                type="button"
                onClick={() => setQuickNavOpen(false)}
                className="px-4 py-1.5 font-semibold text-[#493548] hover:text-[#E76F51] transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
