// Progressive enhancement only: core content and service links are static HTML.
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  for (const t of tabs) {
    const selected = t === tab;
    t.setAttribute('aria-selected', String(selected));
    t.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(t.getAttribute('aria-controls'));
    if (panel) panel.hidden = !selected;
  }
}
if (tabs.length) {
  selectTab(tabs[0]);
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => { event.preventDefault(); selectTab(tab); });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
    });
  });
}
for (const a of document.querySelectorAll('.mobile-menu a')) a.addEventListener('click', () => a.closest('details').removeAttribute('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { const menu = document.querySelector('.mobile-menu[open]'); if (menu) { menu.removeAttribute('open'); menu.querySelector('summary').focus(); } } });

const form = document.querySelector('[data-enquiry]');
if (form) {
  form.querySelector('[type=submit]').disabled = false;
  const params = new URLSearchParams(location.search);
  for (const name of ['project', 'service']) {
    const value = params.get(name);
    const field = form.elements.namedItem(name);
    if (field && [...field.options].some(o => o.value === value)) field.value = value;
  }
  const photo = form.elements.namedItem('photo');
  if (photo) {
    const error = document.getElementById('photo-error');
    const remove = document.getElementById('photo-remove');
    const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxPhotoBytes = 2_000_000;

    function validatePhoto() {
      const file = photo.files[0];
      let message = '';
      if (file) {
        const acceptedType = file.type ? acceptedTypes.includes(file.type) : /\.(jpe?g|png|webp)$/i.test(file.name);
        if (!acceptedType) message = 'Choose a JPG, PNG or WebP photo.';
        else if (file.size === 0) message = 'This file is empty. Choose a different photo.';
        else if (file.size > maxPhotoBytes) message = 'Choose a photo no larger than 2 MB.';
      }
      photo.setCustomValidity(message);
      if (message) photo.setAttribute('aria-invalid', 'true');
      else photo.removeAttribute('aria-invalid');
      error.textContent = message;
      remove.hidden = !file;
      return !message;
    }

    photo.addEventListener('change', validatePhoto);
    remove.addEventListener('click', () => {
      photo.value = '';
      validatePhoto();
      photo.focus();
    });
    form.addEventListener('submit', event => {
      if (validatePhoto()) return;
      event.preventDefault();
      photo.reportValidity();
    });
    validatePhoto();
  }
  // Netlify processes the declared HTML form natively. Other hosts prepare an
  // email draft: no simulated submission, server dependency or false success.
  if (document.body.dataset.formBackend !== 'netlify') {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (data.get('website')) return;
      const lines = ['Beam & Plan project enquiry', ''];
      for (const [name, label] of [['name','Name'],['email','Email'],['phone','Phone'],['postcode','Property postcode'],['project','Project'],['service','Help needed'],['timing','Timing'],['details','Project description']]) {
        const field = form.elements.namedItem(name);
        if (!field || !data.get(name)) continue;
        const value = field.tagName === 'SELECT' ? field.selectedOptions[0].textContent : data.get(name);
        lines.push(`${label}: ${value}`);
      }
      const email = document.getElementById('enquiry-email');
      email.href = `mailto:david@temporaryworksconsulting.com?subject=${encodeURIComponent('Beam & Plan project enquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
      email.hidden = false;
      const status = document.getElementById('form-status');
      status.textContent = 'Your enquiry is ready to email. Open your email app below, add any drawings or photos, and send it to us. Nothing has been sent yet.';
      status.focus();
    });
  }
}
