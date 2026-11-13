const palette = {
  paper: '#e6e9e2',
  muted: '#a5bac4',
  blue: '#88c7e9',
  oxide: '#e17d6b',
  green: '#83bda6',
  gold: '#e6bf84',
  dark: '#0c131b',
  line: '#334c5c'
};

const plotOutline = 'M281 92 H494 V369 H281 V92';
const stages = [
  {
    title: 'Locate the plot',
    caption: 'Start with the site, its street and the buildings around it.',
    description: 'A stylised street plan shows a plot pin between two neighbouring houses.'
  },
  {
    title: 'Mark the red line',
    caption: 'Outline the land included in the proposed planning application.',
    description: 'An oxide red line encloses the example application site, with its access from the street.'
  },
  {
    title: 'Record the survey',
    caption: 'Bring measured points, levels and dimensions into the drawing.',
    description: 'Example spot levels and dimensions are added to the site plan.'
  },
  {
    title: 'Check the constraints',
    caption: 'Look at neighbouring foundations, tree roots, drainage and the building line before settling the layout.',
    description: 'The plan shows an illustrative three metre neighbour screening band, a tree root protection area, an indicative drain and a building line.'
  },
  {
    title: 'Draw the floor plan',
    caption: 'Use the brief and site information to develop a CAD layout with rooms, openings and dimensions.',
    description: 'An example ground floor plan shows a kitchen and living area, study, entrance hall, WC and stairs.'
  },
  {
    title: 'See the proposed home',
    caption: 'Use a 3D view to discuss how the house, drive and garden fit together.',
    description: 'An isometric view shows a two storey house, pitched roof, front door, windows, drive and garden within the same plot.'
  },
  {
    title: 'Prepare the planning drawings',
    caption: 'Planning drawings ready to submit → Building Regs calculations next.',
    description: 'An example planning drawing pack is ready to submit. Building Regulations calculations are shown as the next design stage.'
  }
];

