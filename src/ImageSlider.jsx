import { useState } from "react";
import { data } from "./Constants";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  // console.log(data.map((item) => item));
  return (
    <div className="flex justify-center">
      <div>
        <button className="font-bold p-10 m-10" onClick={handlePrev}>
          Previous
        </button>
        {data.map((item, i) => (
          <div className="flex flex-col justify-center">
            <img src={item.imageUrl} alt="slider" className={`w-[200px] h-[200px] ${(activeIndex === i ? "block" : "hidden")}`}/>
            <h1 className={`${(activeIndex === i ? "block" : "hidden")}`}>{item.title}</h1>
            <h1 className={`${(activeIndex === i ? "block" : "hidden")}`}>{item.description}</h1>
          </div>
        ))}

        {/* {data.map((url,i) => <img key={url} src={url} alt="slider" className={`w-[700px] h-[500px] ${(activeIndex === i ? "block" : "hidden")}`}/>)} */}

        <button className="font-bold p-10 m-10" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
