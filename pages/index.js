/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Home = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#0a131c",
        color: "#fff",
      }}
    >
      <header
        sx={{
          height: "62px",
          width: "1184px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <span sx={{ display: "block" }}>Mirror</span>
          <span sx={{ display: "block" }}>Pools FC</span>
        </div>
        <div sx={{ flexGrow: "1" }}>
          <ul
            sx={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <li sx={{ padding: "24px" }}>Products</li>
            <li sx={{ padding: "24px" }}>Docs</li>
            <li sx={{ padding: "24px" }}>Company</li>
            <li sx={{ padding: "24px" }}>Pricing</li>
          </ul>
        </div>
        <div>
          <Link href="/login">
            <a mr={2}>Sign in</a>
          </Link>
        </div>
      </header>
      <main
        sx={{
          paddingTop: "144px",
          margin: "auto",
          width: "1184px",
          // flex: "1 1 auto",
        }}
      >
        <h1
          sx={{
            fontSize: "64px",
            paddingRight: "64px",
            marginRight: "64px",
            lineHeight: "1",
            width: "50%",
          }}
        >
          The easiest way to use football data.
        </h1>
      </main>
      <footer sx={{ width: "100%" }}>Footer</footer>
    </div>
  );
};

export default Home;