function svgText(x, y, value, { size = 13, fill = palette.paper, anchor = 'start', type = true, weight = 500 } = {}) {
  const escaped = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-weight="${weight}"${type ? ' data-bp-type=""' : ''}>${escaped}</text>`;
}

function draw(path, stroke = palette.blue, width = 1.5) {
  return `<path d="${path}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" data-bp-draw=""/>`;
}

function leader(path, endX, endY, colour = palette.blue) {
  return `${draw(path, colour)}<circle cx="${endX}" cy="${endY}" r="3" fill="${colour}" data-bp-enter=""/>`;
}

function northArrow(x = 682, y = 99) {
  return `<g transform="translate(${x} ${y})" data-bp-enter="">
    ${svgText(0, 0, 'N', { size: 12, anchor: 'middle', type: false })}
    <path d="M0 8 7 29 0 25 -7 29Z" fill="${palette.paper}"/>
    <path d="M0 9 V25 L7 29Z" fill="${palette.line}"/>
  </g>`;
}

function horizontalDimension(x1, x2, y, label, colour = palette.blue) {
  return `${draw(`M${x1} ${y} H${x2} M${x1} ${y - 6} V${y + 6} M${x2} ${y - 6} V${y + 6}`, colour)}
    ${draw(`M${x1 + 7} ${y - 3} L${x1} ${y} L${x1 + 7} ${y + 3} M${x2 - 7} ${y - 3} L${x2} ${y} L${x2 - 7} ${y + 3}`, colour, 1)}
    ${svgText((x1 + x2) / 2, y - 9, label, { fill: colour, anchor: 'middle' })}`;
}

function verticalDimension(x, y1, y2, label) {
  return `${draw(`M${x} ${y1} V${y2} M${x - 6} ${y1} H${x + 6} M${x - 6} ${y2} H${x + 6}`)}
    ${draw(`M${x - 3} ${y1 + 7} L${x} ${y1} L${x + 3} ${y1 + 7} M${x - 3} ${y2 - 7} L${x} ${y2} L${x + 3} ${y2 - 7}`, palette.blue, 1)}
    <g transform="translate(${x - 9} ${(y1 + y2) / 2}) rotate(-90)">${svgText(0, 0, label, { fill: palette.blue, anchor: 'middle' })}</g>`;
}

function treePlan(x, y, radius) {
  return `<g transform="translate(${x} ${y})">
    <circle r="${radius}" fill="#203a38" stroke="#477a6b" stroke-width="1"/>
    <path d="M-${radius * .6} 0 Q0 -${radius * .7} ${radius * .6} 0 Q0 ${radius * .72} -${radius * .6} 0 M0 -${radius * .68} Q${radius * .64} 0 0 ${radius * .68}" fill="none" stroke="#4e7e6e" stroke-width=".8"/>
    <circle r="2.4" fill="#70a58d"/>
  </g>`;
}

function streetPlan({ outline = false, footprint = false, muteNeighbours = false } = {}) {
  return `<g aria-hidden="true">
    <path d="M74 89 H281 V369 L69 382Z M494 92 H653 L677 389 494 369Z" fill="#16252e" stroke="#293e4b"/>
    <path d="M78 135 H281 M494 141 H658 M79 299 H281 M494 305 H670 M110 92 V374 M635 91 L650 375" fill="none" stroke="#29414d" stroke-width="1"/>
    <path d="M281 92 H494 V369 H281Z" fill="#17313d" fill-opacity=".64" stroke="#416172"/>
    <path d="M281 92 H494 V112 H281Z M281 327 H494 V369 H281Z" fill="#294b50" fill-opacity=".35"/>
    <path d="M18 374 C128 385 205 370 281 369 H494 C584 370 655 391 741 385 L741 414 C632 419 579 399 494 399 H281 C201 399 128 416 18 405Z" fill="#273743" stroke="#45606e" stroke-width="1.1"/>
    <path d="M31 391 C143 401 204 383 281 384 H494 C578 384 654 406 732 398" fill="none" stroke="#6d8999" stroke-dasharray="11 8" stroke-width="1"/>
    <g opacity="${muteNeighbours ? '.45' : '1'}">
      <path d="M165 161 H259 V289 H165Z M543 173 H616 V280 H543Z" fill="#354c5a" stroke="#698493" stroke-width="1.2"/>
      <path d="M165 161 211 181 259 161 M211 181 V268 M165 289 211 268 259 289 M543 173 579 191 616 173 M579 191 V263 M543 280 579 263 616 280" fill="none" stroke="#7591a1" stroke-width="1.1"/>
      <path d="M177 289 H195 V369 H177Z M585 280 H604 V383 H585Z" fill="#526674" fill-opacity=".45"/>
      <path d="M107 195 H145 V248 H107Z M627 205 H653 V253 H627Z" fill="#2b424f" stroke="#4d6878"/>
    </g>
    <path d="M299 106 H474 M300 348 H439 M300 359 H439" fill="none" stroke="#31535b" stroke-width="1" stroke-dasharray="3 4"/>
    ${treePlan(130, 112, 16)}
    ${treePlan(116, 319, 13)}
    ${treePlan(462, 128, 15)}
    ${treePlan(603, 112, 16)}
    ${treePlan(637, 322, 17)}
    ${footprint ? '<path d="M324 170 H440 V317 H324Z" fill="#223e4f" fill-opacity=".7" stroke="#80b8d6" stroke-width="1.4" stroke-dasharray="5 4" data-bp-enter=""/>' : ''}
    ${svgText(63, 400, 'STREET FRONTAGE', { size: 11, fill: palette.muted, type: false })}
    ${northArrow()}
    ${outline ? draw(plotOutline, palette.oxide, 3) : ''}
  </g>`;
}

function plotPin() {
  return `${streetPlan()}
    <g transform="translate(387 223)" data-bp-enter="">
      <circle r="34" fill="#4ba1c8" fill-opacity=".14" stroke="#6fc0e3" stroke-opacity=".32"/>
      <path d="M0 29 C-5 20 -20 7 -20 -6 A20 20 0 1 1 20 -6 C20 7 5 20 0 29Z" fill="${palette.blue}" stroke="#d5effa" stroke-width="1.5"/>
      <circle cy="-6" r="7" fill="${palette.dark}"/>
    </g>
    ${leader('M402 197 L452 150 H546', 402, 197)}
    <rect x="546" y="132" width="135" height="36" rx="3" fill="#162734" stroke="#52778a" data-bp-enter=""/>
    ${svgText(559, 154, 'EXAMPLE PLOT', { fill: palette.blue, weight: 700 })}
    ${svgText(181, 309, 'NEIGHBOUR', { size: 11, fill: palette.muted })}
    ${svgText(545, 301, 'NEIGHBOUR', { size: 11, fill: palette.muted })}`;
}

function redLine() {
  return `${streetPlan({ outline: true })}
    <path d="M281 92 H494 V369 H281Z" fill="${palette.oxide}" fill-opacity=".08" data-bp-enter=""/>
    <g fill="${palette.oxide}" stroke="${palette.dark}" stroke-width="1.4" data-bp-enter="">
      <rect x="277" y="88" width="8" height="8"/><rect x="490" y="88" width="8" height="8"/>
      <rect x="490" y="365" width="8" height="8"/><rect x="277" y="365" width="8" height="8"/>
    </g>
    ${leader('M494 128 H527 L554 109 H647', 494, 128, palette.oxide)}
    ${svgText(554, 98, 'APPLICATION SITE', { fill: palette.oxide, weight: 700 })}
    ${svgText(387, 231, 'PROPOSED EXTENT', { fill: palette.paper, anchor: 'middle', weight: 700 })}
    ${leader('M463 369 L463 349 L537 333 H661', 463, 369)}
    ${svgText(537, 322, 'SITE ACCESS', { fill: palette.blue })}`;
}

function surveyPoint(x, y, label, alignRight = false) {
  return `<g data-bp-enter="">
    <circle cx="${x}" cy="${y}" r="5" fill="${palette.dark}" stroke="${palette.gold}" stroke-width="1.3"/>
    <path d="M${x - 9} ${y} H${x + 9} M${x} ${y - 9} V${y + 9}" stroke="${palette.gold}" stroke-width="1.1"/>
  </g>${svgText(x + (alignRight ? -14 : 14), y + 4, label, { fill: palette.gold, size: 12, anchor: alignRight ? 'end' : 'start' })}`;
}

function surveyPlan() {
  return `${streetPlan({ outline: true, muteNeighbours: true })}
    <path d="M306 136 L461 143 L462 329 L307 319Z M306 136 L462 329 M461 143 L307 319" fill="none" stroke="#7593a1" stroke-opacity=".7" stroke-dasharray="4 5" data-bp-enter=""/>
    ${horizontalDimension(281, 494, 117, '17.80 m')}
    ${verticalDimension(514, 92, 369, '23.50 m')}
    ${surveyPoint(306, 136, '12.41')}
    ${surveyPoint(461, 143, '12.38', true)}
    ${surveyPoint(462, 329, '12.24', true)}
    ${surveyPoint(307, 319, '12.30')}
    ${draw('M333 211 Q380 191 438 215 M333 240 Q384 218 438 246 M332 267 Q383 248 438 273', '#658395', 1)}
    ${leader('M461 143 H539 L565 124 H654', 461, 143, palette.gold)}
    ${svgText(565, 113, 'SPOT LEVELS', { fill: palette.gold, weight: 700 })}
    ${svgText(564, 142, 'Example metres', { size: 11, fill: palette.muted })}`;
}

function constraintsPlan() {
  return `${streetPlan({ outline: true, footprint: true })}
    <path d="M165 125 H259 A36 36 0 0 1 295 161 V289 A36 36 0 0 1 259 325 H165 A36 36 0 0 1 129 289 V161 A36 36 0 0 1 165 125Z M165 161 H259 V289 H165Z"
      fill="${palette.gold}" fill-opacity=".16" fill-rule="evenodd" stroke="${palette.gold}" stroke-dasharray="5 4" stroke-width="1.3" data-bp-enter=""/>
    ${leader('M147 140 L117 111 H43', 147, 140, palette.gold)}
    ${svgText(43, 101, '3 m SCREENING BAND', { size: 13, fill: palette.gold, weight: 700 })}
    ${horizontalDimension(259, 295, 311, '3 m', palette.gold)}
    <circle cx="462" cy="128" r="34" fill="#79b8a4" fill-opacity=".17" stroke="${palette.green}" stroke-width="1.5" stroke-dasharray="4 4" data-bp-enter=""/>
    ${leader('M485 106 L520 87 H646', 485, 106, palette.green)}
    ${svgText(527, 106, 'TREE RPA', { fill: palette.green, weight: 700 })}
    ${svgText(527, 124, 'Root protection area', { size: 11, fill: palette.muted })}
    <path d="M480 170 V350 L492 384 H576" fill="none" stroke="${palette.blue}" stroke-width="2.3" stroke-dasharray="7 5" data-bp-enter=""/>
    <g fill="${palette.dark}" stroke="${palette.blue}" stroke-width="1.5" data-bp-enter="">
      <circle cx="480" cy="211" r="5"/><circle cx="480" cy="350" r="5"/>
    </g>
    ${leader('M480 239 L526 219 H665', 480, 239)}
    <rect x="528" y="192" width="139" height="23" fill="#111e28" data-bp-enter=""/>
    ${svgText(535, 208, 'INDICATIVE DRAIN', { size: 12, fill: palette.blue, weight: 700 })}
    <path d="M281 321 H494" fill="none" stroke="${palette.paper}" stroke-width="1.4" stroke-dasharray="7 5" data-bp-enter=""/>
    ${leader('M420 321 L441 342 H648', 420, 321, palette.paper)}
    <rect x="531" y="344" width="122" height="22" fill="#111e28" data-bp-enter=""/>
    ${svgText(539, 359, 'BUILDING LINE', { size: 12, weight: 700 })}
    ${svgText(382, 243, 'TEST FOOTPRINT', { size: 11, fill: palette.blue, anchor: 'middle' })}
    ${svgText(40, 353, 'Screening only', { size: 12, fill: palette.gold })}
    ${svgText(40, 370, 'Depth and geometry matter', { size: 11, fill: palette.muted })}`;
}

function floorPlan() {
  return `<path d="M223 105 H431 V371 H223Z" fill="#172c39" stroke="#416172" data-bp-enter=""/>
    ${draw('M223 105 H272 M353 105 H431 V371 H354 M326 371 H223 V105', palette.paper, 7)}
    ${draw('M223 227 H322 M353 227 H431 M310 227 V250 M310 277 V371 M368 227 V250 M368 273 V371 M368 285 H431', palette.paper, 4)}
    <g fill="#194557" stroke="${palette.blue}" stroke-width="1.5" data-bp-enter="">
      <rect x="273" y="100" width="80" height="10"/><path d="M313 101 V109"/>
      <rect x="219" y="149" width="8" height="42"/><rect x="219" y="302" width="8" height="33"/>
      <rect x="427" y="140" width="8" height="38"/><rect x="427" y="313" width="8" height="31"/>
      <rect x="241" y="367" width="40" height="8"/><rect x="383" y="367" width="31" height="8"/>
    </g>
    ${draw('M326 371 V343 A28 28 0 0 1 354 371 M322 227 V195 A32 32 0 0 1 354 227 M310 277 H283 A27 27 0 0 1 310 250 M368 273 H391 A23 23 0 0 0 368 250', '#a4b3b8', 1.15)}
    <g fill="#294958" stroke="#6893a6" stroke-width="1.1" data-bp-enter="">
      <path d="M367 114 H422 V202 H403 V134 H367Z"/>
      <rect x="403" y="149" width="18" height="22" rx="2"/>
      <rect x="334" y="153" width="46" height="28" rx="2"/>
      <path d="M335 144 H347 V153 H335Z M366 144 H378 V153 H366Z M335 181 H347 V190 H335Z M366 181 H378 V190 H366Z"/>
      <path d="M241 127 H263 V160 H292 V175 H241Z"/><rect x="272" y="135" width="27" height="16" rx="3"/>
      <rect x="236" y="238" width="37" height="17"/><circle cx="252" cy="264" r="6"/>
      <path d="M400 241 H416 V256 H400Z"/><ellipse cx="408" cy="262" rx="6" ry="8"/>
    </g>
    ${draw('M382 298 H418 V358 H382 V298 M382 305 H418 M382 313 H418 M382 321 H418 M382 329 H418 M382 337 H418 M382 345 H418 M382 353 H418', '#7497a8', 1)}
    ${draw('M400 348 V309 M395 316 L400 309 L405 316', palette.blue, 1.1)}
    ${svgText(266, 206, 'LIVING', { size: 12, anchor: 'middle' })}
    ${svgText(367, 211, 'KITCHEN / DINING', { size: 11, anchor: 'middle' })}
    ${svgText(263, 327, 'STUDY', { size: 12, anchor: 'middle' })}
    ${svgText(338, 314, 'HALL', { size: 11, anchor: 'middle' })}
    ${svgText(383, 244, 'WC', { size: 10 })}
    ${svgText(399, 296, 'STAIR', { size: 10, anchor: 'middle' })}
    ${horizontalDimension(223, 431, 91, '9.70 m')}
    ${verticalDimension(193, 105, 371, '12.30 m')}
    ${draw('M193 105 H213 M193 371 H213 M223 91 V100 M431 91 V100', '#618496', 1)}
    ${leader('M431 168 L476 144 H647', 431, 168)}
    ${svgText(483, 133, 'WINDOW OPENING', { size: 12, fill: palette.blue })}
    ${leader('M431 227 H475 L500 207 H666', 431, 227, palette.paper)}
    ${svgText(505, 196, 'INTERNAL LAYOUT', { size: 12 })}
    ${leader('M340 371 L340 391 H511 L535 367 H665', 340, 371, palette.gold)}
    ${svgText(535, 356, 'FRONT ENTRANCE', { size: 12, fill: palette.gold })}
    ${svgText(519, 273, 'GROUND FLOOR', { fill: palette.paper, size: 16, weight: 700 })}
    ${svgText(519, 294, 'Concept CAD layout', { fill: palette.muted, size: 12 })}
    ${northArrow()}`;
}

// Shared plan coordinates in metres, projected for the house illustration.
function project(x, y, z = 0) {
  return [387 + 13 * x - 10.1 * y, 132 + 5.7 * x + 5.15 * y - 15 * z]
    .map(value => Number(value.toFixed(1)));
}

function projectedPoints(points) {
  return points.map(point => project(...point).join(',')).join(' ');
}

function isoFace(points, fill, stroke = '#8badbe', width = 1.1) {
  return `<polygon points="${projectedPoints(points)}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linejoin="round"/>`;
}

