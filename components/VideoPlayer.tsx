export function VideoPlayer() {
  return (
    <div className="mx-auto max-w-[640px]">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <video
          src="/hero-video.mp4"
          controls
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-3 text-center text-sm text-text-muted">
        ▶ Why HMO sourcing is broken, and how we fix it
      </p>
    </div>
  )
}
