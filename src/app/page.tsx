"use client";
import { QueryClientProvider } from "react-query";
import HomeLayer from "./HomeLayer";
import { reactQueryClient } from "./config/reactQueryClient";

const Home = () => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <HomeLayer />
    </QueryClientProvider>
  );
};

export default Home;
