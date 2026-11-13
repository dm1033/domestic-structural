export interface Service {
  id: string
  code: string
  name: string
  tagline: string
  summary: string
  description: Array<string>
  deliverables: Array<string>
  typical: Array<string>
  image?: { file: string; alt: string }
}

const services: Array<Service> = [
  {
    id: 'beam-design',
    code: 'S-01',
    name: 'Steel beam design',
    tagline: 'Knock-throughs, chimney breast removals and open-plan kitchens.',
    summary:
      'Calculations for steel and timber beams, padstones and bearings when you remove or open up a load-bearing wall.',
    description: [
      'Removing a load-bearing wall means the floors, roof and walls above have to be carried by something else. We work out exactly what that load is, then size a beam, its end bearings and the padstones beneath so they carry it safely.',
      'You get a calculation pack that Building Control can check line by line, plus a simple sketch your builder can follow: beam size, length, bearing details, fire protection and temporary propping notes.',
    ],
    deliverables: [
      'Signed beam calculations (steel, timber or flitch)',
      'Padstone and bearing checks',
      'Construction sketch with propping sequence',
      'Answers to Building Control queries',
    ],
    typical: [
      'Kitchen-diner knock-through',
      'Chimney breast removal',
      'Rear wall opening for bifolds',
      'Loft conversion trimmers',
    ],
    image: {
      file: 'hero.png',
      alt: 'Red steel beam installed across a wide opening in a terraced house, with glazed doors to a new rear extension beyond',
    },
  },
  {
    id: 'extensions',
    code: 'S-02',
    name: 'Extension design',
    tagline: 'Single and two-storey, side return, wrap-around and rear.',
    summary:
      'Full structural design for house extensions: roof, floors, lintels, steelwork and the connection back to your existing home.',
    description: [
      'An extension is mostly about the junction with the existing house. We design the new roof and floor structure, the steels that open the old back wall into the new room, and the lintels over every window and door.',
      'We can work from your architect’s drawings or, for simpler projects, produce the drawings ourselves so one firm covers planning and structure.',
    ],
    deliverables: [
      'Structural calculations for roof, floor and walls',
      'Steelwork and lintel schedule',
      'Structural drawings and details',
      'Coordination with your architect or designer',
    ],
    typical: [
      'Single-storey rear extension',
      'Side return infill',
      'Two-storey side extension',
      'Garage conversion',
    ],
    image: {
      file: 'extension.png',
      alt: 'Single-storey brick extension under construction at the back of a semi-detached house, with roof joists and scaffolding in place',
    },
  },
  {
    id: 'foundations',
    code: 'S-03',
    name: 'Foundation design',
    tagline:
      'Strip, trench fill, raft and pad foundations near trees and drains.',
    summary:
      'Foundations sized for your soil, nearby trees and drains, so the extension sits on ground that will not move.',
    description: [
      'Clay soil, nearby trees and old drain runs all change how deep and how wide a foundation needs to be. We assess the ground conditions, apply NHBC Chapter 4.2 guidance where trees are close, and design a foundation that suits.',
      'Where the ground is poor we design alternatives such as reinforced rafts, ground beams or mini-piles, and explain the cost difference before you commit.',
    ],
    deliverables: [
      'Foundation calculations and depth assessment',
      'Tree influence check (NHBC 4.2)',
      'Foundation plan and sections',
      'Reinforcement details where needed',
    ],
    typical: [
      'Extension on shrinkable clay',
      'Foundations near a public sewer',
      'Underpinning assessment',
      'Garden rooms and outbuildings',
    ],
    image: {
      file: 'foundations.png',
      alt: 'Concrete being poured into a reinforced strip foundation trench beside a brick house',
    },
  },
  {
    id: 'planning-drawings',
    code: 'S-04',
    name: 'Planning drawings',
    tagline:
      'Planning permission, lawful development certificates and permitted development checks.',
    summary:
      'Measured survey, existing and proposed plans and elevations, and the application itself, submitted to your local council.',
    description: [
      'Before anything is built, the council usually needs to see it. We measure the house, draw what is there now and what you want, and check the design against permitted development rules and local planning policy.',
      'If you need full permission, we prepare the application through the Planning Portal and deal with the planning officer’s questions. If it is permitted development, we can apply for a Lawful Development Certificate so you have it in writing.',
    ],
    deliverables: [
      'Measured survey of the existing house',
      'Existing and proposed plans, elevations and sections',
      'Location and block plans',
      'Planning Portal submission and officer liaison',
    ],
    typical: [
      'Householder planning application',
      'Lawful Development Certificate',
      'Prior approval for larger rear extensions',
      'Loft dormers and hip-to-gable',
    ],
  },
  {
    id: 'structural-inspections',
    code: 'S-05',
    name: 'Inspections and reports',
    tagline: 'Cracks, bowing walls, sagging roofs and pre-purchase concerns.',
    summary:
      'An engineer’s view on a specific problem, in a plain-English letter you can give to a buyer, lender or builder.',
    description: [
      'A surveyor’s report flags a crack, a wall leans, or a roof has started to sag. We visit, look at the cause, and tell you whether it is historic and stable or needs action.',
      'Our letter explains what we saw, what it means and what, if anything, should be done, written for homeowners, mortgage lenders and insurers alike.',
    ],
    deliverables: [
      'Site inspection by an engineer',
      'Photographic record',
      'Structural inspection letter or report',
      'Outline remedial recommendations',
    ],
    typical: [
      'Cracking above windows',
      'Pre-purchase structural concerns',
      'Roof spread and sagging purlins',
      'Removed walls with no paperwork',
    ],
  },
]

export default services

export function findService(id: string) {
  return services.find((service) => service.id === id)
}
