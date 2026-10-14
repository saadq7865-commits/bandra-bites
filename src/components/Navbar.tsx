import { useState } from 'react';
import { Link, useRouter } from '../router';
import { Menu, X, ArrowRight, BookOpen } from 'lucide-react';

interface NavbarProps {
  onQuickExplore?: () => void;
}

export function Navbar({ onQuickExplore }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Budget Cafés', href: '/budget-cafes-bandra-west' },
    { label: 'Carter Rd Brunch', href: '/brunch-near-carter-road' },
    { label: 'Desserts', href: '/desserts-bandra-west' },
    { label: 'Specialty Coffee', href: '/specialty-coffee-bandra-west' },
  ];

  const handleActionClick = () => {
    if (onQuickExplore) {
      onQuickExplore();
    } else {
      navigate('/#articles-directory');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF3E4]/95 backdrop-blur-md border-b border-[#F6BD9B]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark in display editorial serif */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#493548] hover:text-[#E76F51] transition-colors whitespace-nowrap shrink-0"
          >
            Bandra Bites
          </Link>

          {/* Zone 2: Desktop Nav links with subtle underlines */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#493548]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#E76F51] font-semibold'
                      : 'text-[#493548]/80 hover:text-[#493548]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E76F51] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary action + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleActionClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E76F51] hover:bg-[#d65f42] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E76F51]"
            >
              <span>Explore All 10 Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#493548] hover:text-[#E76F51] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#F6BD9B] bg-[#FFF3E4] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F6BD9B]/40 text-[#E76F51] font-semibold'
                      : 'text-[#493548] hover:bg-[#F6BD9B]/20'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-[#F6BD9B]/50">
              <button
                onClick={handleActionClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#E76F51] hover:bg-[#d65f42] rounded-lg shadow-sm transition-all"
              >
                <span>Browse All 10 Guides</span>
                <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
