const palette = {
  background: '#101a26',
  panel: '#142336',
  white: '#f3eee4',
  faint: '#a6bacc',
  blue: '#7cb0e1',
  line: '#3b5b79',
  oxide: '#c16955',
  oxideLight: '#e5a28e',
  oxideDark: '#793f35',
  gold: '#d5b57b',
};

function text(x, y, value, { size = 18, fill = palette.white, anchor = 'start', mono = false, weight = '400', track = 0 } = {}) {
  const family = mono ? 'ui-monospace, SFMono-Regular, Consolas, monospace' : 'Arial, sans-serif';
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="${family}" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}" letter-spacing="${track}" data-bp-type>${value}</text>`;
}

function path(d, { stroke = palette.blue, width = 2, dash = '', arrow = '' } = {}) {
  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${arrow ? ` marker-end="url(#${arrow})"` : ''} data-bp-draw/>`;
}

function polygon(points, fill, stroke = palette.line) {
  return `<polygon points="${points.map(([x, y]) => `${x},${y}`).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="1.25" stroke-linejoin="round"/>`;
}

function beamSection(cx, cy, width, depth, fill, stroke) {
  const x = cx - width / 2;
  const y = cy - depth / 2;
  const flange = depth * 0.09;
  const halfWeb = width * 0.055;
  return polygon([
    [x, y], [x + width, y], [x + width, y + flange], [cx + halfWeb, y + flange],
    [cx + halfWeb, y + depth - flange], [x + width, y + depth - flange],
    [x + width, y + depth], [x, y + depth], [x, y + depth - flange],
    [cx - halfWeb, y + depth - flange], [cx - halfWeb, y + flange], [x, y + flange],
  ], fill, stroke);
}

function padstone(cx, cy) {
  const top = [[cx - 42, cy], [cx + 12, cy - 16], [cx + 59, cy + 1], [cx + 6, cy + 18]];
  const [left, , right, front] = top;
  return [
    polygon([left, front, [front[0], front[1] + 18], [left[0], left[1] + 18]], '#405b72', palette.faint),
    polygon([front, right, [right[0], right[1] + 18], [front[0], front[1] + 18]], '#31475e', palette.faint),
    polygon(top, '#7791a5', palette.faint),
    path(`M${cx - 23} ${cy + 7}l47-14`, { stroke: palette.line, width: 1 }),
  ].join('');
}

function sketch() {
  return `
    <g data-bp-enter>
      <rect x="62" y="121" width="432" height="260" fill="#152638" stroke="${palette.line}"/>
      <path d="M80 139H476V363H80Z M94 153V349H462V153Z" fill="#30465a" fill-rule="evenodd" stroke="${palette.faint}" stroke-width="1.35"/>
      <rect x="93" y="241" width="72" height="17" fill="#435970" stroke="${palette.faint}"/>
      <rect x="391" y="241" width="72" height="17" fill="#435970" stroke="${palette.faint}"/>
      <rect x="151" y="241" width="14" height="17" fill="${palette.gold}"/>
      <rect x="391" y="241" width="14" height="17" fill="${palette.gold}"/>
      ${text(278, 198, 'EXISTING ROOM', { size: 15, fill: palette.faint, anchor: 'middle', mono: true, track: 1.6 })}
      ${text(278, 329, 'PROPOSED OPENING', { size: 15, fill: palette.faint, anchor: 'middle', mono: true, track: 1.6 })}
    </g>
    ${path('M165 249H391', { stroke: palette.oxideLight, width: 3, dash: '9 6' })}
    ${path('M165 262V300M391 262V300M165 292H391m-5 5 10-10m-236 10 10-10', { width: 1.25 })}
    <rect x="237" y="279" width="82" height="24" fill="${palette.panel}"/>
    ${text(278, 297, '4.00 m', { size: 18, fill: palette.gold, anchor: 'middle', mono: true, weight: '700' })}
    ${path('M402 243L515 192H539', { width: 1.3 })}
    <g data-bp-enter>
      <rect x="532" y="128" width="169" height="238" rx="5" fill="${palette.panel}" stroke="${palette.line}"/>
      ${text(549, 157, 'SURVEY NOTES', { size: 12, fill: palette.blue, mono: true, track: 1.4 })}
      ${path('M549 173H682', { stroke: palette.line, width: 1 })}
      ${text(549, 203, 'A wider opening', { size: 17, weight: '700' })}
      ${text(549, 232, 'Check existing', { size: 16, fill: palette.faint })}
      ${text(549, 254, 'walls and loads', { size: 16, fill: palette.faint })}
      ${text(549, 297, '4.00 m model span', { size: 14, fill: palette.gold, mono: true })}
      ${text(549, 327, 'Plan is schematic', { size: 14, fill: palette.faint })}
    </g>`;
}

