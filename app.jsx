// app.jsx — root router

function Router(){
  const { path } = useRoute();
  const progMatch = path.match(/^\/programs\/([^/]+)$/);
  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);

  let view;
  if (path === '/' || path === '') view = <HomePage/>;
  else if (path === '/programs') view = <ProgramsPage/>;
  else if (progMatch) view = <ProgramDetailPage slug={progMatch[1]}/>;
  else if (path === '/technology') view = <TechnologyPage/>;
  else if (path === '/about') view = <AboutPage/>;
  else if (path === '/case-studies') view = <CaseIndexPage/>;
  else if (caseMatch) view = <CaseDetailPage slug={caseMatch[1]}/>;
  else if (path === '/roadmap') view = <RoadmapPage/>;
  else if (path === '/contact') view = <ContactPage/>;
  else if (path === '/press') view = <PressPage/>;
  else view = (
    <Page><div className="px-6 py-32 max-w-[800px] mx-auto text-center">
      <div className="label mb-4">Signal Lost</div>
      <h1 className="display text-[clamp(48px,8vw,120px)]">404 <span className="slash">/</span> NOT FOUND</h1>
      <p className="mt-6 text-ink/75 font-light">No route matches <code className="mono text-sky">{path}</code>.</p>
      <Link to="/" className="btn-glass mt-8 inline-flex">Return Home <span className="arrow">→</span></Link>
    </div></Page>
  );

  return (<>
    <Nav/>
    <div key={path}>{view}</div>
    <Footer/>
  </>);
}

function App(){ return <RouterProvider><Router/></RouterProvider>; }
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
