// details.jsx — Program detail + Case detail (glass variant)

function ProgramDetailPage({ slug }){
  const p = PROGRAMS.find(x=>x.slug===slug);
  const [open, setOpen] = useState(0);
  if (!p) return <Page><div className="px-6 py-24 max-w-[800px] mx-auto text-center"><div className="label mb-4">404</div><h1 className="display text-[64px]">PROGRAM <span className="slash">/</span> NOT FOUND</h1><Link to="/programs" className="btn-ghost mt-8 inline-flex">← Back to library</Link></div></Page>;
  const related = PROGRAMS.filter(x=>x.slug!==slug).slice(0,3);
  const coverCls = p.cover;
  return (
    <Page>
      {/* Hero */}
      <section className="relative px-6 pt-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="mono text-[11px] tracking-[0.2em] text-muted mb-6">
            <Link to="/" className="hover:text-sky">HOME</Link><span className="mx-2 text-cyan">/</span>
            <Link to="/programs" className="hover:text-sky">PROGRAMS</Link><span className="mx-2 text-cyan">/</span>
            <span className="text-ink">{p.id}</span>
          </div>
          <div className="relative">
            <div className="h-[460px] rounded relative overflow-hidden">
              <HeroBg imgCls={coverCls} video={p.video} poster={p.poster} className="rounded" />
              <div className="ray absolute inset-0"></div>
            </div>
            <div className="absolute left-8 right-8 bottom-8 flex items-end justify-between gap-4">
              <div className="glass-strong corners p-8 max-w-2xl">
                <Corners/>
                <div className="flex items-center gap-3 mb-3">
                  <span className="mono text-[11px] tracking-[0.2em] text-sky">{p.id}</span>
                  <span className="text-cyan">/</span>
                  <span className="label-muted">{p.dept}</span>
                  <StatusPill status={p.status}/>
                </div>
                <h1 className="display text-[clamp(44px,6vw,84px)]">{p.code}</h1>
                <div className="font-light text-[22px] text-ink/80 mt-1">{p.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <div className="md:sticky md:top-32 glass corners p-7">
              <Corners/>
              <div className="label mb-5">Metadata</div>
              <dl className="divide-y divide-sky/15">
                {[['Institution',p.institution],['Credits',p.credits],['Duration',p.duration],['Chapters',p.chapters],['Language',p.language],['Release',p.release]].map(([k,v])=>(
                  <div key={k} className="flex justify-between py-3">
                    <dt className="label-muted">{k}</dt>
                    <dd className="mono text-[13px]">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="label mt-6 mb-3">Platforms</div>
              <div className="flex flex-wrap gap-1.5">
                {p.platforms.map(pl => <span key={pl} className="pill text-[9px] tracking-widest px-2 py-1"><span className="dot"></span>{pl}</span>)}
              </div>
              <Link to="/contact" className="btn-glass w-full justify-center mt-6">Request Pilot <span className="arrow">→</span></Link>
            </div>
          </aside>
          <div className="md:col-span-8 space-y-14">
            <Reveal>
              <div className="label mb-3">Overview</div>
              <p className="text-[18px] leading-[1.7] text-ink/85 font-light">{p.summary}</p>
              <div className="mt-8 text-cyan text-[60px] leading-none">"</div>
              <blockquote className="serif-italic text-[clamp(24px,2.8vw,34px)] leading-[1.3] text-ink mt-2">{p.pedagogy}</blockquote>
            </Reveal>

            <Reveal>
              <div className="label mb-5">Learning Objectives</div>
              <ul className="space-y-3">
                {p.objectives.map((o,i)=>(
                  <li key={i} className="flex items-start gap-4 py-3 border-b border-sky/15">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2.5 flex-shrink-0" style={{boxShadow:'0 0 8px #6DC4E8'}}></span>
                    <span className="text-[15.5px] leading-[1.6] text-ink/90 font-light">{o}</span>
                    <span className="ml-auto mono text-[10px] tracking-widest text-muted">{String(i+1).padStart(2,'0')}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="label mb-5">Chapter Breakdown</div>
              <div className="glass corners divide-y divide-sky/15">
                <Corners/>
                {p.chapterList.map((c,i)=>(
                  <div key={c.n}>
                    <button onClick={()=>setOpen(open===i?-1:i)} className="w-full flex items-center gap-5 p-5 text-left hover:bg-cyan/5 transition">
                      <span className="mono text-[11px] tracking-widest text-cyan min-w-[56px]">{c.n}</span>
                      <span className="font-display font-light text-[18px] flex-1">{c.t}</span>
                      <span className="mono text-[11px] text-muted">{c.d}</span>
                      <span className="text-sky text-xl">{open===i?'−':'+'}</span>
                    </button>
                    {open===i && (
                      <div className="px-5 pb-5 grid md:grid-cols-3 gap-5 items-start">
                        <div className={'h-24 rounded '+coverCls}></div>
                        <p className="md:col-span-2 text-[14px] leading-[1.7] text-ink/80 font-light">{c.s}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="label mb-5">Captures</div>
              <div className="grid grid-cols-2 gap-4">
                {['Atrium','Viva Gate','Horizon','HUD Help'].map((l,i)=>(
                  <div key={l} className={'h-44 rounded relative '+coverCls}>
                    <div className="ray absolute inset-0"></div>
                    <div className="absolute bottom-3 left-3 label-muted bg-white/60 px-2 py-1 rounded">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="glass corners p-8 grid md:grid-cols-[100px_1fr] gap-6 items-center">
                <Corners/>
                <div className="w-[100px] h-[100px] rounded-full img-sky"></div>
                <div>
                  <div className="label mb-2">Instructor</div>
                  <div className="display text-[28px]">{p.instructor.name}</div>
                  <div className="font-light text-ink/70 mt-1">{p.instructor.role}</div>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ink/80 font-light">{p.instructor.bio}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="glass-strong corners p-10 relative overflow-hidden">
                <Corners/>
                <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full opacity-40" style={{background:'radial-gradient(circle, #6DC4E8, transparent 70%)'}}></div>
                <div className="relative">
                  <div className="label mb-3">Pilot Access</div>
                  <h3 className="display text-[clamp(32px,4.5vw,56px)]">BRING <span className="slash">/</span> APEX TO YOUR CAMPUS</h3>
                  <Link to="/contact" className="btn-glass mt-6">Request Pilot <span className="arrow">→</span></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="label mb-3">Related Programs</div>
          <h2 className="display text-[clamp(32px,4.5vw,60px)] mb-10">MORE <span className="slash">/</span> SYSTEMS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(r=>{
              const rc = r.cover;
              return (
                <Link key={r.slug} to={`/programs/${r.slug}`} className="block">
                  <div className="glass corners overflow-hidden" data-hover>
                    <Corners/>
                    <div className={'h-44 relative '+rc}><div className="ray absolute inset-0"></div>
                      <div className="absolute top-3 left-3"><StatusPill status={r.status}/></div>
                    </div>
                    <div className="p-6">
                      <div className="mono text-[10px] tracking-widest text-sky">{r.id}</div>
                      <div className="display text-[22px] mt-2">{r.code}</div>
                      <div className="font-light text-ink/70">{r.title}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Page>
  );
}

function CaseDetailPage({ slug }){
  const cs = CASE_STUDIES.find(x=>x.slug===slug);
  if (!cs) return <Page><div className="px-6 py-24 text-center"><div className="label">404</div><h1 className="display text-[48px] mt-3">CASE <span className="slash">/</span> NOT FOUND</h1><Link to="/case-studies" className="btn-ghost mt-6 inline-flex">← Back</Link></div></Page>;
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Case Studies',to:'/case-studies'},{l:cs.slug.toUpperCase()}]}
        tag={cs.date + ' · ' + cs.institution}
        title={cs.title}
        sub={cs.headline}
        imgCls="img-sky"
      />

      <section className="px-6 py-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.metrics.map(([l,v])=>(
              <div key={l} className="glass corners p-6"><Corners/>
                <div className="label-muted">{l}</div>
                <div className="display text-[clamp(32px,4vw,52px)] mt-2">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="h-[440px] rounded img-dome relative overflow-hidden"><div className="ray absolute inset-0"></div></div>
          </Reveal>
          <Reveal>
            <div className="label mb-3">Context</div>
            <p className="text-[16px] leading-[1.75] text-ink/85 font-light mb-6">{cs.context}</p>
            <div className="label mb-3">Solution</div>
            <p className="text-[16px] leading-[1.75] text-ink/85 font-light">{cs.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="label mb-4">MetaHub Demo · Gallery</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['img-sky','img-dome','img-atrium','img-crystal'].map((c,i)=>(
              <div key={i} className={'h-56 rounded relative '+c}><div className="ray absolute inset-0"></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <div className="text-cyan display text-[80px] leading-none">"</div>
            <blockquote className="serif-italic text-[clamp(28px,4vw,52px)] leading-[1.2] text-ink mt-2">
              {cs.quote}
            </blockquote>
            <div className="label-muted mt-8">— {cs.quoteBy}</div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass corners p-7"><Corners/>
            <div className="label mb-3">Event</div>
            <div className="display text-[28px]">{cs.event.name}</div>
            <dl className="mt-5 divide-y divide-sky/15">
              <div className="flex justify-between py-2"><dt className="label-muted">When</dt><dd className="mono text-[13px]">{cs.event.when}</dd></div>
              <div className="flex justify-between py-2"><dt className="label-muted">Where</dt><dd className="mono text-[13px]">{cs.event.where}</dd></div>
              <div className="flex justify-between py-2"><dt className="label-muted">Audience</dt><dd className="mono text-[13px]">{cs.event.audience}</dd></div>
            </dl>
            <p className="mt-4 text-[13.5px] leading-[1.7] text-ink/80 font-light">{cs.event.outcome}</p>
          </div>
          <div className="glass corners p-7"><Corners/>
            <div className="label mb-3">What Happens Next</div>
            <ul className="space-y-3 mt-4">
              {['Chapters 02–05 scripting · Q2','Second cohort deployment · Q3','Cross-institution expansion · Q4'].map((s,i)=>(
                <li key={i} className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan" style={{boxShadow:'0 0 8px #6DC4E8'}}></span><span className="text-[14.5px] text-ink/85 font-light">{s}</span></li>
              ))}
            </ul>
            <Link to="/contact" className="btn-glass w-full justify-center mt-6">Bring Apex to your campus <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </Page>
  );
}

Object.assign(window,{ ProgramDetailPage, CaseDetailPage });
