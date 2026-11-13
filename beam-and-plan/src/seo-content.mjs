import { site } from './config.mjs';
import { esc, link, pageHero, faqBlock, cta } from './templates.mjs';

// These pages enrich existing project routes and add a specific steel beam service.
// They are rendered through the site's existing layout by scripts/build.mjs.
export const seoPages = [
  {
    slug: 'wall-removal',
    path: '/projects/wall-removal/',
    title: 'Load-bearing wall removal calculations & drawings',
    description: 'Planning a wall removal? Get a fixed-fee quote for structural calculations, clear CAD drawings and agreed support for your home alteration.',
    heading: 'Load-bearing wall removal, clearly designed.',
    intro: 'Open up your kitchen or living space with the structural calculations, CAD details and practical support your project needs.',
    breadcrumb: 'Your project / Wall removal',
    lead: 'You know the space you want. We help work out the structure behind it: what the wall supports, where the new loads will go, and which details your builder needs before starting.',
    serviceType: 'Structural calculations and drawings for domestic wall removal',
    quoteQuery: '?project=wall-removal&service=structural-calculations',
    ctaHeading: 'Tell us which wall you want to change.',
    sidebarHeading: 'Start with your proposed opening.',
    sidebarText: 'Send the layout and photographs you have. We will identify the information needed and quote for the agreed design package.',
    sections: [
      {
        heading: 'More than choosing a beam size.',
        paragraphs: [
          'A load-bearing wall can support floors, roof structure, masonry or other beams. The design needs to consider those loads and how they will travel through the new supports to the ground. Opening width alone does not answer that question.',
          'We review the information available and explain whether a visit, reliable measurements or planned opening-up is needed. The design can then address the beam, its bearings and any columns, connections or foundation checks included in your appointment.'
        ]
      },
      {
        heading: 'What your wall removal package can include.',
        bullets: [
          'A readable structural calculation report for the elements in your brief.',
          'Beam and support specifications, including padstones or bearings where designed.',
          'Dimensioned CAD layouts and the connection or support details included in the quote.',
          'Clearly stated assumptions, site verification requirements and document revisions.',
          'An agreed allowance for builder queries and structural submission comments.'
        ],
        paragraphs: [
          'Your written quote lists the documents and details included. Temporary propping and the removal sequence need their own consideration and can be scoped where required; they are not automatically covered by a permanent beam calculation.'
        ]
      },
      {
        heading: 'How much do wall removal calculations cost?',
        paragraphs: [
          'The fee depends on the actual alteration: the loads above the opening, the proposed supports, existing construction, access and the information already available. A straightforward opening and a layout needing columns or foundation work can involve different design scopes.',
          'We confirm a fixed fee for the agreed work before starting. The quote identifies calculations, CAD drawings, technical support, any VAT and separately priced items such as visits, investigation or additional design. You can compare the whole package before appointing us.'
        ],
        link: { path: '/value/', label: 'Understand fixed fees and what is included' }
      },
      {
        heading: 'What to send for a useful quote.',
        bullets: [
          'The property postcode and a description of the proposed alteration.',
          'An existing floor plan and a plan or sketch showing the wall and proposed opening.',
          'Known dimensions and safely taken photographs of the relevant areas.',
          'Any structural drawings, surveys or records of previous alterations.',
          'Any requests from your builder, architect or Building Control.',
          'Your preferred programme and whether building work has already started.'
        ],
        paragraphs: ['Incomplete plans are fine for an initial enquiry. We will tell you what must be confirmed before the structural design can be completed.']
      }
    ],
    permissions: 'In England, internal alterations often do not need a planning application, but removing or altering an internal wall can still require Building Regulations approval. Listed-building restrictions need particular attention. Work affecting a shared wall can also raise separate Party Wall etc. Act requirements. Confirm the applicable processes and temporary support arrangements before construction.',
    faq: [
      { q: 'How do I know whether the wall is load-bearing?', a: 'A plan and photographs are useful starting points, but may not reveal the existing support arrangement or previous alterations. We will identify whether a site visit, measurements or further investigation is required. Do not rely on a photograph or the sound of a wall as confirmation that it can be removed.' },
      { q: 'Do I need a structural engineer to remove a wall?', a: 'If the alteration affects the structure, the support arrangement needs competent assessment and design. We can review the proposed work, identify the information needed, and agree the calculations and details required for your project.' },
      { q: 'Will the beam calculation include its supports?', a: 'The written scope identifies which bearings, padstones, columns, connections and existing or new foundations are assessed. Those requirements need to be considered as part of the load path; do not assume that a beam-only price includes them all.' },
      { q: 'Do you provide a drawing my builder can follow?', a: 'CAD drawings can be included with the calculation package. Your quote confirms the layouts, dimensions and details provided, along with any specialist or fabrication information that must be supplied separately.' },
      { q: 'How quickly can I get the calculations?', a: 'We agree a delivery date after reviewing the scope, information needed and current capacity. Missing measurements, concealed construction or a change to the opening can affect the programme. Tell us your intended building date when you enquire.' },
      { q: 'Can you help with Building Control comments?', a: 'Yes, within the technical support agreed in your appointment. Send the specific comment and current design information. Building Control makes its own approval decisions, and wider questions may require additional design input.' }
    ],
    related: [
      { path: '/services/steel-beam-calculations/', label: 'Steel beam calculations' },
      { path: '/services/cad-drawings/', label: 'CAD drawings for your builder' },
      { path: '/services/structural-inspections/', label: 'Targeted structural inspections' },
      { path: '/services/party-wall/', label: 'Party wall guidance' }
    ],
    sources: [
      { label: 'Planning Portal: Internal walls and Building Regulations', url: 'https://www.planningportal.co.uk/permission/common-projects/internal-walls/what-building-regulations-apply-to-internal-walls/' },
      { label: 'Planning Portal: Planning permission for internal alterations', url: 'https://www.planningportal.co.uk/permission/common-projects/internal-walls/' },
      { label: 'GOV.UK: Party walls and building work', url: 'https://www.gov.uk/party-walls-building-works' }
    ]
  },
  {
    slug: 'steel-beam-calculations',
    path: '/services/steel-beam-calculations/',
    title: 'Steel beam calculations, RSJ design & CAD details',
    description: 'Need steel beam or RSJ calculations? Get a scoped fixed-fee quote for your home project, with clear calculations, CAD details and agreed engineer support.',
    heading: 'Steel beam calculations. Clear details. A fixed fee.',
    intro: 'Engineering for a new opening, a loft conversion or an extension, with the beam and its support requirements considered together.',
    breadcrumb: 'Services / Steel beam calculations',
    lead: 'If your builder has asked for an RSJ calculation, start with the proposed alteration. We help turn that request into an agreed design scope, a clear report and the CAD details included in your package.',
    serviceType: 'Domestic steel beam calculations, structural design and CAD details',
    quoteQuery: '?service=structural-calculations',
    ctaHeading: 'Need a beam designed? Send us your plans.',
    sidebarHeading: 'Get a quote for the complete scope.',
    sidebarText: 'Tell us what the beam will support and share the plans you have. We will clarify the design information and deliverables before confirming a fee.',
    sections: [
      {
        heading: 'A beam is part of a support system.',
        paragraphs: [
          'Steel beams are used in many home alterations, including removing a load-bearing wall, forming a wider opening and supporting a loft or extension. The suitable section depends on the loads, span, restraint, support arrangement and performance requirements of the particular structure.',
          'The design also needs to identify what happens at each end of the beam. Existing masonry, new posts, connections and foundations may need assessment or design. We explain which elements are included and which information still needs confirming.'
        ]
      },
      {
        heading: 'Calculations and details you can understand.',
        bullets: [
          'The agreed design basis, load assessment and structural calculations.',
          'The beam section and relevant material specification for the assessed arrangement.',
          'Bearing and padstone design, or column and connection details, where included.',
          'Structural CAD layouts and dimensions included in the written scope.',
          'Document references, revisions and clearly stated design assumptions.',
          'The agreed allowance for technical queries and Building Control responses.'
        ],
        paragraphs: [
          'A steel fabricator may need additional fabrication drawings and specialist details. The quote makes the boundary clear, so your project team can resolve the required information before ordering or installation.'
        ]
      },
      {
        heading: 'A clear fee for the work you need.',
        paragraphs: [
          'The number of beams is only one part of the scope. A beam bearing on suitable existing masonry can involve different work from a frame with columns, connections and new foundations. Existing records and the need for a visit also affect the appointment.',
          'We provide a fixed-fee quote identifying the elements designed, calculations, drawings and included support. Site investigation, temporary support design, authority charges and changes to the agreed brief are identified separately where relevant. A delivery date is agreed once the necessary inputs and scope are clear.'
        ],
        link: { path: '/value/', label: 'See how our fixed-fee quotes work' }
      },
      {
        heading: 'Help us understand the beam you need.',
        bullets: [
          'Your address or postcode and a brief description of the project.',
          'Plans showing the proposed beam positions and openings.',
          'Information about the floors, walls, roof or other structure supported above.',
          'Known dimensions, photographs and previous drawings or surveys.',
          'Any headroom, alignment or construction constraints already identified.',
          'Technical comments from your builder, architect or Building Control, if available.'
        ],
        paragraphs: ['You do not need to determine the loads yourself. Send the information you have and we will explain what must be verified for the design.']
      }
    ],
    permissions: 'Structural alterations can require Building Regulations approval even where no planning application is needed. A beam bearing into a party wall can also raise separate party wall questions. Permanent beam design does not, by itself, cover temporary propping or confirm that construction can begin. We help identify the further design and approval steps to resolve.',
    faq: [
      { q: 'Is an RSJ calculation the same as a steel beam calculation?', a: 'Homeowners and builders often use RSJ as a general term when asking for a steel beam design. Tell us the proposed arrangement rather than choosing a section first. The design identifies the appropriate member and details for the agreed loads and supports.' },
      { q: 'Can an online calculator tell me which beam to buy?', a: 'A calculator result depends on the assumptions and information entered. It does not assess your building, concealed construction, supports, connections or foundations. This service provides an engineer-led, project-specific assessment; this website does not automatically size structural members.' },
      { q: 'Can you check a beam size my builder has suggested?', a: 'We can discuss a review if suitable information is available. The loads, span, supports, restraint and relevant existing structure still need assessment. A proposed size is not an approved design simply because it has been used on a similar house.' },
      { q: 'Will you design padstones, posts and connections?', a: 'These can be included where the project requires them. Your written quote identifies the structural elements and details covered, including any assessment of existing masonry or foundations. Additional specialist and fabrication information is made clear.' },
      { q: 'Do I need a site visit?', a: 'That depends on the information available and how confidently the existing arrangement can be established. We will assess whether remote design is suitable or whether inspection, measurement or planned opening-up is needed before the design is completed.' },
      { q: 'Does the fee include drawings and support after delivery?', a: 'The quote states whether CAD drawings are included, the detail level provided and the allowance for technical queries or submission comments. Later layout changes and work beyond that agreement are discussed before further design is undertaken.' }
    ],
    related: [
      { path: '/projects/wall-removal/', label: 'Load-bearing wall removal' },
      { path: '/projects/extension/', label: 'House extension design' },
      { path: '/projects/loft-conversion/', label: 'Loft conversion structure' },
      { path: '/services/building-regulations/', label: 'Building Regulations support' }
    ],
    sources: [
      { label: 'Planning Portal: Structural alterations to internal walls', url: 'https://www.planningportal.co.uk/permission/common-projects/internal-walls/what-building-regulations-apply-to-internal-walls/' },
      { label: 'GOV.UK: Building Regulations approval', url: 'https://www.gov.uk/building-regulations-approval' },
      { label: 'GOV.UK: Party wall requirements', url: 'https://www.gov.uk/party-walls-building-works' }
    ]
  },
  {
    slug: 'house-extension',
    path: '/projects/extension/',
    title: 'House extension calculations, drawings & planning help',
    description: 'Plan your house extension with clear structural calculations, CAD drawings and practical planning support. Start with an agreed scope and fixed-fee quote.',
    heading: 'Your house extension, with a clearer plan.',
    intro: 'Bring structural calculations, CAD drawings and the permissions journey into a practical sequence for your home project.',
    breadcrumb: 'Your project / House extension',
    lead: 'A larger kitchen, a new living space or a better connection to the garden starts with an idea. We help you understand the engineering information and design steps needed to turn that idea into an agreed package.',
    serviceType: 'House extension structural calculations, CAD drawings and planning support',
    quoteQuery: '?project=extension',
    ctaHeading: 'Show us the extension you have in mind.',
    sidebarHeading: 'Already have architectural plans?',
    sidebarText: 'Send the current drawings and tell us what your project team needs. We can scope structural input alongside the work already prepared.',
    sections: [
      {
        heading: 'Start with the design information you have.',
        paragraphs: [
          'You may already have architectural drawings or only a sketch of the additional space. Share what you have. We can identify the structural questions, the information still needed and the planning support to include in the appointment.',
          'An extension may involve new foundations and roof members, structural openings into the existing house, steel beams or columns, and connections between old and new construction. The agreed scope needs to address the relevant load paths and existing structure.'
        ]
      },
      {
        heading: 'A coordinated extension package can include.',
        bullets: [
          'Review of the proposal and the structural information required.',
          'Calculations for the beams, columns, roof or floor members in your agreed brief.',
          'Foundation calculations based on suitable site and ground information.',
          'Structural CAD layouts, bearings and construction details included in the quote.',
          'Planning drawings or application preparation support where separately included.',
          'Agreed support with structural submission comments and project team queries.'
        ],
        paragraphs: [
          'If you already have an architect or builder, we can coordinate the agreed structural work with their drawings. The written scope identifies who supplies the other information needed for the project, including any specialist design.'
        ]
      },
      {
        heading: 'Foundations need the right information.',
        paragraphs: [
          'The design needs to consider the proposed loads, ground conditions, nearby structures and relevant site constraints. Existing drains, neighbouring foundations, trees and construction access can raise questions that need resolving for the actual site.',
          'We identify the ground records, investigation or measurements needed before completing the relevant design. A postcode or general geology map does not establish the site’s bearing capacity or a suitable foundation depth.'
        ],
        link: { path: '/projects/foundations/', label: 'Understand the foundation design steps' }
      },
      {
        heading: 'What does extension structural design cost?',
        paragraphs: [
          'The fee follows the design scope: the size and layout of the extension, structural openings, foundation requirements, available records, drawing detail and support needed. Surveys, site visits and specialist information can also affect the overall project allowance.',
          'We confirm a fixed fee, the documents included and a realistic programme before work starts. Authority application fees, third-party reports and work outside the agreed brief are identified separately where applicable. The aim is to make the full appointment easy to understand and compare.'
        ],
        link: { path: '/value/', label: 'See what a fixed-fee quote should explain' }
      },
      {
        heading: 'Send these details to get started.',
        bullets: [
          'The property address or postcode and the type of extension proposed.',
          'Existing and proposed drawings, or a dimensioned sketch if that is what you have.',
          'Any planning decision, application reference or pre-application advice.',
          'Ground investigation, drainage or existing foundation information already available.',
          'Photographs and details of known site or neighbouring-property constraints.',
          'Your intended programme and the architect or builder involved, if appointed.'
        ]
      }
    ],
    permissions: 'For a house extension in England, the planning route depends on the proposal and property. Some work can fall within permitted development rights, subject to conditions and restrictions; other work needs an application. Building Regulations approval is a separate process. Certain work near neighbouring buildings or shared walls can also trigger party wall procedures. Other consents may need checking for the site.',
    faq: [
      { q: 'Does my extension need planning permission?', a: 'Some extensions can be carried out under permitted development rights if all relevant conditions are satisfied. Others require an application. Property restrictions and other consents still need checking, so the route should be confirmed for the actual proposal rather than assumed from a neighbouring extension.' },
      { q: 'I have planning permission. Do I still need structural calculations?', a: 'Planning permission does not establish the detailed structural design. Your project may need calculations and construction details to support the Building Regulations process and the builder’s work. We can review the drawings and agree the structural information required.' },
      { q: 'Can you work from my architect’s drawings?', a: 'Yes, where they provide suitable information for the agreed work. We review the latest drawings, identify any additional structural or site information needed and coordinate the structural scope with your existing project team.' },
      { q: 'Can you specify foundation depth from my postcode?', a: 'No. General mapping is a useful starting point for investigation, but it does not establish the conditions at your particular site. Foundation design needs suitable information about the ground, loads, existing structures and relevant constraints.' },
      { q: 'Will I need a party wall agreement for an extension?', a: 'That depends on the proposed work and its relationship to neighbouring property. Some boundary works, work to an existing party wall and nearby excavations can fall within the Party Wall etc. Act. This is a separate assessment from planning and Building Regulations.' },
      { q: 'Can you provide everything for my extension?', a: 'We can bring together the structural design, CAD drawings and planning support included in your appointment. A complete extension can also need other disciplines, investigations, statutory services and specialist advice. We identify these requirements so responsibilities and costs are clear.' }
    ],
    related: [
      { path: '/services/planning-permission/', label: 'Planning application help' },
      { path: '/services/steel-beam-calculations/', label: 'Steel beam calculations for larger openings' },
      { path: '/projects/foundations/', label: 'Foundations and new supports' },
      { path: '/services/building-regulations/', label: 'Building Regulations support' },
      { path: '/services/party-wall/', label: 'Party wall guidance' }
    ],
    sources: [
      { label: 'GOV.UK: Planning permission and permitted development', url: 'https://www.gov.uk/guidance/when-is-permission-required' },
      { label: 'GOV.UK: Building Regulations approval', url: 'https://www.gov.uk/building-regulations-approval' },
      { label: 'GOV.UK: Party walls and building work', url: 'https://www.gov.uk/party-walls-building-works' }
    ]
  }
];

