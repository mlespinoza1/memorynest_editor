'use client'

import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Icon } from '../components/ui/icon'
import Image from "next/image"
import { useEditorStore } from '../lib/store/provider'

export function MediaGallery() {
  const mediaItems = useEditorStore((state) => state.mediaItems)
  const selectedMediaId = useEditorStore((state) => state.selectedMediaId)
  const setSelectedMediaId = useEditorStore((state) => state.setSelectedMediaId)

  return (
    <div className="space-y-4">
      <Button 
        className="w-full sm:w-auto"
      >
        <Icon name="feather" className="mr-2 h-4 w-4" />
        Upload Media
      </Button>
      {mediaItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mediaItems.map((item) => (
          <Card 
            key={item.id} 
            className={`overflow-hidden cursor-pointer transition-all rounded-xl ${
              selectedMediaId === item.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedMediaId(item.id)}
          >
            <div className="relative aspect-video" style={{ position: 'relative' }}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 flex items-center justify-between">
              <p className="text-sm font-medium text-card-foreground">{item.title}</p>
              <Icon name="leaf" className="w-4 h-4 text-primary" />
            </div>
          </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Icon name="nest" className="h-8 w-8 mb-4 opacity-50" />
          <h3 className="font-medium mb-1">No media uploaded yet</h3>
          <p className="text-sm opacity-70">Upload your first media file to get started</p>
        </div>
      )}
    </div>
  )
}
