import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});
//ID APP 5116345745155533

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('AuthFaceClone');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorage();
  }, []);

  
  const signInWithFacebook = (res) => {
    console.log(res);
    
    let data = {
      name: res.name,
      email: res.email,
      avatarUrl: res.picture.data.url,
    };

    setUser(data);
    localStorage.setItem('AuthFaceClone', JSON.stringify(data));
  };

  async function signOut() {
    localStorage.removeItem('AuthFaceClone');

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithFacebook,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
