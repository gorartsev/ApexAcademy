// data.jsx — programs, team, case studies, etc.

const PROGRAMS = [
  {
    slug: 'humanities-biosocial',
    id: 'PRG_01', code: 'HUMA 156',
    title: 'Biosocial Humanity',
    status: 'LIVE',
    dept: 'Humanities',
    institution: 'Khalifa University',
    duration: '25 min',
    chapters: 7,
    credits: 3,
    language: 'EN',
    release: '2026.04',
    platforms: ['Meta Quest 2/3/Pro','Pico 4','WebXR'],
    cover: 'img-atrium',
    summary: 'A 25-minute VR expedition through the biosocial model of medicine — an atrium of case studies students walk through, not a PDF they skim.',
    objectives: [
      'Locate the patient within nested social, biological, and historical systems',
      'Interpret three canonical biosocial cases through embodied exploration',
      'Complete one AI-led viva assessment per chapter',
      'Recall core vocabulary after 7-day delay (≥70%)'
    ],
    pedagogy: 'Biosocial Humanity is structured as a physical expedition. Students begin in the atrium — a central hub with seven doorways, one per case. Each case is walked through, not watched. An AI tutor (NPC) follows, asking Socratic questions; a viva at each gate unlocks the next.',
    chapterList: [
      {n:'CH_01', t:'Atrium & Briefing', d:'8 min', s:'Orientation + first biosocial case introduction.'},
      {n:'CH_02', t:'The Ward at Midnight', d:'3 min', s:'Embodied case: nocturnal delirium, family bedside.'},
      {n:'CH_03', t:'A Letter Home', d:'3 min', s:'Reading a patient letter in context — social determinants.'},
      {n:'CH_04', t:'The Clinician Viva', d:'4 min', s:'AI NPC interview. Branching.'},
      {n:'CH_05', t:'Recall Field', d:'3 min', s:'Spatial-memory recall prompts.'},
      {n:'CH_06', t:'Results Gallery', d:'2 min', s:'Performance read + next-session plan.'},
      {n:'CH_07', t:'Debrief', d:'2 min', s:'Instructor notes + bookmarks.'}
    ],
    instructor: { name:'Dr. Kartik "Carlo" RangaRaj', role:'Founder · Assistant Professor, Medical Sciences — Khalifa University CMHS', bio:'Founder of Apex Academy. Scripts every chapter and owns the pedagogical architecture.' }
  },
  {
    slug: 'engineering-ev-safety',
    id: 'PRG_02', code: 'EV 220',
    title: 'High-Voltage Safety',
    status: 'LIVE',
    dept: 'Engineering',
    institution: 'Apex Academy',
    duration: '15 min',
    chapters: 5,
    credits: 2,
    language: 'EN',
    release: '2026.04',
    platforms: ['Meta Quest 2/3/Pro','Pico 4'],
    cover: 'img-blue',
    summary: 'Technician training on live EV battery systems — failure modes, PPE, diagnostic sequences. Built for hands, not for slides. Demo-ready.',
    objectives: [
      'Identify failure-mode signatures on a live EV pack',
      'Execute safe-isolate procedure in the correct sequence',
      'Complete PPE donning sequence with zero protocol violations',
      'Pass voice-guided checkpoints with the correct step order'
    ],
    pedagogy: 'Muscle-memory first. The trainee dons PPE, isolates the pack, and executes each step in sequence. A voice instructor narrates what to do, replays instructions on 50-second intervals, and repeats the current step on wrong order. Repetition until correct is the design.',
    chapterList: [
      {n:'CH_01', t:'Workbench Orientation', d:'3 min', s:'Tools, PPE, bay layout.'},
      {n:'CH_02', t:'Isolation Procedure', d:'4 min', s:'Locking out the pack. Voice-guided.'},
      {n:'CH_03', t:'Failure Signatures', d:'3 min', s:'Thermal, venting, arc-flash.'},
      {n:'CH_04', t:'Field Diagnostic', d:'3 min', s:'Step-by-step live scenario.'},
      {n:'CH_05', t:'Debrief', d:'2 min', s:'Voice instructor recap.'}
    ],
    instructor: { name:'Dr. Kartik "Carlo" RangaRaj', role:'Founder · Assistant Professor, Medical Sciences — Khalifa University CMHS', bio:'Founder of Apex Academy.' }
  },
  {
    slug: 'biochemistry-molecular',
    id: 'PRG_03', code: 'BIOCHEM 201',
    title: 'Molecular Assembly',
    status: 'IN_DEVELOPMENT',
    dept: 'Biochemistry',
    institution: 'Partner TBD',
    duration: '—',
    chapters: 8,
    credits: 3,
    language: 'EN',
    release: 'Q3 2026',
    platforms: ['Meta Quest 2/3/Pro','Pico 4'],
    cover: 'img-earth',
    summary: 'Walk-in metabolic pathways. Grab enzymes by hand; assemble reactions in mid-air. Targeted for Q3 2026 deployment.',
    objectives: [
      'Reproduce glycolysis end-to-end without reference',
      'Identify and correct common enzyme-substrate mismatches',
      'Complete Krebs viva with mastery-level accuracy',
      'Integrate pentose-phosphate shunt on second attempt'
    ],
    pedagogy: 'Molecular assembly privileges the hand. Students walk across an enormous pathway diagram the size of a gymnasium, picking up enzymes, snapping substrates, watching phosphorylation pulse in real time.',
    chapterList: [
      {n:'CH_01', t:'The Pathway Room (preview)', d:'—', s:'Spatial onboarding. Closed alpha.'},
      {n:'CH_02', t:'Glycolysis', d:'—', s:'Step-by-step assembly.'},
      {n:'CH_03', t:'Krebs', d:'—', s:'Cycle visualization.'},
      {n:'CH_04', t:'Electron Transport', d:'—', s:'Gradient mechanics.'},
      {n:'CH_05', t:'Pentose Shunt', d:'—', s:'Alt. pathway introduction.'},
      {n:'CH_06', t:'Integration Viva', d:'—', s:'AI NPC interview.'},
      {n:'CH_07', t:'Recall Lab', d:'—', s:'Spaced recall (d+1, d+7, d+30).'},
      {n:'CH_08', t:'Debrief', d:'—', s:'Instructor notes.'}
    ],
    instructor: { name:'Dr. Kartik "Carlo" RangaRaj', role:'Founder · Assistant Professor, Medical Sciences — Khalifa University CMHS', bio:'Co-designing pedagogy with partner faculty TBA Q3 2026.' }
  },
  {
    slug: 'nutrition',
    id: 'PRG_04', code: 'NUTR 110',
    title: 'Gut Field Lab',
    status: 'PLANNED',
    dept: 'Nutrition',
    institution: 'Discovery phase',
    duration: '—',
    chapters: 6,
    credits: 2,
    language: 'EN',
    release: 'Q4 2026',
    platforms: ['TBD'],
    cover: 'img-lab',
    summary: 'A walkable model of the digestive tract. Macros, absorption kinetics, microbiome — taught by walking through them.',
    objectives: [
      'Understand macro absorption windows',
      'Identify microbiome states from environment cues',
      'Complete first viva on fiber mechanics'
    ],
    pedagogy: 'Discovery phase. Scoping faculty partners and clinical reviewers through Q3 2026.',
    chapterList: [
      {n:'CH_01', t:'Oral Cavity', d:'—', s:'TBD'},
      {n:'CH_02', t:'Stomach', d:'—', s:'TBD'},
      {n:'CH_03', t:'Small Intestine', d:'—', s:'TBD'},
      {n:'CH_04', t:'Microbiome Garden', d:'—', s:'TBD'},
      {n:'CH_05', t:'Large Intestine', d:'—', s:'TBD'},
      {n:'CH_06', t:'Integration Viva', d:'—', s:'TBD'}
    ],
    instructor: { name:'Dr. Kartik "Carlo" RangaRaj', role:'Founder · Assistant Professor, Medical Sciences — Khalifa University CMHS', bio:'Faculty partnership pending.' }
  }
];

