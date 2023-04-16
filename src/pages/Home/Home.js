import React from "react";
import "./Home.css";
import QuoteCard from "../../components/UI/QuoteCard";

const Home = () => {
  return (
    <main>
      <h1>THOUGHT OF THE DAY</h1>
      <div className="hero">
        <section className="quote-sec">
          <QuoteCard />
          <button className="shuffle-btn">Shuffle</button>
        </section>
        <section className="hero-text">
          <h3>Affirmations to make your day positive and happy</h3>
          <p>
            I am the strongest person in this universe, no one can take over me.
            I have a peaceful mind which is helping me to create a strong impact
            on this world. I am the happiest person just because I don't lie to
            anyone, including myself. So I will just be truthful, always. Thank
            you :)
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
