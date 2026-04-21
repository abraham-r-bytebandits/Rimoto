"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { pendingRides, publishedRides, pendingStories, activities, featuredSlots } from '@/constants/mockData';

export default function AdminCommunity() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeRidesSubTab, setActiveRidesSubTab] = useState('pending'); // pending, approved, rejected

  // Filter states
  const [rideFilter, setRideFilter] = useState('');
  const [pubFilter, setPubFilter] = useState('');
  
  // Modal state
  const [selectedRide, setSelectedRide] = useState<any>(null);

  const titles: Record<string, string> = {
    dashboard: 'Dashboard',
    rides: 'Ride Submissions',
    stories: 'Story Submissions',
    published: 'Published Rides',
    featured: 'Featured Slots',
    routes: 'Routes / Map',
    users: 'User Management'
  };

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', category: 'Overview', badge: null },
    { id: 'rides', icon: '🏍️', label: 'Ride Submissions', category: 'Moderation', badge: <span className="ml-auto bg-black text-white text-[10px] font-bold py-0.5 px-2 text-center group-[.active]:bg-black group-[.active]:text-white">4</span> },
    { id: 'stories', icon: '📖', label: 'Story Submissions', category: 'Moderation', badge: <span className="ml-auto bg-accent text-black border border-black text-[10px] font-bold py-0.5 px-2 text-center group-[.active]:bg-black group-[.active]:text-white group-[.active]:border-black">2</span> },
    { id: 'published', icon: '✅', label: 'Published Rides', category: 'Moderation', badge: null },
    { id: 'featured', icon: '⭐', label: 'Featured Slots', category: 'Content', badge: null },
    { id: 'routes', icon: '🗺️', label: 'Routes / Map', category: 'Content', badge: null },
    { id: 'users', icon: '👥', label: 'Users', category: 'Community', badge: null },
  ];

  return (
    <div className="flex min-h-screen bg-bg text-black">
      {/* SIDEBAR */}
      <aside className="w-[260px] bg-bg border-r-[1.5px] border-black fixed top-0 left-0 h-screen flex flex-col z-50">
        <div className="p-6 border-b-[1.5px] border-black">
          <a href="#" className="font-display text-[28px] tracking-[0.03em] text-black no-underline block">
            RIMOTO <em className="bg-accent text-black px-1.5 not-italic">ADMIN</em>
          </a>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black mt-1.5">Community Control Panel</p>
        </div>
        <nav className="flex-1 py-6 overflow-y-auto">
          {['Overview', 'Moderation', 'Content', 'Community'].map(category => (
            <React.Fragment key={category}>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black px-6 pb-3 pt-3 opacity-60">
                {category}
              </p>
              {navItems.filter(item => item.category === category).map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full group flex items-center gap-3 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] cursor-pointer transition-all duration-200 border-l-4 text-left ${activeTab === item.id ? 'opacity-100 text-black bg-accent border-black active' : 'opacity-70 text-black border-transparent hover:opacity-100 hover:bg-black/5'}`}
                >
                  <span className="text-[16px] w-6 text-center">{item.icon}</span> {item.label} {item.badge}
                </button>
              ))}
            </React.Fragment>
          ))}
        </nav>
        <div className="p-6 border-t-[1.5px] border-black">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent flex items-center justify-center text-[14px] font-bold text-black border-[1.5px] border-black shrink-0">R</div>
            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-black">Rahul Sharma</div>
              <div className="text-[10px] text-black uppercase tracking-[0.15em] opacity-60">Super Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="ml-[260px] flex-1 flex flex-col min-h-screen">
        <div className="bg-bg border-b-[1.5px] border-black px-10 h-[72px] flex items-center justify-between sticky top-0 z-30">
          <span className="font-display text-[32px] tracking-[0.03em] uppercase text-black">{titles[activeTab] || activeTab}</span>
          <div className="flex gap-4 items-center">
            <Button variant="primary" size="md" className="py-3 px-7 hover:bg-black hover:text-white transition-colors">🔔 Notifications</Button>
            <a href="/" target="_blank" className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] py-3 px-7 border-[1.5px] border-black bg-accent text-black hover:bg-black hover:text-accent transition-colors flex items-center justify-center no-underline">
              ↗ View Live Site
            </a>
          </div>
        </div>

        <div className="p-10 flex-1">
          
          {/* DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
              <div className="grid grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Pending Rides", value: "4", sub: "⚠ Needs review", isWarning: true },
                  { label: "Published Rides", value: "47", sub: "↑ +3 this week", isWarning: false },
                  { label: "Total Riders", value: "5.2K", sub: "↑ +124 this month", isWarning: false },
                  { label: "Stories Pending", value: "2", sub: "⚠ Awaiting approval", isWarning: true }
                ].map((stat, i) => (
                  <div key={i} className="bg-white border-[1.5px] border-black p-6 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-accent transition-colors duration-200"></div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-black mb-3 opacity-70">{stat.label}</div>
                    <div className="font-display text-[48px] tracking-[0.03em] text-black leading-none">{stat.value}</div>
                    <div className={`text-[11px] font-semibold mt-3 uppercase tracking-[0.05em] ${stat.isWarning ? 'text-black bg-accent inline-block px-1.5 py-0.5 -ml-1.5' : 'text-black'}`}>{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-[32px] uppercase tracking-[0.03em] text-black">Pending Ride Submissions</h2>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-black opacity-60">4 awaiting review</span>
              </div>

              <div className="bg-white border-[1.5px] border-black overflow-x-auto mb-10">
                <table className="w-full border-collapse text-left">
                  <thead className="border-b-[1.5px] border-black bg-bg">
                    <tr>
                      {["Ride Name", "Route", "Date", "Organizer", "Skill", "Submitted", "Actions"].map(th => (
                        <th key={th} className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black p-4 px-6">{th}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pendingRides.slice(0,4).map(ride => (
                       <tr key={ride.id} className="border-b border-black hover:bg-black/5 transition-colors">
                        <td className="p-4 px-6 align-middle">
                          <div className="font-bold text-black text-[14px] uppercase tracking-[0.05em]">{ride.name}</div>
                          <div className="text-black text-[11px] opacity-70 mt-1">{ride.group}</div>
                        </td>
                        <td className="p-4 px-6 align-middle"><div className="text-[11px] font-bold uppercase tracking-[0.1em] text-black opacity-80">{ride.route}</div></td>
                        <td className="p-4 px-6 align-middle text-[13px]">{ride.date}</td>
                        <td className="p-4 px-6 align-middle text-[13px]">{ride.organizer}</td>
                        <td className="p-4 px-6 align-middle">
                          <Badge variant={ride.skill === 'Beginner' ? 'neutral' : (ride.skill === 'Intermediate' ? 'info' : 'advanced')} size="sm">
                            {ride.skill === 'Beginner' ? '🟢 Beginner' : (ride.skill === 'Intermediate' ? '🟡 Intermediate' : '🔴 Advanced')}
                          </Badge>
                        </td>
                        <td className="p-4 px-6 align-middle text-[11px] opacity-70">{ride.submittedAt}</td>
                        <td className="p-4 px-6 align-middle">
                          <div className="flex gap-2">
                            <Button variant="action-vw" size="sm" onClick={() => setSelectedRide(ride)}>View</Button>
                            <Button variant="action-app" size="sm">✓ Approve</Button>
                            <Button variant="action-rej" size="sm">✕ Reject</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white border-[1.5px] border-black">
                  <div className="p-5 px-6 border-b-[1.5px] border-black font-display text-[24px] uppercase tracking-[0.03em] bg-black text-white">Recent Activity</div>
                  {activities.map((act, i) => (
                    <div key={act.id} className={`p-4 px-6 border-b border-black flex items-start gap-4 ${i === activities.length - 1 ? 'border-none' : ''}`}>
                      <div className={`w-3 h-3 mt-1 shrink-0 border-[1.5px] border-black ${act.color === 'success' ? 'bg-success' : (act.color === 'warning' ? 'bg-accent' : 'bg-black')}`}></div>
                      <div>
                        <div className="text-[13px] text-black leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: act.message.replace(/"([^"]+)"/, '<strong>"$1"</strong>') }}></div>
                        <div className="text-[10px] text-black opacity-50 uppercase tracking-[0.15em] mt-1.5">{act.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white border-[1.5px] border-black h-fit">
                  <div className="p-5 px-6 border-b-[1.5px] border-black font-display text-[24px] uppercase tracking-[0.03em] bg-white text-black flex items-center justify-between">
                    Featured Slots <span className="text-[11px] text-black font-sans font-bold uppercase tracking-[0.15em] opacity-60">3 / 3 active</span>
                  </div>
                  {featuredSlots.map((slot, i) => (
                    <div key={slot.id} className={`p-4 px-6 border-b border-black flex items-center gap-4 ${i === featuredSlots.length - 1 ? 'border-none' : ''}`}>
                      <div className="font-display text-[32px] text-black opacity-20 min-w[40px]">{slot.slot}</div>
                      <div className="flex-1">
                        <div className="text-[14px] font-bold text-black uppercase tracking-[0.05em]">{slot.name}</div>
                        <div className="text-[11px] text-black opacity-60 mt-1">{slot.desc}</div>
                      </div>
                      <div className="w-3 h-3 bg-accent border-[1.5px] border-black"></div>
                    </div>
                  ))}
                  <div className="p-3.5 px-5">
                    <Button variant="ghost" className="w-full border border-black hover:bg-black hover:text-white py-2.5">✎ Manage Featured Content</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RIDES */}
          {activeTab === 'rides' && (
            <div>
              <div className="flex border-b-[1.5px] border-black mb-6">
                {['pending', 'approved', 'rejected'].map(tab => (
                  <button key={tab} onClick={() => setActiveRidesSubTab(tab)} className={`text-[12px] font-bold uppercase tracking-[0.15em] px-6 py-4 cursor-pointer transition-all duration-200 border-b-4 -mb-[1.5px] ${activeRidesSubTab === tab ? 'opacity-100 text-black border-accent' : 'opacity-50 text-black border-transparent hover:opacity-100'}`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} ({tab === 'pending' ? '4' : (tab==='approved'?'5':'2')})
                  </button>
                ))}
              </div>
              
              {activeRidesSubTab === 'pending' && (
                <div>
                   <div className="flex gap-4 mb-6">
                    <input type="text" placeholder="Search rides by name, organizer, route..." value={rideFilter} onChange={e=>setRideFilter(e.target.value)} className="flex-1 bg-white border-[1.5px] border-black text-black font-sans text-[13px] px-5 py-3.5 outline-none focus:shadow-[4px_4px_0_var(--color-accent)] transition-shadow placeholder:text-black placeholder:opacity-40" />
                    <select className="bg-white border-[1.5px] border-black text-black font-sans text-[12px] font-semibold uppercase tracking-[0.1em] px-5 py-3.5 outline-none cursor-pointer focus:shadow-[4px_4px_0_var(--color-accent)]">
                      <option>All Skill Levels</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                   </div>
                   <div className="bg-white border-[1.5px] border-black overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead className="border-b-[1.5px] border-black bg-bg">
                        <tr>
                          {["Ride Name", "Route", "Date / Time", "Group", "Organizer", "Skill", "Bike", "Contact", "Submitted", "Actions"].map(th => (
                            <th key={th} className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black p-4">{th}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {pendingRides.filter(r => r.name.toLowerCase().includes(rideFilter.toLowerCase())).map(ride => (
                          <tr key={ride.id} className="border-b border-black hover:bg-black/5 transition-colors">
                            <td className="p-4"><div className="font-bold text-black text-[14px] uppercase tracking-[0.05em]">{ride.name}</div></td>
                            <td className="p-4"><div className="text-[11px] font-bold uppercase tracking-[0.1em] text-black opacity-80">{ride.route}</div></td>
                            <td className="p-4 text-[13px] whitespace-nowrap">{ride.date} · {ride.time}</td>
                            <td className="p-4 text-[11px] opacity-70">{ride.group}</td>
                            <td className="p-4 text-[13px]">{ride.organizer}</td>
                            <td className="p-4">
                              <Badge variant={ride.skill === 'Beginner' ? 'neutral' : (ride.skill === 'Intermediate' ? 'info' : 'advanced')} size="sm">
                                {ride.skill}
                              </Badge>
                            </td>
                            <td className="p-4 text-[11px] opacity-70">{ride.bikeType}</td>
                            <td className="p-4 text-[11px] opacity-70 whitespace-nowrap">{ride.contact}</td>
                            <td className="p-4 text-[11px] opacity-70 whitespace-nowrap">{ride.submittedAt}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="action-vw" size="sm" onClick={() => setSelectedRide(ride)}>View</Button>
                                <Button variant="action-app" size="sm">✓</Button>
                                <Button variant="action-rej" size="sm">✕</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* OTHERS VIEWS (STORIES, PUBLISHED, ETC.) remain the same */}
          {activeTab === 'stories' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-[32px] uppercase tracking-[0.03em] text-black">Story Submissions</h2>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-black opacity-60">2 pending</span>
              </div>
              <div className="bg-white border-[1.5px] border-black overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead className="border-b-[1.5px] border-black bg-bg">
                    <tr>
                      {["Title", "Author", "Destination", "Type", "Media", "Status", "Submitted", "Actions"].map(th => (
                        <th key={th} className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black p-4 px-6">{th}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pendingStories.map(story => (
                      <tr key={story.id} className="border-b border-black hover:bg-black/5 transition-colors">
                        <td className="p-4 px-6">
                          <div className="font-bold text-black text-[14px] uppercase tracking-[0.05em] max-w-[300px]">{story.title}</div>
                        </td>
                        <td className="p-4 px-6 text-[13px]">{story.author}</td>
                        <td className="p-4 px-6"><div className="text-[11px] font-bold uppercase tracking-[0.1em] text-black opacity-80">{story.destination}</div></td>
                        <td className="p-4 px-6 text-[11px] opacity-70">{story.type}</td>
                        <td className="p-4 px-6 text-[11px] opacity-70">{story.media}</td>
                        <td className="p-4 px-6">
                          <Badge variant="neutral" size="sm">Pending</Badge>
                        </td>
                        <td className="p-4 px-6 text-[11px] opacity-70 whitespace-nowrap">{story.submittedAt}</td>
                        <td className="p-4 px-6">
                          <div className="flex gap-2">
                            <Button variant="action-vw" size="sm">Preview</Button>
                            <Button variant="action-app" size="sm">✓ Approve</Button>
                            <Button variant="action-rej" size="sm">✕ Reject</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* PUBLISHED */}
          {activeTab === 'published' && (
            <div>
              <div className="flex gap-4 mb-6">
                <input type="text" placeholder="Search published rides..." value={pubFilter} onChange={e=>setPubFilter(e.target.value)} className="flex-1 bg-white border-[1.5px] border-black text-black font-sans text-[13px] px-5 py-3.5 outline-none focus:shadow-[4px_4px_0_var(--color-accent)] transition-shadow placeholder:text-black placeholder:opacity-40" />
              </div>
              <div className="bg-white border-[1.5px] border-black overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead className="border-b-[1.5px] border-black bg-bg">
                    <tr>{["Ride Name", "Route", "Date", "Status", "Featured", "WA Joins", "Actions"].map(th=><th key={th} className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black p-4 px-6">{th}</th>)}</tr>
                  </thead>
                  <tbody>
                    {publishedRides.filter(r => r.name.toLowerCase().includes(pubFilter.toLowerCase())).map(ride => (
                       <tr key={ride.id} className="border-b border-black hover:bg-black/5 transition-colors">
                        <td className="p-4 px-6"><div className="font-bold text-black text-[14px] uppercase tracking-[0.05em]">{ride.name}</div></td>
                        <td className="p-4 px-6"><div className="text-[11px] font-bold uppercase tracking-[0.1em] text-black opacity-80">{ride.route}</div></td>
                        <td className="p-4 px-6 text-[13px]">{ride.date}</td>
                        <td className="p-4 px-6"><Badge variant="success" size="sm">Live</Badge></td>
                        <td className="p-4 px-6">{ride.featured ? <Badge variant="featured" size="sm">⭐ Featured</Badge> : '—'}</td>
                        <td className="p-4 px-6 text-[13px]">{ride.joins}</td>
                        <td className="p-4 px-6">
                          <div className="flex gap-2">
                             <Button variant="action" size="sm" className="bg-transparent hover:bg-black hover:text-white border-transparent">Edit</Button>
                             {!ride.featured && <Button variant="action-ft" size="sm">★ Feature</Button>}
                             <Button variant="action-rej" size="sm">Unpublish</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* FEATURED / ROUTES / USERS - Simple Placeholders for now */}
          {['featured', 'routes', 'users'].includes(activeTab) && (
             <div>
                <div className="mb-6">
                  <h2 className="font-display text-[32px] uppercase tracking-[0.03em] text-black">{titles[activeTab]}</h2>
                </div>
                <p className="text-[12px] opacity-60 max-w-lg mb-6 text-black">Manage the configurations for {activeTab}.</p>
                {activeTab === 'featured' && (
                  <div className="bg-white border-[1.5px] border-black max-w-xl">
                    <div className="p-5 px-6 border-b-[1.5px] border-black font-display text-[24px] uppercase tracking-[0.03em] bg-white text-black flex items-center justify-between">
                      Active Featured Slots
                    </div>
                    {featuredSlots.map((slot, i) => (
                      <div key={slot.id} className={`p-4 px-6 border-b border-black flex items-center gap-4 ${i === featuredSlots.length - 1 ? 'border-none' : ''}`}>
                        <div className="font-display text-[32px] text-black opacity-20 min-w[40px]">{slot.slot}</div>
                        <div className="flex-1">
                          <div className="text-[14px] font-bold text-black uppercase tracking-[0.05em]">{slot.name}</div>
                          <div className="text-[11px] text-black opacity-60 mt-1">{slot.desc}</div>
                        </div>
                        <Button variant="action" className="border-none hover:bg-black hover:text-white" size="sm">Change</Button>
                      </div>
                    ))}
                  </div>
                )}
             </div>
          )}
        </div>
      </main>

      {/* RIDE DETAIL MODAL */}
      {selectedRide && (
        <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-5" onClick={(e) => { if (e.target === e.currentTarget) setSelectedRide(null); }}>
          <div className="bg-white border-[1.5px] border-black w-full max-w-[720px] max-h-[90vh] overflow-y-auto shadow-[12px_12px_0_var(--color-accent)]">
            <div className="p-6 px-8 border-b-[1.5px] border-black flex items-center justify-between bg-black">
              <h3 className="font-display text-[32px] uppercase tracking-[0.03em] text-white">{selectedRide.name}</h3>
              <button className="bg-transparent border-none text-accent text-[24px] cursor-pointer hover:text-white font-sans" onClick={() => setSelectedRide(null)}>✕</button>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Route</div>
                  <div className="font-display text-[24px] tracking-[0.02em] text-black leading-none">{selectedRide.route}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Date</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.date}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Start Time</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.time}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Distance</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.distance}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Organizer</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.organizer}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Biker Group</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.group}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Contact</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.contact}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Bike Type</div>
                  <div className="text-[15px] font-semibold text-black">{selectedRide.bikeType}</div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-black opacity-50 mb-2">Skill Level</div>
                <div className="text-[15px] font-semibold text-black">{selectedRide.skill}</div>
              </div>
              
              <div className="flex gap-4 mt-8 pt-8 border-t-[1.5px] border-black">
                <button className="flex-1 p-4 font-sans text-[12px] font-bold uppercase tracking-[0.15em] border-[1.5px] border-black bg-white text-black hover:bg-success transition-colors cursor-pointer" onClick={() => setSelectedRide(null)}>✓ Approve & Publish</button>
                <button className="flex-1 p-4 font-sans text-[12px] font-bold uppercase tracking-[0.15em] border-[1.5px] border-black bg-accent text-black hover:bg-black hover:text-accent transition-colors cursor-pointer" onClick={() => setSelectedRide(null)}>⭐ Approve + Feature</button>
                <button className="flex-1 p-4 font-sans text-[12px] font-bold uppercase tracking-[0.15em] border-[1.5px] border-black bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer" onClick={() => setSelectedRide(null)}>✕ Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
