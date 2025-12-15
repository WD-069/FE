// import { useContext } from 'react';
import { Link } from 'react-router';

import { useBooking } from '../../contexts/BookingContext';
import { useTheme } from '../../contexts/ThemeContextProvider';
import type { Destination } from '../../types';

// # Component Props Typing
// * We reuse the 'Destination' type but exclude 'id' since it's not used in props here.
// * This ensures we pass the correct data structure to the component.
const DestinationCard = ({ title, image, description, slug }: Omit<Destination, 'id'>) => {
  // const theme = useContext(ThemeContext);
  const { theme } = useTheme();

  const { bookingState, addDestination, removeDestination } = useBooking();

  const isBooked = bookingState.destinations.includes(slug);

  function handleClick() {
    if (isBooked) {
      removeDestination(slug);
    } else {
      addDestination(slug);
    }
  }

  return (
    <div data-theme={theme} className='card bg-base-100 shadow-md'>
      <figure>
        <img src={image} alt='Tokyo' className='h-48 w-full object-cover' />
      </figure>
      <div className='card-body'>
        <Link to={`/destinations/${slug}`}>
          <h2 className='card-title hover:text-primary text-lg font-semibold'>{title}</h2>
        </Link>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button
            type='button'
            className={`btn ${isBooked ? 'btn-error' : 'btn-primary'}`}
            onClick={handleClick}
          >
            {isBooked ? 'Unbook' : 'Book Now'}
          </button>
        </div>
        {/* <Button stegosaurus='bg-amber-800'>WDG25 is cool</Button> */}
      </div>
    </div>
  );
};

export default DestinationCard;
