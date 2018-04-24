import wapper from './wapper.tpl'

export default function convert (v) {
  if (v) {
    return wapper.replace('Hello', '123')
  }
  return v
}
