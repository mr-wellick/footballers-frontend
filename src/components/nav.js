/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { Select } from "theme-ui";
const Nav = () => (
  <div
    sx={{
      height: "100vh",
      width: "240px",
      position: "fixed",
      bg: "#202a35"
    }}
  >
    <div
      sx={{
        paddingTop: "24px",
        paddingRight: "24px",
        paddingLeft: "24px",
        paddingBottom: "20px",
        color: "white"
      }}
    >
      Mirror Pools FC
    </div>
  </div>
);

export default Nav;
