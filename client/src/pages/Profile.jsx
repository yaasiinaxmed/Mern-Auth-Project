import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt=""
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
        />
        <input
          type="text"
          defaultValue={currentUser.username}
          id="username"
          placeholder="username"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="text"
          defaultValue={currentUser.email}
          id="email"
          placeholder="password"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="text"
          defaultValue={currentUser.password}
          id="password"
          placeholder="password"
          className="bg-slate-100 rounded-lg p-3"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
         Update Profile
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}

export default Profile;
