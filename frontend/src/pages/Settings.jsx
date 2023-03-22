import { useEffect, useState } from "react";
import SettingsForm from "../components/SettingsForm";
import { Navigate } from "react-router-dom";

const Settings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUser = async () => {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);
        console.log(response)
      if (response.ok) {
          const user = await response.json();

        setUser(user);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, []);

  const onSave = () => {
    Navigate("/account");
  };

  return user ? (
    <SettingsForm user={user} onCancel={() => Navigate("/account")} onSave={onSave} />
  ) : null;
};

export default Settings;
