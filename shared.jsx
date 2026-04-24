// shared.jsx — glass variant: router, nav, footer, primitives

const { useState, useEffect, useRef, createContext, useContext } = React;

const RouteCtx = createContext({ path:'/', navigate:()=>{} });
const useRoute = () => useContext(RouteCtx);

function RouterProvider({ children }){
  const parse = () => (location.hash.replace(/^#/, '') || '/');
  const [path, setPath] = useState(parse());
  useEffect(()=>{
    const on = () => { setPath(parse()); window.scrollTo({top:0,behavior:'instant'}); };
    window.addEventListener('hashchange', on);
    return ()=>window.removeEventListener('hashchange', on);
  },[]);
  const navigate = (p) => { if (p!==path) location.hash = p; };
  return <RouteCtx.Provider value={{path, navigate}}>{children}</RouteCtx.Provider>;
}

function Link({ to, className='', children, ...rest }){
  const { navigate } = useRoute();
  return <a href={'#'+to} className={className} onClick={(e)=>{ e.preventDefault(); navigate(to); }} {...rest}>{children}</a>;
}

const Corners = () => (<><span className="c-tr"></span><span className="c-bl"></span></>);

function StatusPill({ status }){
  const cls = status==='LIVE' ? 'live' : status==='IN_DEVELOPMENT' ? 'amber' : status==='PLANNED' ? 'planned' : 'live';
  const label = status==='LIVE'?'Live':status==='IN_DEVELOPMENT'?'In Development':status==='PLANNED'?'Planned':'Pilot';
  return <span className={'pill '+cls}><span className="dot"></span>{label}</span>;
}

// Reveal-on-scroll
function Reveal({ children, delay=0, className='' }){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(en => { if (en.isIntersecting) { setTimeout(()=>el.classList.add('in'), delay); io.unobserve(el); } });
    },{ threshold:0.15 });
    io.observe(el);
    return ()=>io.disconnect();
  },[delay]);
  return <div ref={ref} className={'reveal '+className}>{children}</div>;
}

// Count-up
function CountUp({ to, suffix='', duration=1200 }){
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(()=>{
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(en => {
        if (en.isIntersecting) {
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t-start)/duration);
            const eased = 1 - Math.pow(1-p, 3);
            setV(Math.round(to * eased));
            if (p<1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        }
      });
    },{ threshold:0.3 });
    io.observe(el);
    return ()=>io.disconnect();
  },[to, duration]);
  return <span ref={ref}>{String(v).padStart(String(to).length,'0')}{suffix}</span>;
}

