import styles from "./About.module.css";
const About = function () {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <h1>About Us</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <img
            src="https://images1.livehindustan.com/uploadimage/library/2022/04/06/16_9/16_9_1/ram_janm_katha_in_hindi_1649250136.jpg"
            alt="John"
          />
          <h3 style={{ marginLeft: "50px" }}>Bhagwan Ram</h3>
        </div>

        <div style={{ marginTop: "30px" }}>
          Rama is said to have been born to Kaushalya and Dasharatha in Ayodhya,
          the capital of the Kingdom of Kosala. His siblings included Lakshmana,
          Bharata, and Shatrughna. He married Sita. Though born in a royal
          family, Rama's life is described in the Hindu texts as one challenged
          by unexpected changes such as an exile into impoverished and difficult
          circumstances, ethical questions and moral dilemmas.[6] Of all his
          travails, the most notable is the kidnapping of Sita by demon-king
          Ravana, followed by the determined and epic efforts of Rama and
          Lakshmana to gain her freedom and destroy the evil Ravana against
          great odds. The entire life story of Rama, Sita and their companions
          allegorically discusses duties, rights and social responsibilities of
          an individual. It illustrates dharma and dharmic living through model
          characters
        </div>
      </div>
    </>
  );
};
export { About };
