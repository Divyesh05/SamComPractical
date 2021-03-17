export const getContactData = () => {
  const requestOptions = {
    method: "GET",
    headers: new Headers(),
  };
  return fetch("https://reqres.in/api/users", requestOptions);
};
