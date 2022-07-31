import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";

const Slider = () => {

  const [slides] = useState([
    {
      src: "https://image.freepik.com/free-photo/happy-woman-shopping-with-shopping-bags_1150-20495.jpg",
      content: {
        h2: "Amazing Deals this Summer",
        p: "Upto 40% off",
      },
      background: " bg-[#c6e400]",
    },
    {
      src: "https://st3.depositphotos.com/7713882/17906/i/600/depositphotos_179068502-stock-photo-happy-woman-showing-good-big.jpg",
      active: true,
      content: {
        h2: "Fashion is about you",
        p: "Upto 40% off",
      },
      background: " bg-[#ffd028]",
    },
  ]);

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide=()=>{
    if(activeSlide === slides.length -1){
      setActiveSlide(0)
    }else{
      setActiveSlide(activeSlide+1)
    }
  }
  const prevSlide=()=>{
    if(activeSlide === 0){
      setActiveSlide(slides.length-1)
    }else{
      setActiveSlide(activeSlide-1)
    }
  }
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      <div className="leftArrow rounded-full flex justify-center shadow-sm hover:cursor-pointer">
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prevSlide}/>
      </div>
      
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-[100%] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative h-[500px]` + slide.background}>
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 center items-center h-[100%]">
                  <img
                    src={slide.src}
                    alt="sliderImg"
                    className="h-[100%] object-cover"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-6xl">{slide.content.h2}</h2>
                  <p className="text-4xl ">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className="rightArrow rounded-full flex justify-center shadow-sm hover:cursor-pointer">
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide}/>
      </div>
    </div>
  );
};

export default Slider;
