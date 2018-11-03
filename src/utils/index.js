import jwtDecode from 'jwt-decode';

const isUserLoggedIn = () => {
  const token = window.localStorage.getItem('token');

  let decoded;

  // checks if the token exists and is well formed
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    return false;
  }
  // checks if the token is still valid
  const { exp } = decoded;
  const currentDate = new Date();

  return ((exp * 1000) - currentDate.getTime()) > 1;
};

export default isUserLoggedIn;
