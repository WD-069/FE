import Student from './Students';
import Form from './Form';
const students = [
    {
        id: 1,
        firstName: 'Testy',
        lastName: 'McTest',
        age: 42,
        course: 'Web Development',
        city: 'Berlin',
        picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        gpa: 50,
        graduate: false,
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 22,
        course: 'Data Science',
        city: 'New York',
        picture: 'https://randomuser.me/api/portraits/women/2.jpg',
        gpa: 95,
        graduate: true,
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Smith',
        age: 28,
        course: 'Web Development',
        city: 'Los Angeles',
        picture: 'https://randomuser.me/api/portraits/men/3.jpg',
        gpa: 85,
        graduate: false,
    },
    {
        id: 4,
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 25,
        course: 'Data Science',
        city: 'San Francisco',
        picture: 'https://randomuser.me/api/portraits/women/4.jpg',
        gpa: 78,
        graduate: true,
    },
    {
        id: 5,
        firstName: 'Bob',
        lastName: 'Brown',
        age: 30,
        course: 'Web Development',
        city: 'Chicago',
        picture: 'https://randomuser.me/api/portraits/men/5.jpg',
        gpa: 67,
        graduate: false,
    },
    {
        id: 6,
        firstName: 'Charlie',
        lastName: 'Davis',
        age: 23,
        course: 'Data Science',
        city: 'Austin',
        picture: 'https://randomuser.me/api/portraits/men/6.jpg',
        gpa: 92,
        graduate: true,
    },
    {
        id: 7,
        firstName: 'Emily',
        lastName: 'Wilson',
        age: 27,
        course: 'Web Development',
        city: 'Seattle',
        picture: 'https://randomuser.me/api/portraits/women/7.jpg',
        gpa: 88,
        graduate: true,
    },
    {
        id: 8,
        firstName: 'David',
        lastName: 'Martinez',
        age: 29,
        course: 'Data Science',
        city: 'Miami',
        picture: 'https://randomuser.me/api/portraits/men/8.jpg',
        gpa: 73,
        graduate: false,
    },
    {
        id: 9,
        firstName: 'Fiona',
        lastName: 'Clark',
        age: 26,
        course: 'Web Development',
        city: 'Denver',
        picture: 'https://randomuser.me/api/portraits/women/9.jpg',
        gpa: 81,
        graduate: false,
    },
    {
        id: 10,
        firstName: 'George',
        lastName: 'Miller',
        age: 32,
        course: 'Data Science',
        city: 'Boston',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        gpa: 90,
        graduate: true,
    },
];
const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <a href='#hero'>Home</a>
                </li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#footer'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <h1 style={{ color: 'blue' }}>My Website</h1>
            <Navigation />
        </header>
    );
};

const Hero = () => {
    return (
        <section className='hero'>
            <h2>Welcome to Our Website!</h2>
            <p>This is the hero section with some introductory text.</p>
        </section>
    );
};

const Services = () => {
    return (
        <section className='services'>
            <h2>Our Services</h2>
            <p>We offer a variety of services to meet your needs.</p>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Form />
            <div className='students'>
                {students.map((s) => (
                    <Student key={s.id} student={s} />
                ))}
            </div>
            <Services />
            <Footer />
        </div>
    );
};

export default App;
