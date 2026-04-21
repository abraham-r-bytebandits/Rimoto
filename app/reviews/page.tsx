"use client";

import React, { useState } from 'react';
import { UserNavbar } from '@/components/layout/UserNavbar';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { forumPosts } from '@/constants/mockData';

export default function ReviewsForumPage() {
  const [activeSort, setActiveSort] = useState('Hot');
  const [activeNav, setActiveNav] = useState('All Reviews');
  const [isJoined, setIsJoined] = useState(false);

  // Left Nav items
  const navSections = [
    {
       title: 'Categories',
       items: [
         { name: 'All Reviews', icon: '📝', count: '1.2K' },
         { name: 'Route Reports', icon: '🗺️', count: '458' },
         { name: 'Cafe & Pitstops', icon: '☕', count: '234' },
         { name: 'Gear Analysis', icon: '🛡️', count: '189' },
       ]
    },
    {
       title: 'Popular Regions',
       items: [
         { name: 'East Coast Road', icon: '🌊', count: null },
         { name: 'Yelagiri / Yercaud', icon: '⛰️', count: null },
         { name: 'OMR Outskirts', icon: '🏙️', count: null },
         { name: 'Pondicherry', icon: '🏖️', count: null },
       ]
    }
  ];

  const getFlairVariant = (type: string) => {
    switch(type) {
       case 'adv': return 'advanced';
       case 'int': return 'info';
       case 'rev': return 'accent';
       case 'tip': return 'outline';
       case 'gear': return 'neutral';
       default: return 'outline';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <UserNavbar activePath="/reviews" showSearch={true} ctaText="Write a Review" />

      {/* BANNER */}
      <div className="bg-black border-b-[3px] border-accent p-0">
        <div className="h-[120px] bg-[repeating-linear-gradient(45deg,#111_0px,#111_10px,#161616_10px,#161616_20px)] relative overflow-hidden flex items-center pr-10">
          <div className="ml-auto font-display text-[clamp(48px,6vw,80px)] tracking-[0.05em] text-white/5 whitespace-nowrap hidden sm:block">RIDE REVIEWS</div>
        </div>
        <div className="max-w-[1440px] auto px-6 pb-5 flex items-end gap-5 mx-auto">
          <div className="w-[72px] h-[72px] bg-accent border-[3px] border-accent flex items-center justify-center text-[32px] shrink-0 -mt-7 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            🏍️
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-[28px] tracking-[0.04em] uppercase text-white leading-none mb-1">Rimoto Ride Reviews</h1>
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">r/rimotoreviews • Community since 2024</div>
          </div>
          <div className="flex gap-2 items-center">
            <Button 
               variant={isJoined ? "primary" : "accent"} 
               className={isJoined ? 'border-transparent' : 'border-black'} 
               onClick={() => setIsJoined(!isJoined)}
            >
              {isJoined ? 'Joined' : 'Join'}
            </Button>
          </div>
        </div>
      </div>

      {/* SORT BAR */}
      <div className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-1 h-[46px] overflow-x-auto">
          {['Hot', 'New', 'Top'].map(sort => (
            <button 
              key={sort}
              onClick={() => setActiveSort(sort)}
              className={`text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 border min-w-fit cursor-pointer flex items-center gap-1.5 transition-all outline-none ${activeSort === sort ? 'bg-accent text-black border-accent' : 'bg-transparent text-muted border-transparent hover:text-black hover:bg-white hover:border-border-d'}`}
            >
              {sort === 'Hot' ? '🔥' : (sort === 'New' ? '✨' : '📈')} {sort}
            </button>
          ))}
          <div className="w-[1px] h-[18px] bg-border mx-1.5"></div>
          <button className="ml-auto text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 border border-border-d text-muted bg-white cursor-pointer transition-all hover:bg-black hover:text-white hover:border-black whitespace-nowrap min-w-fit hidden sm:block">
            Filter View
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 w-full grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr_312px] gap-4 items-start">
        
        {/* LEFT NAV */}
        <aside className="sticky top-[110px] hidden md:flex flex-col gap-[2px]">
           {navSections.map((sec, i) => (
             <React.Fragment key={sec.title}>
               <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-l px-3 pt-3.5 pb-1.5">{sec.title}</div>
               {sec.items.map(item => (
                  <button 
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    className={`flex items-center gap-2.5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-all border outline-none cursor-pointer w-full text-left ${activeNav === item.name ? 'text-black bg-accent border-accent font-bold' : 'text-muted border-transparent bg-transparent hover:text-black hover:bg-white hover:border-border'}`}
                  >
                     <span className="text-[14px] shrink-0">{item.icon}</span>
                     <span className="truncate">{item.name}</span>
                     {item.count && <span className={`ml-auto text-[10px] font-bold ${activeNav === item.name ? 'text-black' : 'text-muted-l'}`}>{item.count}</span>}
                  </button>
               ))}
               {i < navSections.length - 1 && <div className="h-[1px] bg-border my-1.5" />}
             </React.Fragment>
           ))}
        </aside>

        {/* FEED */}
        <main className="flex flex-col gap-[2px]">
          {/* CREATE POST */}
          <div className="bg-white border text-left border-border p-3.5 px-4 flex items-center gap-3 mb-[2px] transition-colors hover:border-border-d cursor-pointer" onClick={() => {}}>
            <div className="w-9 h-9 bg-border flex items-center justify-center shrink-0">👤</div>
            <input type="text" placeholder="Share a route, tip, or review..." className="flex-1 bg-white border border-border-d text-black font-sans text-[12px] px-3.5 py-2.5 outline-none transition-colors focus:border-black placeholder:text-muted cursor-pointer" readOnly />
            <Button className="hidden sm:inline-flex" size="sm">Post</Button>
          </div>

          {/* POSTS LIST */}
          {forumPosts.map(post => (
            <div key={post.id} className={`bg-white border text-left border-border flex transition-all duration-200 cursor-pointer group hover:border-black hover:shadow-[3px_3px_0_var(--color-accent)] ${post.isPinned ? 'border-l-[3px] border-l-accent' : ''}`}>
              
              {/* Vote Col */}
              <div className="w-11 bg-white flex flex-col items-center py-2.5 gap-1 border-r border-border shrink-0">
                <button className="w-7 h-7 bg-transparent border-none outline-none cursor-pointer flex items-center justify-center text-[16px] text-muted transition-colors hover:text-black hover:bg-gray-100 p-0">▲</button>
                <div className="text-[11px] font-bold text-black tracking-[0.02em]">{post.votes}</div>
                <button className="w-7 h-7 bg-transparent border-none outline-none cursor-pointer flex items-center justify-center text-[16px] text-muted transition-colors hover:text-black hover:bg-gray-100 p-0">▼</button>
              </div>

              {/* POST BODY */}
              <div className="flex-1 p-3.5 px-4 pb-3 min-w-0 flex flex-col">
                 <div className="flex items-center gap-2 flex-wrap mb-2">
                    {post.isPinned && <span className="bg-accent text-black text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 inline-block">PINNED</span>}
                    <Badge variant={getFlairVariant(post.flairType as string)} size="xs" className="border-transparent">
                      {post.flair}
                    </Badge>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Posted by <strong className="text-black">{post.author}</strong></div>
                    <span className="text-border-d text-[10px]">•</span>
                    <div className="text-[10px] text-muted-l font-medium">{post.time}</div>
                 </div>

                 <h3 className="font-display text-[20px] tracking-[0.03em] uppercase text-black leading-[1.1] mb-2 transition-colors group-hover:text-black/80">{post.title}</h3>

                 {post.rating && (
                   <div className="flex items-center gap-1 mb-2">
                     <span className="text-[13px] text-accent">★</span><span className="text-[13px] text-accent">★</span><span className="text-[13px] text-accent">★</span><span className="text-[13px] text-accent">★</span><span className="text-[13px] text-border-d">★</span>
                     <span className="text-[11px] font-bold text-black tracking-[0.05em] ml-1">3.5</span>
                   </div>
                 )}

                 <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted mb-2.5">
                    <span className="text-accent">📍</span> {post.routeTag}
                 </div>

                 <p className="text-[13px] text-text-2 leading-[1.65] mb-2.5 line-clamp-3 overflow-hidden">{post.preview}</p>

                 <div className="flex items-center gap-3.5 flex-wrap mt-auto pt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted hover:bg-gray-100 cursor-pointer p-1 -ml-1">
                      💬 {post.comments} Comments
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted hover:bg-gray-100 cursor-pointer p-1">
                      ↗ Share
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted hover:bg-gray-100 cursor-pointer p-1">
                      🔖 Save
                    </div>
                 </div>
              </div>
            </div>
          ))}
          <Button variant="ghost" className="mt-4 border border-border-d text-muted hover:text-black">Load More</Button>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="sticky top-[110px] hidden lg:flex flex-col gap-[2px]">
           
           <div className="bg-white border border-border overflow-hidden">
             <div className="p-3.5 px-4 bg-black flex items-center justify-between">
               <h3 className="font-display text-[18px] tracking-[0.05em] uppercase text-white">About Community</h3>
             </div>
             <div className="p-4">
               <p className="text-[12px] text-muted leading-[1.75] mb-3.5">The official forum for Rimoto riders in Chennai. Share route conditions, post detailed ride reviews, trade gear advice, and connect with fellow enthusiasts.</p>
               
               <div className="grid grid-cols-2 gap-[2px] mb-3.5">
                  <div className="p-2.5 border border-border text-center">
                    <div className="font-display text-[22px] text-black leading-none">12.4K</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted mt-[3px]">Members</div>
                  </div>
                  <div className="p-2.5 border border-border text-center flex flex-col justify-center relative">
                    <div className="absolute top-2.5 right-2 w-1.5 h-1.5 bg-success rounded-full"></div>
                    <div className="font-display text-[22px] text-black leading-none">42</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted mt-[3px]">Online</div>
                  </div>
               </div>
               
               <Button className="w-full">CREATE POST</Button>
             </div>
           </div>

           <div className="bg-white border border-border overflow-hidden mt-4">
             <div className="p-3.5 px-4 bg-white border-b border-border flex items-center justify-between">
               <h3 className="font-display text-[18px] tracking-[0.05em] uppercase text-black">Top Contributors</h3>
             </div>
             <div className="flex flex-col gap-0">
               {[
                 { num: 1, name: 'Praveen_Rider', pts: '4.2K', badge: 'Route Expert' },
                 { num: 2, name: 'NightOwl_07', pts: '3.8K', badge: 'Reviewer' },
                 { num: 3, name: 'ChennaiBikerGuy', pts: '2.1K', badge: null }
               ].map(u => (
                 <div key={u.num} className="p-3 px-4 border-b border-border flex items-center gap-3">
                   <div className="text-[12px] font-bold text-muted w-3">{u.num}</div>
                   <div className="w-7 h-7 bg-border flex items-center justify-center shrink-0 text-[10px]">👤</div>
                   <div className="flex-1 min-w-0">
                     <div className="text-[11px] font-bold text-black truncate">{u.name}</div>
                     <div className="text-[9px] text-muted font-semibold tracking-[0.05em]">{u.pts} pts</div>
                   </div>
                   {u.badge && <Badge size="xs" variant="outline" className="shrink-0">{u.badge}</Badge>}
                 </div>
               ))}
               <button className="text-[10px] font-bold uppercase tracking-[0.15em] text-black bg-white border-none py-2 cursor-pointer hover:bg-gray-50 flex items-center justify-center w-full mt-1">View Leaderboard</button>
             </div>
           </div>

           <div className="bg-white border border-border overflow-hidden mt-4 p-4 text-center">
             <div className="font-display text-[24px] text-black mb-2 leading-none">GEAR THAT <br/><span className="bg-accent px-1">CARRIES LEGACY</span></div>
             <p className="text-[11px] text-muted mb-4 uppercase tracking-[0.05em]">Shop the latest collection.</p>
             <Button variant="ghost" className="border border-black w-full">Shop Now</Button>
           </div>
        </aside>

      </div>
    </div>
  );
}
