import React, { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);

      const res = await fetch(getUrl);
      const result = await res.json();

      if (result && result.products) {
        setData(result.products);
        setLoading(false);
      }

      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollBar = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBar);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [handleScrollBar]);

  return (
    <div>
      <div style={{ position: "fixed", width: "100vw", textAlign: "center" }}>
        <h2 style={{ background: "yellow" }}>Scroll Indicator</h2>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "gray",
          }}
        >
          <div
            style={{
              width: `${scrollPercentage}%`,
              background: "black",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
      <div>
        {data.map((item) => {
          return (
            <>
              <div style={{ textAlign: "center", padding: "15px" }}>
                {item.title}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
