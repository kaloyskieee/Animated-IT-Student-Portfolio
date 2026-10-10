import './_group.css';
import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, ChevronDown,
  Code2, Github, Linkedin, Mail, Menu, X, Sparkles, Terminal, Layers3,
  Lightbulb, MapPin, BookOpen, Compass, Music2, Camera,
} from 'lucide-react';

const sections = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Projects' },
  { id: 'journey', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
const skills = [
  { group: 'FRONTEND · EXAMPLE SKILLS', items: ['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive design'] },
  { group: 'BACKEND · EXAMPLE SKILLS', items: ['Node.js', 'PHP', 'Python'] },
  { group: 'DATABASE · EXAMPLE SKILLS', items: ['MySQL', 'PostgreSQL', 'Firebase'] },
  { group: 'TOOLS · EXAMPLE SKILLS', items: ['TypeScript', 'Git & GitHub', 'VS Code', 'Figma'] },
  { group: 'OTHER INTERESTS · EXAMPLES', items: ['UI/UX design', 'Cybersecurity', 'Networking', 'Cloud computing'] },
];
const projects = [
  { number: '01', title: 'A quieter way to plan', kind: 'PRODUCTIVITY · UI CONCEPT', copy: 'A focused planning experience exploring how small interface choices can make a busy day feel more manageable.', accent: 'lavender', tags: ['React', 'Interaction design', 'Responsive'], liveUrl: '', sourceUrl: '' },
  { number: '02', title: 'Fieldnotes for the curious', kind: 'PERSONAL KNOWLEDGE · CONCEPT', copy: 'An editorial-style space for collecting ideas, links, and the sparks that usually get lost between tabs.', accent: 'cyan', tags: ['Design systems', 'CSS', 'Prototyping'], liveUrl: '', sourceUrl: '' },
  { number: '03', title: 'Making data feel human', kind: 'DATA STORYTELLING · EXPLORATION', copy: 'A visual experiment in turning everyday information into something clear, approachable, and worth exploring.', accent: 'peach', tags: ['JavaScript', 'Data viz', 'Accessibility'], liveUrl: '', sourceUrl: '' },
];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};
function Reveal({ children, className = '', delay = 0, testId }: { children: ReactNode; className?: string; delay?: number; testId?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} data-testid={testId} variants={fadeUp} initial={reduced ? false : 'hidden'} animate={reduced ? 'show' : undefined} whileInView={reduced ? undefined : 'show'} viewport={{ once: true, amount: 0.15 }} transition={reduced ? { duration: 0 } : { delay }}>{children}</motion.div>;
}
function App() {
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('top');
  useEffect(() => {
    const nodes = sections.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, .2, .5] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[#0b0d14] text-[#e8e9f0]">
      <div className="noise-overlay" aria-hidden="true" />
      <a href="#main" className="skip-link" data-testid="link-skip-content">Skip to content</a>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation" data-testid="navigation-main">
          <a href="#top" className="brand" aria-label="Go to top" data-testid="link-brand">
            <span className="brand-mark"><span /></span><span className="brand-name">YOUR NAME<span className="brand-dot">.</span></span>
          </a>
          <div className="desktop-nav">
            {sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu} className={`nav-link ${active === item.id ? 'is-active' : ''}`} data-testid={`link-nav-${item.id}`}>{item.label}</a>)}
            <a href="#contact" className="nav-cta" data-testid="link-nav-connect">Let’s connect <ArrowUpRight size={14} /></a>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-hidden={!menuOpen}>
          {sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1} data-testid={`link-mobile-${item.id}`}>{item.label}<ArrowUpRight size={15} /></a>)}
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero-section">
          <div className="hero-grid grid-lines" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <motion.div initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability" data-testid="status-availability">
                <span className="pulse-wrap"><i className="pulse-ring" /><i className="pulse-core" /></span>
                <span>IT STUDENT · ASPIRING DEVELOPER</span>
              </motion.div>
              <motion.p className="eyebrow hero-eyebrow" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .12 }}>INFORMATION TECHNOLOGY STUDENT <span>·</span> ASPIRING DEVELOPER</motion.p>
              <motion.h1 initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .8 }}>
                Turning Ideas<br />Into <span className="gradient-word">Digital</span><br />Experiences<span className="period">.</span>
              </motion.h1>
              <motion.p className="hero-intro" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>
                I’m <strong>Your Name</strong> — a curious IT student learning by building thoughtful, useful things for the web. This is where I share what I’m exploring, one project at a time.
              </motion.p>
              <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48 }}>
                <a href="#work" className="button button-primary" data-testid="link-explore-work">Explore My Work <ArrowRight size={16} /></a>
                <a href="#contact" className="button button-quiet" data-testid="link-contact-hero">Get In Touch <ArrowUpRight size={16} /></a>
              </motion.div>
              <div className="hero-meta"><span><MapPin size={14} /> YOUR CITY, YOUR COUNTRY</span><span className="meta-divider" /><span>LEARNING IN PUBLIC</span></div>
            </div>
            <motion.div className="hero-art" initial={reduced ? false : { opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .9 }}>
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
              <div className="art-glow" />
              <div className="art-core drift"><div className="core-grid" /><div className="core-symbol"><Code2 strokeWidth={1.1} /></div><span className="core-caption mono">CREATING / ITERATING</span></div>
              <div className="float-chip chip-top"><Terminal size={14} /><span>curiosity.exe</span><b>RUNNING</b></div>
              <div className="float-chip chip-bottom"><span className="tiny-square" /><span>building in progress</span><span className="chip-bars">···</span></div>
              <div className="art-index mono">FIG. 01 <span>—</span> THE PROCESS</div>
              <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
            </motion.div>
          </div>
          <a href="#about" className="scroll-cue" data-testid="link-scroll-about"><span>SCROLL TO EXPLORE</span><span className="scroll-line"><i /></span></a>
        </section>

        <section id="about" className="section about-section">
          <div className="section-inner">
            <Reveal className="section-kicker"><span className="section-number">01</span><span>THE PERSON BEHIND THE PIXELS</span></Reveal>
            <div className="about-layout">
              <Reveal className="about-heading"><h2>Good work starts<br />with <em>good questions.</em></h2><p className="heading-aside">A little about how I think<br />and what keeps me building.</p></Reveal>
              <Reveal className="about-body" delay={.08}>
                <p className="about-lead">I’m at the beginning of my developer journey — and that’s a place I’m learning to value.</p>
                <p>Studying information technology has given me a map of the possibilities. Making things is how I find my way through them. I’m drawn to the space where clean code meets considerate design: interfaces that feel intuitive, details that earn their place, and ideas made real through iteration.</p>
                <p>I don’t have every answer yet. I do have a habit of asking better questions, following the thread, and coming back to make it a little better. This portfolio is a living record of that process.</p>
                <a href="#journey" className="text-link" data-testid="link-about-journey">A bit more about my path <ArrowDownRight size={16} /></a>
              </Reveal>
            </div>
            <div className="principles">
              <Reveal className="principle"><span className="principle-icon"><Lightbulb size={18} /></span><span className="mono principle-id">01 / STAY CURIOUS</span><p>Start with a question.<br />Follow it somewhere new.</p></Reveal>
              <Reveal className="principle" delay={.07}><span className="principle-icon"><Layers3 size={18} /></span><span className="mono principle-id">02 / BUILD TO LEARN</span><p>Small experiments.<br />Real lessons.</p></Reveal>
              <Reveal className="principle" delay={.14}><span className="principle-icon"><Sparkles size={18} /></span><span className="mono principle-id">03 / CARE ABOUT DETAILS</span><p>Make it work. Then make<br />it feel right.</p></Reveal>
            </div>
            <div className="metrics-strip" aria-label="Editable example portfolio metrics">
              <div><strong data-testid="metric-projects">03</strong><span>CONCEPTS IN PROGRESS</span></div>
              <div><strong data-testid="metric-learning">∞</strong><span>THINGS TO LEARN</span></div>
              <div><strong data-testid="metric-years">00</strong><span>YEARS LEARNING · EXAMPLE</span></div>
              <p>Illustrative values only — replace with your real story.</p>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-inner">
            <Reveal className="section-kicker"><span className="section-number">02</span><span>SELECTED EXPLORATIONS</span></Reveal>
            <Reveal className="work-heading"><div><h2>Ideas, in progress.</h2><p>Small experiments, made to understand how things work — and how they could work better.</p></div><span className="concept-note mono"><i /> REPLACEABLE CONCEPT PLACEHOLDERS</span></Reveal>
            <div className="project-list">
              {projects.map((project) => <Reveal key={project.number} className={`project-row ${project.accent}`} testId={`project-concept-${project.number}`}>
                <div className="project-number mono">{project.number}<span> / 03</span></div>
                <div className="project-main"><span className="project-kind mono">{project.kind}</span><h3>{project.title}</h3><p>{project.copy}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions">{project.liveUrl ? <a className="project-action" href={project.liveUrl} target="_blank" rel="noreferrer" data-testid={`link-project-live-${project.number}`}>View Project <ArrowUpRight size={13} /></a> : <span className="project-action project-action-disabled" aria-disabled="true" data-testid={`text-project-live-placeholder-${project.number}`}>View Project <span className="project-action-hint">ADD URL</span></span>}{project.sourceUrl ? <a className="project-action project-action-secondary" href={project.sourceUrl} target="_blank" rel="noreferrer" data-testid={`link-project-source-${project.number}`}>Source Code <Github size={13} /></a> : <span className="project-action project-action-secondary project-action-disabled" aria-disabled="true" data-testid={`text-project-source-placeholder-${project.number}`}>Source Code <span className="project-action-hint">ADD URL</span></span>}</div></div>
                <div className="project-visual" aria-hidden="true"><div className="visual-window"><div className="window-top"><i /><i /><i /><span>concept / {project.number}</span></div><div className="window-content"><div className="visual-lines"><i /><i /><i /></div><div className="visual-orb" /><div className="visual-block" /></div></div><span className="visual-stamp">STUDY<br />IN PROGRESS</span></div>
                <div className="project-status"><span className="status-dot" /> CONCEPT ONLY <span className="no-link">No live project link</span></div>
              </Reveal>)}
            </div>
            <p className="work-footnote"><span className="footnote-rule" /> These are illustrative concepts, not completed client work. Replace with real projects as they take shape.</p>
          </div>
        </section>

        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
          <div className="section-inner">
            <Reveal className="section-kicker"><span className="section-number">03</span><span>THE TOOLBOX, SO FAR</span></Reveal>
            <div className="skills-intro"><Reveal><h2 id="skills-title">Things I’m exploring.</h2><p>These are snapshots of my learning interests — not claims of professional proficiency.</p></Reveal><Reveal className="skills-aside"><span className="mono">A WORK IN PROGRESS</span><Braces size={34} strokeWidth={1} /></Reveal></div>
            <div className="skill-groups">{skills.map((group, index) => <Reveal className="skill-group" key={group.group} delay={index * .06}><span className="mono skill-group-name">{group.group}</span><div className="skill-items">{group.items.map((skill, i) => <span className="skill-pill" key={skill} data-testid={`skill-example-${index}-${i}`}><i>{String(i + 1).padStart(2, '0')}</i>{skill}</span>)}</div></Reveal>)}</div>
            <div className="honesty-note"><span className="note-mark">i</span><p><strong>Honest by design.</strong> Every skill shown here is an editable example. Keep what reflects your experience, change what doesn’t.</p></div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="section-inner">
            <Reveal className="section-kicker"><span className="section-number">04</span><span>THE LEARNING CURVE</span></Reveal>
            <div className="journey-layout">
              <Reveal className="journey-heading"><h2>Still becoming.<br /><em>Always learning.</em></h2><p>There’s no straight line from curious to capable. Here’s the path I’m on.</p></Reveal>
              <div className="timeline">
                 <Reveal className="timeline-item"><div className="timeline-marker"><span /></div><span className="mono timeline-date">YOUR START YEAR — EXPECTED GRADUATION: YEAR</span><h3>Bachelor of Science in Information Technology</h3><p className="timeline-place">YOUR SCHOOL OR UNIVERSITY</p><span className="editable-label">EDITABLE PROGRAM EXAMPLE</span><dl className="education-details"><div><dt>Expected graduation</dt><dd>Add your expected year</dd></div><div><dt>Relevant coursework</dt><dd>List subjects you want to highlight</dd></div><div><dt>Certifications &amp; workshops</dt><dd>Add completed items or remove this field</dd></div><div><dt>Academic milestones</dt><dd>Add milestones that reflect your experience</dd></div></dl></Reveal>
                 <Reveal className="timeline-item"><div className="timeline-marker"><span /></div><span className="mono timeline-date">RIGHT NOW</span><h3>Learning by making</h3><p>Exploring frontend development, design fundamentals, and the practice of turning rough ideas into useful interfaces.</p><span className="editable-label">PERSONAL LEARNING GOAL · EDITABLE</span></Reveal>
                <Reveal className="timeline-item future"><div className="timeline-marker"><span /></div><span className="mono timeline-date">NEXT UP</span><h3>More questions to follow</h3><p>Contribute, collaborate, and take on problems that stretch what I know. The next chapter is still unwritten.</p></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section outside-section">
          <div className="section-inner">
            <Reveal className="outside-card"><div className="outside-title"><span className="mono">WHEN I’M NOT IN THE EDITOR</span><h2>Good ideas need<br />room to wander.</h2></div><p className="outside-copy">Away from the screen, I make space for the things that keep me curious. Edit these to sound like you.</p><div className="interest-list"><span><BookOpen size={16} /> Reading things slowly</span><span><Compass size={16} /> Finding new places</span><span><Music2 size={16} /> Making a good playlist</span><span><Camera size={16} /> Noticing small details</span></div><div className="outside-orbit" aria-hidden="true"><div /><div /><div /></div></Reveal>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-backdrop" aria-hidden="true" />
          <div className="section-inner contact-inner">
            <Reveal className="section-kicker"><span className="section-number">05</span><span>OPEN FOR A CONVERSATION</span></Reveal>
            <Reveal className="contact-content"><span className="mono contact-prelude">HAVE A QUESTION, IDEA, OR OPPORTUNITY?</span><h2>Have an idea?<br /><em>Let's build something great.</em></h2><p>I’m always glad to meet people who care about making useful, thoughtful things. If you’d like to talk, I’d love to hear from you.</p><a className="contact-email" href="mailto:your.email@example.com" data-testid="link-contact-email"><Mail size={18} /> your.email@example.com <ArrowUpRight size={18} /></a><p className="placeholder-warning">Replace this illustrative email with your own before publishing.</p></Reveal>
            <Reveal className="contact-bottom"><span className="mono">CURRENTLY BASED IN YOUR CITY</span><div><a href="https://github.com/" target="_blank" rel="noreferrer" data-testid="link-github-placeholder"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" data-testid="link-linkedin-placeholder"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div><p className="social-placeholder">Replace platform links with your own profiles.</p></Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer"><a href="#top" className="footer-brand" data-testid="link-footer-top"><span className="brand-mark"><span /></span> YOUR NAME<span className="brand-dot">.</span></a><span className="footer-note">BUILT WITH CURIOSITY, ONE ITERATION AT A TIME.</span><a href="#top" className="back-top" data-testid="link-back-to-top">BACK TO TOP <ChevronDown size={14} /></a><span className="footer-copy">© <span>{new Date().getFullYear()}</span> YOUR NAME · EDITABLE TEMPLATE</span></footer>
    </div>
  );
}
export default App;