function loads() {
  const loadArrows = Array.from({ length: 9 }, (_, index) => {
    const x = 118 + index * 65.5;
    return path(`M${x} 185V240`, { arrow: 'bp-beam-arrow-2', width: 1.8 });
  }).join('');
  return `
    ${text(118, 132, '20 kN/m ULS', { size: 26, weight: '700' })}
    ${text(642, 132, '14 kN/m SLS', { size: 20, fill: palette.gold, anchor: 'end', mono: true })}
    ${text(118, 157, 'Illustrative uniformly distributed line loads', { size: 16, fill: palette.faint })}
    ${path('M118 185H642', { width: 1.5 })}
    ${loadArrows}
    <g data-bp-enter>
      <rect x="105" y="251" width="550" height="15" rx="2" fill="${palette.oxide}" stroke="${palette.oxideLight}" stroke-width="1.3"/>
      ${polygon([[118, 266], [103, 290], [133, 290]], palette.panel, palette.white)}
      ${polygon([[642, 266], [627, 287], [657, 287]], palette.panel, palette.white)}
      <circle cx="635" cy="291" r="3" fill="${palette.panel}" stroke="${palette.white}"/>
      <circle cx="649" cy="291" r="3" fill="${palette.panel}" stroke="${palette.white}"/>
    </g>
    ${path('M93 290H144M617 296H667', { stroke: palette.faint, width: 1.4 })}
    ${path('M118 351V302', { stroke: palette.gold, arrow: 'bp-beam-arrow-2' })}
    ${path('M642 351V305', { stroke: palette.gold, arrow: 'bp-beam-arrow-2' })}
    ${text(141, 327, '40 kN', { size: 20, fill: palette.gold, mono: true })}
    ${text(619, 327, '40 kN', { size: 20, fill: palette.gold, anchor: 'end', mono: true })}
    ${text(380, 319, 'ULS support reactions', { size: 16, fill: palette.faint, anchor: 'middle' })}
    ${path('M118 370H642m-524-8v16m524-16v16', { width: 1.25 })}
    <rect x="334" y="355" width="92" height="28" fill="${palette.background}"/>
    ${text(380, 376, '4.00 m', { size: 19, anchor: 'middle', mono: true, weight: '700' })}
  `;
}

