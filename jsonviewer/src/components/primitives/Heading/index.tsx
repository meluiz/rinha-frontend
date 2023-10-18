import type { HTMLStyledProps } from 'pandacss/jsx'

import { styled } from 'pandacss/jsx'
import { heading } from 'pandacss/recipes'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = HTMLStyledProps<As> & {
  as?: As
}

export const Heading: React.FC<HeadingProps> = function (props) {
  const { as = 'h2', ...rest } = props
  const Component = styled(as, heading)

  return <Component {...rest} />
}
