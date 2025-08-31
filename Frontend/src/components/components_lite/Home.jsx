import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = useGetAllJobs(); // Trigger data fetch
  const jobs = useSelector((state) => state.jobs.allJobs); // Access Redux state

  console.log("Jobs in Component: ", loading, error, jobs);
  const user = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Header />
      <Categories />

      <div style={{ flex: 1 }}>
        {loading && <p>Loading jobs...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <LatestJobs jobs={jobs} />}
      </div>

      <Footer />
    </div>
  );
};

export default Home;