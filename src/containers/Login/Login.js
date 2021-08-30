
import './Login.css';
import { Form, Button } from '../../components';

function Login() {
  return (
    <div className="Login">
      <Form 
        content = {
          <Button text = 'TESTE'/>
        }
      />
    </div>
  );
}

export default Login;
