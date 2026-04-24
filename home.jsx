// home.jsx — cinematic glass hero + sections

function HomePage(){
  const featured = PROGRAMS.slice(0,3);
  return (
    <Page>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden -mt-28 pt-28">
        <div className="absolute inset-0 img-cloud"></div>
        <div className="absolute inset-0 ray"></div>
        {/* massive fade wordmark */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div className="display text-[clamp(200px,32vw,480px)] font-extralight text-white/50 leading-[0.8]">2026</div>
        </div>

        <div className="relative max-w-[1440px] mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 lg:col-span-6">
            <div className="glass corners p-10 md:p-14">
              <Corners/>
              <div className="label mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan dot-pulse" style={{boxShadow:'0 0 10px #6DC4E8'}}></span>
                APEX ACADEMY — VR EDUCATION INFRASTRUCTURE
              </div>
              <h1 className="display text-[clamp(56px,9vw,148px)]">
                LEARN<br/><span className="slash">/</span> BEYOND<br/><span className="slash">/</span> SCREENS
              </h1>
              <p className="mt-8 max-w-md text-[17px] leading-[1.75] font-light text-ink/85">
                Immersive VR curricula built ground-up for universities. Deployed across Meta Quest, Pico, and WebXR.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link to="/programs" className="btn-glass">Explore Programs <span className="arrow">→</span></Link>
                <button className="btn-ghost">Watch Reel <span className="arrow">↗</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative px-6 -mt-12 z-10">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="glass-strong corners grid grid-cols-2 md:grid-cols-4 divide-x divide-sky/15 p-2">
              <Corners/>
              {[
                ['02','Programs Live'],
                ['01','University Partner'],
                ['03','Platforms Supported'],
                ['2026','Pilot Cohort']
              ].map(([n,l],i)=>(
                <div key={i} className="px-6 py-7">
                  <div className="display text-[44px] font-extralight"><CountUp to={parseInt(n,10)||0} /><span className="text-cyan slash">{isNaN(parseInt(n,10))?n:''}</span></div>
                  <div className="label-muted mt-2">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative px-6 py-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="label mb-4">Featured Programs</div>
                <h2 className="display text-[clamp(40px,5.5vw,80px)]">CURRICULUM <span className="slash">/</span> IN FLIGHT</h2>
              </div>
              <Link to="/programs" className="btn-ghost hidden md:inline-flex">All Programs <span className="arrow">→</span></Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p,i)=>(
              <Reveal key={p.slug} delay={i*100}>
                <Link to={`/programs/${p.slug}`} className="block">
                  <div className="glass corners overflow-hidden" data-hover>
                    <Corners/>
                    <div className={'relative h-56 '+(p.cover==='img-horizon'?'img-dome':p.cover==='img-blue'?'img-atrium':'img-crystal')}>
                      <div className="ray absolute inset-0"></div>
                      <div className="absolute top-4 left-4"><StatusPill status={p.status}/></div>
                      <div className="absolute top-4 right-4 mono text-[11px] text-ink/70 tracking-widest">{p.id}</div>
                    </div>
                    <div className="p-7">
                      <div className="label-muted mb-2">{p.dept}</div>
                      <h3 className="display text-[30px]">{p.code}</h3>
                      <div className="font-light text-[18px] text-ink/75 mt-1">{p.title}</div>
                      <p className="mt-4 text-[13.5px] leading-[1.65] text-ink/70 font-light">{p.summary}</p>
                      <div className="mt-5 btn-ghost">Enter <span className="arrow">→</span></div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative px-6 py-20">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="label mb-4">Why Apex</div>
            <h2 className="display text-[clamp(40px,5.5vw,80px)] mb-16">A NEW <span className="slash">/</span> ARCHITECTURE</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {n:'01', t:'Place, not pages', d:'Every chapter is a space students walk through. The textbook becomes architecture — rooms, corridors, exhibits.'},
              {n:'02', t:'Instructor-owned data', d:'Per-session heatmaps stream to your LMS. You see where the cohort stalled. Institution retains ownership.'},
              {n:'03', t:'Six weeks per chapter', d:'AI-native pipeline from syllabus to headset, faculty-in-the-loop at every gate. Ship in a sprint.'}
            ].map((b,i)=>(
              <Reveal key={b.n} delay={i*80}>
                <div className="glass corners p-8 h-full" data-hover>
                  <Corners/>
                  <div className="mono text-[11px] tracking-[0.25em] text-cyan">{b.n} / 03</div>
                  <h3 className="display text-[30px] mt-4">{b.t}</h3>
                  <div className="divider mt-5 mb-5" style={{background:'rgba(109,196,232,0.4)'}}></div>
                  <p className="text-[14.5px] leading-[1.75] text-ink/80 font-light">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="relative px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="glass-strong corners p-12 text-center">
              <Corners/>
              <div className="label-muted mb-6">In Partnership With</div>
              <div className="display text-[clamp(40px,6vw,80px)] font-extralight">Khalifa University</div>
              <div className="mono text-[12px] tracking-[0.3em] text-muted mt-4">ABU DHABI · UAE · EST. 2007</div>
              <div className="divider mt-8 mb-8 max-w-md mx-auto"></div>
              <p className="max-w-xl mx-auto text-[15px] leading-[1.7] text-ink/80 font-light">
                Apex launched its first chapter — HUMA 156 <span className="serif-italic">Biosocial Humanity</span> — to first-year medical students at Khalifa in April 2026.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="relative px-6 py-28">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <div className="text-cyan display text-[80px] leading-none">"</div>
            <blockquote className="serif-italic text-[clamp(30px,4.2vw,56px)] leading-[1.2] text-ink/95 mt-2">
              Students don't just watch the chapter. They're <em style={{color:'#4A8BD6'}}>inside</em> the subject. That is the difference we built Apex to measure.
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full img-crystal"></div>
              <div className="text-left">
                <div className="font-display font-semibold text-[16px]">Dr. Kartik Rangaraj</div>
                <div className="label-muted">Founder · Apex Academy</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 py-24">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="glass-strong corners p-14 md:p-20 relative overflow-hidden">
              <Corners/>
              <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full opacity-40" style={{background:'radial-gradient(circle, #6DC4E8, transparent 70%)'}}></div>
              <div className="relative">
                <div className="label mb-5">Initiate Contact</div>
                <h2 className="display text-[clamp(44px,6vw,96px)]">OPEN <span className="slash">/</span> CHANNEL</h2>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-ink/80 font-light">Pilot inquiries, briefings, demonstrations — we respond within 24 hours.</p>
                <div className="mt-10 flex flex-wrap gap-5">
                  <Link to="/contact" className="btn-glass">Request Pilot <span className="arrow">→</span></Link>
                  <Link to="/roadmap" className="btn-ghost">View Roadmap <span className="arrow">↗</span></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

window.HomePage = HomePage;
