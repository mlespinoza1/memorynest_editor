import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow ${className}`}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`p-4 ${className}`}
      {...props}
    />
  )
)
CardContent.displayName = 'CardContent'
