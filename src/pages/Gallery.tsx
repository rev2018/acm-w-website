import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '../components/Reveal'
import { galleryEvents, type GalleryEvent } from '../data/site'

type SelectedImage = {
  eventId: string
  index: number
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null)

  const activeEvent = selectedImage
    ? galleryEvents.find(event => event.id === selectedImage.eventId)
    : undefined

  const openImage = (eventId: string, index: number) => {
    setSelectedImage({ eventId, index })
  }

  useEffect(() => {
    if (!selectedImage || !activeEvent) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
      if (event.key === 'ArrowRight') {
        setSelectedImage(({ eventId, index }) => ({
          eventId,
          index: (index + 1) % activeEvent.images.length,
        }))
      }
      if (event.key === 'ArrowLeft') {
        setSelectedImage(({ eventId, index }) => ({
          eventId,
          index: (index - 1 + activeEvent.images.length) % activeEvent.images.length,
        }))
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedImage, activeEvent])

  return (
    <div className="page container gallery-page">
      <header className="page-hero gallery-hero">
        <Reveal>
          <p className="eyebrow">Gallery / moments worth keeping</p>
          <h1>Things we<br /><em>actually did</em></h1>
          <p className="lede">A visual archive of the people, rooms, stages and slightly chaotic moments that make ACM-W feel real.</p>
        </Reveal>
      </header>

      <section className="gallery-events" aria-label="Gallery events">
        {galleryEvents.map((event, eventIndex) => (
          <motion.section
            key={event.id}
            className="gallery-event"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: eventIndex * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gallery-event-head">
              <div>
                <p className="eyebrow">{String(eventIndex + 1).padStart(2, '0')} / {event.category} / {event.date}</p>
                <h2>{event.title}</h2>
              </div>
              <p>{event.description}</p>
            </div>

            <div className={`gallery-masonry gallery-masonry-${event.images.length}`} style={event.ratio ? { ['--frame-ratio' as string]: event.ratio } : undefined}>
              {event.images.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  className="gallery-image"
                  onClick={() => openImage(event.id, index)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22 }}
                  aria-label={`Open ${event.title} photo ${index + 1}`}
                >
                  <span className="gallery-image-frame">
                    <img className="gallery-image-bg" src={image.src} alt="" aria-hidden="true" loading="lazy" />
                    <span className="gallery-image-fit">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading={eventIndex === 0 && index === 0 ? 'eager' : 'lazy'}
                      />
                      <span className="gallery-image-meta">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                      </span>
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="gallery-footnote">
              <span>Full frame shown · click only for a larger view</span>
              <span className="mono">{String(event.images.length).padStart(2, '0')} frames</span>
            </div>
          </motion.section>
        ))}
      </section>

      <AnimatePresence>
        {selectedImage !== null && activeEvent && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button type="button" className="gallery-lightbox-close" aria-label="Close image viewer" onClick={() => setSelectedImage(null)}>Close</button>
            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-prev"
              aria-label="Previous image"
              onClick={event => {
                event.stopPropagation()
                setSelectedImage(({ eventId, index }) => ({ eventId, index: (index - 1 + activeEvent.images.length) % activeEvent.images.length }))
              }}
            >Previous</button>
            <motion.figure
              className="gallery-lightbox-figure"
              initial={{ scale: 0.97, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 12 }}
              onClick={event => event.stopPropagation()}
            >
              <img src={activeEvent.images[selectedImage.index].src} alt={activeEvent.images[selectedImage.index].alt} />
              <figcaption>
                <span>{activeEvent.title}</span>
                <span>{String(selectedImage.index + 1).padStart(2, '0')} / {String(activeEvent.images.length).padStart(2, '0')}</span>
              </figcaption>
            </motion.figure>
            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-next"
              aria-label="Next image"
              onClick={event => {
                event.stopPropagation()
                setSelectedImage(({ eventId, index }) => ({ eventId, index: (index + 1) % activeEvent.images.length }))
              }}
            >Next</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export type { GalleryEvent }
