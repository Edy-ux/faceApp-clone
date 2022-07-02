import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import IconFace from './IconFace';
import { FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../contexts/auth';

import GlobalStyles from '../../styles/global';
import * as C from './styles';

const Login = () => {
  
  const { signInWithFacebook } = useContext(AuthContext);

  return (
    <>
      <C.Container>
        <FaFacebookF />
        <FacebookLogin
          appId="5116345745155533"
          fields="name,email,picture"
          callback={signInWithFacebook}
          icon="fa-facebook-f"
          textButton="CONTINUE COM FACEBOOK"
          buttonStyle={{
            background: '#046ee5',
            border: 'none',
            fontWeight: 500,
          }}
        />
      </C.Container>
      <GlobalStyles />
    </>
  );
};

export default Login;
