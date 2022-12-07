import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const DashboardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} ref={ref} {...props}>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 1c1.018 0 1.985.217 2.858.608L13.295 7.17a5 5 0 0 0-4.831 8.366L7.05 16.95l-.156-.161A7 7 0 0 1 12 5zm6.392 4.143c.39.872.608 1.84.608 2.857a6.982 6.982 0 0 1-2.05 4.95l-1.414-1.414a4.992 4.992 0 0 0 1.294-4.831l1.562-1.562zm-2.15-2.8 1.415 1.414-3.724 3.726A2.002 2.002 0 0 1 12 14a2 2 0 1 1 .517-3.933l3.726-3.724z' />
  </svg>
)

const ForwardRef = forwardRef(DashboardIcon)
export default ForwardRef