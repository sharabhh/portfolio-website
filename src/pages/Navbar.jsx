import "./Navbar.css";

export default function Navbar(props) {
    function handleClick(){
        props.setMode(props.mode === 'light' ? 'dark' : 'light')

    }
  return (
    <>
      <div className="navbar-container">
        <h1 className="site-name">Sharabh Mishra</h1>
        <div className="toggle-container" onClick={handleClick} id={props.mode}>
          <div id='toggle-btn' className={props.mode}>
            <span id="circle" className={props.mode==='light'?'':'shift-right'}></span>
          </div>
        </div>
      </div>
    </>
  );
}
