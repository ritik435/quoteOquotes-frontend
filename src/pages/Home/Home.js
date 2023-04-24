import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import QuoteCard from "../../components/UI/QuoteCard";

const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);
  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(
        "https://quote-o-quotes-backend.vercel.app/get-posts"
      );
      const randomIndex = Math.floor(
        Math.random() * response.data.result.length
      );
      const randomQuote = response.data.result[randomIndex];
      setQuote(randomQuote);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };
  return (
    <main>
      <h1>Discover, Create, Share!</h1>
      <div className="hero">
        <section className="quote-sec">
          <QuoteCard quote={quote} />
          <button className="shuffle-btn" onClick={fetchRandomQuote}>
            Shuffle
          </button>
        </section>
        <section className="hero-text">
          <h3>
            Unleash the Power of Words with Our Quote App: Discover, Create, and
            Share Inspirational Quotes!
          </h3>
          <p>
            Introducing our powerful and user-friendly quote app! Discover a
            world of inspiration at your fingertips with our vast collection of
            quotes from famous authors, philosophers, and thought leaders.
            Easily add your own favorite quotes and customize your personal
            collection. Share meaningful quotes with friends, family, and social
            media followers to spread positivity and wisdom. Whether you're
            seeking motivation, reflection, or just a dose of daily inspiration,
            our quote app is your go-to resource. Download now and let the magic
            of words inspire your soul!
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
