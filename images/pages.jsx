// pages.jsx — Programs index, Technology, About, Case index, Roadmap, Contact, Press

function ProgramsPage(){
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL','Humanities','Engineering','Biochemistry','Nutrition'];
  const list = filter==='ALL' ? PROGRAMS : PROGRAMS.filter(p=>p.dept===filter);
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Programs'}]}
        tag="Curriculum Library"
        title={<>PROGRAM <span className="slash">/</span> LIBRARY</>}
        sub="Four programs in flight across Humanities, Engineering, Biochemistry, and Nutrition. Select any to walk its chapter architecture."
        imgCls="img-library"
      />
      <section className="px-6 pb-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="glass-light p-4 flex flex-wrap items-center gap-2">
            <div className="label mr-4">Filter</div>
            {filters.map(f=>(
              <button key={f} onClick={()=>setFilter(f)}
                className={'label px-4 py-2 rounded transition border '+(filter===f?'bg-white/80 border-cyan text-ink':'border-sky/20 text-ink/60 hover:text-ink hover:border-sky/40')}>{f}</button>
            ))}
            <span className="ml-auto mono text-[11px] tracking-widest text-muted">{list.length} OF {PROGRAMS.length} RESULTS</span>
          </div>
        </div>
      </section>
      <section className="px-6 py-12">
        <div className="max-w-[1440px] mx-auto">
          {list.map(p => <ProgramBand key={p.slug} p={p}/>)}
        </div>
      </section>
    </Page>
  );
}

