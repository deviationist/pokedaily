import { Link, useLocation } from '@tanstack/react-router';
import { cn } from '../ui/utils';

export function NavButton({ href, icon, label, count }: { href: string, icon: React.ReactNode, label: string, count?: number }) {
  const { pathname } = useLocation();
  const active = href === pathname;
  return (
    <Link
      to={href}
      preload="intent"
      className={cn(
        "flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500",
        active ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-700'
      )}
    >
      {icon}
      {label}
      {count !== undefined && count > 0 && (
        <span className={`ml-1 px-2 py-0.5 rounded-full text-[10px] ${active ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
          {count}
        </span>
      )}
    </Link>
  );
}

export function MobileNavButton({ href, icon, label, count }: { href: string, icon: React.ReactNode, label: string, count?: number }) {
  const { pathname } = useLocation();
  const active = href === pathname;
  return (
    <Link
      to={href}
      preload="intent"
      aria-label={label}
      className={cn(
        'relative p-4 rounded-full transition-all active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500',
        active ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'text-gray-400'
    )}
    >
      {icon}
      {count !== undefined && count > 0 && (
        <span className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center bg-amber-400 text-gray-900 text-[10px] font-black rounded-full border-2 border-white">
          {count}
        </span>
      )}
    </Link>
  );
}