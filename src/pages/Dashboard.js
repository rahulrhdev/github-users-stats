import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { loading, githubUser } = React.useContext(GithubContext);
  const isUser = Object.keys(githubUser).length > 0;
  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }
  return (
    <main>
      <Navbar> </Navbar>
      <Search />
      {isUser && (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;