function diagrams() {
  return `
    ${text(63, 132, 'SHEAR', { size: 13, fill: palette.blue, mono: true, track: 1.4 })}
    ${text(63, 158, 'V (kN)', { size: 15, fill: palette.faint, mono: true })}
    ${path('M153 171H643M162 116V227M634 116V227', { stroke: palette.line, width: 1 })}
    <g data-bp-enter>
      ${polygon([[162, 124], [398, 171], [162, 171]], '#25415c')}
      ${polygon([[398, 171], [634, 218], [634, 171]], '#503337')}
    </g>
    ${path('M162 124L634 218', { stroke: palette.white, width: 2.6 })}
    ${text(173, 116, '+40', { size: 18, fill: palette.white, mono: true, weight: '700' })}
    ${text(622, 239, '−40', { size: 18, fill: palette.oxideLight, anchor: 'end', mono: true, weight: '700' })}
    ${text(398, 153, '0', { size: 15, fill: palette.faint, anchor: 'middle', mono: true })}
    ${path('M65 256H696', { stroke: palette.line, width: 1 })}
    ${text(63, 289, 'BENDING', { size: 13, fill: palette.blue, mono: true, track: 1.2 })}
    ${text(63, 315, 'M (kNm)', { size: 14, fill: palette.faint, mono: true })}
    ${path('M153 284H643M398 284V383', { stroke: palette.line, width: 1, dash: '4 4' })}
    <path d="M162 284Q398 428 634 284Z" fill="#263e55" data-bp-enter/>
    ${path('M162 284Q398 428 634 284', { stroke: palette.gold, width: 2.8 })}
    <circle cx="398" cy="356" r="5" fill="${palette.gold}" data-bp-enter/>
    ${text(398, 387, '40 kNm at midspan', { size: 21, fill: palette.gold, anchor: 'middle', weight: '700' })}
    ${text(634, 308, 'Sagging down', { size: 14, fill: palette.faint, anchor: 'end' })}
  `;
}

function trialChecks({ name, sectionWidth, sectionDepth, modulus, inertia, resistance, utilisation, movement, withinLimit }) {
  const movementColour = withinLimit ? palette.white : palette.oxideLight;
  const movementFill = withinLimit ? palette.panel : '#33262e';
  const movementBorder = withinLimit ? palette.blue : palette.oxideLight;
  const comparison = withinLimit ? '≤' : '&gt;';
  const result = withinLimit ? 'WITHIN ILLUSTRATIVE TARGET' : 'ABOVE ILLUSTRATIVE LIMIT';
  return `
    ${text(62, 113, 'ULS 20 kN/m  /  SLS 14 kN/m  /  E = 210 GPa', { size: 15, fill: palette.faint, mono: true })}
    <g data-bp-enter>
      <rect x="62" y="132" width="235" height="260" rx="6" fill="${palette.panel}" stroke="${palette.line}"/>
      ${text(80, 161, 'S355 · TRIAL SECTION', { size: 12, fill: palette.blue, mono: true, track: 1.1 })}
      ${text(80, 192, name, { size: 22, weight: '700' })}
      ${beamSection(179, 260, sectionWidth, sectionDepth, '#344e68', palette.white)}
      ${path('M115 260H243', { stroke: palette.faint, width: 1, dash: '4 5' })}
      ${text(80, 340, `Wpl,y = ${modulus} cm³`, { size: 15, fill: palette.faint, mono: true })}
      ${text(80, 367, `I = ${inertia} cm⁴`, { size: 15, fill: palette.faint, mono: true })}
    </g>
    <g data-bp-enter>
      <rect x="319" y="132" width="382" height="123" rx="6" fill="${palette.panel}" stroke="${palette.line}"/>
      ${text(337, 157, '01  /  ULS BENDING', { size: 13, fill: palette.blue, mono: true, track: 1 })}
      ${text(337, 190, `${resistance} kNm resistance`, { size: 25, weight: '700' })}
      ${text(337, 217, `40.0 / ${resistance} = ${utilisation} utilisation`, { size: 16, fill: palette.faint, mono: true })}
      ${text(337, 240, 'WITHIN BENDING MODEL', { size: 12, fill: palette.gold, mono: true, track: 0.8 })}
    </g>
    <g data-bp-enter${withinLimit ? '' : ' data-bp-fail'}>
      <rect x="319" y="270" width="382" height="122" rx="6" fill="${movementFill}" stroke="${movementBorder}"/>
      ${text(337, 295, '02  /  SLS DEFLECTION', { size: 13, fill: palette.blue, mono: true, track: 1 })}
      ${text(337, 329, `${movement} mm ${comparison} 11.1 mm`, { size: 26, fill: movementColour, weight: '700' })}
      ${text(337, 354, 'δ = 5wL⁴ / (384EI)  ·  L/360 target', { size: 15, fill: palette.faint, mono: true })}
      ${text(337, 377, result, { size: 12, fill: withinLimit ? palette.gold : palette.oxideLight, mono: true, track: 0.8 })}
    </g>
    ${text(62, 411, 'Model span 4.00 m  /  γM0 = 1.0 assumed', { size: 13, fill: palette.faint, mono: true })}
  `;
}

