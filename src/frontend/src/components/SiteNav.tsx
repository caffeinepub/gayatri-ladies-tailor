import { Link, useRouterState } from '@tanstack/react-router';
import { content } from '../content/gu';
import BrandHeader from './BrandHeader';

export default function SiteNav() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { path: '/', label: content.nav.home },
    { path: '/about', label: content.nav.about },
    { path: '/services', label: content.nav.services },
    { path: '/contact', label: content.nav.contact },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container max-w-4xl mx-auto px-4 py-4">
        <BrandHeader className="text-center mb-4" />
        <nav className="flex justify-center">
          <ul className="flex flex-wrap gap-2 sm:gap-6 justify-center">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-base sm:text-lg font-medium px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'text-brand-red bg-brand-red/5 border-b-2 border-brand-red'
                        : 'text-foreground hover:text-brand-red hover:bg-brand-red/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