export function getSeoPage(slugOrPath) {
  if (typeof slugOrPath !== 'string') return null;
  const normalised = slugOrPath.replace(/^\/+|\/+$/g, '');
  return seoPages.find(page => page.slug === normalised || page.path.replace(/^\/+|\/+$/g, '') === normalised) || null;
}

function resolvePage(pageOrSlug) {
  const page = typeof pageOrSlug === 'string' ? getSeoPage(pageOrSlug) : pageOrSlug;
  if (!page || !seoPages.includes(page)) throw new TypeError('Expected a page from seoPages, its slug, or its path.');
  return page;
}

const paragraphs = items => (items || []).map(text => `<p>${esc(text)}</p>`).join('');
const bullets = items => items?.length ? `<ul class="check-list">${items.map(text => `<li>${esc(text)}</li>`).join('')}</ul>` : '';
const renderSection = section => `<h2>${esc(section.heading)}</h2>${paragraphs(section.paragraphs)}${bullets(section.bullets)}${section.link ? `<p>${link(section.link.path, esc(section.link.label))}</p>` : ''}`;

export function seoPageBody(pageOrSlug) {
  const page = resolvePage(pageOrSlug);
  const quotePath = '/quote/' + page.quoteQuery;
  return `${pageHero(page.heading, page.intro, page.breadcrumb)}
    <section class="section"><div class="wrap content-layout"><article>
      <p class="lead">${esc(page.lead)}</p>
      <div class="actions">${link(quotePath, 'Get my fixed-fee quote', 'button')}${link('/your-design-package/', 'See a CAD drawing sample')}</div>
      ${page.sections.map(renderSection).join('')}
      <div class="scope-note"><h3>Check the route before building.</h3><p>${esc(page.permissions)}</p>${link('/permissions/', 'Planning, Building Regulations and party wall explained')}</div>
      <h2>See the drawing standard before you appoint us.</h2>
      <p>Open our illustrative CAD sheet to see the presentation: clear linework, reference labels, dimensions and a drawing title block. Your own quote identifies the calculations, drawing types and detail level included for your project.</p>
      <figure class="drawing-preview drawing-large"><a href="/your-design-package/" aria-label="Explore the illustrative CAD drawing and your structural design package"><img src="/assets/illustrative-drawing.svg" alt="Illustrative CAD-style home alteration drawing with dimensions and a title block, marked not for construction" width="1400" height="990" loading="lazy"></a><figcaption>Presentation example only. This sample is not a calculated design or a construction instruction.</figcaption></figure>
      <p>${link('/your-design-package/', 'Explore the sample and what your builder receives')}</p>
      <h2>Your questions, answered.</h2>${faqBlock(page.faq)}
      <h2>Related help for your project.</h2><div class="related-services">${page.related.map(item => link(item.path, esc(item.label))).join('')}</div>
      <h2 class="sources-title">Useful official guidance</h2><ul class="source-links">${page.sources.map(source => `<li>${link(source.url, esc(source.label))}</li>`).join('')}</ul>
    </article><aside class="side-note"><h3>${esc(page.sidebarHeading)}</h3><p>${esc(page.sidebarText)}</p>${link(quotePath, 'Get a fixed-fee quote', 'button')}<p><a href="tel:${esc(site.phone)}">Or call ${esc(site.displayPhone)}</a></p><hr><p><strong>A clear quote covers:</strong></p>${bullets(['The structural elements and documents included.', 'The information needed before design.', 'The agreed fee, delivery date and technical support.'])}<p>${link('/your-design-package/', 'See your design package')}</p><p class="fine-print">${esc(site.consultant)}<br>${esc(site.credentials)}<br>${esc(site.company)}</p></aside></div></section>
    ${cta(page.ctaHeading, page.quoteQuery)}`;
}

export function seoPageSchema(pageOrSlug, origin = '') {
  const page = resolvePage(pageOrSlug);
  const url = origin ? new URL(page.path, origin).href : null;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.title,
        serviceType: page.serviceType,
        description: page.description,
        ...(url ? { url } : {}),
        provider: { '@type': 'Organization', name: site.name, legalName: site.company, parentOrganization: { '@type': 'Organization', name: site.company, url: site.parent } }
      },
      {
        '@type': 'FAQPage',
        ...(url ? { url } : {}),
        mainEntity: page.faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
      }
    ]
  };
}
