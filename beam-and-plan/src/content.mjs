// Homeowner-facing service content. Permissions guidance below is for England.
// Service descriptions describe the available scope; each appointment is agreed in writing.

export const services = [
  {
    slug: 'structural-calculations',
    title: 'Structural calculations for your home',
    shortTitle: 'Structural calculations',
    intro: 'A new opening, a better layout, a little more space. Get the engineering behind it clearly worked out.',
    summary: 'Calculations for beams, columns, bearings and foundations, explained in plain English and coordinated with your proposed alterations.',
    includes: [
      'Review of the proposed alteration and the information needed to understand the existing structure.',
      'Project-specific load assessment and structural calculations for the elements in your agreed brief.',
      'Beam and column sizes, bearings, padstones and connection requirements where included in the design.',
      'Foundation calculations where suitable site and ground information is available and this work is included.',
      'A clearly presented calculation report, with assumptions and the agreed support for technical queries.'
    ],
    need: [
      'The property address and a description of what you want to change.',
      'Existing and proposed plans, with reliable dimensions if available.',
      'Photographs of the relevant rooms and structure, taken safely.',
      'Any previous structural drawings, surveys or Building Control comments.',
      'Your preferred programme, so the information requirements and delivery date can be agreed.'
    ],
    boundary: 'The quote identifies the elements, calculations and drawings included. Surveys, opening-up, ground investigations, temporary support design and additional revisions are scoped separately where needed. A beam calculation alone does not establish the adequacy of the rest of a building.',
    faq: [
      {
        q: 'Can you calculate a beam from its span alone?',
        a: 'A span is only one part of the design. We also need to understand what the beam supports, the existing construction, its bearings and how the loads reach the foundations. We will identify the information needed before completing the design.'
      },
      {
        q: 'Can I use the calculations for Building Control?',
        a: 'The agreed report can be prepared to support your Building Regulations submission. Building Control may request further information, and the approval decision remains with the relevant building control body. Your quote sets out the technical query support included.'
      },
      {
        q: 'Do you design the temporary propping too?',
        a: 'Temporary support and the construction sequence need their own consideration. Tell us how the work will be carried out so any temporary works design requirement can be identified and separately included in the appointment where appropriate.'
      }
    ],
    sources: [
      { label: 'Planning Portal: Building Regulations and internal walls', url: 'https://www.planningportal.co.uk/permission/common-projects/internal-walls/what-building-regulations-apply-to-internal-walls/' },
      { label: 'GOV.UK: Building Regulations approval', url: 'https://www.gov.uk/building-regulations-approval' }
    ]
  },
  {
    slug: 'cad-drawings',
    title: 'Clear CAD drawings for your builder',
    shortTitle: 'CAD drawings',
    intro: 'Make the design easy to understand, price and build.',
    summary: 'Dimensioned drawings that turn the agreed structural design into clear layouts and details for your builder and submission team.',
    includes: [
      'A drawing package matched to the agreed structural design and the information available.',
      'Structural layouts showing the positions and references of the designed elements.',
      'Dimensions, section sizes, levels and material notes relevant to the agreed scope.',
      'Bearing, connection or foundation details where specifically included.',
      'Clearly identified drawing revisions and coordinated references to the calculation report.'
    ],
    need: [
      'Your existing and proposed architectural plans, preferably with dimensions.',
      'Structural calculations or design information already prepared for the project.',
      'Relevant survey measurements, photographs and any known construction constraints.',
      'Any requests from the builder, architect or Building Control.',
      'Confirmation of whether you need structural details, planning drawings or a wider coordinated package.'
    ],
    boundary: 'Structural drawings, planning drawings, Building Regulations drawings and fabrication drawings serve different purposes. The written quote identifies the drawing types and level of detail included. Existing measurements and concealed conditions may need verification before construction.',
    faq: [
      {
        q: 'Are planning drawings enough for my builder?',
        a: 'Planning drawings normally explain the proposed development for the planning process. Your builder may also need structural sizes, construction details and other Building Regulations information. We can help identify the missing information and agree the drawings required.'
      },
      {
        q: 'Can you work with my architect or builder?',
        a: 'Yes. Send us the latest information and the questions that need resolving. We can coordinate the agreed structural drawings with the project team, with responsibilities and included revisions confirmed in the quote.'
      },
      {
        q: 'Will every connection and fabrication detail be included?',
        a: 'Only the details identified in your agreed scope are included. Fabrication drawings, specialist connections and supplier-designed elements may require separate information or appointments. We will make that distinction clear before work starts.'
      }
    ],
    sources: [
      { label: 'Planning Portal: Planning permission and Building Regulations are separate', url: 'https://www.planningportal.co.uk/applications/building-control-applications/building-control/building-regulations/difference-between-building-regulations-and-planning-permission/' },
      { label: 'GOV.UK: Applying for Building Regulations approval', url: 'https://www.gov.uk/building-regulations-approval/how-to-apply' }
    ]
  },
  {
    slug: 'planning-permission',
    title: 'Planning help without the head-scratching',
    shortTitle: 'Planning permission',
    intro: 'Understand the route before you spend time on the wrong application.',
    summary: 'Practical help with the drawings, supporting information and next steps for your proposed home alteration or extension.',
    includes: [
      'An initial review of the proposed work and the planning questions that need checking.',
      'Help identifying whether a planning application, a permitted development check or further specialist advice is appropriate.',
      'Preparation or coordination of the drawings and supporting information included in your quote.',
      'Application preparation and submission support where expressly included in the appointment.',
      'Clear identification of additional consents or specialist input that may need a separate check.'
    ],
    need: [
      'The property address, property type and a description of the proposed work.',
      'Existing plans, photographs and a sketch or plan of the changes.',
      'Any planning history, previous decisions or pre-application advice you hold.',
      'Details of any known listed status, conservation area or restrictions.',
      'A note of any approaching deadlines and any application already in progress.'
    ],
    boundary: 'Planning guidance on this site covers England. Permitted development rights and local constraints must be checked for the actual property. Authority fees, specialist reports and other consents are identified separately. Planning decisions and timescales are outside our control.',
    faq: [
      {
        q: 'Does every home alteration need planning permission?',
        a: 'No. Some work does not require a planning application, and some development is allowed through permitted development rights if its conditions are met. Restrictions and other consents can still apply, so the route must be checked for your property and proposal.'
      },
      {
        q: 'Do I need planning permission to remove an internal wall?',
        a: 'Internal alterations will often not need a planning application. Structural work can still need Building Regulations approval, and work affecting a listed building may require listed building consent. The proposed work and property status need checking.'
      },
      {
        q: 'Can you guarantee that permission will be granted?',
        a: 'No. The relevant authority decides the application. We can help prepare the information included in your appointment and explain the process, but cannot guarantee consent or an authority decision date.'
      }
    ],
    sources: [
      { label: 'GOV.UK: When planning permission is required', url: 'https://www.gov.uk/guidance/when-is-permission-required' },
      { label: 'Planning Portal: Planning permission for internal walls', url: 'https://www.planningportal.co.uk/permission/common-projects/internal-walls/' },
      { label: 'GOV.UK: Listed buildings and heritage consent', url: 'https://www.gov.uk/guidance/conserving-and-enhancing-the-historic-environment' }
    ]
  },
  {
    slug: 'building-regulations',
    title: 'Building Regulations support, clearly explained',
    shortTitle: 'Building Regulations',
    intro: 'Know which design information is needed and who needs to see it.',
    summary: 'Structural submission support and practical help with technical comments, with a clear distinction between design, approval and site inspection.',
    includes: [
      'Help identifying the structural information needed for the agreed Building Regulations submission.',
      'Preparation or coordination of the calculations and drawings included in your appointment.',
      'Support with structural technical comments from the relevant building control body within the agreed scope.',
      'Identification of additional disciplines or design information that your project may need.',
      'A clear handover of issued documents and any matters still requiring resolution.'
    ],
    need: [
      'Existing and proposed plans and a description of the work.',
      'The building control body and application reference, if already appointed.',
      'Any plan-check comments, requests for information or inspection records.',
      'The latest structural drawings and calculations, if prepared by others.',
      'Your intended construction programme and the people coordinating the work.'
    ],
    boundary: 'We provide the design and support agreed in our appointment. Statutory approval, inspections and completion documentation remain with the relevant building control body. Structural input alone does not cover every Building Regulations requirement; other disciplines may be needed.',
    faq: [
      {
        q: 'Is Building Regulations approval the same as planning permission?',
        a: 'No. Planning and Building Regulations are separate processes. A project may need both. Planning considers the proposed development and its wider effects; Building Regulations set requirements for design and construction.'
      },
      {
        q: 'Can you deal with a Building Control query on my beam?',
        a: 'Send us the comment and the relevant design information. We will confirm whether it falls within an existing appointment or requires a separate review. We cannot adopt another designer’s work without an appropriate assessment and agreed responsibility.'
      },
      {
        q: 'Do Building Control inspections replace site supervision?',
        a: 'No. Building Control inspections take place at selected stages and are not full site supervision. The builder and project team still need to manage the construction, follow the design and arrange the required notifications and inspections.'
      }
    ],
    sources: [
      { label: 'GOV.UK: Building Regulations approval', url: 'https://www.gov.uk/building-regulations-approval' },
      { label: 'Planning Portal: Planning and Building Regulations explained', url: 'https://www.planningportal.co.uk/applications/building-control-applications/building-control/building-regulations/difference-between-building-regulations-and-planning-permission/' },
      { label: 'Planning Portal: On-site approval and inspections', url: 'https://www.planningportal.co.uk/applications/building-control-applications/building-control/how-to-get-approval/on-site-approval/' }
    ]
  },
  {
    slug: 'structural-inspections',
    title: 'A focused structural inspection',
    shortTitle: 'Structural inspections',
    intro: 'Get a clear next step when something about your home or building work needs a closer look.',
    summary: 'Targeted visits for agreed structural concerns, with written findings and a practical explanation of what may need further investigation.',
    includes: [
      'Agreement on the concern, accessible areas and purpose of the inspection before the visit.',
      'Visual review of the agreed structural elements and available project information.',
      'A written record of observations, limitations and the matters identified.',
      'Recommendations for further investigation, monitoring or design where appropriate.',
      'Follow-up explanation of the report within the support agreed in your appointment.'
    ],
    need: [
      'The property address and the concern you want investigated.',
      'Photographs showing the area and its wider surroundings, taken safely.',
      'When the issue was first noticed and any known changes or previous repairs.',
      'Relevant survey reports, plans, calculations or Building Control comments.',
      'Access arrangements and confirmation of any areas that cannot be inspected safely.'
    ],
    boundary: 'A targeted structural inspection is not a full building survey, intrusive investigation, continuous site supervision or statutory Building Control inspection. Concealed construction may require further investigation. Availability and travel are confirmed when the visit is quoted.',
    faq: [
      {
        q: 'Can you diagnose a crack from a photograph?',
        a: 'A photograph helps us understand the enquiry, but may not establish the cause or significance of movement. We will explain whether a visit, measurements, monitoring or further investigation is needed. Photos alone cannot certify a building as safe.'
      },
      {
        q: 'Will you inspect the whole house?',
        a: 'The inspection covers the areas and questions agreed in your appointment. If you need a full building survey, let us know before booking so the appropriate service and professional can be identified.'
      },
      {
        q: 'Can you visit before a beam or foundation is covered up?',
        a: 'We can discuss a specifically scoped structural visit and the information needed. It does not replace the builder’s checks or the required Building Control inspections. Agree the inspection requirements and access before the work reaches that stage.'
      }
    ],
    sources: [
      { label: 'Planning Portal: Building Control inspections and their limits', url: 'https://www.planningportal.co.uk/applications/building-control-applications/building-control/how-to-get-approval/on-site-approval/' },
      { label: 'GOV.UK: Applying to a building control body', url: 'https://www.gov.uk/building-regulations-approval/how-to-apply' }
    ]
  },
  {
    slug: 'party-wall',
    title: 'Understand the party wall steps early',
    shortTitle: 'Party wall guidance',
    intro: 'Shared walls and neighbouring foundations deserve attention before work starts.',
    summary: 'Practical guidance to identify potential Party Wall etc. Act requirements and organise the engineering information your project may need.',
    includes: [
      'An initial review of the proposed structural work and its relationship to neighbouring property.',
      'Help identifying potential party wall, boundary construction and excavation issues for further assessment.',
      'Preparation of the engineering drawings or technical information included in your appointment.',
      'A clear explanation of the next steps and where a formal surveyor appointment may be needed.',
      'Coordination with an appointed party wall surveyor on the agreed structural matters.'
    ],
    need: [
      'The property address and a plan showing the proposed work and neighbouring buildings.',
      'Details of shared walls, proposed beam bearings or chimney alterations.',
      'Proposed foundation or excavation information, including depths if already designed.',
      'Any notices, correspondence or surveyor requests already received.',
      'The intended programme, so potential notice and agreement requirements can be considered early.'
    ],
    boundary: 'The Party Wall etc. Act 1996 is separate from planning permission and Building Regulations. This is engineering-led guidance, not a generic legal service. Formal party wall surveyor appointments, awards, dispute work and legal advice require a separately agreed appointment or specialist referral. The applicable procedure depends on the actual work.',
    faq: [
      {
        q: 'Does planning permission cover the party wall?',
        a: 'No. Planning permission and Building Regulations approval do not remove the need to follow the Party Wall etc. Act where it applies. The relevant works and relationships with neighbouring buildings need their own assessment.'
      },
      {
        q: 'What kinds of work should I ask about?',
        a: 'Examples include cutting into an existing party wall, altering a chimney on a party wall, certain work at a boundary, and some excavation near neighbouring foundations. Whether notices and further procedures are required depends on the work and the Act’s detailed provisions.'
      },
      {
        q: 'Are you automatically appointed as my party wall surveyor?',
        a: 'No. An enquiry or structural design appointment does not create a party wall surveyor appointment. We will explain the proposed role and confirm any formal service separately, or identify the specialist input needed.'
      }
    ],
    sources: [
      { label: 'GOV.UK: Party walls and building work', url: 'https://www.gov.uk/party-walls-building-works' },
      { label: 'GOV.UK: Work you must tell your neighbour about', url: 'https://www.gov.uk/party-walls-building-works/work-tell-your-neighbour-about' },
      { label: 'GOV.UK: Party Wall etc. Act explanatory booklet', url: 'https://www.gov.uk/government/publications/preventing-and-resolving-disputes-in-relation-to-party-walls/the-party-wall-etc-act-1996-explanatory-booklet' }
    ]
  }
];

