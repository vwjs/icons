import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const BuildingiIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' ref={ref} {...props}>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M10 10.111V1l11 6v14H3V7l7 3.111zm2-5.742v8.82l-7-3.111V19h14V8.187L12 4.37z' />
  </svg>
)

const ForwardRef = forwardRef(BuildingiIcon)
export default ForwardRef
