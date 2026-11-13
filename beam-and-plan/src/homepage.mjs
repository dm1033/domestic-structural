import { site } from './config.mjs';
import { esc, faqBlock, quoteForm } from './templates.mjs';
import { beamStory } from './beam-story.mjs';
import { plotStory } from './plot-story.mjs';

export const homeTitle = 'Structural Engineering for Homeowners';
export const homeDescription = 'Fixed-fee structural engineering for homeowners. Signed beam calculations, builder-ready CAD drawings, extensions, foundations and planning help.';

const whatsapp = 'https://wa.me/447900984900';
const regCheck = 'https://www.engc.org.uk/professional-registration/check-a-registration/';
const arrow = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11"/></svg>';

export const serviceRegister = [
  { code: 'S-01', title: 'Steel beam design', href: '/services/steel-beam-calculations/', description: 'Open up a room with signed beam calculations and clear support details.', included: 'Signed calculations and CAD details for the agreed beam and supports.' },
  { code: 'S-02', title: 'Extension design', href: '/projects/extension/', description: 'A structural design for your extra space, from the new opening to the foundations.', included: 'Calculations and drawings for the structural elements in your brief.' },
  { code: 'S-03', title: 'Foundation design', href: '/projects/foundations/', description: 'Design for the loads, ground conditions and constraints of your property.', included: 'Foundation calculations and details, based on suitable ground information.' },
  { code: 'S-04', title: 'Planning drawings', href: '/services/planning-permission/', description: 'Clear plans, elevations and site drawings for your planning submission.', included: 'The planning drawings and application support listed in your quote.' },
  { code: 'S-05', title: 'Inspections and reports', href: '/services/structural-inspections/', description: 'Understand a crack, movement or a proposed alteration before deciding what to do.', included: 'An agreed inspection scope and written findings, with next steps.' },
  { code: 'S-06', title: 'Party wall & boundary drawings', href: '#party-wall', description: 'Measured drawings for proposed work near a neighbour or property boundary.', included: 'Measured survey information and agreed drawings for your team or surveyor.' },
];

export const homeFaqs = [
  { q: 'Do I need calculations to remove a wall?', a: 'If the wall carries part of the house, the new support needs to be designed. Tell us what you want to change. We will confirm what information, inspection and calculations the project needs.' },
  { q: 'What will my builder and Building Control receive?', a: 'The quote sets out your deliverables. A structural design package typically includes signed calculations, clear CAD drawings and the details your builder needs for the agreed scope. Building Control reviews the submission separately.' },
  { q: 'How much will it cost?', a: 'We agree a fixed fee before work starts. Your quote sets out the drawings, calculations, included support, applicable VAT and any separately priced visits or investigations.' },
  { q: 'Can I start with a sketch or some photos?', a: 'Yes. Send your postcode, what you want to change and any plans or safely taken photos you already have. We will tell you what needs to be confirmed before design.' },
  { q: 'Are planning permission and Building Regulations the same?', a: 'They are separate processes. Planning considers the proposed development. Building Regulations deal with how the work is designed and built. We help identify which drawings and structural information your project needs.' },
  { q: 'Can you help with party walls and boundaries?', a: 'We can provide measured survey and boundary drawings for the agreed scope. We are not party wall surveyors, but our drawings give a surveyor what they need. Legal boundary disputes need a boundary surveyor or solicitor.' },
  { q: 'Do you visit properties outside Norwich?', a: 'We arrange visits in Norwich and Norfolk where suitable. For projects elsewhere in the UK, tell us your postcode so we can confirm whether remote design or an arranged visit is appropriate.' },
];

