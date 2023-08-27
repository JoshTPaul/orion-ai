import Home from "./Home";
import ReactQueryLayer from "./ReactQueryLayer";
import { reactQueryClient } from "../config/reactQueryClient";

const HomePage = () => {
  return (
    <ReactQueryLayer>
      <Home />
    </ReactQueryLayer>
  );
};

export default HomePage;
