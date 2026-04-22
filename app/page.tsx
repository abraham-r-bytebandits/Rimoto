"use client";

import React, { useState } from 'react';
import { UserNavbar } from '@/components/layout/UserNavbar';

// Dummy data for user page
const activeRides = [
  { id: 1, title: 'ECR SUNDAY BLITZ', route: 'CHENNAI → MAHABALIPURAM', emoji: '🌊', color: 'from-[#dbeef8] to-[#b8ddf0]', date: 'Apr 26', badges: ['🟢 Beginner'], time: '⏱️ 5:30 AM', bikes: '🏍️ All Bikes', dist: '📏 120 km', by: 'ECR Moto Club' },
  { id: 2, title: 'NILGIRI ASSAULT', route: 'CHENNAI → OOTY', emoji: '🌄', color: 'from-[#f5ede0] to-[#e8d5b0]', date: 'May 3', badges: ['🔴 Advanced'], time: '⏱️ 3:00 AM', bikes: '🏍️ 500cc+', dist: '📏 540 km', by: 'Thunderbolts MC', isAdvanced: true },
  { id: 3, title: 'PONDY NIGHT RUN', route: 'CHENNAI → PONDICHERRY', emoji: '🌙', color: 'from-[#ede0f5] to-[#d5c8e8]', date: 'Apr 25', badges: ['🟡 Intermediate'], time: '⏱️ 9:00 PM', bikes: '🏍️ 250cc+', dist: '📏 160 km', by: 'Night Owls MC', isInt: true },
  { id: 4, title: 'YERCAUD FIRST CLIMB', route: 'CHENNAI → YERCAUD', emoji: '🏕️', color: 'from-[#e0f0e8] to-[#c5ddd0]', date: 'May 10', badges: ['🟢 Beginner'], time: '⏱️ 5:00 AM', bikes: '🏍️ All Bikes', dist: '📏 380 km', by: 'South India Bikers' }
];

const stories = [
  { id: 1, title: "CHENNAI TO YELAGIRI — THE BEGINNER'S GUIDE", excerpt: "First time doing a hill station? Here's everything you need to know — packing, fuel stops, when to leave, and what to expect on NH234.", author: 'Arjun Nair', dest: 'YELAGIRI', emoji: '🌅', color: 'from-[#d4edda] to-[#a8d5b5]' },
  { id: 2, title: 'PONDICHERRY NIGHT RIDE — WHAT NOBODY TELLS YOU', excerpt: 'The road at midnight is a different beast. Hitting the Pondy highway at 10PM with 8 riders was the best call I ever made.', author: 'Priya Menon', dest: 'PONDICHERRY', emoji: '🌙', color: 'from-[#d8d8f0] to-[#b8b8e0]' },
  { id: 3, title: 'MY FIRST SOLO RIDE — CHENNAI TO OOTY AND BACK', excerpt: "540km alone on a Royal Enfield Meteor 350. What I feared, what surprised me, and why I'll do it again next month.", author: 'Karthik R', dest: 'OOTY', emoji: '🏔️', color: 'from-[#f0ddd4] to-[#e0c0b0]' },
  { id: 4, title: 'THE GREAT SOUTH — RAMESWARAM IN 36 HOURS', excerpt: "A weekend sprint to the tip of the Indian peninsula. Flat roads, fried fish, and a sunrise you can't believe.", author: 'Deepak S', dest: 'RAMESWARAM', emoji: '🌊', color: 'from-[#fde8b0] to-[#f7c875]' },
];

