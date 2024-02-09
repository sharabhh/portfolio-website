import "./NewLandingPage.css";
import resume from '../assets/docs/SHARABH_RESUME.pdf'
import Mail from '../assets/images/Mail.jsx'
import Download from '../assets/images/Download.jsx'

export default function NewLandingPage(props) {
  return (
    <div className="outer-landing-container">
      <div className="landing-container">
        <h1 className="h1-styles animation">
          Hello<span id="comma">,</span>
        </h1>
        <span className="center-text">
          <h1 className={`h1-styles animation`} id={props.mode==='light' ? '' : 'dark'}>I am</h1>
          <p className="animation" id={props.mode==='light' ? '' : 'dark'}>
            Full stack developer <br /> based in India
          </p>
        </span>
        <h1 className="h1-styles animation" id={props.mode==='light' ? '' : 'dark'}>Sharabh</h1>
      </div>

      <div className="buttons animation">
        <a className="button-link" id={props.mode==='light' ? '' : 'dark'} href="mailto: sharabhmishra15@gmail.com">
          <button className="landing-page-btn hire-btn"><Mail mode={props.mode} /><p className="button-text" id={props.mode==='light' ? '' : 'dark'}>Contact me</p></button>
        </a>
        <a className="button-link" id={props.mode==='light' ? '' : 'dark'} href={resume} download>
          <button className="landing-page-btn cv-btn"><Download mode={props.mode}/><p className="button-text" id={props.mode==='light' ? '' : 'dark'}>Download CV</p></button>
        </a>
      </div>
    </div>
  );
}
