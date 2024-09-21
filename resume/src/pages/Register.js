import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";
import "../resources/authentication.css";

const FormItem = Form.Item;

function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log("Submitted values:", values);
      await axios.post('/api/user/register', values);
      message.success("Registration successful");
    } catch (error) {
      message.error("Registration failed");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("ResumeNewDatabase-user")) {
      navigate("/home");
    }
  });
  return (
    <div className="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <FormItem
          name="username"
          label="UserName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </FormItem>
        <FormItem
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" placeholder="Password" />
        </FormItem>
        <FormItem
          name="cpassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input type="password" placeholder="Confirm Password" />
        </FormItem>
        <div className="d-flex align-item-center justify-content-between">
          <Link to="/login" className="link-style">Login</Link>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
