import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignUp = ({ providers }) => {
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pswd: "",
    repPswd: "",
  });

  const handleOnChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("userReg"))) {
      let usersReg = JSON.parse(localStorage.getItem("userReg"));
      usersReg = [...usersReg, userDetails];
      localStorage.setItem("userReg", JSON.stringify(usersReg));
    } else {
      let usersReg = [userDetails];
      localStorage.setItem("userReg", JSON.stringify(usersReg));
    }
    router.push("/login");
  };

  return (
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          {/* <!-- Nested Row within Card Body --> */}
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" onSubmit={handleSubmit}>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                        onChange={handleOnChange}
                        value={userDetails.firstName}
                        name="firstName"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleOnChange}
                        value={userDetails.lastName}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      name="email"
                      onChange={handleOnChange}
                      value={userDetails.email}
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name="pswd"
                        onChange={handleOnChange}
                        value={userDetails.pswd}
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        name="repPswd"
                        onChange={handleOnChange}
                        value={userDetails.repPswd}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Register Account
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
                  <a class="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center">
                  <a class="small" href="login.html">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