export default function CommunityPage() {
  const [filter, setFilter] = useState('All Rides');

  const filters = ['All Rides', '🌅 This Weekend', '📍 Near Chennai', '🟢 Beginner', '⚡ ECR Rides', '🏔️ Hill Climbs', '🌙 Night Rides', 'Solo Friendly'];

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <UserNavbar activePath="/" ctaText="+ List a Ride" />

      {/* FILTER BAR 50px */}
      <div className="bg-white border-b border-border">
        <div className="max-w-[1440px] mx-auto px-10 py-3 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mr-2 shrink-0">Filter:</span>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] font-bold uppercase tracking-[0.12em] px-3.5 py-[7px] border cursor-pointer transition-all whitespace-nowrap ${filter === f ? 'bg-accent text-black border-accent' : 'bg-white border-border-d text-muted hover:bg-accent hover:text-black hover:border-accent'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 md:px-10 py-[56px] w-full">
        {/* RIDE BOARD HERO SECTION */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">Upcoming Rides</p>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.02em] uppercase leading-none text-black">
              RIDE <b>BOARD</b>
            </h2>
          </div>
          <a href="#" className="text-[11px] font-bold uppercase tracking-[0.15em] text-black no-underline border-b-2 border-black pb-0.5 transition-colors hover:border-accent whitespace-nowrap">View All Rides →</a>
        </div>

        {/* RIDES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {/* Featured */}
          <div className="bg-black !border-black min-h-[280px] grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-2 lg:col-span-3 transition-colors hover:shadow-[4px_4px_0_var(--color-accent)] cursor-pointer">
            <div className="bg-gradient-to-br from-[#222] to-[#111] flex items-center justify-center text-[80px] text-gray-600 relative overflow-hidden h-[190px] md:h-auto">
              🏔️
              <div className="absolute top-4 left-4 bg-accent text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 z-10">⭐ Featured This Weekend</div>
            </div>
            <div className="p-9 flex flex-col justify-center text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent mb-3.5">CHENNAI → YELAGIRI</p>
              <h3 className="font-display text-[30px] tracking-[0.03em] uppercase text-white mb-1.5 leading-none">YELAGIRI<br />SUNRISE PUSH</h3>
              <div className="flex flex-wrap gap-3 mt-4 mb-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45 flex items-center gap-1">📅 Apr 27, 2025</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45 flex items-center gap-1">🟢 Beginner</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45 flex items-center gap-1">🏍️ All Bikes</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45 flex items-center gap-1">📏 230 km</div>
              </div>
              <p className="text-[12px] text-white/45 leading-relaxed mb-5">Leave Chennai at 4AM, catch sunrise at Yelagiri hilltop. Easy climb, great roads. 22 slots remaining.</p>
              <div className="flex items-center justify-between pt-3.5 border-t border-white/10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/40">
                  By <span className="text-white/65">Chennai Riders Collective</span>
                </div>
                <button className="bg-white text-black text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-2 hover:bg-accent transition-colors flex items-center gap-1.5 border-none cursor-pointer">
                  💬 Join on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {activeRides.map(ride => (
            <div key={ride.id} className="bg-white border text-left border-border overflow-hidden transition-all duration-200 cursor-pointer hover:border-black hover:shadow-[4px_4px_0_var(--color-accent)] group">
              <div className="h-[190px] overflow-hidden relative">
                <div className={`w-full h-full flex items-center justify-center font-display text-[48px] bg-gradient-to-br ${ride.color}`}>
                  {ride.emoji}
                </div>
                <div className={`absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] z-10 ${ride.isAdvanced ? 'bg-black text-white' : (ride.isInt ? 'bg-[#555] text-white' : 'bg-accent text-black')}`}>
                  {ride.badges[0]}
                </div>
                <div className="absolute top-3 right-3 bg-black text-white text-[9px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 z-10">
                  {ride.date}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted mb-3.5">{ride.route}</p>
                <h3 className="font-display text-[22px] tracking-[0.03em] uppercase text-black mb-1.5 leading-none">{ride.title}</h3>
                <div className="flex gap-3 mb-4 flex-wrap mt-4">
                  <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {ride.time}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {ride.bikes}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {ride.dist}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3.5 border-t border-border mt-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                    By <span className="text-text-2">{ride.by}</span>
                  </div>
                  <button className="bg-black text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-2 border-none cursor-pointer transition-colors hover:bg-accent hover:text-black flex items-center gap-1.5">
                    💬 Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STORIES SECTION */}
        <div className="mt-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">From The Road</p>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.02em] uppercase leading-none text-black">
                RIDE <b>STORIES</b>
              </h2>
            </div>
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.15em] text-black no-underline border-b-2 border-black pb-0.5 transition-colors hover:border-accent whitespace-nowrap">All Stories →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
            {stories.map(story => (
              <div key={story.id} className="bg-white border text-left border-border overflow-hidden transition-all duration-200 cursor-pointer hover:border-black hover:shadow-[4px_4px_0_var(--color-accent)] flex flex-col">
                <div className={`h-[200px] overflow-hidden relative bg-gradient-to-br ${story.color}`}>
                  <div className="w-full h-full flex items-center justify-center font-display text-[52px]">
                    {story.emoji}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-accent text-black text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 z-10">{story.dest}</div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-[19px] tracking-[0.03em] uppercase text-black mb-2 leading-[1.15]">{story.title}</h3>
                  <p className="text-[12px] text-muted leading-[1.7] mb-3.5 flex-1">{story.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">By <span className="text-black ml-1">{story.author}</span></div>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-[0.15em] text-black no-underline border-b border-black pb-[1px] hover:border-accent">Read →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-black text-white text-[11px] font-bold uppercase tracking-[0.15em] px-[36px] py-[14px] hover:bg-accent hover:text-black transition-colors cursor-pointer border-none">
              Submit Your Story
            </button>
          </div>
        </div>

        {/* ROUTES MAP */}
        <div className="mt-14 pt-14 border-t border-border">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted mb-2">Explore Routes</p>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] tracking-[0.02em] uppercase leading-none text-black">
                POPULAR <b>ROUTES</b>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="flex flex-col gap-[2px]">
              {[
                { num: '01', name: 'ECR COASTAL STRETCH', stat: 'Chennai → Mahabalipuram via East Coast Road.', riders: '12 ›' },
                { num: '02', name: 'YELAGIRI CLIMB', stat: 'NH234 to Yelagiri Hills. Beginner-friendly.', riders: '8 ›' },
                { num: '03', name: 'PONDY HIGHWAY', stat: 'Chennai → Pondicherry via NH32. Night favourite.', riders: '18 ›' },
                { num: '04', name: 'NILGIRI ASSAULT', stat: 'Chennai → Ooty via Mettupalayam. 36 hairpins.', riders: '5 ›' },
                { num: '05', name: 'YERCAUD LOOP', stat: 'Salem via Yercaud Hills. Perfect day trip.', riders: '6 ›' },
              ].map((r) => (
                <div key={r.num} className={`bg-white border border-border p-[18px] px-5 flex items-center gap-4 cursor-pointer transition-all hover:border-black hover:shadow-[3px_3px_0_var(--color-accent)]`}>
                  <div className="font-display text-[28px] text-muted min-w-[40px] opacity-40">{r.num}</div>
                  <div className="flex-1 text-left">
                    <div className="font-display text-[18px] tracking-[0.03em] uppercase text-black mb-1">{r.name}</div>
                    <div className="text-[11px] text-muted leading-[1.5]">{r.stat}</div>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">{r.riders}</div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-border h-[440px] relative overflow-hidden flex items-center justify-center">
              {/* Map Grid Background */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

              {/* Map Watermark */}
              <div className="text-[64px] text-black/5 font-display tracking-[0.05em] uppercase absolute pointer-events-none z-10">TN RIDES</div>

              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 600 480">
                <path d="M180 336 Q210 380 228 408" stroke="#0A0A0A" strokeWidth="2" fill="none" strokeDasharray="5,4" opacity=".2" />
                <path d="M180 336 Q230 400 264 432" stroke="#0A0A0A" strokeWidth="1.5" fill="none" strokeDasharray="4,5" opacity=".15" />
                <path d="M180 336 Q140 250 120 168" stroke="#0A0A0A" strokeWidth="1.5" fill="none" strokeDasharray="4,5" opacity=".15" />
                <path d="M180 336 Q100 250 60 134" stroke="#0A0A0A" strokeWidth="1.5" fill="none" strokeDasharray="4,5" opacity=".12" />
              </svg>

              {/* Example Pins */}
              <div className="absolute z-20 flex flex-col items-center bottom-[28%] left-[30%] cursor-pointer mt-4">
                <div className="w-3 h-3 bg-accent relative outline outline-[1.5px] outline-black shadow-[0_0_10px_rgba(238,252,80,0.8)] z-20"></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-white bg-black px-2 py-1 mt-1.5 border border-black z-30">📍 CHENNAI</div>
              </div>

              <div className="absolute z-20 flex flex-col items-center bottom-[18%] left-[38%] cursor-pointer mt-4 hover:-translate-y-1 transition-transform">
                <div className="w-3 h-3 bg-black relative outline outline-[1.5px] outline-border-d"></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-black bg-white px-2 py-1 mt-1.5 border border-border-d z-30">MAHABALIPURAM</div>
              </div>

              <div className="absolute z-20 flex flex-col items-center bottom-[12%] left-[44%] cursor-pointer mt-4 hover:-translate-y-1 transition-transform">
                <div className="w-3 h-3 bg-black relative outline outline-[1.5px] outline-border-d"></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-black bg-white px-2 py-1 mt-1.5 border border-border-d z-30">PONDICHERRY</div>
              </div>

              <div className="absolute z-20 flex flex-col items-center top-[35%] left-[20%] cursor-pointer mt-4 hover:-translate-y-1 transition-transform">
                <div className="w-3 h-3 bg-black relative outline outline-[1.5px] outline-border-d"></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-black bg-white px-2 py-1 mt-1.5 border border-border-d z-30">YELAGIRI</div>
              </div>

              <div className="absolute z-20 flex flex-col items-center top-[28%] left-[10%] cursor-pointer mt-4 hover:-translate-y-1 transition-transform">
                <div className="w-3 h-3 bg-black relative outline outline-[1.5px] outline-border-d"></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-black bg-white px-2 py-1 mt-1.5 border border-border-d z-30">OOTY</div>
              </div>

              <div className="absolute z-20 flex flex-col items-center top-[42%] left-[15%] cursor-pointer mt-4 hover:-translate-y-1 transition-transform">
                <div className="w-3 h-3 bg-black relative outline outline-[1.5px] outline-border-d"></div>
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-black bg-white px-2 py-1 mt-1.5 border border-border-d z-30">YERCAUD</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA BANNER */}
      <div className="bg-black py-[80px] px-10 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-[clamp(36px,5vw,72px)] tracking-[0.02em] uppercase text-white mb-1.5">
            ORGANISE A <b className="text-accent font-normal">RIDE</b>
          </h2>
          <p className="text-[13px] text-white/45 mb-7">Got a route? Build a crew. Submit your ride and let the community find you.</p>
          <button className="bg-accent text-black text-[11px] font-bold uppercase tracking-[0.2em] px-[36px] py-[14px] hover:bg-accent-d transition-colors cursor-pointer border-none gap-2 flex items-center mx-auto">
            + Submit Your Ride
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t-2 border-black pt-16 px-10 pb-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
            <div>
              <a href="#" className="logo flex mb-4 font-display text-[28px] tracking-[0.08em] text-black no-underline max-w-fit">
                RIMOTO<em className="bg-accent text-black px-1.5 not-italic ml-1">COMMUNITY</em>
              </a>
              <p className="text-[12px] text-muted leading-[1.8] max-w-[280px]">Curated rides and real stories for Indian bikers. Discover routes, join rides, and share the road with Chennai's finest.</p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-3.5 pb-2 border-b-2 border-accent inline-block">Explore</h4>
              <ul className="flex flex-col gap-2.5 list-none mt-1.5">
                <li><a href="#board" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Ride Board</a></li>
                <li><a href="#stories" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Ride Stories</a></li>
                <li><a href="#map" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Routes Map</a></li>
                <li><a href="/reviews" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Forum</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Submit a Story</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-3.5 pb-2 border-b-2 border-accent inline-block">Rides</h4>
              <ul className="flex flex-col gap-2.5 list-none mt-1.5">
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">This Weekend</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Beginner Rides</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Hill Climbs</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Night Rides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-3.5 pb-2 border-b-2 border-accent inline-block">Rimoto Gear</h4>
              <ul className="flex flex-col gap-2.5 list-none mt-1.5">
                <li><a href="https://rimotogear.com" target="_blank" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Shop Gear ↗</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Jackets</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Gloves</a></li>
                <li><a href="#" className="text-[12px] text-muted hover:text-black transition-colors decoration-none">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[11px] text-muted">© 2025 Rimoto Gear. All rights reserved. Chennai, India.</p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 border border-border-d flex items-center justify-center text-[13px] text-muted transition-all hover:bg-black hover:text-white hover:border-black no-underline">𝕏</a>
              <a href="#" className="w-8 h-8 border border-border-d flex items-center justify-center text-[13px] text-muted transition-all hover:bg-black hover:text-white hover:border-black no-underline">FB</a>
              <a href="#" className="w-8 h-8 border border-border-d flex items-center justify-center text-[13px] text-muted transition-all hover:bg-black hover:text-white hover:border-black no-underline">IG</a>
              <a href="#" className="w-8 h-8 border border-border-d flex items-center justify-center text-[13px] text-muted transition-all hover:bg-black hover:text-white hover:border-black no-underline">YT</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="#" className="fixed bottom-7 right-7 z-50 bg-wa text-white w-[52px] h-[52px] flex items-center justify-center text-[24px] shadow-[0_4px_20px_rgba(37,211,102,0.4)] cursor-pointer transition-transform hover:scale-110 no-underline rounded-none">
        💬
      </a>
    </div>
  );
}
