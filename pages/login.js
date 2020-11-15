/** @jsx jsx */
import { jsx } from "theme-ui";
import { MirrorPoolsIcon } from "../src/icons";

const Login = () => {
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
          <form>
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
            />
            <button
              sx={{
                background: "#202a35",
                color: "#fff",
                width: "100%",
                padding: "16px",
                border: "1px solid #202a35",
                borderRadius: "5px",
              }}
            >
              Log in
            </button>
          </form>
          <div sx={{ textAlign: "center", paddingTop: "32px" }}>
            <a sx={{ textDecoration: "underline" }}>Forgot your password?</a>
          </div>
        </div>
        <div sx={{ textAlign: "center", padding: "32px 16px 0px 16px" }}>
          <p sx={{ margin: "0px" }}>Don't have an account?</p>
          <a sx={{ textDecoration: "underline" }}>Create an accout →</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
