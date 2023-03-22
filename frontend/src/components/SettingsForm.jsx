const SettingsForm = ({ onSave, user, onCancel }) => {
    const onSubmit = (e) => {
      e.preventDefault();
        const user = localStorage.getItem("userId")
  
        //ToDo: patch request to change user data with id, no endpoint for that yet
        
      return onSave(user);
    };
  
    return (
        <div class="flex" id="settings-form">
            <div class="flex bg-white">
                <div class="w-full px- md:px-3 lg:px-0">
                    <form className="UserForm" onSubmit={onSubmit}>
                        {user && (
                            <input type="hidden" name="_id" defaultValue={user._id} />
                        )}
  
                        <div className="control">
                            <label htmlFor="username">User Name:</label>
                            <input
                                defaultValue={user ? user.userName : null}
                                name="username"
                                id="username"
                            />
                        </div>
  
                        <div className="control">
                            <label htmlFor="email">Email:</label>
                            <input
                                defaultValue={user ? user.email : null}
                                name="email"
                                id="email"
                            />
                        </div>
  
                        <div className="control">
                            <label htmlFor="password">Password:</label>
                            <input
                                defaultValue={user ? user.password : null}
                                name="password"
                                id="password"
                            />
                        </div>
  
                        <div className="buttons">
                            <button type="submit" >
                                {user ? "Update User Information" : "Create User"}
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
  }
  
  export default SettingsForm;
  