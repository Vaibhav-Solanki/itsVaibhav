import Githubcalendar from "react-github-calendar";

export const Github = () => {
  return (
    <>
      <div id="github" className="container p-3 my-3" data-aos="fade-right">
        <h2 className="titleH2Tag">DAYS I CODE 🧑‍💻</h2>
        <Githubcalendar
          username="Vaibhav-Solanki"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </>
  );
};
export default Github;
