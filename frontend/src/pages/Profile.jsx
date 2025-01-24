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
      {userData ? (
        <div className="profile-details">
          <span class="block text-sm text-gray-900 ">{userData.name}</span>
          <span class="block text-sm  text-gray-500 truncate ">
            {userData.email}
          </span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Profile;
