import Link from "next/link";

const Home = () => {
  return (
    <div>
      Welcome to my home page
      <Link href="/login">
        <a>Sign in</a>
      </Link>
    </div>
  );
};

export default Home;
