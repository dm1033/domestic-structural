import { site } from './config.mjs';

const esc = (value = '') => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));

// Body sections only: the page title, metadata and final CTA belong to the build.
export function localPageBody() {
  return `<section class="section"><div class="wrap content-layout"><article>
    <h2>Practical engineering help, based in Norwich.</h2>
    <p class="lead">Planning a kitchen knock-through, a home extension or a loft conversion? Beam &amp; Plan helps homeowners in Norwich and Norfolk turn the idea into an agreed structural design, clear CAD drawings and understandable next steps.</p>
    <p>Speak directly with ${esc(site.consultant)}, ${esc(site.credentials)}, through ${esc(site.company)}. We agree the scope, fixed fee and delivery programme before work starts, including the information needed and the support that follows.</p>
    <p>Site visits in Norwich and across Norfolk are available by arrangement, subject to location, access, project suitability and capacity. Some design work can be delivered remotely with suitable verified information. Send your postcode first so we can confirm the available approach.</p>

    <h2>What are you changing?</h2>
    <h3>Removing a wall or opening up a kitchen</h3>
    <p>Start with the existing layout and the opening you want. We identify the information needed about the wall, floors, roof and supports, then agree the calculations, drawings and any inspection or temporary support design required. <a href="/projects/wall-removal/">See the steps for a wall removal</a>.</p>
    <h3>A steel beam, RSJ, column or frame</h3>
    <p>A beam span alone does not describe the whole job. The design needs suitable information about the loads, bearings, connections and the structure below. <a href="/services/steel-beam-calculations/">Explore steel beam calculations</a> or <a href="/services/structural-calculations/">the wider structural design service</a>.</p>
    <h3>Foundations and new supports</h3>
    <p>For an extension or new load, tell us about existing foundations, nearby buildings, trees, drains and any ground information you hold. We explain what needs checking before agreeing the foundation design. <a href="/projects/foundations/">Plan the foundation information</a>.</p>
    <h3>Extensions and loft conversions</h3>
    <p>Already working with an architect or builder? Send their latest plans so the structural scope can be coordinated with the wider project. <a href="/projects/extension/">Start with an extension</a> or <a href="/projects/loft-conversion/">see the route for a loft conversion</a>.</p>
    <h3>Cracks or a structural concern</h3>
    <p>Describe where the concern is, when you first noticed it and whether it has changed. Photographs and previous reports help scope a targeted inspection; they do not replace an examination where one is needed. <a href="/services/structural-inspections/">Read about structural inspections</a>.</p>
    <h3>Planning, Building Regulations and party wall questions</h3>
    <p>Not sure which process applies? Share the proposal, property address and any council correspondence. We can identify the next enquiry and agree the drawings or support required. <a href="/services/planning-permission/">Planning help</a>, <a href="/services/building-regulations/">Building Regulations support</a> and <a href="/services/party-wall/">party wall guidance</a> have separate scopes.</p>

    <h2>Will your project need a visit?</h2>
    <p>That depends on what is known about the property and what you want to change. Existing drawings may need checking, concealed construction may need investigation, and foundations may need ground information. We confirm any visit, survey or opening-up requirement before relying on that information for design.</p>
    <p>A remote appointment is agreed only when suitable for the actual scope. It does not imply that a site inspection is included. For work elsewhere in Norfolk or outside the county, tell us the location and we will confirm suitability, availability and any travel allowance in the quote.</p>

    <h2>Send what you already have.</h2>
    <ul class="check-list">
      <li>The property postcode and a short description of the change or concern.</li>
      <li>Existing and proposed plans, with reliable dimensions where available.</li>
      <li>Relevant photographs taken safely, without disturbing the structure.</li>
      <li>Previous calculations, survey reports or known foundation information.</li>
      <li>Any planning or Building Control reference, comments and approaching deadlines.</li>
      <li>Your intended timing and the details of any architect or builder already involved.</li>
    </ul>
    <p>No drawings yet? Describe the rooms, opening or extra space you want. We can help establish the information needed for a useful quote.</p>

    <h2>A clear route from enquiry to design.</h2>
    <ol class="journey-list">
      <li><span class="number">01</span><p><strong>Explain your project.</strong> Send the postcode, brief and available plans. We review the enquiry and clarify the information needed.</p></li>
      <li><span class="number">02</span><p><strong>Agree the appointment.</strong> Your written quote identifies the calculations, drawing types, visits, support, exclusions and delivery date.</p></li>
      <li><span class="number">03</span><p><strong>Receive the agreed package.</strong> Use the issued documents with your project team and resolve the necessary submission and site requirements before construction.</p></li>
    </ol>
    <p><a class="text-link" href="/your-design-package/">See what your design package can include</a>. The drawing shown there is an illustrative presentation example.</p>
    <div class="scope-note"><h3>Identify the permissions early.</h3><p>Planning, Building Regulations and party wall procedures are separate checks. Authority decisions, statutory inspections, formal party wall appointments and specialist legal advice are identified separately from the structural design. <a href="/permissions/">Understand who does what</a>.</p></div>

    <h2>See the work and meet the consultancy.</h2>
    <p>Beam &amp; Plan is part of ${esc(site.company)}. The consultancy publishes an anonymised airport energy-project case study showing its approach to structural stability, staged work and technical review. <a href="${esc(site.publicCaseStudy)}">Read the published consultancy case study</a>.</p>
    <p>For feedback on the consultancy, use the <a href="${esc(site.googleReviews)}" rel="noopener">Google reviews link published on its main website</a>. The <a href="/your-design-package/">CAD sample on this site</a> is clearly marked as an illustrative presentation example.</p>
    <h2>Questions about local support.</h2>
    <div class="faq-list">
      <details><summary>Can you visit my property in Norfolk?<span aria-hidden="true">+</span></summary><p>Send your postcode and the purpose of the visit. Visits are arranged where suitable and available, with access, the areas to be examined, written findings and any travel costs agreed in advance.</p></details>
      <details><summary>Can you help if I already have plans or a council query?<span aria-hidden="true">+</span></summary><p>Yes. Send the current drawings and the exact comment or request. We will confirm the review needed and the work we can take on before agreeing a fee. Existing design by others may need assessment before responsibility can be accepted.</p></details>
      <details><summary>How quickly can I get calculations and drawings?<span aria-hidden="true">+</span></summary><p>We agree a realistic delivery date once the scope and required information are clear. Tell us about your builder’s programme or submission deadline at the enquiry stage so availability and dependencies can be checked.</p></details>
    </div>
  </article><aside class="side-note" aria-label="Your Norwich-based engineer">
    <h3>Tell David what you have in mind.</h3>
    <p>Start with your postcode and a short description. We will help identify the information and scope needed for a fixed-fee quote.</p>
    <a class="button" href="/quote/">Get a fixed-fee quote</a>
    <p class="contact-line"><a href="tel:${esc(site.phone)}">${esc(site.displayPhone)}</a></p>
    <p class="email-alternative"><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
    <hr>
    <p><strong>${esc(site.consultant)}</strong><br>${esc(site.credentials)}<br>${esc(site.company)}</p>
    <p>Based in Norwich. Visits and remote appointments confirmed for each project.</p>
    <a class="text-link" href="/about/">Meet your engineer</a>
  </aside></div></section>`;
}
