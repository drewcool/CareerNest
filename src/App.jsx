import React from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Jobs from "./Pages/Jobs";
import Internships from "./Pages/Internships";
import JobDetails from "./Pages/JobDetails";
import StudentAuth from "./Pages/StudentAuth";
import RecruiterAuth from "./Pages/RecruiterAuth";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/p/home"
          element={
            <Layout currentPageName="Home">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/p/jobs"
          element={
            <Layout currentPageName="Jobs">
              <Jobs />
            </Layout>
          }
        />
        <Route
          path="/p/internships"
          element={
            <Layout currentPageName="Internships">
              <Internships />
            </Layout>
          }
        />
         <Route
          path="/p/job-details"
          element={
            <Layout currentPageName="JobDetails">
              <JobDetails />
            </Layout>
          }
        />
        <Route
          path="/p/about"
          element={
            <Layout currentPageName="About">
              <About />
            </Layout>
          }
        />
        <Route
          path="/p/faq"
          element={
            <Layout currentPageName="FAQ">
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/p/studentauth"
          element={
            <Layout currentPageName="StudentAuth">
              <StudentAuth />
            </Layout>
          }
        />
        <Route
          path="/p/recruiterauth"
          element={
            <Layout currentPageName="RecruiterAuth">
              <RecruiterAuth />
            </Layout>
          }
        />
        {/* Optional: 404 page fallback */}
        <Route
          path="*"
          element={
            <Layout currentPageName="404">
              <div className="text-center py-20">404 - Page Not Found</div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}