function firstTrial() {
  return trialChecks({
    name: 'UB 178×102×19',
    sectionWidth: 60,
    sectionDepth: 104,
    modulus: '171',
    inertia: '1,356',
    resistance: '60.7',
    utilisation: '0.66',
    movement: '16.4',
    withinLimit: false,
  });
}

function secondTrial() {
  return trialChecks({
    name: 'UB 203×133×25',
    sectionWidth: 78,
    sectionDepth: 118,
    modulus: '258',
    inertia: '2,340',
    resistance: '91.6',
    utilisation: '0.44',
    movement: '9.5',
    withinLimit: true,
  });
}

function isometricSteel() {
  const profile = [
    [-43, -57], [43, -57], [43, -46], [8, -46], [8, 46], [43, 46],
    [43, 57], [-43, 57], [-43, 46], [-8, 46], [-8, -46], [-43, -46],
  ];
  const project = (index, depth) => {
    const [across, height] = profile[index];
    return [170 + depth * 401 + across * 0.93, 272 - depth * 84 + across * 0.37 + height];
  };
  const face = (start, end, fill) =>
    polygon([project(start, 0), project(end, 0), project(end, 1), project(start, 1)], fill, palette.oxideLight);
  return `
    ${path('M81 359L480 274M133 383L532 298M188 400L587 315M81 359L188 400M223 329L329 369M364 300L470 339M480 274L587 315', { stroke: palette.line, width: 1 })}
    <g data-bp-enter>${padstone(568, 247)}</g>
    <g data-bp-enter>${padstone(169, 331)}</g>
    <g data-bp-enter>
      ${polygon(profile.map((_, index) => project(index, 1)), palette.oxideDark, palette.oxideLight)}
      ${face(3, 4, '#904d40')}
      ${face(2, 3, '#66372f')}
      ${face(4, 5, '#c98572')}
      ${face(5, 6, '#9e5547')}
      ${face(0, 1, '#d28a76')}
      ${face(1, 2, '#a55b4b')}
      ${polygon(profile.map((_, index) => project(index, 0)), palette.oxide, palette.oxideLight)}
    </g>
    ${path('M380 190L419 147H479', { stroke: palette.gold, width: 1.35 })}
    ${text(487, 144, 'B1', { size: 24, fill: palette.gold, weight: '700' })}
    ${text(487, 169, 'Steel beam reference', { size: 16, fill: palette.white })}
    ${path('M596 273L638 308H691', { width: 1.35 })}
    ${text(690, 332, 'Padstone references', { size: 16, fill: palette.white, anchor: 'end' })}
    ${text(690, 356, 'Supports assessed separately', { size: 14, fill: palette.faint, anchor: 'end' })}
  `;
}