function isoLine(points, colour, width = 1.1) {
  return draw(points.map((point, index) => (index ? 'L' : 'M') + project(...point).join(' ')).join(' '), colour, width);
}

function frontWindow(x1, x2, z1, z2) {
  const y = 19.02;
  const centre = (x1 + x2) / 2;
  return `${isoFace([[x1,y,z1],[x2,y,z1],[x2,y,z2],[x1,y,z2]], '#54778a', '#e0e9e5', 1.2)}
    ${isoLine([[centre,y,z1],[centre,y,z2]], '#d0dce0', .8)}
    ${isoLine([[x1 - .08,y,z1 - .06],[x2 + .08,y,z1 - .06]], '#c0cfd1', 1.2)}`;
}

function sideWindow(y1, y2, z1, z2) {
  const x = 13.32;
  const centre = (y1 + y2) / 2;
  return `${isoFace([[x,y1,z1],[x,y2,z1],[x,y2,z2],[x,y1,z2]], '#3c627a', '#afc7d1', 1.15)}
    ${isoLine([[x,centre,z1],[x,centre,z2]], '#b4cad3', .7)}`;
}

function isoTree(x, y) {
  const [cx, cy] = project(x, y, 3.15);
  const [baseX, baseY] = project(x, y);
  return `<g data-bp-enter="">
    <ellipse cx="${baseX}" cy="${baseY}" rx="15" ry="6" fill="#142a29" fill-opacity=".85"/>
    <path d="M${baseX} ${baseY} L${cx} ${cy + 7}" stroke="#a3977d" stroke-width="3" stroke-linecap="round"/>
    <path d="M${cx} ${cy + 17} L${cx - 10} ${cy + 1} M${cx} ${cy + 12} L${cx + 10} ${cy - 2}" stroke="#a3977d" stroke-width="1.6"/>
    <ellipse cx="${cx - 8}" cy="${cy + 2}" rx="15" ry="17" fill="#426f62" stroke="#779f88"/>
    <ellipse cx="${cx + 8}" cy="${cy - 1}" rx="14" ry="18" fill="#527d67" stroke="#8fb198"/>
    <ellipse cx="${cx}" cy="${cy - 11}" rx="15" ry="17" fill="#71947a" stroke="#9bb5a0"/>
  </g>`;
}

