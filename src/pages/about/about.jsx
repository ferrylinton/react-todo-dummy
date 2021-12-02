import "./about.scss";

function About() {
  return (
    <div className="d-flex justify-content-center">
      <div className="about-box">
        <div className="about-title">todo <span>app</span></div>
        <div className="about-description">A simple application build with ReactJS <br/> with no access to backend</div>
        <div className="libraries">
          <h2>Libraries</h2>
          <h5>React</h5>
          <h5>React Bootstrap & Bootsrap</h5>
          <h5>React Hook Form & Yup</h5>
          <h5>React Icons</h5>
          <h5>Moment</h5>
        </div>
      </div>
    </div>
  )
}

export default About;