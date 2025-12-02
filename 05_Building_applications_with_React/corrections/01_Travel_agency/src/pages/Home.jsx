import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components';


function Home() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/destinations');
	};
	return (
		<div>
			<section>
				<h1>Find your next Adventure</h1>
				<form onSubmit={handleSubmit}>
					<input name='origin' type='text' placeholder='Origin...' />
					<input name='destination' type='text' placeholder='Destination...' />
					<input name='departure' type='date' />
					<input name='return' type='date' />
					<button type='submit'>Search</button>
				</form>
			</section>
			<section>
				<h2>Popular Destinations</h2>
				<div>
					<div>
						<h3>Curated Student Trips</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
							corrupti culpa, iure quibusdam asperiores ab tenetur iusto
							excepturi aperiam fuga voluptatibus qui officiis consequuntur id
							veritatis reprehenderit officia! Incidunt, saepe.
						</p>
					</div>
					<div>
                        <h3>Flexibles Dates</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusamus?‚</p>
                    </div>
				</div>
                <section>
                    <h2>Popular Destinations</h2>
                    <div>
                        {destinations.slice(0, 3).map((destination) => <DestinationCard key={destination.title} destination={destination} />)}
                    </div>
                </section>
			</section>
		</div>
	);
}

export default Home;
