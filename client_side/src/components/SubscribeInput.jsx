"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaArrowRight } from "react-icons/fa6";
const SubscribeInput = () => {
    const [email, setEmail] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubscription = () => {
        // Check if the email is not empty, has a valid format, and correct domain
        if (!email) {
          toast.error("Please enter an email address.");
        } else if (!emailRegex.test(email)) {
          toast.error("Please enter a valid email address.");
        } else if (email.includes('@gamil.com')) { // Check for common typo
          toast.error("Did you mean '@gmail.com'?");
        } else {
          toast.success("Please wait, it's working. We will be back soon.");
        }
      };
  return (
    <div className="flex bg-white rounded text-base mt-5">
      <input    onChange={(e) => setEmail(e.target.value)} type="text" name="" className="outline-none px-5" placeholder="Enter Your Email" id="" />
      <button  onClick={handleSubscription} className="bg-[#f50400] cursor-pointer rounded py-3 px-3 text-white">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SubscribeInput;
