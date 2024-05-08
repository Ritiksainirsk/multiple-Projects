import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(3);
  const [loding, setLoading] = useState(0);
  const [Error, setError] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);

      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (url !== null) fetchData(url);
  }, [url]);

  if (loding) {
    return <div>Loading please wait</div>;
  }

  if (Error) {
    return <div>Error accured </div>;
  }

  const HandlePrevies = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const HandleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <FaRegArrowAltCircleLeft
        className="arrow arrow-left"
        onClick={() => {
          HandlePrevies();
        }}
      />
      {images && images.length
        ? images.map((imageUrls, index) => {
            return (
              <img
                src={imageUrls.download_url}
                alt={imageUrls.download_url}
                key={index}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "hide-current-image"
                }
              />
            );
          })
        : null}

      <FaRegArrowAltCircleRight
        className="arrow arrow-right"
        onClick={() => {
          HandleNext();
        }}
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  onClick={() => setCurrentSlide(index)}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicater"
                  }
                  key={index}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
