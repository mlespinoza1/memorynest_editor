import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { MediaItem, Feature } from '../../types'

export interface EditorState {
  enhancedMode: boolean
  mediaItems: MediaItem[]
  features: Feature[]
  selectedMediaId: string | null
  setEnhancedMode: (mode: boolean) => void
  addMediaItem: (item: MediaItem) => void
  removeMediaItem: (id: string) => void
  toggleFeature: (feature: Feature) => void
  setSelectedMediaId: (id: string | null) => void
}

export const createEditorStore = create<EditorState>()(
  persist(
    (set) => ({
      enhancedMode: false,
      mediaItems: [
        {
          id: "demo1",
          url: "https://picsum.photos/800/600",
          thumbnail: "https://picsum.photos/800/600",
          title: "Demo Media 1",
          type: "image"
        },
        {
          id: "demo2",
          url: "https://picsum.photos/801/600",
          thumbnail: "https://picsum.photos/801/600",
          title: "Demo Media 2",
          type: "image"
        },
        {
          id: "demo3",
          url: "https://picsum.photos/802/600",
          thumbnail: "https://picsum.photos/802/600",
          title: "Demo Media 3",
          type: "image"
        }
      ],
      features: [],
      selectedMediaId: null,
      setEnhancedMode: (mode) => set(() => ({ enhancedMode: mode })),
      addMediaItem: (item) => set((state) => ({ mediaItems: [...state.mediaItems, item] })),
      removeMediaItem: (id) => set((state) => ({ mediaItems: state.mediaItems.filter(item => item.id !== id) })),
      toggleFeature: (feature) => set((state) => ({ features: state.features.includes(feature) ? state.features.filter(f => f !== feature) : [...state.features, feature] })),
      setSelectedMediaId: (id) => set(() => ({ selectedMediaId: id })),
    }),
    {
      name: 'editor-storage',
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') {
          return localStorage
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {}
        }
      }),
    }
  )
)