// Nav
function Nav(){
  const { path } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', on);
    on();
    return ()=>window.removeEventListener('scroll', on);
  },[]);
  const isActive = (to) => path===to || (to!=='/' && path.startsWith(to));
  const links = [['/programs','Programs'],['/technology','Technology'],['/case-studies','Case Studies'],['/about','About'],['/contact','Contact']];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all">
      <div className={'max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3 transition-all rounded '+(scrolled?'glass-strong shadow-sm':'')}>
        <Link to="/" className="leading-none">
          <div className="font-display font-bold text-[16px] tracking-[0.14em] text-ink">APEX</div>
          <div className="font-display font-extralight text-[13px] tracking-[0.3em] text-ink/70 -mt-0.5">ACADEMY</div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([to,l]) => <Link key={to} to={to} className={'nav-link '+(isActive(to)?'active':'')}>{l}</Link>)}
        </nav>
        <button className="lg:hidden label" onClick={()=>setOpen(true)}>Menu</button>
      </div>
      {open && (
        <div className="menu-overlay flex flex-col items-center justify-center gap-8">
          <button className="absolute top-8 right-8 label" onClick={()=>setOpen(false)}>Close ×</button>
          {links.map(([to,l])=>(
            <a key={to} href={'#'+to} onClick={()=>setOpen(false)} className="display text-[42px] font-extralight">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer(){
  return (
    <footer className="relative mt-20 px-6 pb-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="glass-strong corners p-10 grid md:grid-cols-3 gap-10">
          <Corners/>
          <div>
            <div className="font-display font-bold text-[18px] tracking-[0.14em] text-ink">APEX</div>
            <div className="font-display font-extralight text-[14px] tracking-[0.3em] text-ink/70">ACADEMY</div>
            <p className="mt-5 text-[13px] leading-[1.7] text-ink/70">VR-native curricula for universities. Built in partnership with Khalifa University.</p>
          </div>
          <div>
            <div className="label-muted mb-4">Sitemap</div>
            <div className="grid grid-cols-2 gap-2 label" style={{color:'#0F1F3D'}}>
              <Link to="/" className="hover:text-sky">Home</Link>
              <Link to="/programs" className="hover:text-sky">Programs</Link>
              <Link to="/technology" className="hover:text-sky">Technology</Link>
              <Link to="/about" className="hover:text-sky">About</Link>
              <Link to="/case-studies" className="hover:text-sky">Case Studies</Link>
              <Link to="/roadmap" className="hover:text-sky">Roadmap</Link>
              <Link to="/contact" className="hover:text-sky">Contact</Link>
              <Link to="/press" className="hover:text-sky">Press</Link>
            </div>
          </div>
          <div>
            <div className="label-muted mb-4">Contact</div>
            <div className="mono text-[12px] leading-[1.9] text-ink/80">hq@apex.academy</div>
            <div className="mono text-[12px] leading-[1.9] text-ink/80">Abu Dhabi · Da Nang</div>
            <div className="mt-4 label">In partnership with</div>
            <div className="font-display font-semibold text-[18px] mt-1">Khalifa University</div>
          </div>
        </div>
        <div className="mt-6 text-center label-muted">
          APEX ACADEMY — IN PARTNERSHIP WITH KHALIFA UNIVERSITY — BUILD 2.0 — 2026
        </div>
      </div>
    </footer>
  );
}

function Page({ children }){ return <main className="relative z-10 page-enter pt-28">{children}</main>; }

function PageHero({ crumbs=[], tag, title, sub, imgCls='img-cloud', children }){
  return (
    <section className="relative px-6 pt-8 pb-16">
      <div className="max-w-[1440px] mx-auto">
        {crumbs.length>0 && (
          <div className="mono text-[11px] tracking-[0.2em] uppercase text-muted mb-8">
            {crumbs.map((c,i)=>(
              <span key={i}>
                {c.to ? <Link to={c.to} className="hover:text-sky">{c.l}</Link> : <span className="text-ink">{c.l}</span>}
                {i<crumbs.length-1 && <span className="mx-3 text-cyan">/</span>}
              </span>
            ))}
          </div>
        )}
        <div className="relative">
          <div className={'absolute inset-0 '+imgCls+' rounded opacity-60'} style={{height:'420px'}}></div>
          <div className="ray absolute inset-0" style={{height:'420px'}}></div>
          <div className="relative pt-16 pb-4">
            {tag && <div className="label mb-5">{tag}</div>}
            {title && <h1 className="display text-[clamp(48px,9vw,140px)]">{title}</h1>}
            {sub && <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink/80 font-light">{sub}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramBand({ p }){
  return (
    <Link to={`/programs/${p.slug}`} className="block">
      <Reveal>
        <article className="grid md:grid-cols-12 gap-0 mb-5 items-stretch" data-hover>
          <div className="md:col-span-7 relative min-h-[360px]">
            <div className={'absolute inset-0 '+(p.cover==='img-horizon'?'img-dome':p.cover==='img-blue'?'img-atrium':p.cover==='img-lab'?'img-lab':'img-crystal')}></div>
            <div className="ray absolute inset-0"></div>
            <div className="absolute top-6 left-6 pill"><span className="dot"></span>{p.code}</div>
          </div>
          <div className="md:col-span-5 glass corners p-10 flex flex-col justify-between">
            <Corners/>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="mono text-[11px] tracking-[0.2em] text-sky">{p.id}</span>
                <span className="text-cyan">/</span>
                <span className="label-muted">{p.dept}</span>
              </div>
              <h3 className="display text-[clamp(32px,4vw,52px)]">{p.code}</h3>
              <div className="font-display font-light text-[22px] text-ink/80 mt-1">{p.title}</div>
              <p className="mt-5 text-[14.5px] leading-[1.7] text-ink/75 font-light">{p.summary}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-sky/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2"><StatusPill status={p.status}/></div>
                <div className="mono text-[11px] text-muted">{p.duration} · {p.chapters} CH</div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.platforms.slice(0,3).map(pl => <span key={pl} className="label-muted text-[10px] border border-sky/20 px-2 py-1 tracking-widest">{pl}</span>)}
              </div>
              <span className="btn-ghost">View Program <span className="arrow">→</span></span>
            </div>
          </div>
        </article>
      </Reveal>
    </Link>
  );
}

Object.assign(window,{ RouterProvider, useRoute, Link, Corners, StatusPill, Reveal, CountUp, Nav, Footer, Page, PageHero, ProgramBand });
