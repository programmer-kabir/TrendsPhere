// export const getUserFromToken = () =>{
//     const token = localStorage.getItem('token')
//     if (!token) return null;
//     return token
// }
// utils/getUserFromToken.js
import axios from "axios";

export const getUserFromToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (err) {
    console.error("User fetch failed:", err);
    return null;
  }
};
