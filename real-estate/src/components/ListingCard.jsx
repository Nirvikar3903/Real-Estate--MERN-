import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ListingCard({ listing }) {
  const arrowStyle = {
    fontSize: '2px',// Adjust the size here
    //color: '#gray', // Change arrow color here
  };

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className='relative'
        >
          {listing.imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`listing cover ${index}`}
                className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </SwiperSlide>
          ))}

          {/* Custom Swiper Navigation Buttons */}
          <div
            className='swiper-button-prev'
            style={{
              ...arrowStyle,
              left: '10px', // Adjust arrow position
              position: 'absolute',
              zIndex: 10,
            }}
          ></div>
          <div
            className='swiper-button-next'
            style={{
              ...arrowStyle,
              right: '10px', // Adjust arrow position
              position: 'absolute',
              zIndex: 10,
            }}
          ></div>
        </Swiper>

        <div className="p-3 flex flex-col gap-2 w-full">
          <p className='text-slate-700 text-lg font-semibold truncate'>{listing.name}</p>

          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-500 truncate w-full'>{listing.address}</p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>

          <p className='text-slate-500 font-semibold mt-2'>
            ₹{listing.offer ? listing.discountedPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' /month'}
          </p>
          <div className="text-slate-700 flex items-center gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
