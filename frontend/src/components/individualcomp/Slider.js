import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({api_url}) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const scrollPrev = () => {
      if (emblaApi) emblaApi.scrollPrev(); // Check if emblaApi is initialized
    };

  const scrollNext = () => {

    if (emblaApi) emblaApi.scrollNext(); // Check if emblaApi is initialized
    };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(api_url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result); // Jab page pehli baar load (mount) hota hai to chalega then jab add/delete hoga to fir chalega because of reload function jiski wajah se dobara ye hi waala function chalega
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative max-w-screen-lg mx-auto">
      {/* Slider Container */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
        style={{ maxWidth: "90%", margin: "0 auto" }}
      >
        <div className="flex">
          {data.map((product, index) => (
            <div
              key={index}
              className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] p-2"
            >
              <div className="Card bg-[#1E293B] h-80 text-white p-3 rounded-lg shadow-md border-gray-200">
                <div className="border-solid border-2 border-white rounded-md h-36"></div>
                <h5 className="text-center pt-2">{product.brand}</h5>
                <div className="flex justify-between px-1 py-1">
                  <h5 className="mt-4">{product.model}</h5>
                  <h5 className="mt-4">{product.release_date}</h5>
                </div>
                <div className="flex justify-between gap-3 mt-6">
                  <button className="border-solid border-2 border-white p-2 rounded-md hover:bg-white hover:text-slate-600">
                    Buy Now
                  </button>
                  <button className="border-solid border-2 border-white p-2 rounded-md hover:bg-white hover:text-slate-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-200 text-black"
        >
          ◀
        </button>
      </div>

      <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slider;
