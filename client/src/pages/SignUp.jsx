import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-gray-900">
      <div className="flex p-6 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Debugged
            </span>{" "}
            World
          </Link>
          <p
            className="text-sm md:text-base mt-5 text-center text-gray-700 dark:text-gray-300 leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Your journey into tech begins{" "}
            <span className="font-semibold">here</span>! 💻 <br />
            <span className="italic">Create, share, and explore</span> the world
            of <span className="font-semibold">tech blogs</span>. ✍️🌐
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-md">
          <form className="flex flex-col gap-4">
            <div>
              <Label
                value="Your Username"
                className="text-sm text-gray-700 dark:text-gray-300"
              />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                className="mt-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>
            <div>
              <Label
                value="Your Email"
                className="text-sm text-gray-700 dark:text-gray-300"
              />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                className="mt-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>
            <div>
              <Label
                value="Your Password"
                className="text-sm text-gray-700 dark:text-gray-300"
              />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                className="mt-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="mt-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sign Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5 text-gray-600 dark:text-gray-400">
            <span>Have an account?</span>
            <Link
              to="/sign-in"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
