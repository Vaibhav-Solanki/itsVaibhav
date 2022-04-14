import Githubcalendar from "react-github-calendar";
// import "./github.css";
// import { ThemeContext } from "../../Context/theme";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  // const [{ themename }] = React.useContext(ThemeContext);
  const themename = "dark";
  return (
    <>
      <div id="github" className="container p-3 my-3" data-aos="fade-right">
        <h2 className="titleH2Tag">DAYS I CODE 🧑‍💻</h2>
        <Githubcalendar
          username="Vaibhav-Solanki"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
      </div>
    </>
  );
};
export default Github;