function isometricHome() {
  const frontGable = [[3.6,19,0],[13.3,19,0],[13.3,19,5.4],[8.45,19,7.7],[3.6,19,5.4]];
  const eastWall = [[13.3,6.65,0],[13.3,19,0],[13.3,19,5.4],[13.3,6.65,5.4]];
  const roofWest = [[3.25,6.3,5.32],[8.45,6.3,7.83],[8.45,19.35,7.83],[3.25,19.35,5.32]];
  const roofEast = [[8.45,6.3,7.83],[13.65,6.3,5.32],[13.65,19.35,5.32],[8.45,19.35,7.83]];
  const roofSeams = Array.from({ length: 8 }, (_, index) => {
    const y = 7.6 + index * 1.52;
    return isoLine([[8.45,y,7.84],[13.65,y,5.33]], '#7090a2', .75);
  }).join('');
  const driveJoints = [14, 16, 18, 20, 22].map(y => isoLine([[14.05,y,.04],[16.55,y,.04]], '#647e8d', .85)).join('');
  const [gardenX, gardenY] = project(16, 2);
  const [driveX, driveY] = project(15.35, 19.6);
  const [roofX, roofY] = project(8.45, 8.3, 7.84);
  return `<g data-bp-enter="">
    ${isoFace([[-1.3,23.5,0],[19.3,23.5,0],[19.3,27,0],[-1.3,27,0]], '#263844', '#516975')}
    ${isoFace([[0,0,0],[17.8,0,0],[17.8,23.5,0],[0,23.5,0]], '#2a4a45', '#587669')}
    ${isoFace([[.5,.7,.02],[16.7,.7,.02],[16.7,5.6,.02],[.5,5.6,.02]], '#385c4c', '#54765c')}
    ${isoFace([[.65,7,.02],[2.9,7,.02],[2.9,21.6,.02],[.65,21.6,.02]], '#385c4c', '#54765c')}
    ${isoFace([[14.05,12,.03],[16.55,12,.03],[16.55,23.5,.03],[14.05,23.5,.03]], '#70828a', '#a2b4bc')}
    ${isoFace([[7.45,19,.03],[9.05,19,.03],[9.05,22.5,.03],[14.05,22.5,.03],[14.05,23.5,.03],[7.45,23.5,.03]], '#7c8e90', '#a2b5b4')}
    ${isoFace([[3.1,4.9,.03],[10.8,4.9,.03],[10.8,6.65,.03],[3.1,6.65,.03]], '#81908a', '#a1b0a6')}
    ${isoFace([[3.8,6.65,.01],[14.6,7.4,.01],[14.6,20.2,.01],[4.1,19.6,.01]], '#1a3133', '#2f4846', .7)}
  </g>
  ${driveJoints}
  ${isoLine([[0,0,.06],[17.8,0,.06],[17.8,23.5,.06],[0,23.5,.06],[0,0,.06]], palette.oxide, 2.15)}
  ${isoTree(15.1,3.05)}
  <g data-bp-enter="">
    ${isoFace(eastWall, '#8da6ab', '#d0dcda', 1.3)}
    ${isoFace(frontGable, '#c2c9bc', '#ecede0', 1.3)}
    ${sideWindow(9.15,11.6,1.08,2.35)}
    ${sideWindow(14.8,17.25,1.08,2.35)}
    ${sideWindow(9.15,11.6,3.55,4.78)}
    ${sideWindow(14.8,17.25,3.55,4.78)}
    ${frontWindow(4.48,6.46,1.02,2.48)}
    ${frontWindow(10.17,12.4,1.02,2.48)}
    ${frontWindow(4.48,6.46,3.64,4.89)}
    ${frontWindow(10.17,12.4,3.64,4.89)}
    ${isoFace([[7.73,19.04,.04],[8.81,19.04,.04],[8.81,19.04,2.48],[7.73,19.04,2.48]], '#253d4d', '#e5e7d8', 1.2)}
    ${isoFace([[7.64,19.02,2.56],[8.91,19.02,2.56],[8.91,19.51,2.56],[7.64,19.51,2.56]], '#768e98', '#b8c7c8', .9)}
    ${isoFace(roofWest, '#4c687b', '#afc3d0', 1.25)}
    ${isoFace(roofEast, '#344e62', '#a5bfcc', 1.25)}
    ${roofSeams}
    ${isoLine([[8.45,6.3,7.85],[8.45,19.35,7.85]], '#bdcdd4', 1.6)}
  </g>
  ${leader(`M${roofX} ${roofY} L${roofX + 48} 104 H655`, roofX, roofY)}
  ${svgText(539, 94, 'PROPOSED HOME', { fill: palette.blue, weight: 700 })}
  ${leader(`M${gardenX} ${gardenY} L621 203 H699`, gardenX, gardenY, palette.green)}
  ${svgText(600, 192, 'REAR GARDEN', { fill: palette.green, weight: 700 })}
  ${leader(`M${driveX} ${driveY} L${driveX + 45} 342 H648`, driveX, driveY, palette.gold)}
  ${svgText(558, 331, 'SIDE DRIVE', { fill: palette.gold, weight: 700 })}
  ${svgText(72, 374, 'STREET', { fill: palette.muted, size: 11 })}`;
}

