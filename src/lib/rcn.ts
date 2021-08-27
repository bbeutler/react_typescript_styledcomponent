function getRandomString(): string {
  return Math.random()
    .toString(36)
    .substring(5)
}

function getRandomClassName(): string {
  return 'rcn-' + getRandomString()
}

const prefixClassName = (prefix: string) => (
  ...classNames: string[]
): string => {
  return classNames.map((className) => `${prefix}-${className}`).join(' ')
}

export function randomClassName() {
  const className = getRandomClassName()
  return prefixClassName(className)
}
