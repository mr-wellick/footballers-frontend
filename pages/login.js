/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { MirrorPoolsIcon } from "../src/icons";
import { useRouter } from "next/router";

const promiseUtil = (promise) =>
  promise
    .then((res) => res.json())
    .then((res) => [undefined, res])
    .catch((err) => [err]);

const Login = () => {
  const router = useRouter();
  const [userCredentials, setUserCredentials] = useState({
    user_email: "",
    user_password: "",
  });
  const [loginErrors, setLoginErrors] = useState({ errors: null });

  return (
    <section sx={{ variant: "containers.login" }}>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            padding: "16px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MirrorPoolsIcon />
        </div>
        <div
          sx={{
            padding: "32px",
            maxWidth: "460px",
            minWidth: "360px",
            background: "#fff",
          }}
        >
          <h2
            sx={{
              textAlign: "center",
              margin: "0px",
              marginBottom: "16px",
            }}
          >
            Welcome back
          </h2>
          {loginErrors.errors ? (
            <div
              sx={{
                padding: "8px 12px 8px 12px",
                marginBottom: "16px",
                background: "#ECF0F6",
                borderRadius: "100rem",
                fontSize: "14px",
              }}
            >
              {loginErrors.errors}
            </div>
          ) : null}
          <form
            onChange={(e) => {
              const { value, dataset } = e.target;
              setUserCredentials({
                ...userCredentials,
                [dataset.type]: value,
              });
            }}
          >
            <input
              sx={{
                border: "1px solid #ECF0F6",
                width: "100%",
                height: "48px",
                padding: "0 16px",
                marginTop: "4px",
                marginBottom: "12px",
              }}
              placeholder="Email"
              type="text"
              data-type="user_email"
            />
            <input
              sx={{
                border: "1px solid #ECF0F6",
                width: "100%",
                height: "48px",
                padding: "0 16px",
                marginTop: "4px",
                marginBottom: "12px",
              }}
              placeholder="Password"
              type="password"
              data-type="user_password"
            />
            <button
              sx={{
                background: "#202a35",
                color: "#fff",
                width: "100%",
                padding: "16px",
                border: "1px solid #202a35",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={async (e) => {
                e.preventDefault();
                const [err, res] = await promiseUtil(
                  fetch("http://localhost:5000/api/v1/user/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userCredentials),
                  })
                );

                if (err) {
                  console.error("user does not exist", err);
                  setLoginErrors({
                    ...loginErrors,
                    errors: "Check your email and password and try again.",
                  });
                } else if (res.errors) {
                  console.error(
                    "user_email or user_password invalid input",
                    res.errors
                  );
                  setLoginErrors({
                    ...loginErrors,
                    errors: "Check your email and password and try again.",
                  });
                } else {
                  localStorage.setItem("user", JSON.stringify(res));
                  router.push("/console");
                }
              }}
            >
              Log in
            </button>
          </form>
          <div sx={{ textAlign: "center", paddingTop: "32px" }}>
            <a sx={{ textDecoration: "underline", cursor: "pointer" }}>
              Forgot your password?
            </a>
          </div>
        </div>
        <div sx={{ textAlign: "center", padding: "32px 16px 0px 16px" }}>
          <p sx={{ margin: "0px" }}>Don't have an account?</p>
          <a sx={{ textDecoration: "underline", cursor: "pointer" }}>
            Create an accout →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
