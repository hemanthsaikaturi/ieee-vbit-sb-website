import React from 'react';

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

const containerStyle: React.CSSProperties = {
  position: 'relative',
  paddingBottom: '56.25%',
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