function completedRoom() {
  return `
    <g data-bp-enter>
      ${polygon([[95, 362], [265, 313], [584, 313], [674, 364], [655, 389], [105, 389]], '#203549')}
      ${path('M105 388L265 327M202 388L331 327M299 388L398 327M396 388L464 327M493 388L531 327M590 388L598 327M143 374H660M190 357H650M242 340H630', { stroke: palette.line, width: 1 })}
      ${polygon([[165, 144], [238, 190], [238, 326], [165, 359]], '#1a2f44')}
      ${polygon([[238, 190], [555, 190], [555, 326], [238, 326]], '#263b4f')}
      ${polygon([[555, 190], [619, 148], [619, 357], [555, 326]], '#1a2f44')}
    </g>
    <g data-bp-enter>
      <path d="M124 202H184V366H124Z M580 202H640V366H580Z" fill="#36495a" stroke="${palette.faint}" stroke-width="1.4"/>
      ${path('M124 234H184M124 255H184M124 277H184M124 299H184M124 321H184M124 343H184M580 234H640M580 255H640M580 277H640M580 299H640M580 321H640M580 343H640', { stroke: palette.line, width: 1 })}
    </g>
    <g data-bp-install="1" data-bp-remove="2" visibility="hidden">
      <rect x="184" y="181" width="396" height="185" fill="#334b63" stroke="${palette.faint}" stroke-width="1.4"/>
      ${path('M185 207H579M185 233H579M185 259H579M185 285H579M185 311H579M185 337H579M231 181v26m92-26v26m92-26v26m92-26v26M277 207v26m92-26v26m92-26v26m92-26v26M231 233v26m92-26v26m92-26v26m92-26v26M277 259v26m92-26v26m92-26v26m92-26v26M231 285v26m92-26v26m92-26v26m92-26v26M277 311v26m92-26v26m92-26v26m92-26v26', { stroke: palette.line, width: 1.3 })}
      ${text(382, 294, 'WALL ZONE  /  SCHEMATIC', { size: 13, fill: palette.white, anchor: 'middle', mono: true })}
    </g>
    <g data-bp-install="1" data-bp-remove="4" visibility="hidden">
      ${polygon([[220, 183], [279, 153], [304, 153], [246, 183]], '#927449', palette.gold)}
      ${polygon([[493, 183], [552, 153], [577, 153], [519, 183]], '#927449', palette.gold)}
      <rect x="220" y="183" width="26" height="9" fill="${palette.gold}"/>
      <rect x="493" y="183" width="26" height="9" fill="${palette.gold}"/>
      <path d="M233 192V351M506 192V351" fill="none" stroke="${palette.gold}" stroke-width="5.5"/>
      <path d="M233 242V339M506 242V339" fill="none" stroke="#a58558" stroke-width="9"/>
      <path d="M224 243H242M497 243H515M221 352H245M494 352H518" fill="none" stroke="${palette.gold}" stroke-width="4"/>
      <rect x="263" y="367" width="238" height="23" rx="3" fill="${palette.background}"/>
      ${text(382, 383, 'Temporary props and needles', { size: 14, fill: palette.gold, anchor: 'middle' })}
    </g>
    <g data-bp-install="3">
      <rect x="124" y="184" width="60" height="18" fill="#7893a5" stroke="${palette.white}" stroke-width="1.2"/>
      <rect x="580" y="184" width="60" height="18" fill="#7893a5" stroke="${palette.white}" stroke-width="1.2"/>
      <path d="M124 179H184V184H124Z M580 179H640V184H580Z" fill="${palette.gold}"/>
      <rect x="124" y="149" width="516" height="30" fill="${palette.oxideDark}" stroke="${palette.oxideLight}" stroke-width="1.5"/>
      <path d="M124 149H640V157H124Z M124 172H640V179H124Z" fill="${palette.oxide}"/>
      ${path('M128 157H636M128 172H636', { stroke: palette.oxideLight, width: 1.25 })}
      ${text(382, 170, 'B1', { size: 15, fill: palette.white, anchor: 'middle', mono: true, weight: '700' })}
    </g>
    <g data-bp-install="5">
      <rect x="368" y="212" width="130" height="78" fill="#53738b" stroke="${palette.white}" stroke-width="2"/>
      <path d="M376 220H490V282H376Z" fill="#29455d" stroke="${palette.faint}"/>
      ${path('M433 220V282M376 249H490', { stroke: palette.white, width: 1.5 })}
      ${polygon([[244, 296], [554, 296], [569, 306], [254, 306]], '#d9cfb6', palette.white)}
      ${polygon([[254, 306], [569, 306], [569, 342], [254, 342]], '#778989', palette.faint)}
      ${path('M297 309V340M343 309V340M389 309V340M435 309V340M481 309V340M527 309V340M269 319h14m32 0h14m32 0h14m32 0h14m32 0h14m32 0h14m32 0h14', { stroke: palette.background, width: 1.5 })}
      ${path('M418 298v-8q0-9 8-9q7 0 7 6', { stroke: palette.white, width: 1.6 })}
      ${polygon([[285, 332], [428, 332], [470, 352], [318, 352]], '#e4d4b7', palette.white)}
      ${polygon([[318, 352], [470, 352], [470, 377], [318, 377]], '#8a978a', palette.faint)}
      ${polygon([[285, 332], [318, 352], [318, 377], [285, 355]], '#526b70', palette.faint)}
      ${path('M365 352V377M416 352V377', { stroke: palette.background, width: 1.3 })}
      ${path('M306 182v52M534 182v52', { stroke: palette.faint, width: 1.5 })}
      <path d="M293 248Q294 233 306 231Q318 233 319 248Z M521 248Q522 233 534 231Q546 233 547 248Z" fill="${palette.gold}" stroke="${palette.white}" stroke-width="1.2"/>
      <rect x="180" y="382" width="404" height="40" rx="4" fill="${palette.panel}" stroke="${palette.gold}"/>
      ${text(382, 397, 'ILLUSTRATIVE DELIVERABLE', { size: 10, fill: palette.gold, anchor: 'middle', mono: true, track: 1.2 })}
      ${text(382, 414, 'Signed calc pack — Building Control ready', { size: 16, fill: palette.white, anchor: 'middle', weight: '700' })}
    </g>
    ${text(382, 126, 'OPENING AND FINISHED-ROOM IMPRESSION', { size: 14, fill: palette.blue, anchor: 'middle', mono: true, track: 1.3 })}
  `;
}

