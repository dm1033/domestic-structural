import { useEffect, useRef, useState, type FormEvent } from 'react'
import services from '../data/services'
import { enquiryForm } from '../data/site'

type Submission =
  | { status: 'idle' | 'pending' | 'error' }
  | { status: 'success'; serviceName: string }

const OTHER = 'other'

export function EnquiryForm({
  serviceId,
  onServiceChange,
}: {
  serviceId: string
  onServiceChange: (id: string) => void
}) {
  const [submission, setSubmission] = useState<Submission>({ status: 'idle' })
  const submitting = useRef(false)
  const service = services.find((item) => item.id === serviceId)
  const serviceName = service?.name ?? 'Something else'

  useEffect(() => {
    if (!submitting.current) setSubmission({ status: 'idle' })
  }, [serviceId])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || submission.status === 'success') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setSubmission({ status: 'pending' })
    try {
      const response = await fetch(enquiryForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Enquiry was not accepted')
      setSubmission({ status: 'success', serviceName })
    } catch {
      setSubmission({ status: 'error' })
    } finally {
      submitting.current = false
    }
  }

  return (
    <section
      id="enquiry"
      tabIndex={-1}
      aria-labelledby="enquiry-heading"
      className="scroll-mt-20 border-t border-ink/15 pt-16"
    >
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
        <div>
          <p className="annot text-oxide">Enquiry / Fee proposal</p>
          <h2
            id="enquiry-heading"
            className="display mt-4 text-5xl sm:text-6xl"
          >
            Tell us about <em>your</em> project.
          </h2>
          <p id="enquiry-note" className="mt-6 max-w-md text-ink-soft">
            Describe what you want to change and where. We come back with a
            fixed fee, a timescale and anything else we need, such as photos or
            existing drawings. Sending this form does not commit you to
            anything.
          </p>
          <ul className="annot mt-10 space-y-3 text-ink-soft">
            <li className="flex gap-3">
              <span className="text-oxide">+</span> Postcode helps us check
              local planning rules
            </li>
            <li className="flex gap-3">
              <span className="text-oxide">+</span> Wall lengths and room sizes
              speed things up
            </li>
            <li className="flex gap-3">
              <span className="text-oxide">+</span> Mention your builder or
              architect if you have one
            </li>
          </ul>
        </div>
        <form
          name={enquiryForm.name}
          method="POST"
          action={enquiryForm.endpoint}
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={submit}
          aria-busy={submission.status === 'pending'}
          onChange={() => {
            if (!submitting.current && submission.status === 'error')
              setSubmission({ status: 'idle' })
          }}
          className="relative border border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-10"
        >
          <input type="hidden" name="form-name" value={enquiryForm.name} />
          <input
            type="hidden"
            name="subject"
            value={`Project enquiry: ${serviceName}`}
          />
          <input type="hidden" name="service-name" value={serviceName} />
          <p hidden>
            <label>
              Leave this empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset
            disabled={
              submission.status === 'pending' || submission.status === 'success'
            }
            className="grid gap-5 disabled:opacity-60 sm:grid-cols-2"
          >
            <legend className="sr-only">Your project enquiry</legend>
            <div className="sm:col-span-2">
              <label htmlFor="enquiry-service" className="form-label">
                What do you need?
              </label>
              <select
                id="enquiry-service"
                name="service-id"
                value={serviceId}
                onChange={(event) => onServiceChange(event.target.value)}
                required
                className="form-input"
              >
                {services.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.code} · {item.name}
                  </option>
                ))}
                <option value={OTHER}>Something else / not sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="enquiry-name" className="form-label">
                Name
              </label>
              <input
                id="enquiry-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="enquiry-email" className="form-label">
                Email
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="enquiry-phone" className="form-label">
                Phone <span className="normal-case">(optional)</span>
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={30}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="enquiry-postcode" className="form-label">
                Property postcode
              </label>
              <input
                id="enquiry-postcode"
                name="postcode"
                autoComplete="postal-code"
                required
                maxLength={10}
                className="form-input uppercase"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="enquiry-message" className="form-label">
                Describe the work
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={6}
                placeholder="e.g. Removing the wall between kitchen and dining room in a 1930s semi, about 3.6 m long, bedroom above."
                className="form-input placeholder:text-ink-soft/60"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                aria-describedby="enquiry-note"
                className="action"
              >
                {submission.status === 'pending'
                  ? 'Sending…'
                  : 'Request a fee proposal'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </fieldset>
          <p role="status" className="sr-only">
            {submission.status === 'pending' ? 'Sending your enquiry…' : ''}
          </p>
          {submission.status === 'error' && (
            <p
              role="alert"
              className="mt-6 border-l-4 border-oxide bg-oxide/10 p-4 text-sm"
            >
              We couldn’t confirm your enquiry was sent. Your details are still
              here, so please try again.
            </p>
          )}
          {submission.status === 'success' && (
            <div className="mt-6 border-l-4 border-ink bg-paper-deep p-4">
              <p role="status" className="font-semibold">
                Thanks, your enquiry about{' '}
                {submission.serviceName.toLowerCase()} has been received.
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                We’ll reply by email with a fee proposal or any questions.
              </p>
              <button
                type="button"
                className="mt-4 text-sm underline underline-offset-4"
                onClick={() => setSubmission({ status: 'idle' })}
              >
                Send another enquiry
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
