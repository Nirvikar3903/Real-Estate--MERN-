import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

//   const handleMailto = () => {
//     if (landlord) {
//       const mailtoLink = `mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`;
//       // This action must be directly tied to a button click for it to work correctly
//       window.location.href = mailtoLink;
//     }
//   };
  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg '
          ></textarea>
          {/* <button
            onClick={handleMailto}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </button> */}
           <Link
          to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
          className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message          
          </Link>
          
        </div>
      )}
    </>
  );
}