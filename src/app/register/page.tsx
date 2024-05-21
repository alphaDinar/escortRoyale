import TopNav from "../components/TopNav/TopNav";
import styles from './register.module.css';

const Register = () => {
  return (
    <main>
      <TopNav />

      <section className={styles.registerBox} id="hor">
        <section className={styles.left}>
          <strong>The Registration Process is as follows : </strong>
          <span>1. Fill out the form</span>
          <span>2. You will then be contacted by an agent for the information to create your profile</span>
          <small> NB: A valid phone line would be required for an agent to reach you.</small>
          <span>3. Profile created and agent will help you with any further difficulties you may have on the platform</span>
        </section>
        <section className={styles.right}>
          <h3>EscortRoyale</h3>
          <form>
            <p>
              <span>Full Name</span>
              <input type="text" />
            </p>
            <p>
              <span>WhatsApp or Telegram Contact or Call Line</span>
              <input type="text" />
            </p>
            <button>Register</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Register;