export const projects = [
  {
    id: 'wall-removal',
    title: 'Remove a wall or open up a kitchen',
    description: 'Create a more useful layout with the structural design, bearings and construction information considered together.',
    services: ['structural-calculations', 'cad-drawings', 'building-regulations', 'party-wall'],
    steps: [
      'Send the existing layout, proposed opening and photographs.',
      'Establish how the building is supported and whether inspection or opening-up is needed.',
      'Agree the calculations, CAD details and any temporary support design requirement.',
      'Resolve the relevant approvals and issue the agreed information before construction.'
    ]
  },
  {
    id: 'extension',
    title: 'Build an extension',
    description: 'Bring the planning route, structural design and foundation information into one understandable sequence.',
    services: ['planning-permission', 'structural-calculations', 'cad-drawings', 'building-regulations', 'party-wall'],
    steps: [
      'Share the proposed layout, property information and any existing planning advice.',
      'Check the planning route, neighbouring structures and other relevant constraints.',
      'Agree the structural design and the site or ground information needed for foundations.',
      'Coordinate the agreed submission documents, construction details and inspection requirements.'
    ]
  },
  {
    id: 'loft-conversion',
    title: 'Convert a loft',
    description: 'Understand the structural changes needed to turn roof space into usable accommodation, alongside the other design requirements.',
    services: ['planning-permission', 'structural-calculations', 'cad-drawings', 'building-regulations', 'party-wall'],
    steps: [
      'Send the proposed loft layout and details of the existing roof and floors.',
      'Identify the planning route, structural questions and any shared-wall implications.',
      'Coordinate the agreed structural design with the wider plans, including stairs and fire-safety input from the responsible designers.',
      'Prepare the agreed calculations and details and address submission queries within the appointment.'
    ]
  },
  {
    id: 'cracks-and-defects',
    title: 'Understand cracks or a structural concern',
    description: 'Start with a focused review and agree the right investigation before paying for unnecessary design work.',
    services: ['structural-inspections', 'structural-calculations', 'cad-drawings'],
    steps: [
      'Describe the concern, when it appeared and any known changes to the building.',
      'Share relevant photographs and previous reports to help scope the enquiry.',
      'Agree a targeted inspection or the further information needed.',
      'Receive findings and next steps, with any investigation or remedial design commissioned separately.'
    ]
  },
  {
    id: 'chimney-removal',
    title: 'Remove or alter a chimney breast',
    description: 'Consider the remaining masonry, support arrangements and neighbouring property before making the alteration.',
    services: ['structural-calculations', 'cad-drawings', 'building-regulations', 'party-wall', 'structural-inspections'],
    steps: [
      'Show which parts of the chimney are to be removed and which will remain.',
      'Review the existing construction, any inspection needs and the relationship to shared walls.',
      'Agree the permanent support design, drawings and temporary works requirements.',
      'Resolve the relevant Building Regulations and party wall steps before work starts.'
    ]
  },
  {
    id: 'foundations',
    title: 'Design foundations or new supports',
    description: 'Work out how new loads can be carried safely, using suitable information about the ground and existing construction.',
    services: ['structural-calculations', 'cad-drawings', 'structural-inspections', 'building-regulations', 'party-wall'],
    steps: [
      'Send the proposed structure, property location and any existing foundation or ground reports.',
      'Identify the load paths, nearby structures and information still needed about ground conditions.',
      'Agree the foundation calculations and drawings once the necessary design information is available.',
      'Coordinate the submission and inspection requirements before construction or covering up.'
    ]
  }
];

