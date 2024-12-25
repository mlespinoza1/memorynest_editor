import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { FeatureToggle } from '../components/feature-toggle'
import { FeatureList } from '../components/feature-list'
import { MediaGallery } from '../components/media-gallery'
import { PreviewBar } from '../components/preview-bar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 lg:gap-6">
          <aside className="space-y-4 lg:space-y-6">
            <section className="rounded-lg border p-4">
              <FeatureToggle />
            </section>
            <section className="rounded-lg border p-4">
              <FeatureList />
            </section>
          </aside>
          <section className="rounded-lg border p-4">
            <MediaGallery />
          </section>
        </div>
        <section className="mt-4 lg:mt-6 rounded-lg border p-4">
          <PreviewBar />
        </section>
      </main>
      <Footer />
    </div>
  )
}
