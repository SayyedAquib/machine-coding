import { useEffect, useState } from "react";

// Array containing image URLs
const data = [
  "https://wallpapers.com/images/hd/random-background-1920-x-1200-33i6p2yl62j0oet3.jpg",
  "https://wallpapers.com/images/featured/random-background-vtg9hi1tizrjz0u0.jpg",
  "https://wallpaperbat.com/img/812465-random-picture-wallpaper.png",
  "https://wallpapers.com/images/hd/random-background-1680-x-1080-p8npj4s3zlsvsbrf.jpg",
  "https://i.redd.it/rfftqdg5flv71.jpg",
];

const Carousel = () => {
  // State variable to keep track of the index of the active image
  const [activeImageIndex, setActiveImage] = useState(0);

  // Function to handle clicking on the "Previous" button
  const handlePreviousClick = () => {
    // If the active image is the first one, set the active index to the last image in the array
    if (activeImageIndex === 0) setActiveImage(data.length - 1);
    // Otherwise, decrement the active index
    else setActiveImage(activeImageIndex - 1);
  };

  // Function to handle clicking on the "Next" button
  const handleNextClick = () => {
    // Increment the active index, and use modulus operator to loop back to the beginning if it exceeds the array length
    setActiveImage((activeImageIndex + 1) % data.length);
  };

  // Effect to automatically switch to the next image every 2 seconds
  useEffect(() => {
    // Set a timer to call handleNextClick every 2000 milliseconds (2 seconds)
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2000);

    // Cleanup function to clear the timer when the component unmounts or the activeImageIndex changes
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-5 ">Image Carousel</h1>
        <div className="flex items-center justify-center w-full">
          {/* Previous button */}
          <button
            className="bg-blue-500 text-white font-bold px-4 py-2 w-28 rounded-md m-10"
            onClick={handlePreviousClick}
          >
            Previous
          </button>
          {/* Images */}
          <>
            {data.map((url, i) => (
              <img
                key={url}
                className={
                  // Determine whether to display the image based on its index
                  "w-[700px] h-[500px] object-cover rounded-3xl " +
                  (activeImageIndex === i ? "block" : "hidden")
                }
                src={url}
                alt="Wallpaper"
              />
            ))}
          </>
          {/* Next button */}
          <button
            className="bg-blue-500 text-white px-4 font-bold py-2 w-28 rounded-md m-10"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
