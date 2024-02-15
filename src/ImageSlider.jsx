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
 
    return (
        <div >
          <div className="flex justify-center mt-24">
            <button className="font-bold p-10 m-10" onClick={handlePrev}>Previous</button>
            {data.map((url,i) => <img key={url} src={url} alt="slider" className={`w-[700px] h-[500px] ${(activeIndex === i ? "block" : "hidden")}`}/>)}
          <button className="font-bold p-10 m-10" onClick={handleNext}>Next</button>
          </div>
   
        </div>
    )
 
}

export default ImageSlider;