const stages = [
  {
    title: 'Start with the opening',
    subtitle: 'Survey information defines the model',
    caption: 'The example starts with a 4.00 m idealised span between support references. A site survey would establish the existing construction, dimensions and load paths.',
    description: 'Blueprint plan of a room and proposed opening. The model span is marked 4.00 metres, with the existing walls and supports identified as items to verify.',
    render: sketch,
  },
  {
    title: 'Separate the loads',
    subtitle: 'Strength and serviceability',
    caption: 'A simply supported beam carries illustrative uniform line loads of 20 kN/m at ultimate limit state and 14 kN/m at serviceability limit state. The ULS support reactions are 40 kN each.',
    description: 'A simply supported beam with evenly spaced downward load arrows, a four-metre model span and two upward 40 kilonewton ULS reactions. The separate serviceability load is 14 kilonewtons per metre.',
    render: loads,
  },
  {
    title: 'See the force pattern',
    subtitle: 'Shear and bending diagrams',
    caption: 'At ULS, shear runs from +40 kN to −40 kN. The uniformly loaded model gives a peak sagging moment of 40 kNm at midspan, calculated as wL²/8.',
    description: 'A linear shear-force diagram from plus 40 to minus 40 kilonewtons, above a parabolic bending-moment diagram reaching 40 kilonewton metres at midspan.',
    render: diagrams,
  },
  {
    title: 'First trial',
    subtitle: 'Within bending, above the deflection limit',
    caption: 'The S355 UB 178×102×19 gives 60.7 kNm plastic bending resistance and 0.66 utilisation at ULS. Its 16.4 mm deflection at SLS exceeds the illustrative 11.1 mm (L/360) limit. The model assumes γM0 = 1.0, adequate restraint and a section suitable for plastic resistance.',
    description: 'First trial section UB 178×102×19. The simplified plastic bending resistance is 60.7 kilonewton metres and utilisation 0.66. Serviceability deflection is 16.4 millimetres, above the illustrative 11.1 millimetre limit.',
    render: firstTrial,
  },
  {
    title: 'Step up',
    subtitle: 'Second trial checks',
    caption: 'Deflection governs. That’s why we calculate, not guess. The S355 UB 203×133×25 gives 91.6 kNm plastic bending resistance and 0.44 utilisation at ULS. Its 9.5 mm deflection at SLS is within the 11.1 mm illustrative target.',
    description: 'Second trial section UB 203×133×25. The simplified plastic bending resistance is 91.6 kilonewton metres and utilisation 0.44. Serviceability deflection is 9.5 millimetres, within the illustrative 11.1 millimetre target.',
    render: secondTrial,
  },
  {
    title: 'Translate the model',
    subtitle: 'A beam and bearing references',
    caption: 'The isometric view relates the steel reference to its bearing positions. The model does not determine a padstone, connection, support specification or installation method.',
    description: 'Isometric drawing of a red-oxide I-section with visible top and bottom flanges, web and two schematic padstone reference blocks.',
    render: isometricSteel,
  },
  {
    title: 'Picture the finished room',
    subtitle: 'A wider connection through the home',
    caption: 'The completed-room impression links the calculation story back to the homeowner’s brief. The animation shows temporary supports, the opening and the steel and bearing references. A project-specific design and assessed sequence are needed for a real opening.',
    description: 'A schematic opening sequence reveals temporary props and needles, the wall zone, and a red-oxide beam with bearing and packing references. The final open kitchen view has the temporary items removed and includes an illustrative signed calculation pack card.',
    render: completedRoom,
  },
];

