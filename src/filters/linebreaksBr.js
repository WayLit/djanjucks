import { escapeHtml, normalizeNewlines } from '../utilities'
import { runtime } from '..'

function linebreaksBr(value) {
  const autoescape =
    this.env.opts.autoescape && !(value instanceof runtime.SafeString)

  let output = normalizeNewlines(String(value))

  if (autoescape) {
    output = escapeHtml(output)
  }
  return runtime.markSafe(output.replace(/\n/g, '<br>'))
}

export default linebreaksBr
