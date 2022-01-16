import '../CSS/App.css';
import avatar from "../assests/Avatar21.png"
import button from "../assests/button.png"
import shape from "../assests/shape.png"


function Nav() {
  return (
    <div>
    <nav>
    <img src={avatar} id="Avatar" alt="a" />
    <p>Hi Anaisha!</p>

    <div>
      <button><img src={shape} id="shape" alt="s" /></button>
      <img src={button} id="button" alt="" />
    </div>
  </nav>
 
  </div>
  );
}

export default Nav;
