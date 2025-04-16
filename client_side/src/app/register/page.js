"use client";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import Image from "next/image";
const page = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <section
      className="max-w-xl mx-auto  rounded my-8 px-8 mt-20"
      style={{
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <div className="py-5">
        <Image
          className="w-1/4 mx-auto"
          width={100}
          height={100}
          src="https://iili.io/3cDINoJ.png"
          alt=""
        />
        <h2 className="text-center text-2xl pt-5 font-bold text-[#4D4F53]">
          Register Now
        </h2>

        <Form
          name="register"
          layout="vertical"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 35 }}
          className="space-y-4 px-5"
          onFinish={onFinish}
        >
          <Form.Item
            label="Your Name"
            name="name"
            rules={[
              { required: true, message: "Please input your Name" },
              { type: "string", message: "Please enter a valid Name " },
            ]}
          >
            <Input placeholder="Enter your Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Please enter a valid email address" },
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
          <div>
            <h2 className="text-red-700 font-semibold">
              BATA CLUB TERMS AND CONDITIONS *
            </h2>
            <p className="text-justify">
              Read the{" "}
              <Link href='/' className="font-semibold text-red-700 underline">
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link href='/' className="font-semibold underline text-red-700">
                Terms and Conditions
              </Link>{" "}
              here before proceeding with registration. By continuing you
              consent the processing of your personal data only for purposes
              related to the membership of the Bata Club and Brand
              communication.
            </p>
          </div>
          <Form.Item>
            <Button className="primaryButton" htmlType="submit" block>
              Submit
            </Button>
            <div className="text-center mt-4">
              Already have an account?{" "}
              <span className="text-blue-400">
                <Link href="/login">Login Here</Link>
              </span>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default page;