function planningPack() {
  return `<g data-bp-enter="">
    <rect x="104" y="95" width="285" height="258" rx="3" transform="rotate(-5 104 95)" fill="#496170" stroke="#7994a2"/>
    <rect x="112" y="103" width="285" height="258" rx="3" transform="rotate(3 112 103)" fill="#97aab1" stroke="#c3d1d4"/>
    <rect x="98" y="98" width="285" height="258" rx="3" fill="#e4e9e3" stroke="#f1f4ed"/>
    <rect x="108" y="108" width="265" height="238" fill="none" stroke="#64818e" stroke-width=".8"/>
    <path d="M108 134 H373 M108 307 H373 M261 307 V346 M108 326 H373" fill="none" stroke="#64818e" stroke-width=".8"/>
  </g>
  ${svgText(121, 125, 'EXAMPLE PLANNING SET', { size: 12, fill: '#253e50', weight: 700 })}
  <g fill="none" stroke="#486b7d" stroke-width="1.2" data-bp-enter="">
    <path d="M130 159 H210 V238 H130Z M143 171 H198 V226 H143Z M143 192 H198 M163 192 V226 M181 192 V226"/>
    <path d="M123 151 H219 M124 147 V156 M219 147 V156 M123 159 V238 M120 159 H127 M120 238 H127"/>
    <path d="M247 170 H342 V241 H247Z M247 170 293 148 342 170 M261 204 H277 V222 H261Z M310 204 H326 V222 H310Z M285 211 H301 V241 H285Z M259 178 H278 V191 H259Z M309 178 H329 V191 H309Z"/>
    <path d="M130 256 H340 M130 267 H312 M130 278 H329 M130 289 H290"/>
  </g>
  ${svgText(119, 321, 'DRAWING REGISTER', { size: 9, fill: '#395668' })}
  ${svgText(274, 321, 'BP–014 / EXAMPLE', { size: 9, fill: '#395668' })}
  ${svgText(119, 340, 'LOCATION · PLANS · ELEVATIONS', { size: 8, fill: '#395668' })}
  ${svgText(274, 340, 'PRE-SUBMISSION', { size: 8, fill: '#395668' })}
  <g data-bp-enter="">
    <rect x="421" y="108" width="274" height="103" rx="4" fill="#203440" stroke="#7294a6"/>
    <rect x="421" y="262" width="274" height="103" rx="4" fill="#172934" stroke="#496a7d"/>
    <circle cx="446" cy="133" r="8" fill="${palette.green}"/>
    <path d="M442 133 445 136 450 130" fill="none" stroke="#0e2926" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  ${svgText(465, 137, 'PLANNING DRAWINGS', { size: 13, fill: palette.green, weight: 700 })}
  ${svgText(439, 176, 'Ready to submit', { size: 25, weight: 700 })}
  ${draw('M558 221 V251 M551 244 L558 251 L565 244', palette.gold, 2)}
  ${svgText(440, 291, 'NEXT DESIGN STAGE', { size: 12, fill: palette.gold, weight: 700 })}
  ${svgText(440, 323, 'Building Regs', { size: 23, weight: 700 })}
  ${svgText(440, 346, 'calculations next', { size: 16, fill: palette.muted })}`;
}

