"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface UserNavbarProps {
  activePath?: string;
  showSearch?: boolean;
  ctaText?: string;
}

export function UserNavbar({ activePath = '/community', showSearch = false, ctaText = 'Register Your Ride' }: UserNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white border-b-2 border-black`}>
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a href="/" className="font-display text-[26px] tracking-[0.08em] text-black no-underline shrink-0 flex">
            RIMOTO<em className="bg-accent text-black px-1.5 not-italic ml-1">GEAR</em>
          </a>

          {showSearch && (
            <div className="flex-1 max-w-[480px] relative hidden md:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-[13px] pointer-events-none">🔍</span>
              <input 
                type="text" 
                placeholder="Search reviews, routes, questions..." 
                className="w-full bg-white border border-border-d text-black font-sans text-[12px] py-2.5 pr-3.5 pl-9 outline-none transition-colors border-b focus:border-black placeholder:text-muted" 
              />
            </div>
          )}

          <ul className={`hidden md:flex gap-7 list-none items-center ${showSearch ? 'ml-auto' : 'flex-1 justify-center'}`}>
            <li>
              <a href="https://rimotogear.com" target="_blank" className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-muted hover:text-black transition-colors whitespace-nowrap">Shop Gear ↗</a>
            </li>
            <li>
              <a href="/" className={`font-sans text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${activePath === '/' ? 'text-black border-b-2 border-accent pb-0.5' : 'text-muted hover:text-black'}`}>
                Ride Board
                {!showSearch && <span className="inline-flex items-center justify-center bg-accent text-black text-[8px] font-bold px-1.5 py-0.5 ml-1.5 tracking-[0.05em] align-middle">NEW</span>}
              </a>
            </li>
            <li>
               <a href="/reviews" className={`font-sans text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${activePath === '/reviews' ? 'text-black border-b-2 border-accent pb-0.5' : 'text-muted hover:text-black'}`}>Forum</a>
            </li>
            {!showSearch && (
              <li>
                <a href="#about" className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-muted hover:text-black transition-colors whitespace-nowrap">About</a>
              </li>
            )}
          </ul>

          <Button variant="primary" className="hidden md:flex bg-black text-white hover:bg-accent hover:text-black shrink-0 border-none px-5 py-2.5 text-[11px]" size="md">
            {ctaText}
          </Button>

          <button className="md:hidden bg-transparent border-none p-1.5 cursor-pointer text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b-2 border-black z-[49] p-4 px-5 flex flex-col">
          <a href="https://rimotogear.com" target="_blank" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted decoration-none py-3 border-b border-border hover:text-black">Shop Gear ↗</a>
          <a href="/" className={`text-[11px] font-semibold uppercase tracking-[0.15em] decoration-none py-3 border-b border-border hover:text-black ${activePath==='/'?'text-black':''}`}>Ride Board</a>
          <a href="/reviews" className={`text-[11px] font-semibold uppercase tracking-[0.15em] decoration-none py-3 border-b border-border hover:text-black ${activePath==='/reviews'?'text-black':''}`}>Forum</a>
          <button className="mt-3 bg-black text-white text-center p-3 font-bold cursor-pointer border-none font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-accent hover:text-black transition-colors">
            {ctaText}
          </button>
        </div>
      )}
    </>
  );
}