export function homepageFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map(({q,a}) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

const action = (href, label, primary = false) => `<a class="bp-action${primary ? ' bp-action-primary' : ''}" href="${esc(href)}">${esc(label)}${arrow}</a>`;
const actions = () => `<div class="bp-actions">${action('#enquire','Get a fixed fee',true)}${action(whatsapp,'WhatsApp David')}</div>`;
const intro = (label, title, summary) => `<div class="bp-section-intro"><p class="bp-label">${esc(label)}</p><h2>${esc(title)}</h2><p>${esc(summary)}</p></div>`;

export function homepageHeader() {
  return `<header class="site-header bp-header"><div class="wrap header-inner">
    <a class="brand" href="/" aria-label="Beam and Plan home">beam <span>&amp;</span> plan</a>
    <nav class="desktop-nav" aria-label="Main navigation"><a href="#your-project">Services</a><a href="#how-it-works">How it works</a><a href="#engineer">Your engineer</a></nav>
    ${action(whatsapp,'WhatsApp David')}
    <details class="mobile-menu"><summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation"><a href="#your-project">Services</a><a href="#how-it-works">How it works</a><a href="#engineer">Your engineer</a><a href="#enquire">Get a fixed fee</a><a href="${whatsapp}">WhatsApp David</a></nav></details>
  </div></header>`;
}

export function homepageFooter() {
  return `<footer class="bp-footer"><div class="wrap">
    <div class="bp-footer-top"><div><a class="brand" href="/">beam <span>&amp;</span> plan</a><p>Beam &amp; Plan will sort it.</p></div><div><a href="mailto:${esc(site.email)}">${esc(site.email)}</a><br><a href="tel:${esc(site.phone)}">${esc(site.displayPhone)}</a><br><a href="${esc(site.parent)}">Sister practice: Temporary Works Consulting &amp; Design Ltd</a></div></div>
    <div class="bp-scope"><h2>Scope and competence</h2><p>We agree the work, responsibilities and information needed before appointment. Calculations and drawings apply to the property and scope stated on them. The website examples explain the design process. Construction needs project-specific design, suitable temporary support and the relevant approvals. Planning and party wall guidance is jurisdiction specific.</p></div>
    <div class="bp-title-block"><span><small>Practice</small>Beam &amp; Plan</span><span><small>Drawing</small>Home structural design</span><span><small>Sheet</small>Sheet 01 of 01</span><span><small>Revision</small>Rev A</span></div>
    <nav aria-label="Footer"><a href="/structural-engineer-norwich-norfolk/">Norwich &amp; Norfolk</a><a href="/permissions/">Permissions</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav>
  </div></footer><div class="mobile-contact bp-mobile-actions"><a href="${whatsapp}">WhatsApp David</a><a href="#enquire">Get a fixed fee ${arrow}</a></div>`;
}

const process = [
  ['Tell us what you want to change', 'Start with your postcode, a short description and the plans or photos you have.'],
  ['Agree the scope and fixed fee', 'We confirm the work, information, deliverables and expected delivery date in writing.'],
  ['We calculate and draw', 'We use current design software and the applicable UK standards to develop the agreed design.'],
  ['Receive your design package', 'Get the signed calculations and CAD details agreed for your builder and Building Control submission.'],
];

export function homepageBody(backend) {
  return `<section class="bp-hero" aria-labelledby="bp-hero-title">
    <img class="bp-hero-photo" src="/assets/home-extension.webp" width="1536" height="1024" alt="" fetchpriority="high">
    <div class="wrap bp-hero-grid"><div class="bp-hero-copy"><h1 id="bp-hero-title">Structural<br>design for<br>your home.</h1><p class="bp-hero-lead">From the first idea to clear drawings and signed calculations for Building Control. Get the work you need, with a fixed fee agreed before we start.</p><p class="bp-signoff">Beam &amp; Plan will sort it.</p>${actions()}</div>
    <a class="bp-hero-teaser" href="#from-sum-to-steel"><span class="bp-label">Design study 01</span><span class="bp-teaser-title">From sum to steel ${arrow}</span><img src="/assets/beam-teaser.svg" width="640" height="380" alt="Illustrative section of a house opening with an isometric steel beam" decoding="async"></a></div>
  </section>
  <ul class="wrap bp-trust" aria-label="What you can expect"><li>Fixed fee</li><li>Signed calcs</li><li>Builder-ready</li><li>Plain English</li><li>CEng-led</li></ul>
  <section class="bp-section" id="sketch-to-cad"><div class="wrap">${intro('Design package','Pencil sketch to clear CAD.','A sketch is enough to start. We turn it into clear CAD drawings, signed calculations and useful details for the people building your project.')}
    <div class="bp-sketch" data-bp-sketch><figure><img src="/assets/sketch-study.svg" width="640" height="400" alt="Hand-drawn concept for a new opening in a wall" loading="lazy"><figcaption>01 / Your idea</figcaption></figure><span class="bp-sketch-arrow" aria-hidden="true">→</span><figure><div class="bp-cad-stack"><img src="/assets/sketch-study.svg" width="640" height="400" alt="" aria-hidden="true" loading="lazy"><div class="bp-cad-reveal" data-bp-cad><img src="/assets/cad-study.svg" width="640" height="400" alt="Illustrative CAD drawing showing the same opening with clear reference lines and a steel beam" loading="lazy"></div></div><figcaption>02 / Clear drawing</figcaption></figure></div>
    <p class="bp-small">Illustrative drawings. Every design is prepared for the property and agreed scope.</p>${action('/your-design-package/','See a design package')}</div></section>
  <section class="bp-section bp-panel" id="your-project"><div class="wrap">${intro('Services register','What are you planning?','Choose the help you need. Tell us about your project if you are unsure where to start.')}
    <div class="bp-register">${serviceRegister.map(s => `<a class="bp-service" href="${esc(s.href)}"><span class="bp-service-top"><span class="bp-label">${s.code}</span>${arrow}</span><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></a>`).join('')}</div></div></section>
  <div class="bp-stories"><div id="from-sum-to-steel">${beamStory()}</div><div id="from-plot-to-plan">${plotStory()}</div></div>
  <section class="bp-section bp-panel" id="party-wall"><div class="wrap">${intro('S-06 / Neighbours and boundaries','Clear drawings for work near a boundary.','Measured survey and boundary drawings can show where the proposed work sits, what you are changing and how it relates to nearby structures.')}
    <div class="bp-two-columns"><article><h3>Party wall drawings</h3><p>The Party Wall etc. Act 1996 can apply to certain work to a shared wall, at a boundary or near adjoining foundations in England and Wales. The details of the work matter. We are not party wall surveyors, but our drawings give a surveyor what they need.</p><a href="/services/party-wall/">Explore party wall guidance ↗</a></article><article><h3>Measured survey and boundary drawings</h3><p>We can record site features and dimensions and draw the proposed layout for your agreed scope. A drawing shows the features we survey. For a legal boundary dispute, speak to a boundary surveyor or solicitor.</p><a href="/permissions/">Understand the separate permissions ↗</a></article></div>${action('#enquire','Discuss your drawings',true)}</div></section>
  <section class="bp-section" id="how-it-works"><div class="wrap">${intro('The process','Four steps from idea to design.','Practical support. Personally delivered.')}
    <ol class="bp-process">${process.map(([title,copy],i) => `<li><span class="bp-label">0${i+1}</span><h3>${esc(title)}</h3><p>${esc(copy)}</p></li>`).join('')}</ol><p class="bp-signoff">Beam &amp; Plan will sort it.</p></div></section>
  <section class="bp-section bp-panel" id="fixed-fees"><div class="wrap">${intro('Fees','A fixed fee for the work you need.','A clear scope and coordinated drawings are designed to keep costs down. Your written quote explains what is included, applicable VAT and any separately priced visits or investigations.')}
    <div class="bp-fees">${serviceRegister.map(s => `<div><span class="bp-label">${s.code}</span><h3>${esc(s.title)}</h3><p>${esc(s.included)}</p><span class="bp-fee-label">Fixed fee by quote</span></div>`).join('')}</div>${actions()}</div></section>
  <section class="bp-section" id="engineer"><div class="wrap bp-two-columns"><div>${intro('Your engineer','Meet David J. Miller.','CEng MICE · MSc')}
    <p>Speak directly with a Chartered Civil Engineer about the change you want to make. David brings practical design and construction experience to home alterations, from the first conversation to the agreed drawings and calculations.</p>${action(regCheck,'Verify CEng registration')}</div><div class="bp-engineer-card"><span class="bp-label">Practice record</span><strong>David J. Miller</strong><p>Chartered Civil Engineer</p><p>Based in Norwich. Visits in Norfolk by arrangement. Tell us your postcode to check how we can help.</p><a href="/structural-engineer-norwich-norfolk/">Norwich and Norfolk services ↗</a><br><a href="/about/">About David and the practice ↗</a></div></div></section>
  <section class="bp-section bp-panel" id="faq"><div class="wrap bp-two-columns"><div>${intro('Homeowner questions','A few things to know.','Clear answers before you decide how to move forward.')}</div>${faqBlock(homeFaqs)}</div></section>
  <section class="bp-section bp-enquiry" id="enquire"><div class="wrap bp-two-columns"><div>${intro('Request a fixed fee','Tell us what you have in mind.','Send your postcode and a short description. We will explain what we need and agree the scope and fee before work starts.')}
    <p class="bp-signoff">Beam &amp; Plan will sort it.</p>${action(whatsapp,'WhatsApp David')}<p class="bp-small"><a href="tel:${esc(site.phone)}">${esc(site.displayPhone)}</a></p></div>${quoteForm(backend)}</div></section>`;
}
