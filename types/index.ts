export interface MediaItem {
  id: string
  url: string
  thumbnail: string
  title: string
  type: 'image' | 'video'
}

export interface Feature {
  id: string
  title: string
  description: string
  enabled: boolean
}

export interface ThemeConfig {
  background: string
  foreground: string
  card: string
  'card-foreground': string
  primary: string
  'primary-foreground': string
  accent: string
  'accent-foreground': string
  muted: string
  'muted-foreground': string
  border: string
}

