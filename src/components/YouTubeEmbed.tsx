import React from 'react';

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

// This is a special style object that forces the 16:9 aspect ratio
const containerStyle: React.CSSProperties = {
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 Aspect Ratio
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
};

const iframeStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => (
  // We removed the Tailwind classes and are now using direct inline styles
  <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl" style={containerStyle}>
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={iframeStyle}
    ></iframe>
  </div>
);