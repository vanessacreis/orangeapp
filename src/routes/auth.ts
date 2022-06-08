export const isAuth = () => {
  return localStorage.getItem("uuid") ? true : false;
};
