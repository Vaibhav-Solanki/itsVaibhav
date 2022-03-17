import "./intro.css";
function SpanCon({ st }) {
  function handleHov(e) {
    e.target.className = "blast animated rubberBand";
    setTimeout(() => {
      e.target.className = "blast";
    }, 1000);
  }
  return st.split("").map((el, key) => {
    if (el == " ") return " ";
    if (el == "V")
      return (
        <span
          className="blast"
          onMouseEnter={handleHov}
          key={key}
          style={{ color: "#e11414", fontSize: "1.12em" }}
        >
          {el}
        </span>
      );
    return (
      <span className="blast" onMouseEnter={handleHov} key={key}>
        {el}
      </span>
    );
  });
}
function Intro() {
  return (
    <div className="container intro">
      <div>
        <h1 id="inName">
          <SpanCon st="Hi,"></SpanCon>
          <br />
          <SpanCon st="I'm Vaibhav"></SpanCon>
          <br />
          <SpanCon st="Web Developer"></SpanCon>
        </h1>
        <span className="wave">👋</span>
      </div>
    </div>
  );
}

export default Intro;
