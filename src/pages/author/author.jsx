import "./author.scss";
import AuthorPng from '../../images/author.png';

function Author() {

  return (
    <div className="d-flex justify-content-center">
      <div className="author-box">
        <img src={AuthorPng} alt="Author" className="author-img" />
        <div className="author-name">Ferry L. H.</div>
        <div className="author-title">I am a Software Developer</div>
        <div className="author-email">ferrylinton@gmail.com</div>

        <div className="author-description">
          <p>
            I have participated in several projects that create applications based on the Java programming language.
            Here are some of the frameworks I have used:
          </p>
          <ul>
            <li>
              <strong>Java</strong><br/>
              <span>
                Springboot, Spring MVC, Spring Data JPA, Hibernate, Spring Security, Spring OAuth2, MITREid Connect, Apache Camel, Apache CXF)
              </span>
            </li>
            <li>
              <strong>Javascript</strong><br/>
              <span>Angular, Jquery</span>
            </li>
            <li><strong>Bootstrap</strong></li>
            <li>
              <strong>Database</strong><br/>
              <span>Postgresql, Oracle, Mysql</span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Author;