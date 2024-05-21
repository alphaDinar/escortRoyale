import HeadBox from "./Home/Headbox/HeadBox";
import Hosts from "./components/Hosts/Hosts";
import TopNav from "./components/TopNav/TopNav";

const Home = () => {
  return (
    <main>
      <TopNav />
      <HeadBox />

      <Hosts />
    </main>
  );
}

export default Home;