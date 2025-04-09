import React from "react";
// import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="main-container landing-body">
      <div className="content-container">
        <div className="header">
          <h2 className="title">WCN</h2>
          <p className="subtitle">Women Coders Network</p>
          <hr className="hr-line" />
        </div>

        <main className="main-content">
          <section>
            <h3 className="section-header">Who Are We?</h3>
            <p className="info">
            Women Coders Network is uniting communities to empower women and gender minorities in technology worldwide.
            </p>
          </section>
          <section>
            <h3 className="section-header">What{'\''}s Happening?</h3>
            <p className="info">
              🚧 We{'\''}re Getting Ready! Our website is currently under
              construction. 🚧
            </p>
            <p className="info">
              Soon, it will be your go-to hub for resources, community
              interaction, and essential updates from WCN. Stay tuned for
              the launch of something great!
            </p>
          </section>
          <section>
            <h3 className="section-header">Get Connected!</h3>
            <p className="info">
              Join our Discord community! Connect with fellow women in tech,
              share ideas, seek support, and learn together. Our collective
              voice will shape the future of technology.
            </p>
            <Link href="https://discord.gg/YpaJ3JckNM">
              <div className="join-button">Join Our Discord</div>
            </Link>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
