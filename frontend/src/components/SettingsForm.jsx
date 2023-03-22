import { useState } from "react";

const SettingsForm = ({ onSave, user, onCancel }) => {
  const [userName, setUserName] = useState(user ? user.userName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userName,
      email,
      password,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to update user.");
      }

      const updatedUser = await response.json();
      onSave(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <div className="flex" id="settings-form">
        <div className="flex bg-white">
          <div className="w-full px- md:px-3 lg:px-0">
            <form className="UserForm" onSubmit={onSubmit}>
              <div className="user-info">
                <h2>Your Current Information</h2>
                <p>Username: {user.userName}</p>
                <p>Email: {user.email}</p>
              </div>
  
              {user && (
                <input type="hidden" name="_id" defaultValue={user._id} />
              )}
  
              <div className="control">
                <label htmlFor="username">User Name:</label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  id="username"
                />
              </div>
  
              <div className="control">
                <label htmlFor="email">Email:</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                />
              </div>
  
              <div className="control">
                <label htmlFor="password">New Password:</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                />
              </div>
  
              <div className="buttons">
                <button type="submit">
                  {user ? "Update Information" : "Create User"}
                </button>
  
                <button type="button" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SettingsForm;
  
