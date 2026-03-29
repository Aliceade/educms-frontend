export const getUserRole = () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  // In real apps, decode JWT
  const payload = JSON.parse(atob(token.split('.')[1]));

  return payload.role;
};