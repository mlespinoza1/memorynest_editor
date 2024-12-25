'use client'

import { Card, CardContent } from './ui/card'
import { useEditorStore } from '../lib/store/provider'

export function FeatureList() {
  const features = useEditorStore((state) => state.features)
  const toggleFeature = useEditorStore((state) => state.toggleFeature)

  return (
    <div className="space-y-3">
      {features.map((feature) => (
        <Card 
          key={feature.id} 
          className={`rounded-xl ${feature.enabled ? "" : "opacity-50"}`}
        >
          <CardContent 
            className="p-3 cursor-pointer" 
            onClick={() => toggleFeature(feature)}
          >
            <h3 className="font-semibold text-sm">{feature.title}</h3>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
