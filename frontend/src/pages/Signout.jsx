import { useEffect } from 'react';

const Signout = () => {
  useEffect(() => {
    localStorage.clear();
    window.location.href = '/';
  }, []);

  return null;
};

export default Signout;
