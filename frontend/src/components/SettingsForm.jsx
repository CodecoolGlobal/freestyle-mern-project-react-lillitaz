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
        <div class="flex" id="settings-form">
            <div class="flex bg-white">
                <div class="w-full px- md:px-50 lg:px-0">
                    <form class="bg-white rounded-md shadow-2xl p-5"
                        onSubmit={onSubmit}>
                        <div class="text-gray-800 text-3xl mb-1">
                            Your Current Information
                        </div>
                        {user && (
                            <input type="hidden" name="_id" defaultValue={user._id} />
                        )}
  
                        <div class="flex items-center border-2 mb-2 py-2 px-3 rounded-1xl">
                            
                            <label htmlFor="username">User Name:</label>
                            <input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                name="username"
                                class=" pl-2 w-full outline-none border-none"
                                id="username"
                            />
                        </div>
  
                        <div class="flex items-center border-2 mb-2 py-2 px-3 rounded-1xl">
                            <label htmlFor="email">Email:</label>
                            <input
                                class=" pl-2 w-full outline-none border-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                id="email"
                            />
                        </div>
  
                        <div class="flex items-center border-2 mb-2 py-2 px-3 rounded-1xl">
                            <label htmlFor="password">New Password:</label>
                            <input
                                class=" pl-2 w-full outline-none border-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id="password"
                            />
                        </div>
  
                        <div className="buttons">
                            <a href="/account">
                                <button type="submit"
                                    class="block w-full bg-blue-900 mt-5 py-2 rounded-1xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
                                    {user ? "Update Information" : "Create User"}
                                </button>
                            </a>
                            <a href="/account">
                                <button
                                    class="block w-full bg-blue-900 mt-5 py-2 rounded-1xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                                    type="button"
                                    onClick={onCancel}>
                                    Cancel
                                </button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  };
  
  export default SettingsForm;
  
