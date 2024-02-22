import React from "react";
import Navbar from "../components/Navbar";
import lettuce from "../assets/pngtreeΓÇölettuce.png";
import plate from "../assets/Pngtree-delicious-food.png";
import dots from "../assets/dots-bg.svg";
import foo from "../assets/food.svg";
import indore from "../assets/1place-holder.svg";
function A() {
  return (
    <main>
      <div className=" h-screen w-screen bg-[#3d7475]">
        <div className=" md:w-4/6 bg-white h-screen relative">
          <Navbar />

          <div className=" relative flex  px-4 md:px-8 lg:px-12 xl:px-24 md:py-8 lg:py-24 xl:pt-48 md:h-full ">
            <div className="  flex-1 space-y-12 md:space-y-0 justify-between flex flex-col z-20">
              <div >
                <img className=" h-12 sm:h-16 md:h-24 xl:h-32 z-30" src={foo} />

                <div className=" space-y-3">
                  <p className=" font-bold text-4xl md:text-5xl">
                    Discover food restraunts
                    <br /> & delicious Food
                  </p>
                  <div className=" w-full border rounded-md flex max-w-xl shadow-md">
                    <input className=" w-full" />
                    <button className="bg-[#3d7475] text-2xl text-white px-12 rounded-md rounded-tl-full py-3">
                      Go
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#3d7475] flex p-4  md:p-6 text-3xl items-center text-white space-x-2 rounded-r-full max-w-max pr-6">
                <img src={indore} />
                <h1>Indore</h1>
              </div>
              <img className=" md:hidden  duration-1000 ease-out" src={plate} />
            </div>
          </div>

          <img src={dots} className="md: absolute right-0 top-24 h-5/6" />
          <div className=" hidden lg:block md:absolute max-h-max max-w-max right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="">
            <img className=" h-[800px] w-[800px] duration-1000 ease-out" src={plate} />
            </div>
          </div>
        </div>
        
      </div>
      
    </main>
  );
}

export default A;