export const faqs = [
  {
    q: 'Where do I start if I am not sure what I need?',
    a: 'Tell us what you want to change and send the plans or photographs you already have. You do not need to know the engineering terminology. We will help identify the information, services and next steps to include in a written quote.'
  },
  {
    q: 'Can you give me a fixed fee and a delivery date?',
    a: 'We agree a written scope, fee and programme before starting. The delivery date depends on the work and the information needed. Your quote makes clear what is included, what you need to provide and how additional work would be agreed.'
  },
  {
    q: 'Will I get CAD drawings as well as calculations?',
    a: 'Where drawings are included in your quote, the package will identify their purpose and level of detail. We can combine structural calculations with clear CAD layouts and details. Planning drawings, fabrication drawings and wider Building Regulations information are identified separately.'
  },
  {
    q: 'Are planning permission, Building Regulations and party wall matters the same process?',
    a: 'No. They are separate, and a project may involve more than one. We can help you identify the relevant routes and the information needed. Planning decisions, statutory approval and any formal party wall appointment remain distinct responsibilities.'
  },
  {
    q: 'Can you work with the architect or builder I already have?',
    a: 'Yes. Share the latest drawings and the questions that need resolving. We can coordinate the agreed structural work with your project team and make clear who is responsible for each part of the design and construction information.'
  },
  {
    q: 'Who is behind Beam & Plan?',
    a: 'Beam & Plan is a homeowner-focused service from Temporary Works Consulting & Design Ltd, led by David Miller, Chartered Engineer, CEng MICE. The service brings structural calculations, clear drawings and practical project support together under an agreed appointment.'
  }
];
