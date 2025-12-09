import { useState } from "react";

function Form18() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (!email || !password) return alert('Please, fill in all the fields');
      const formData = {
        email,
        password,
      };
      console.log(formData);
      localStorage.setItem('user', JSON.stringify(formData));

      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        type='email'
        name='email'
        placeholder='email...'
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        type='password'
        name='password'
        placeholder='password...'
      />
      <button disabled={loading} type='submit'>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Form18;
