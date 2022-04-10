import RubFont from "../custF/rubFont";
export const Github = () => {
  return (
    <div
      className="container"
      id="github"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h2 className="titleH2Tag">DAYS I CODE 🧑‍💻</h2>
      <a href="https://github.com/Vaibhav-Solanki/">
        <img
          alt="Vaibhav Solanki's Activity Graph"
          src="https://activity-graph.herokuapp.com/graph?username=Vaibhav-Solanki&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true"
          style={{ maxWidth: "100%", filter: "hue-rotate(272deg) invert(1)" }}
        />
      </a>
    </div>
  );
};
export default Github;
