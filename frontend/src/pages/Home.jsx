import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="px-8 md:px-[200px]">
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
