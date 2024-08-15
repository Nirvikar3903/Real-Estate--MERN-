import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {Swiper , SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css/bundle'

export default function Listing() {
    SwiperCore.use((Navigation));
    const params= useParams();
    const [listing , setListing] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error ,setError] = useState(false);

    useEffect(()=>{
        const fetchListing = async()=>{
          try {
            setLoading(true);
            const res = await fetch (`/api/listing/get/${params.listingId}`);
            //its a get req so nothing more to write
            const data = await res.json();
            
            if(data.success === false){
              setError(true);
              setLoading(false);
              return ;
              //console.log(data);
            } 
            setListing(data);// if successful   
            setError(false)
            setLoading(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }

        };
        fetchListing();
    },[params.listingId]);// useEffect should have dependency to stop process
    console.log(loading);


  return (
  <main>
      {loading && <p className="text-center my-7 text-2xl" >Loading...</p>}
      {error && (<p className="text-center my-7 text-2xl" > Something went wrong!</p>)}

      {listing && !loading && !error && (
      <div>
          <Swiper navigation> {/*slider and right left click is due to slider and navigation */}
            {listing.imageUrls.map(
              (url) =>(
              <SwiperSlide 
              key={url}>
                <div className="h-[550px] " style={{background:`url(${url}) center no-repeat`}}
                ></div>
              </SwiperSlide>
            ))}
            </Swiper>
      </div>
      )}
  </main>
);
  
};
// install swiper in cd-real estate if u install it in backend it wil give error