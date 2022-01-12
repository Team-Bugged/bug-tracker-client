import Navbar from "../components/navbar/Navbar";
import { useInfoContext } from "../components/Context";

const Dashboard = () => {
  const { isLoggedIn } = useInfoContext();
  return (
    <>
      {/* {isLoggedIn===true?<Navbar />: } */}
      <Navbar />
    </>
  );
};

export default Dashboard;
