import styles from "./registration.module.css";
const Registration = () => {
  return (
    <>
      <div className={styles.forms}>
        <h2>Registration form</h2>
        <form>
          UserName:
          <input type="text" placeholder="UserName" />
          <br />
          <br />
          Password:
          <input type="password" placeholder="Password" />
          <pre />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};
export { Registration };
