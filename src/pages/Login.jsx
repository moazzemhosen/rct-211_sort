import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/actions";
import { useNavigate, useLocation } from "react-router-dom";

 export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location ,"fromlogin")
  const cummingFrom = location.state?.from?.pathname || "/";
  console.log(cummingFrom);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email && password) {
      // console.log(email,password)
      dispatch(login({ email, password })).then((r) => {
        console.log(r, "from lgf");
        if (r.type === "USER_LOGIN_SUCCESS") {
          navigate(cummingFrom, { replace: true });
        }
      });
    }
  };
  return (
    <LoginWrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ser Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>User Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </LoginWrapper>
  );
};



const LoginWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;

  margin: auto;
`;
