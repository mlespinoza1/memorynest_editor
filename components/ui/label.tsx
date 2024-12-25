import React from 'react'

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  className?: string
  htmlFor?: string
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
)
Label.displayName = 'Label'
