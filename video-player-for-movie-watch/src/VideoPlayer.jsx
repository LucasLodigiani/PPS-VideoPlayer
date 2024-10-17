import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ fileName }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        //Jwt obtenido del login
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJyb2xlIjoiQWRtaW4iLCJzdWJzY3JpcHRpb25TdGF0ZSI6IkFjdGl2ZSIsIm5iZiI6MTcyOTE5NTI3MCwiZXhwIjoxNzI5MTk4ODcwLCJpYXQiOjE3MjkxOTUyNzB9.6jVOn0KQr-erG3XNMkvvZ3nUCtTEbM4mKhhTGVvydTc";

        const response = await fetch(`https://localhost:7289/api/media/protected/${fileName}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch the video');
        }

        const videoBlob = await response.blob();
        const videoUrl = URL.createObjectURL(videoBlob);

        if (videoRef.current) {
          videoRef.current.src = videoUrl;
        }
      } catch (error) {
        console.error('Error loading video:', error);
      }
    };

    loadVideo();
  }, [fileName]);

  return (
    <div>
      <video ref={videoRef} controls width="600">
        Ha ocurrido un error al reproducir el video :P
      </video>
    </div>
  );
};

export default VideoPlayer;