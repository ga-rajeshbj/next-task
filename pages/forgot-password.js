import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (JSON.parse(localStorage.getItem("userReg")) === null) {
      alert("please register");
      return;
    }

    let usersList = JSON.parse(localStorage.getItem("userReg"));

    let user = usersList.filter((item) => {
      return item.email === email;
    });

    if (user.length === 0) {
      alert("no user fund on this email");
    } else {
      router.push("/login");
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
                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p class="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          value={email}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        href="login.html"
                        class="btn btn-primary btn-user btn-block"
                        type="submit"
                      >
                        Reset Password
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <Link class="small" href="/signUp">
                        Create an Account!
                      </Link>
                    </div>
                    <div class="text-center">
                      <Link class="small" href="/login">
                        Already have an account? Login!
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

export default ForgetPassword;
