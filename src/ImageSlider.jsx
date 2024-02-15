import { useState } from "react";

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXxKQDqIBdARzhNjly0V2ePKI1VW-aUS1Eg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjC8995lmnEvCsevvxEcWz0ZKdE2RlDnj1gQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhycx9nVCTSaLxxl2NJcmK0gyZAHpqw3kM1A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTft7FrLGWFOb4-1Yz5WPfoIuBofRcIjXyglw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIe_z5uELfX9jakvPlYa5oCZJ0odTedIW1Qg&usqp=CAU",
];

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