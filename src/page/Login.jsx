import "../App.css";
import Logo from "../assets/logo-lazismu-removebg-preview.png";

function App() {
  return (
    <div className="lgnBody">
      <div className="pembLgn">
        <img src={Logo} alt="logo" />
        <h1>welcome to lazismu for admin</h1>
        <div className="pembInput">
          <div>
            <p>Email</p>
            <input placeholder="Your email"></input>
          </div>
          <div>
            <p>Password</p>
            <input placeholder="Your password"></input>
          </div>
        </div>
        <p className="forgot">Forgot password?</p>
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
