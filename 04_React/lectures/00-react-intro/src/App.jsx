import Greeting from './components/Greetings.jsx';
import UserContainer from './components/Users.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <h1>React Intro</h1>
            <main>
                <UserForm />
                <Greeting name='Karl' age={20} location='madrid' />
                <Greeting name='Hannah' />
                <Greeting />
                <Greeting />
                <Greeting />
                <UserContainer />
            </main>
            <Events />
        </div>
    );
}

export default App;

function Navbar() {
    const navElements = ['home', 'about', 'contact', 'faq'];

    return (
        <nav className='bg-red-200 p-10'>
            <ul style={{ display: 'flex', gap: '2rem' }}>
                {navElements.map((el) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </nav>
    );
}

function UserForm() {
    return (
        <form>
            <label htmlFor='firstName'>FirstName</label>
            <input type='text' name='firstName' id='firstName' />
        </form>
    );
}

function Events() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted');
    }

    return (
        <div>
            <button onClick={() => console.log('clicked')}>Click me</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor='text'>Input</label>
                <input
                    onChange={(event) => console.log(event.target.value)}
                    type='text'
                    name=''
                    id='text'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