function TechnologyPage(){
  const rows = [
    { n:'01', t:'Multi-platform VR runtime', d:'One build, every headset. Unity OpenXR under the hood — Meta Quest, Pico, WebXR fallback for laptops.',
      specs:[['Target','OpenXR 1.0'],['Unity','2022.3 LTS'],['Fallback','WebXR · three.js'],['Bundle','~180mb']] },
    { n:'02', t:'Adaptive assessment engine', d:'Checkpoint vivas, NPC case interviews, recall prompts. Each run reshapes the next around where the student faltered.',
      specs:[['Checkpoints','7 per chapter'],['Retry','Unlimited'],['Recall','d+1, d+7, d+30'],['Mastery','0–100 float']] },
    { n:'03', t:'Instructor telemetry dashboard', d:'Session-level heatmaps. Exportable as CSV, streamed into any LTI-1.3 compliant LMS.',
      specs:[['Export','CSV · JSON · xAPI'],['LTI','1.3 certified'],['Storage','Institution-owned'],['Retention','Configurable']] },
    { n:'04', t:'Voice narration pipeline', d:'Faculty voices captured in one afternoon regenerate cleanly across every chapter. Subtitles in 12 languages.',
      specs:[['Voices','ElevenLabs · custom'],['Languages','12 default'],['Subtitles','WebVTT + VR overlay'],['Lip-sync','Viseme rig']] },
    { n:'05', t:'AI-native content authoring', d:'Syllabus in, deployable chapter out. A new chapter ships in six weeks with faculty-in-the-loop QA at every gate.',
      specs:[['Input','PDF · DOCX · LMS'],['Blocks','40+ scene primitives'],['QA gates','4 reviews'],['Ship avg','6 weeks']] }
  ];
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Technology'}]}
        tag="The Platform"
        title={<>THE APEX <span className="slash">/</span> ENGINE</>}
        sub="Five systems that make a VR curriculum ship. Every chapter we deploy runs through all of them."
        imgCls="img-crystal"
      />
      <section className="px-6 py-12">
        <div className="max-w-[1320px] mx-auto">
          {rows.map((r,i)=>(
            <Reveal key={r.n}>
              <div className={'grid md:grid-cols-12 gap-10 items-center py-14 '+(i%2!==0?'md:[&>*:first-child]:order-2':'')}>
                <div className="md:col-span-6">
                  <div className="mono text-[11px] tracking-[0.3em] text-cyan mb-4">{r.n} <span className="text-muted">/ 05</span></div>
                  <h3 className="display text-[clamp(30px,4.2vw,58px)]">{r.t}</h3>
                  <p className="mt-6 max-w-lg text-[16px] leading-[1.7] text-ink/80 font-light">{r.d}</p>
                </div>
                <div className="md:col-span-6">
                  <div className="glass corners p-8">
                    <Corners/>
                    <div className="label mb-5">Spec · {r.n}</div>
                    <dl className="divide-y divide-sky/15">
                      {r.specs.map(([k,v])=>(
                        <div key={k} className="flex justify-between py-3">
                          <dt className="label-muted">{k}</dt>
                          <dd className="mono text-[13px] text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
              {i<rows.length-1 && <div className="divider"></div>}
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}

function AboutPage(){
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'About'}]}
        tag="Our Mission"
        title={<>CURRICULUM <span className="slash">/</span> AS ARCHITECTURE</>}
        sub="We believe the next leap in education is spatial. Not more pages, not faster videos — a place students walk into."
        imgCls="img-atrium"
      />

      <section className="px-6 py-20">
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <div className="text-cyan display text-[80px] leading-none">"</div>
            <blockquote className="serif-italic text-[clamp(30px,4.2vw,54px)] leading-[1.2] text-ink mt-2">
              The textbook of the next century will not be read. It will be <em style={{color:'#4A8BD6'}}>entered</em>.
            </blockquote>
            <div className="label-muted mt-8">— Founding Principle · 2024</div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="label mb-4">Timeline</div>
            <h2 className="display text-[clamp(36px,5vw,72px)] mb-12">THE <span className="slash">/</span> JOURNEY</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              ['Q4 2025','Founded','Apex Academy founded by Dr. Kartik Rangaraj. First Unity prototype of the HUMA atrium.'],
              ['Q1 2026','First Build','Chapter 01 playable end-to-end on Quest 2/3. Internal pilot.'],
              ['Q2 2026','Khalifa Pilot','HUMA 156 demoed at Khalifa University, Abu Dhabi. ~50 attendees. Pilot data collecting Q3 2026.'],
              ['Q3 2026','Expansion','Ch_02 scoped. Biochemistry program in development. Nutrition discovery phase.']
            ].map(([q,t,d],i)=>(
              <Reveal key={q} delay={i*80}>
                <div className="glass corners p-6 h-full">
                  <Corners/>
                  <div className="mono text-[11px] tracking-[0.25em] text-cyan">{q}</div>
                  <div className="display text-[26px] mt-3">{t}</div>
                  <div className="divider my-4"></div>
                  <p className="text-[13.5px] leading-[1.7] text-ink/75 font-light">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="label mb-4">The Team</div>
            <h2 className="display text-[clamp(36px,5vw,72px)] mb-12">THE <span className="slash">/</span> FOUNDER</h2>
          </Reveal>
          <div className="grid md:grid-cols-1 max-w-[720px] mx-auto gap-6">
            {[
              { n:'Dr. Kartik Rangaraj', r:'Founder', loc:'Abu Dhabi · UAE', cls:'img-sky',
                bio:'Founder of Apex Academy.' }
            ].map(m=>(
              <Reveal key={m.n}>
                <div className="glass corners p-2">
                  <Corners/>
                  <div className={'h-64 '+m.cls}></div>
                  <div className="p-8">
                    <div className="label-muted mb-1">{m.loc}</div>
                    <div className="display text-[30px]">{m.n}</div>
                    <div className="font-light text-[16px] text-ink/70 mt-1">{m.r}</div>
                    <div className="divider my-5"></div>
                    <p className="text-[14.5px] leading-[1.75] text-ink/80 font-light">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="label mb-4">How We Build</div>
            <h2 className="display text-[clamp(36px,5vw,72px)] mb-12">FIVE <span className="slash">/</span> STAGES</h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-3">
            {[
              ['01','Research','Faculty interviews, syllabus ingest.'],
              ['02','Scripting','Chapter-by-chapter with embedded viva.'],
              ['03','VR Production','Scene assembly, narration, tuning.'],
              ['04','Pilot','Live cohort deployment. Telemetry on.'],
              ['05','Iteration','Six-week loops on heatmap hotspots.']
            ].map(([n,t,d])=>(
              <div key={n} className="glass corners p-6">
                <Corners/>
                <div className="mono text-[11px] tracking-[0.25em] text-cyan">{n}</div>
                <div className="display text-[22px] mt-3">{t}</div>
                <p className="mt-3 text-[12.5px] leading-[1.65] text-ink/75 font-light">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

function CaseIndexPage(){
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Case Studies'}]}
        tag="Deployment Evidence"
        title={<>WHERE APEX <span className="slash">/</span> LANDS</>}
        sub="Two live deployments. Both publicly documented. Both measurably moved the needle."
        imgCls="img-dome"
      />
      <section className="px-6 py-12">
        <div className="max-w-[1440px] mx-auto space-y-6">
          {CASE_STUDIES.map((cs,i)=>(
            <Reveal key={cs.slug}>
              <Link to={`/case-studies/${cs.slug}`} className="block">
                <article className="glass corners p-8 grid md:grid-cols-12 gap-8 items-center" data-hover>
                  <Corners/>
                  <div className="md:col-span-4 h-48 img-sky rounded relative">
                    <div className="ray absolute inset-0"></div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="label mb-3">{cs.date} · {cs.institution}</div>
                    <h3 className="display text-[clamp(26px,3.5vw,42px)]">{cs.title}</h3>
                    <p className="mt-4 text-[15px] leading-[1.65] text-ink/80 font-light">{cs.headline}</p>
                  </div>
                  <div className="md:col-span-3 grid grid-cols-2 gap-2">
                    {cs.metrics.slice(0,4).map(([l,v])=>(
                      <div key={l} className="glass-light p-3">
                        <div className="label-muted text-[9px]">{l}</div>
                        <div className="display text-[22px] mt-1">{v}</div>
                      </div>
                    ))}
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}

function RoadmapPage(){
  const quarters = [
    { q:'Q2 2026', status:'active', color:'amber', items:['HUMA 156 v2 polish','EV HV Safety expansion','First cohort metrics published'] },
    { q:'Q3 2026', status:'active', color:'amber', items:['Biochemistry MVP — 8 chapters','Second university partner','Instructor dashboard GA'] },
    { q:'Q4 2026', status:'planned', color:'outline', items:['Nutrition discovery','Platform public launch','Self-serve authoring'] },
    { q:'Q1 2027', status:'planned', color:'outline', items:['Pico 4 native port','Hand-tracking overhaul','Cross-institution benchmarks'] }
  ];
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Roadmap'}]}
        tag="Forward"
        title={<>ROADMAP <span className="slash">/</span> 2026–27</>}
        sub="Public, updated quarterly. What's shipped, what's in production, what's planned."
        imgCls="img-horizon"
      />
      <section className="px-6 py-12">
        <div className="max-w-[1200px] mx-auto relative">
          <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan via-sky to-cyan/20"></div>
          <div className="space-y-10">
            {quarters.map((q,i)=>(
              <Reveal key={q.q}>
                <div className={'relative grid md:grid-cols-2 gap-8 items-center '+(i%2===0?'':'md:[&>*:first-child]:order-2')}>
                  <div className={i%2===0 ? 'md:text-right md:pr-16' : 'md:pl-16'}>
                    <div className="absolute left-[20px] md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan ring-4 ring-white" style={{boxShadow:'0 0 14px #6DC4E8'}}></div>
                    <div className="pl-10 md:pl-0">
                      <div className="mono text-[12px] tracking-[0.3em] text-cyan">{q.q}</div>
                      <div className="display text-[42px] mt-2">{q.status==='active'?'IN PRODUCTION':'PLANNED'}</div>
                    </div>
                  </div>
                  <div className={i%2===0 ? 'md:pl-16' : 'md:pr-16'}>
                    <div className="glass corners p-7 ml-10 md:ml-0">
                      <Corners/>
                      <ul className="space-y-3">
                        {q.items.map((it,j)=>(
                          <li key={j} className="flex items-center gap-3">
                            <span className={'w-2 h-2 rounded-full '+(q.color==='amber'?'bg-[#E8A547]':'border border-muted')}></span>
                            <span className="text-[14.5px] text-ink/85 font-light">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

function ContactPage(){
  const [tab,setTab] = useState('PARTNER');
  const [sent,setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),3500); };
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Contact'}]}
        tag="Open Channel"
        title={<>INITIATE <span className="slash">/</span> CONTACT</>}
        sub="Partnership inquiries, demo requests, press. We respond within 24 hours, Gulf Standard Time."
        imgCls="img-sky"
      />
      <section className="px-6 py-12">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="glass corners p-10">
              <Corners/>
              <div className="flex gap-1 mb-8 p-1 glass-light rounded">
                {[['PARTNER','Partner With Us'],['DEMO','Request Demo'],['GENERAL','General']].map(([k,l])=>(
                  <button key={k} onClick={()=>setTab(k)}
                    className={'flex-1 label px-4 py-3 rounded transition '+(tab===k?'bg-white/90 text-ink shadow-sm':'text-muted hover:text-ink')}>{l}</button>
                ))}
              </div>
              <form onSubmit={submit} className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                {tab==='PARTNER' && (<>
                  <div><div className="label-muted mb-1">Institution</div><input required className="glass-input" placeholder="Khalifa University"/></div>
                  <div><div className="label-muted mb-1">Role</div><input required className="glass-input" placeholder="Dean of Medicine"/></div>
                  <div><div className="label-muted mb-1">Name</div><input required className="glass-input" placeholder="Your name"/></div>
                  <div><div className="label-muted mb-1">Email</div><input required type="email" className="glass-input" placeholder="c.raj@inst.edu"/></div>
                  <div className="md:col-span-2"><div className="label-muted mb-1">Notes</div><textarea rows="3" className="glass-input" placeholder="Cohort size, semester, constraints..."></textarea></div>
                </>)}
                {tab==='DEMO' && (<>
                  <div><div className="label-muted mb-1">Name</div><input required className="glass-input" placeholder="Your name"/></div>
                  <div><div className="label-muted mb-1">Email</div><input required type="email" className="glass-input" placeholder="you@example.com"/></div>
                  <div><div className="label-muted mb-1">Program Interest</div>
                    <select className="glass-input bg-transparent"><option>HUMA 156 · Biosocial</option><option>EV Safety · HV</option><option>Biochemistry</option></select>
                  </div>
                  <div><div className="label-muted mb-1">Preferred Platform</div>
                    <select className="glass-input bg-transparent"><option>Meta Quest 3</option><option>Pico 4</option><option>WebXR</option></select>
                  </div>
                </>)}
                {tab==='GENERAL' && (<>
                  <div><div className="label-muted mb-1">Name</div><input required className="glass-input" placeholder="Your name"/></div>
                  <div><div className="label-muted mb-1">Email</div><input required type="email" className="glass-input" placeholder="you@example.com"/></div>
                  <div className="md:col-span-2"><div className="label-muted mb-1">Message</div><textarea rows="4" className="glass-input"></textarea></div>
                </>)}
                <div className="md:col-span-2 flex items-center justify-between mt-6">
                  <div className="label-muted">Secure Channel · TLS 1.3 · GMT+4</div>
                  <button type="submit" className="btn-glass">{sent?'✓ Transmitted':'Transmit'} <span className="arrow">→</span></button>
                </div>
              </form>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="glass corners p-6"><Corners/>
              <div className="label mb-3">Direct</div>
              <div className="mono text-[12px] leading-[1.9]">hq@apex.academy</div>
              <div className="mono text-[12px] leading-[1.9]">press@apex.academy</div>
              <div className="mono text-[12px] leading-[1.9] text-muted">GMT+4 · Abu Dhabi</div>
            </div>
            <div className="glass corners p-6"><Corners/>
              <div className="label mb-3">Distribution</div>
              <p className="text-[13px] leading-[1.65] text-ink/80 font-light">APK + OBB builds distributed via verified Google Drive to pilot institutions. Credentials within 24h of approval.</p>
            </div>
            <div className="glass corners p-6"><Corners/>
              <div className="label mb-3">Social</div>
              <div className="mono text-[12px] leading-[1.9] text-sky">LinkedIn ↗</div>
              <div className="mono text-[12px] leading-[1.9] text-sky">GitHub ↗</div>
            </div>
          </aside>
        </div>
      </section>
    </Page>
  );
}

function PressPage(){
  return (
    <Page>
      <PageHero
        crumbs={[{l:'Home',to:'/'},{l:'Press'}]}
        tag="Press Kit"
        title={<>PRESS <span className="slash">/</span> ASSETS</>}
        sub="Boilerplate, logos, single press contact."
        imgCls="img-cloud"
      />
      <section className="px-6 py-12 max-w-[1100px] mx-auto">
        <div className="glass corners p-10"><Corners/>
          <div className="label mb-3">Boilerplate</div>
          <p className="text-[15.5px] leading-[1.75] text-ink/85 font-light max-w-3xl">Apex Academy is a VR-native education company building immersive curricula for universities. Founded in 2024, Apex shipped its first chapter — HUMA 156 Biosocial Humanity — to Khalifa University in April 2026. Headquartered between Da Nang and Abu Dhabi.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[['Founded','Q4 2024'],['HQ','Da Nang · Abu Dhabi'],['Partner','Khalifa University'],['Chapters','12 Live']].map(([l,v])=>(
              <div key={l} className="glass-light p-4"><div className="label-muted text-[9px]">{l}</div><div className="display text-[22px] mt-1">{v}</div></div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

Object.assign(window,{ ProgramsPage, TechnologyPage, AboutPage, CaseIndexPage, RoadmapPage, ContactPage, PressPage });
