import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../resources/authentication.css";

function Login() {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const user = await axios.post("/api/user/login", values);
      message.success("Login successful");
      localStorage.setItem("ResumeNewDatabase-user",JSON.stringify(user.data));
      navigate("/home")
    } catch (error) {
      message.error("Login failed");
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
        <h1>Login</h1>
        <hr />
        <Form.Item
          name="username"
          label="UserName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <div className="d-flex align-item-center justify-content-between">
          <Link to="/register" className="link-style">Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
