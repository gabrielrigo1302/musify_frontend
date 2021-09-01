
import './Login.css';
import { Form, Button } from '../../components';
import useStyle from './styles';

const Login = (props) => {
  const { rootCustomStyle } = props;
  const styles = useStyle(rootCustomStyle)
  
  return (
    <div className={styles.root}>
      <Form 
        content = {
          <Button 
            text = 'TESTE'
          />
        }
      />
    </div>
  );
}

export default Login;
