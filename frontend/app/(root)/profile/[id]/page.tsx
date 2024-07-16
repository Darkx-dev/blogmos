"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import api from "@/utils/api";

const Profile: React.FC = () => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profilePictureValid, setProfilePictureValid] = useState(true); // State to track if profile picture URL is valid
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user?.name || "");
      setEmail(user.email || "");
      setBio(user?.bio || "");
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user?.userId}`,
        { cache: "no-cache" }
      );
      if (!response.ok) return setError("Problem fetching user");
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setBio(data.bio);
      setProfilePicture(data.profilePicture);
      setError("");
      setUser({ ...user, ...data });
    };
    fetchData();
  }, [user?.userId]);

  // Function to validate profile picture URL
  const validateProfilePicture = (url: string) => {
    if (!url) return setProfilePictureValid(true);
    return new Promise<boolean>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate profile picture URL
    const isValid = await validateProfilePicture(profilePicture);
    if (!isValid) {
      setProfilePictureValid(false);
      return;
    }

    try {
      const response = await api.put(`/users/${user?.userId}`, {
        name,
        email,
        bio,
        profilePicture,
      });
      window.location.reload();
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      console.log(err);
    }
  };

  // Function to handle profile picture input change
  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setProfilePicture(value);
    setProfilePictureValid(true); // Reset validation state on input change
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="profilePicture">
            Profile Picture URL (upload somewhere else)
          </label>
          <input
            type="text"
            name="profilePicture"
            value={profilePicture}
            onChange={handleProfilePictureChange}
            className={`mt-1 block w-full rounded-md py-2 px-4 border ${
              profilePictureValid ? "border-gray-300" : "border-red-500"
            } shadow-md outline-none focus:border-indigo-500 focus:ring-indigo-500`}
          />
          {!profilePictureValid && (
            <p className="mt-1 text-sm text-red-500">
              Invalid image URL. Please check and try again.
            </p>
          )}
        </div>
        {/* Preview of profile picture */}
        {profilePicture && profilePictureValid && (
          <div className="mt-4">
            <p className="text-sm font-medium">Preview:</p>
            <img
              src={profilePicture}
              alt="Profile Preview"
              className="mt-2 h-20 w-20 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md py-2 px-4 border-gray-300 shadow-md outline-none focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md py-2 px-4 border-gray-300 shadow-md outline-none focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 block w-full rounded-md py-2 px-4 border-gray-300 shadow-md outline-none focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Profile
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Profile;
