import { Outlet } from '@tanstack/react-router';
import SiteNav from './SiteNav';
import { SiCaffeine } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-border py-6 mt-12">
        <div className="container max-w-4xl mx-auto px-4 text-center text-sm text-foreground">
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            © 2026. Built with <Heart className="w-4 h-4 text-brand-red fill-brand-red" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-red hover:underline font-medium"
            >
              <SiCaffeine className="w-4 h-4" />
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
