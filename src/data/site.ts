export const site = {
  name: 'Domestic Structural',
  description:
    'Structural engineering for homeowners: steel beam calculations, extension and foundation design, and planning drawings, ready for Building Control.',
}

export const enquiryForm = {
  name: 'project-enquiry',
  endpoint: '/__forms.html',
}

/** Netlify Image CDN URL for a file in public/img. */
export const cdn = (file: string, width: number) =>
  `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`

export const processSteps = [
  {
    title: 'Tell us what you want to change',
    body: 'Send a short description, a few photos and any existing plans. We reply with a fixed fee and the information we need.',
  },
  {
    title: 'Survey or desktop review',
    body: 'Simple openings can often be designed from photos and measurements. Larger or older structures get a site visit.',
  },
  {
    title: 'Calculations and drawings',
    body: 'You receive a signed calculation pack and marked-up drawings your builder can price and build from.',
  },
  {
    title: 'Building Control queries',
    body: 'If the inspector or approved inspector asks a question about the structure, we answer it.',
  },
]

export const faqs = [
  {
    q: 'Do I need a structural engineer to knock through a wall?',
    a: 'If the wall is load-bearing, yes. Building Control will ask for calculations showing the beam, its bearings and the padstones are adequate before the work is signed off. Not sure if your wall is load-bearing? Send photos of both sides and the floor above.',
  },
  {
    q: 'What is the difference between planning permission and Building Regulations?',
    a: 'Planning is about what the extension looks like and how it affects neighbours. Building Regulations cover how it is built: structure, fire, insulation and drainage. Many projects need both; some fall under permitted development and only need Building Regulations approval.',
  },
  {
    q: 'Can you help with a planning application?',
    a: 'Yes. We draw existing and proposed plans and elevations, prepare the location and block plans, and can submit the application through the Planning Portal on your behalf. Structural calculations then follow for Building Regulations.',
  },
  {
    q: 'How long does a beam calculation take?',
    a: 'Straightforward single-beam designs are usually turned around within a week of receiving the measurements. Extensions and foundations depend on the size of the job; we give you a date when we quote.',
  },
  {
    q: 'Does my project need a Party Wall agreement?',
    a: 'Steel beams bearing into a shared wall, and foundations dug within three metres of a neighbour, usually fall under the Party Wall etc. Act 1996. We are not party wall surveyors, but our drawings give a surveyor what they need.',
  },
]
