import { Sidebar } from "../src/components";

const Console = () => {
  return (
    <section>
      <Sidebar />
      <div
        style={{
          width: "calc(100% - 240px)",
          marginLeft: "240px",
          zIndex: "-1",
        }}
      >
        this is the main content
      </div>
    </section>
  );
};

export default Console;
