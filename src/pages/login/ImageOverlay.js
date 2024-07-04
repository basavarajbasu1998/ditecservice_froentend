// src/components/ImageOverlay.js

import React, { useRef, useEffect } from "react";

const ImageOverlay = ({ imageUrl, overlayText }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      // Set canvas size to match the image size
      canvas.width = 100;
      canvas.height = 45;

      // Draw the image on the canvas
      context.drawImage(image, 0, 0);

      // Add text overlay
      context.font = "20px Arial";
      context.fillStyle = "black";
      context.fillText(overlayText, 15, 30);
    };
  }, [imageUrl, overlayText]);

  return <canvas ref={canvasRef} />;
};

export default ImageOverlay;
