const gitHubInfoAPI = async () => {
  const response = await fetch(`https://api.github.com/users/sabbir2809`);
  const data = await response.json();
  return data;
};

export default gitHubInfoAPI;
