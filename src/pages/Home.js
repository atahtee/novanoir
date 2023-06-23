import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="noir-dark"> Noir Dark </div>
        <div className="noir-statement">
          A cool light <span className="span-statement"> green</span> <br /> colour
          theme
        </div>
        <label for="task">Available on:</label>
        <select id="task" name="task">
          <option value="task1">Visual Studio</option>
          <option value="task2">iTerm2</option>
        </select>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=atatijr.nova-noir-dark"
          className="link"
        >
          Check It Out
        </a>
      </div>
      <div className="image-container">
        <img src="/images/herone.png" alt="code" />
      </div>
      <div className="madeby">
        <h4 className="atati">
          Made by<span className="madebyatati"><a href="https://github.com/atahtee">Atati</a></span>
        </h4>
      </div>
    </div>

    
  );
};

export default Home;
