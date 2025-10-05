import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Explore from "./pages/Explore";
import About from "./pages/About";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";
import Home from "./pages/Home";
import TaskApp from "./components/Task/TaskApp";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow p-4 min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskApp />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="/incompleted" element={<IncompletedTasks />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