function renderFrame(stage, index) {
  const number = index + 1;
  const grid = `bp-beam-grid-${number}`;
  const title = `bp-beam-title-${number}`;
  const desc = `bp-beam-desc-${number}`;
  const arrow = `bp-beam-arrow-${number}`;
  return `
    <div class="bp-story-frame" data-bp-frame="${number}"${number === stages.length ? '' : ' hidden'}>
      <svg viewBox="0 0 760 460" width="760" height="460" role="img" aria-labelledby="${title} ${desc}" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <title id="${title}">${stage.title}</title>
        <desc id="${desc}">${stage.description}</desc>
        <defs>
          <pattern id="${grid}" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="#27405a" stroke-width="0.7"/>
          </pattern>
          <marker id="${arrow}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10Z" fill="context-stroke"/>
          </marker>
        </defs>
        <rect width="760" height="460" fill="${palette.background}"/>
        <rect x="16" y="16" width="728" height="428" fill="url(#${grid})" opacity="0.55"/>
        <path d="M16 38V16H38M722 16H744V38M16 422V444H38M722 444H744V422" fill="none" stroke="${palette.blue}" stroke-width="1.25"/>
        ${text(60, 49, 'BEAM &amp; PLAN  /  STRUCTURAL STORY', { size: 12, fill: palette.blue, mono: true, track: 1.6 })}
        ${text(701, 49, `0${number} / 07`, { size: 14, fill: palette.gold, anchor: 'end', mono: true, track: 1.1 })}
        ${text(60, 86, stage.title, { size: 30, weight: '700' })}
        ${stage.render()}
        <path d="M60 425H701" fill="none" stroke="${palette.line}" stroke-width="1"/>
        ${text(60, 443, 'ILLUSTRATIVE ONLY  /  NOT FOR CONSTRUCTION', { size: 11, fill: palette.faint, mono: true, track: 1.05 })}
      </svg>
    </div>`;
}

export function beamStory() {
  return `
    <section class="section bp-story" data-bp-story="beam" aria-labelledby="bp-beam-heading">
      <div class="wrap">
        <h2 id="bp-beam-heading">From sum to steel</h2>
        <p>Follow a home opening from the first sketch through loads, calculations and a view of the finished room.</p>
        <div class="bp-story-layout">
          <div class="bp-story-display" data-bp-display>
            <div class="bp-story-surface">${stages.map(renderFrame).join('')}</div>
          </div>
          <ol class="bp-story-steps">
            ${stages.map((stage, index) => `
              <li data-bp-step="${index + 1}">
                <h3>${stage.title}</h3>
                <p><strong>${stage.subtitle}.</strong> ${stage.caption}</p>
              </li>`).join('')}
          </ol>
        </div>
        <p class="bp-story-note"><strong>Illustrative only. Not for construction.</strong> This story compares bending and deflection in a limited model. A project design must also assess shear, lateral stability, bearings, connections, supports and the existing structure.</p>
      </div>
    </section>`;
}
