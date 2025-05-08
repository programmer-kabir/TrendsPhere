"use client";
import { useState } from "react";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { Button, Divider, Form, Input, Modal } from "antd";
import { IoMdCopy } from "react-icons/io";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const router = useRouter();

  const onFinish = async (values) => {
    toast.dismiss(); // close all active toasts

    let response;
    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        values
      );
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
      return;
    }
    toast.success(response.data.message);
    try {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong after login");
    }
  };
  const email1 = "admin@gmail.com";
  const email2 = "user@gmail.com";
  const handleEmailCopy = (email) => {
    // navigator.clipboard.writeText(email)
    //   .then(() => {
    //     toast.success(`Email copied to clipboard!`);
    //   })
    //   .catch((err) => {
    //     console.error("Failed to copy: ", err);
    //   });
    console.log(email);
  };
  // Password
  const password1 = "admin123@#";
  const password2 = "user123@#";

  const handlePasswordCopy = (password) => {
    // navigator.clipboard.writeText(password)
    //   .then(() => {
    //     toast.success(`Password copied to clipboard!`);
    //   })
    //   .catch((err) => {
    //     console.error("Failed to copy: ", err);
    //   });
    console.log(password);
  };
  return (
    <div>
      {/* https://iili.io/3cDINoJ.png */}
      <section className="mt-2 md:mt-12 md:lg:mt-20 md:px-20">
        <div className=" px-4 sm:px-2 w-full flex flex-col sm:flex-row justify-around gap-5 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl uppercase">
              Discover all the
              <br />
              benefits
            </h2>
            <p className=" text-sm pt-8">
              Create an account to enhance your shopping experience whit the
              help of our customized services:
            </p>
            <div className="pt-6 ps-5 text-sm grid grid-flow-row gap-3">
              <p className="flex gap-2 items-center">
                <GiCheckMark className="text-[10px]"></GiCheckMark>Seep up to
                date with the latest news{" "}
              </p>
              <p className="flex gap-2 items-center">
                <GiCheckMark className="text-[10px]"></GiCheckMark>Buy faster
              </p>
              <p className="flex gap-2 items-center">
                <GiCheckMark className="text-[10px]"></GiCheckMark>Save your
                favorite products
              </p>
            </div>
            <div className=" mt-8">
              <p className="text-lg">DON'T HAVE AN ACCOUNT?</p>
              <p className="text-sm mt-5">
                Create an account and Register yourself as Club member! Only
                club members can enjoy exclusive benefits.
              </p>
            </div>
            <Link href="/register">
              <Button className="w-full primaryButton mt-5">
                Register Now
              </Button>
            </Link>
          </div>

          <Divider className="h-96 hidden md:flex" type="vertical" />

          <div className="md:w-1/2 pt-5 md:flex">
            <div>
              <Image
                className="w-1/4 mx-auto"
                width={100}
                height={100}
                src="https://iili.io/3cDINoJ.png"
                alt=""
              />
              <h1 className="text-2xl text-center text-[#f50400] font-semibold">
                Login Trands Shop
              </h1>
              <Form
                name="register"
                layout="vertical"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 35 }}
                className="space-y-4 px-5"
                onFinish={onFinish}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email" },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password" },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  ]}
                >
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>
                <Link href="/forget-password">
                  <p className="text-end underline">Forget Password?</p>
                </Link>

                <Form.Item>
                  <Button className="primaryButton" htmlType="submit" block>
                    Login now
                  </Button>

                  <div className="text-center mt-4 ">
                    New user?
                    <span className="text-blue-300">
                      <Link href="/register"> Register Here</Link>
                    </span>
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div>
              <Button
                onClick={showModal}
                className="text-emerald-500"
                type="dashed"
              >
                Show Login Credentials
              </Button>
              <Modal
                title="Login Credentials"
                open={open}
                onCancel={handleCancel}
              >
                {/* Admin */}
                <h2 className="text-xl font-medium pt-1">Admin Credentials</h2>
                <div className="text-base pt-5 flex items-center justify-between">
                  <p>Email: {email1}</p>
                  <Button
                    onClick={() => handleEmailCopy(email1)}
                    type="text"
                    className="text-[#1677ff]"
                  >
                    <IoMdCopy size={20} className="rotate-180" />
                    <p>Copy Email</p>
                  </Button>
                </div>
                <div className="text-base pt-5 flex items-center justify-between">
                  <p>Password: {password1}</p>
                  <Button
                    onClick={() => handlePasswordCopy(password1)}
                    type="text"
                    className="text-[#1677ff]"
                  >
                    <IoMdCopy size={20} className="rotate-180" />
                    <p>Copy Password</p>
                  </Button>
                </div>

                {/* User */}
                <h2 className="text-xl font-medium pt-1">User Credentials</h2>
                <div className="text-base pt-5 flex items-center justify-between">
                  <p>Email: {email2}</p>
                  <Button
                    onClick={() => handleEmailCopy(email2)}
                    type="text"
                    className="text-[#1677ff]"
                  >
                    <IoMdCopy size={20} className="rotate-180" />
                    <p>Copy Email</p>
                  </Button>
                </div>
                <div className="text-base pt-5 flex items-center justify-between">
                  <p>Password: {password2}</p>
                  <Button
                    onClick={() => handlePasswordCopy(password2)}
                    type="text"
                    className="text-[#1677ff]"
                  >
                    <IoMdCopy size={20} className="rotate-180" />
                    <p>Copy Password</p>
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
