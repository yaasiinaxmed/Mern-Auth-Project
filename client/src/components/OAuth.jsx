import React from "react";
import {app} from '../firebase/firebase'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

function OAuth() {
  const dispatch = useDispatch()

  const handleGoogleClick = async () => {
    try {
        const googleProvider = new GoogleAuthProvider()
        const auth = getAuth(app)

        const resutl = await signInWithPopup(auth, googleProvider)
        const res = await fetch('/api/auth/google', {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: resutl.user.displayName,
                email: resutl.user.email,
                photo: resutl.user.photoURL
            }),
        })

        const data = await res.json()
        dispatch(signInSuccess(data))
    } catch (error) {
        console.log("could not login with google", error)
    }
  }

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
}

export default OAuth;
