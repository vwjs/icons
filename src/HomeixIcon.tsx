import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const HomeixIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' ref={ref} {...props}>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-2-1V9.157l-6-5.454-6 5.454V19h12zm-6-2-3.359-3.359a2.25 2.25 0 1 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 1 1 3.182 3.182L12 17z' />
  </svg>
)

const ForwardRef = forwardRef(HomeixIcon)
export default ForwardRef
