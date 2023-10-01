let userIsAuthenticated = true;

// Function to handle logout
function logout() {
  // Clear user authentication state (Dummy state, will implement session or token later)
  userIsAuthenticated = false;
}

// Function to check if the user is authenticated
function isAuthenticated() {
  return userIsAuthenticated;
}

module.exports = { logout, isAuthenticated };
