import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SettingsForm from "../components/SettingsForm";

const updateUser = (user) => {

  return fetch(`/api/users/${user._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

const fetchUser = (id) => {
  return fetch(`/api/users/${id}`).then((res) => res.json());
};

const UserUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id)
      .then((user) => {
        setUser(user);
      });
  }, [id]);

  const handleUpdateUser = (user) => {
    updateUser(user)
      .then(() => {
        navigate("/account");
      });
  };

  return (
    <SettingsForm
      user={user}
      onSave={handleUpdateUser}
      onCancel={() => navigate("/account")}
    />
  );
};

export default UserUpdater;
