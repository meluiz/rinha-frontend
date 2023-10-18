import type { HTMLStyledProps } from 'pandacss/jsx'
import React from 'react'

import { styled } from 'pandacss/jsx'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = HTMLStyledProps<As> & {
  as?: As
}

export const Text: React.FC<TextProps> = function (props) {
  const { as = 'p', ...rest } = props
  const Component = styled(as)

  return <Component {...rest} />
}
