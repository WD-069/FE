import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

async function loginAction(prevState, formData) {
  try {
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    localStorage.setItem('user', JSON.stringify(user));

    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
}

function Form19() {
  const { pending } = useFormStatus();
  const [state, action] = useActionState(loginAction, null);

  return (
    <form action={action}>
      <input type='email' name='email' placeholder='email...' />
      <input type='password' name='password' placeholder='password...' />
      <button disabled={pending} type='submit'>
        {pending ? 'Logging in...' : 'Login'}
      </button>
      {state?.error && <p>{state.error}</p>}
      {state?.success && <p>Welcome back!</p>}
    </form>
  );
}

export default Form19;
