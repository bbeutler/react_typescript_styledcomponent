import isEqual from 'react-fast-compare'
import React from 'react'

export function memo<P>(Component: React.FunctionComponent<P>) {
  return React.memo(Component, isEqual)
}
