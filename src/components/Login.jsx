import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'; // adjust path if needed

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in:", user);
      alert(`Welcome, ${user.displayName}`);
      // Optionally store in localStorage or context
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-white text-black px-4 py-2 rounded shadow"
    >
      Login with Google
    </button>
  );
};

export default Login;

