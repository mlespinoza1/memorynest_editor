import { type LucideIcon } from 'lucide-react'
import React from 'react'

export type IconName = 'nest' | 'leaf' | 'feather' | 'bird'

const iconPaths: Record<IconName, string> = {
  nest: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z",
  leaf: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.52.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z",
  feather: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z M16 8L2 22 M17.5 15H9",
  bird: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M7.5 4.21l4.5 2.6l4.5-2.6 M7.5 19.79V14.6L3 12 M21 12l-4.5 2.6v5.19 M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12"
}

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'name'> & {
  name: IconName | LucideIcon
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    if (typeof name === 'function') {
      const LucideIconComponent = name
      return <LucideIconComponent ref={ref} className={className} {...props} />
    }

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...props}
      >
        <path fillRule="evenodd" d={iconPaths[name]} />
      </svg>
    )
  }
)

Icon.displayName = 'Icon'
