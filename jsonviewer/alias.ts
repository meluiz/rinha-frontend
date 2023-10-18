import { resolve } from 'node:path'

function r(p: string) {
  return resolve(__dirname, p)
}

const alias: Record<string, string> = {
  '@src': r('./src/'),
  '@lib': r('./lib/'),
  pandacss: r('./pandacss/'),
}

export default alias
