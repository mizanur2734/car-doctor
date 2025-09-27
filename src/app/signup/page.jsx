"use client"
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

export default function page() {
    const handleLogin = async () =>{
        
    }
  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <img src="/assets/images/login/login.svg" alt="" />
        </div>
        <div className="p-12 border border-gray-200">
          <h6 className="text-3xl font-semibold text-red-600 text-center mb-12">
            Sign Up
          </h6>
          {/* email */}
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input mt-3 w-full "
            />
            <br />
            <br />
            {/* password */}
            <label htmlFor="email">Password</label>
            <br />
            <input
              type="text"
              name="password"
              placeholder="Your Password"
              className="input mt-3 w-full"
            />
            <button type="submit" className="btn w-full bg-red-600 text-white mt-8">
              Sign Up
            </button>
          </form>
          <h6 className="my-8 text-center">Or Sign in with</h6>
          <div className="flex items-center justify-center space-x-3">
            <button className="btn flex items-center justify-center text-green-500">
              <FaGoogle />
            </button>
            <button className="btn flex items-center justify-center text-red-600">
              <AiOutlineGithub />
            </button>
          </div>
          <h6 className="my-8 text-center">
            Already have account ?{" "}
            <Link className="text-red-600 font-semibold" href={"/login"}>
              Sign In
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )
}
