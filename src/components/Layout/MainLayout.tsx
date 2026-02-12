import { Search, Sparkles } from 'lucide-react';
import { Toaster } from 'sonner';
import PokeballIcon from '@/components/PokeballIcon';
import { MobileNavButton, NavButton } from "@/components/Layout/Navigation";
import DecorativeBackground from "./DecorativeBackground";
import { Logo } from './Logo';
import { Link, Outlet } from '@tanstack/react-router';
import { useAppStore } from '@/store/appStore';
import { SkipToContent } from '../SkipToContent';

export function MainLayout() {
  const caughtList = useAppStore(state => state.caughtList);
  return (
    <div className="min-h-screen font-sans selection:bg-red-100 selection:text-red-900">
      <SkipToContent />
      <Toaster
        position="top-center"
        closeButton
        richColors
        toastOptions={{
          classNames: {
            toast: '!text-base py-4 !px-5',
            closeButton: '!w-8 !h-8 [&>svg]:w-4 [&>svg]:h-4',
          },
        }}
      />
      
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto md:grid grid-cols-15 items-center">
          <Link to="/" aria-label="PokéDaily Home" className="flex items-center gap-1.5 col-span-3">
            <Logo />
            <h1 className="text-2xl md:text-xl lg:text-2xl font-black italic tracking-tighter text-gray-900">
              Poké<span className="text-red-500">Daily</span>
            </h1>
          </Link>
          
          <nav aria-label="Main" className="hidden col-span-9 md:flex justify-self-center items-center gap-1 lg:gap-2 bg-gray-100 p-1 rounded-2xl">
            <NavButton 
              href="/"
              icon={<Sparkles className="w-4 h-4" />}
              label="Discovery"
            />
            <NavButton 
              href="/search"
              icon={<Search className="w-4 h-4" />}
              label="Search"
            />
            <NavButton 
              href="/collection"
              icon={<PokeballIcon className="w-4 h-4" active={false} />}
              count={caughtList?.length ?? 0}
              label="My Collection"
            />
          </nav>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
        <nav aria-label="Mobile" className="flex items-center justify-around bg-white/90 backdrop-blur-xl border border-white/20 p-2 rounded-[2rem] shadow-2xl shadow-black/10">
          <MobileNavButton
            href="/"
            icon={<Sparkles className="w-6 h-6" />}
            label="Discovery"
          />
          <MobileNavButton
            href="/search"
            icon={<Search className="w-6 h-6" />}
            label="Search"
          />
          <MobileNavButton
            href="/collection"
            icon={<PokeballIcon className="w-6 h-6" active={false} />}
            label="My Collection"
          />
        </nav>
      </div>

      <DecorativeBackground />
    </div>
  );
}