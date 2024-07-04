import React, { useState, useRef } from "react";
import { Skeleton } from "@mui/material";

const Skeletons = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    setLoading(false);
    if (imgRef.current) {
      setDimensions({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {loading && (
        <Skeleton
          variant="rectangular"
          width={dimensions.width}
          height={dimensions.height}
          animation="wave" // Specify the animation as "wave"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          display: loading ? "none" : "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Skeletons;
