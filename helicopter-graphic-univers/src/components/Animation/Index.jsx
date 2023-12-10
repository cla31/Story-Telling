import React, { useEffect, useState } from 'react';

const Animation = ({ numberOfImages,dossierImages, imageFileName, imageSize, id }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("slide");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        slides[newIndex - 1].style.display = "block";
        return newIndex;
      });
    };

    const intervalId = setInterval(showSlides, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  useEffect(() => {
    const slideshowContainer = document.getElementById(id);

    for (let i = 1; i <= numberOfImages; i++) {
      const slideDiv = document.createElement("div");
      slideDiv.className = "slide";

      const img = document.createElement("img");
      img.style.width =imageSize; 
      img.style.height = "auto"; 
      img.src = `${dossierImages}${imageFileName}${i}.png`;
      img.alt = `Image ${i}`;

 

      slideDiv.appendChild(img);
      slideshowContainer.appendChild(slideDiv);
    }
  }, [numberOfImages, imageFileName, imageSize, dossierImages,id]);

  return (
    <div id={id}>
    </div>
  );
};

export default Animation;
