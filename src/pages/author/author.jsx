import "./author.scss";
import AuthorPng from '../../images/author.png';

function Author(){

  return(
    <div className="d-flex justify-content-center">
      <div className="author-box">
        <img src={AuthorPng} alt="Author" className="author-img"  />
        <div className="author-name">Ferry L. H.</div>
        <div className="author-title">I am a Software Developer</div>
      </div>
    </div>
  )
}

export default Author;