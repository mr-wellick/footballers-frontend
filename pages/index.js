import Link from "next/link";

const Home = () => {
  return (
    <div>
      Welcome to my home page
      <Link href="/login">
        <a mr={2}>Sign in</a>
      </Link>
    </div>
  );
};

export default Home;
