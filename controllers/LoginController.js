import { CommonActions } from "@react-navigation/native";

const login = async (username, password, navigation) => {
  try {
    // Validate username (no special characters)
    if (/[^a-zA-Z0-9]/.test(username)) {
      throw new Error("Username cannot contain special characters.");
    }

    // Validate password (at least 6 characters)
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    // Dummy logic for login, role-based access to be used later
    if (username === "userS" && password === "passS00000") {
        
      userType = "student";
      
      // Student login
      // Delay the navigation by 2 second
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Student" }],
          })
        );
      }, 2000);
    } else if (username === "userT" && password === "passT00000") {
      userType = "teacher";
      // Teacher login
      // Delay the navigation by 1 second (1000 milliseconds)
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Teacher" }],
          })
        );
      }, 1000);
    } else {
      // Invalid credentials
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw error;
  }
  
};

export default login;
