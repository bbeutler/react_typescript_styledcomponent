export function classNames(...names: Array<string | undefined>) {
  return names.filter((s) => s).join(' ')
}
