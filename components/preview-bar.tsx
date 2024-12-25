'use client'

import { Button } from '../components/ui/button'
import { Icon } from '../components/ui/icon'

export function PreviewBar() {
  return (
    <div className="bg-card rounded-xl border p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-2/3 bg-muted rounded-lg h-16 flex items-center justify-center">
        <Icon name="bird" className="w-6 h-6 text-primary" />
      </div>
      <Button 
        className="w-full md:w-1/3 h-16 rounded-full"
      >
        <Icon name="feather" className="mr-2 h-4 w-4" />
        Complete Edit
      </Button>
    </div>
  )
}
