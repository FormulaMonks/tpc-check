import Checker from './Checker'

export default function tpc(callback, options={}) {
  if (!callback) {
    throw new Error('Please provide callback')
  }

  return new Checker(callback, options).execute()
}
