import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          See TimeX Pro in Action
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
          <video
  className="absolute inset-0 w-full h-full"
  controls
  poster="/assets/video-thumbnail.jpg" // Se hai un'immagine di anteprima
>
  <source src="/assets/TimeX_Pro_SmartWatch.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </div>
          {/* Call-to-Action Button */}
          <div className="mt-8 text-center">
            <button
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
              onClick={() => {
                const videoElement = document.querySelector('video') as HTMLVideoElement;
                videoElement?.play();
              }}
            >
              Play Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
