import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();              // set user = true
    navigate("/checkout"); // 🔥 redirect after login
  };

  return (
    <div className="auth">
      <h2>Login</h2>

      <button onClick={handleLogin}>
        Login as Guest
      </button>
    </div>
  );
}

export default Login;