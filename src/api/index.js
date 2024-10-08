import axios from "axios";

const getUser = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
