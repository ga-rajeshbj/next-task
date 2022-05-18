import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    pswd: "",
  });
  const { data: session, status } = useSession();

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.removeItem("logedUser");

    if (JSON.parse(localStorage.getItem("userReg")) === null) {
      alert("please register");
      return;
    } else if (session) {
      signOut();
    }

    let usersList = JSON.parse(localStorage.getItem("userReg"));

    let user = usersList.filter((item) => {
      return item.email === userDetail.email && item.pswd === userDetail.pswd;
    });
    if (user.length <= 0 || usersList.length < 0) {
      alert("please enter valid credentials ");
    } else if (usersList.length === 0) {
      alert("please register the user");
    } else {
      localStorage.setItem("login", true);
      localStorage.setItem("logedUser", JSON.stringify(user));
      router.push(`${window.location.origin}`);
    }
  };
  return (
    <div class="container">
      {/* <!-- Outer Row --> */}
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user" onSubmit={handleLogin}>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          onChange={handleChange}
                          value={userDetail.email}
                          name="email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          onChange={handleChange}
                          value={userDetail.pswd}
                          name="pswd"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button class="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                      <hr />
                      <a
                        onClick={(e) => {
                          e.preventDefault();

                          if (JSON.parse(localStorage.getItem("logedUser"))) {
                            localStorage.removeItem("logedUser");
                          }
                          signIn("google", {
                            callbackUrl: `${window.location.origin}/`,
                          });
                        }}
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Register with Google
                      </a>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          if (JSON.parse(localStorage.getItem("logedUser"))) {
                            localStorage.removeItem("logedUser");
                          }
                          signIn("github", {
                            callbackUrl: `${window.location.origin}/`,
                          });
                        }}
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-github fa-fw"></i> Register with GitHub
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <Link class="small" href="/forgot-password">
                        Forgot Password?
                      </Link>
                    </div>
                    <div class="text-center">
                      <Link class="small" href="/signUp">
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