const STATUS_META = {
  LIVE:          { cls:'live',  label:'Live' },
  PILOT:         { cls:'live',  label:'Pilot' },
  IN_DEVELOPMENT:{ cls:'amber', label:'In Development' },
  PLANNED:       { cls:'muted', label:'Planned' }
};

const TEAM = [
  { name:'Dr. Kartik "Carlo" RangaRaj', role:'Founder · Assistant Professor, Medical Sciences — Khalifa University CMHS', loc:'Abu Dhabi · UAE',
    bio:'Founder of Apex Academy. Working at the intersection of medicine, AI, and extended reality.',
    stats:[] }
];

const CASE_STUDIES = [
  {
    slug:'khalifa-huma-156',
    title:'KHALIFA UNIVERSITY // HUMA 156 PILOT',
    institution:'Khalifa University, Abu Dhabi',
    date:'April 22, 2026',
    status:'LIVE',
    headline:'First pilot delivered at Khalifa University. Pilot data collecting Q3 2026.',
    metrics:[
      ['Pilot Status', 'LIVE', 'live'],
      ['Chapters Delivered', '1', 'hud'],
      ['Student Data', 'COLLECTING Q3 2026', 'amber'],
      ['Next Review', 'Q3 2026', 'hud']
    ],
    quote:`The learner of 2030 will not memorize a system. They will inhabit it. The physician of 2030 will rehearse a surgery a hundred times before ever holding the scalpel.`,
    quoteBy:'Dr. Kartik "Carlo" RangaRaj · Founder, Apex Academy · Khalifa University CMHS',
    context:'A defining moment at Khalifa University — as H.E. Prof. Ebrahim Al Hajri (President, Khalifa University) and H.E. Mohamed Al Qadi (Abu Dhabi Department of Education and Knowledge / ADEK) articulated a shared vision for the next era of learning in the UAE. First-year medical humanities at Khalifa had solid content and weak engagement. The failure was architectural, not editorial.',
    solution:'We rebuilt Ch.1 of HUMA 156 as a walkable VR atrium with seven doors — one per biosocial case. An AI tutor follows the student. A viva at each gate unlocks the next. Runtime: 25 min. Retries unlimited. In alignment with the Khalifa University × ADEK national education architecture linking K-12, higher education, and workforce-ready talent. Pilot data collection begins Q3 2026.',
    event:{ name:'Khalifa University Showcase', when:'April 22, 2026', where:'Abu Dhabi · Khalifa University', audience:'H.E. Prof. Ebrahim Al Hajri (Khalifa President), H.E. Mohamed Al Qadi (ADEK), and ~50 attendees', outcome:'Approved to continue. Ch.2 scoped for Q3 2026.' }
  },
  {
    slug:'ev-high-voltage',
    title:'ENGINEERING // EV HIGH-VOLTAGE SAFETY',
    institution:'Apex Academy',
    date:'April 2026',
    status:'LIVE',
    headline:'Voice-guided EV safety module delivered demo-ready. Seeking vocational partners Q3 2026.',
    metrics:[
      ['Module Status', 'DEMO-READY', 'live'],
      ['Chapters', '5', 'hud'],
      ['Pilot Data', 'COLLECTING Q3 2026', 'amber'],
      ['Partners', 'IN DISCUSSION', 'hud']
    ],
    quote:`The sim rewinds when you mess up. That rewind is the whole curriculum.`,
    quoteBy:'Apex Academy · Design Notes',
    context:'High-voltage technician training is traditionally done on paper, then on live packs under supervision. The supervision bottleneck limits cohort size and exposes trainees to real risk during their learning curve.',
    solution:'We built a five-chapter VR module where the pack is always live but the trainee always survives. A voice instructor narrates every step, replays on 50-second intervals, and repeats current-step instructions when the trainee moves in the wrong order. Pilot deployments planned Q3 2026.',
    event:{ name:'Internal Demo', when:'April 2026', where:'Apex Academy', audience:'Founding team + partners', outcome:'Demo-ready build delivered. Seeking vocational partners.' }
  }
];

window.PROGRAMS = PROGRAMS; window.STATUS_META = STATUS_META; window.TEAM = TEAM; window.CASE_STUDIES = CASE_STUDIES;
