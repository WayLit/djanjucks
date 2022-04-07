import { runtime } from '..'
import { sprintf } from 'sprintf-js'

const stringFormat = (value, arg) => {
  const output = sprintf(`%${arg}`, value)
  return runtime.copySafeness(value, output)
}

export default stringFormat
