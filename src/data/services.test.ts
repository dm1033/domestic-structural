import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import services, { findService } from './services'
import { enquiryForm } from './site'

describe('services', () => {
  it('has unique ids and codes', () => {
    expect(new Set(services.map((s) => s.id)).size).toBe(services.length)
    expect(new Set(services.map((s) => s.code)).size).toBe(services.length)
  })

  it('finds services by exact id only', () => {
    expect(findService('beam-design')?.name).toBe('Steel beam design')
    expect(findService('Beam-Design')).toBeUndefined()
    expect(findService('')).toBeUndefined()
  })
})

describe('static form registration', () => {
  const html = readFileSync('public/__forms.html', 'utf8')
  it.each([
    'form-name',
    'subject',
    'service-id',
    'service-name',
    'name',
    'email',
    'phone',
    'postcode',
    'message',
    'bot-field',
  ])('registers the %s field', (field) => {
    expect(html).toContain(`name="${field}"`)
  })
  it('uses the configured form name', () => {
    expect(html).toContain(`name="${enquiryForm.name}"`)
  })
})
