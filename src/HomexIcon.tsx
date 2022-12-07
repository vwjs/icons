import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const HomexIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' ref={ref} {...props}>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M19 19V9.799l-7-5.522-7 5.522V19h14zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786V20zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z' />
  </svg>
)

const ForwardRef = forwardRef(HomexIcon)
export default ForwardRef
