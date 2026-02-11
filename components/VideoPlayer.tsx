'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = 'Yrm8N1NLQ54'

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&cc_load_policy=1&autoplay=1`}
            title="HMO Hunter"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="group relative h-full w-full cursor-pointer"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Watch how HMO Hunter works"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white transition-transform group-hover:scale-110">
                <Play className="ml-1 h-7 w-7" fill="currentColor" />
              </div>
            </div>
          </button>
        )}
      </div>
      <p className="mt-3 text-center text-sm text-text-muted">
        ▶ 80 seconds — Watch how HMO Hunter works
      </p>
    </div>
  )
}
