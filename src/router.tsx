import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

export const ROUTE_ALIASES: Record<string, string> = {
  '/specialty-coffee-bandra-west': '/coffee-spots-bandra-west',
  '/work-friendly-cafes-bandra-west': '/cafes-for-studying-bandra-west',
  '/irani-cafes-bandra-heritage': '/bakeries-bun-maska-bandra-west',
  '/pali-hill-cafes-guide': '/food-near-hill-road-bandra',
  '/late-night-cafes-bandra-west': '/breakfast-places-bandra-west',
  '/vegan-healthy-cafes-bandra': '/vegetarian-food-bandra-west',
  '/street-food-and-cafe-crawl-bandra': '/street-food-bandra-west',
};

interface RouterProviderProps {
  children: ReactNode;
  initialPath?: string;
}

export function RouterProvider({ children, initialPath }: RouterProviderProps) {
  // Normalize pathname to ensure leading slash, resolve aliases, and remove trailing slash (except root)
  const getNormalizedPath = (path: string): string => {
    let clean = path || '/';
    if (!clean.startsWith('/')) clean = '/' + clean;
    if (clean.length > 1 && clean.endsWith('/')) clean = clean.slice(0, -1);
    return ROUTE_ALIASES[clean] || clean;
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) {
      return getNormalizedPath(initialPath);
    }
    if (typeof window !== 'undefined') {
      return getNormalizedPath(window.location.pathname);
    }
    return '/';
  });

  const navigate = (path: string) => {
    const normalized = getNormalizedPath(path);
    if (normalized !== currentPath) {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', normalized);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setCurrentPath(normalized);
    } else {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      setCurrentPath(getNormalizedPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export function Link({ href, children, className = '', activeClassName = '', onClick, ...props }: LinkProps) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow standard behavior for external links, target=_blank, or meta keys (command/ctrl click)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      props.target === '_blank' ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('#')
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={href} onClick={handleClick} className={combinedClass} {...props}>
      {children}
    </a>
  );
}
