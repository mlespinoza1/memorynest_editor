'use client'

import { Switch } from '../components/ui/switch'
import { Label } from '../components/ui/label'
import { useEditorStore } from '../lib/store/provider'

export function FeatureToggle() {
  const enhancedMode = useEditorStore((state) => state.enhancedMode)
  const setEnhancedMode = useEditorStore((state) => state.setEnhancedMode)

  return (
    <div className="flex items-center space-x-3">
      <Switch
        id="enhanced-mode"
        checked={enhancedMode}
        onCheckedChange={setEnhancedMode}
      />
      <Label htmlFor="enhanced-mode" className="text-base font-medium">Enhanced Mode</Label>
    </div>
  )
}
