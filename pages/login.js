import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/Login.module.css';
import HeadTag from '../components/_Common/HeadTag';
import Footer from '../components/_Common/Footer';
import Fetcha from '../components/_Common/Fetcha';

function handleSubmit(e, formInput, router, setState) {
  e.preventDefault();

  Fetcha('/login', 'POST', formInput)
    .then(res => {
      if (res.redirected) {
        setState({ ...initialState }); // Clear State.
        router.push('/admin');
      } else {
        setState(prevState => ({ ...prevState, ['errMessage']: 'YOU SHALL NOT PASS' }));
      }
    });

    // On failure to login show error message then clear state after 10 sec.
    setTimeout(() => setState({ ...initialState }), 10000);
};

function handleChange(target, setValue) {
  const { name, value } = target;
  setValue(prevState => ({ ...prevState, [name]: value }));
};

const initialState = {
  usernameInput: '',
  passwordInput: '',
  errMessage: ''
};

export default function Login() {

  const [{ usernameInput, passwordInput, errMessage }, setState] = useState(initialState);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <HeadTag title="Ingram Auctioneer | Login" />
      <main className={styles.main}>
        <h2  className={styles.errMessage}>{ errMessage }</h2>
        <h1 className={styles.LoginHeading}>Login</h1>
        <form className={styles.LoginForm} onSubmit={(e) => handleSubmit(e, {username: usernameInput, password: passwordInput}, router, setState)}>
          <input type="text" name="usernameInput" value={usernameInput} onChange={(e) => handleChange(e.target, setState)}></input>
          <input type="password" name="passwordInput" value={passwordInput} onChange={(e) => handleChange(e.target, setState)}></input>
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer user={''} />
    </div>
  )
};