const scenes = [plotPin, redLine, surveyPlan, constraintsPlan, floorPlan, isometricHome, planningPack];
const sheetLabels = [
  'CONTEXT MAP', 'SITE EXTENT', 'MEASURED INFORMATION', 'SITE CONSTRAINTS', 'CONCEPT GROUND FLOOR',
  'PROPOSED MASSING', 'DRAWING PACKAGE'
];

function renderFrame(stage, index) {
  const number = String(index + 1).padStart(2, '0');
  const base = `bp-plot-${number}`;
  return `<div class="bp-story-frame" data-bp-frame="${index}"${index === stages.length - 1 ? '' : ' hidden'}>
    <svg viewBox="0 0 760 460" role="img" aria-labelledby="${base}-title ${base}-desc" xmlns="http://www.w3.org/2000/svg">
      <title id="${base}-title">${stage.title}</title>
      <desc id="${base}-desc">${stage.description}</desc>
      <defs>
        <pattern id="${base}-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#3c6175" stroke-opacity=".22" stroke-width=".8"/></pattern>
        <linearGradient id="${base}-wash" x2="1" y2="1"><stop stop-color="#142432"/><stop offset="1" stop-color="#0b121a"/></linearGradient>
      </defs>
      <rect width="760" height="460" fill="${palette.dark}"/>
      <rect x="19" y="67" width="722" height="347" rx="3" fill="url(#${base}-wash)" stroke="#334d5d"/>
      <rect x="20" y="68" width="720" height="345" rx="3" fill="url(#${base}-grid)"/>
      <g font-family="ui-monospace,SFMono-Regular,Consolas,monospace">
        ${svgText(25, 27, 'BEAM & PLAN  /  EXAMPLE BP–014', { size: 11, fill: palette.muted, type: false })}
        ${svgText(25, 54, stage.title, { size: 24, weight: 700 })}
        ${svgText(734, 30, `${number} / 07`, { fill: palette.blue, size: 14, weight: 700, anchor: 'end', type: false })}
        ${svgText(734, 53, sheetLabels[index], { fill: palette.muted, size: 11, anchor: 'end', type: false })}
        ${scenes[index]()}
        <path d="M25 425 H735" stroke="#334d5d"/>
        ${svgText(25, 443, 'FICTIONAL PLOT  /  ILLUSTRATIVE', { fill: palette.muted, size: 10, type: false })}
        ${svgText(735, 443, 'DESIGN JOURNEY', { fill: palette.muted, size: 10, anchor: 'end', type: false })}
      </g>
    </svg>
  </div>`;
}

