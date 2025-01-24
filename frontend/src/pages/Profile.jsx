// frontend/src/pages/Profile.jsx

import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const { token, backendUrl, setToken } = useContext(ShopContext);
  const [userData, setUserData] = useState(null);

  // Fetch user profile data
  useEffect(() => {
    if (token) {
      axios
        .get(`${backendUrl}/api/user/profile`, { headers: { token } })
        .then((response) => {
          if (response.data.success) {
            setUserData(response.data.user);
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          toast.error("Error fetching user profile");
        });
    }
  }, [token, backendUrl]);

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      {userData ? (
        <div className="profile-details">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Cart Data: {JSON.stringify(userData.cartData)}</p>
          {/* You can display more user data if needed */}
        </div>
      ) : (
        <div>Please log in to view your profile.</div>
      )}
    </div>
  );
};

export default Profile;