export function plotStory() {
  return `<section class="bp-story" data-bp-story="plot" aria-labelledby="bp-plot-heading">
    <div class="wrap">
      <div class="bp-story-heading"><h2 id="bp-plot-heading">From plot to plan to home.</h2><p>Follow an example site through the drawings and checks that help shape a planning application.</p></div>
      <div class="bp-story-layout">
        <div class="bp-story-display" data-bp-display>
          <div class="bp-story-surface">${stages.map(renderFrame).join('')}</div>
        </div>
        <ol class="bp-story-steps">
          ${stages.map((stage, index) => `<li data-bp-step="${index}" id="bp-plot-step-${index + 1}"><span class="bp-story-step-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><div><h3>${stage.title}</h3><p>${stage.caption}</p></div></li>`).join('')}
        </ol>
      </div>
      <p class="bp-story-note fine-print">The illustrations use a fictional plot. Survey information establishes the site dimensions and features. The neighbour screening band is indicative. Party wall excavation checks depend on depth and geometry and can involve a 6 m test. Planning decisions and Building Regulations approval follow separate processes. <a href="https://www.gov.uk/government/publications/preventing-and-resolving-disputes-in-relation-to-party-walls/the-party-wall-etc-act-1996-explanatory-booklet">GOV.UK party wall guidance</a>.</p>
    </div>
  </section>`;
}
