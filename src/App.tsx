import "./App.scss";
import Spline3D from "./Spline3D";


function App() {
  return (
    <div className="App">
      <h1>CSS Tricks</h1>

      <div className="modules">
        <div className="next-js-border-animation">
          <h2 className="subtitle">Next JS Border Animation</h2>
          <div className="thirteen"></div>
        </div>

        <div className="gradient-border-animation">
          <h2 className="subtitle">Gradient Border Animation</h2>

          <div className="card"></div>
        </div>

        <div className="responsive-grid">
          <h2 className="subtitle">Responsive Grid</h2>

          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>

        <div className="snap-carousel">
          <h2 className="subtitle">Snap Carousel</h2>

          <div className="container">
            <div className="item" style={{ backgroundColor: "red" }}></div>
            <div className="item" style={{ backgroundColor: "green" }}></div>
            <div className="item" style={{ backgroundColor: "blue" }}></div>
          </div>
        </div>

        <div className="fluid-form">
          <h2 className="subtitle">Fluid Form</h2>

          <form>
            <input type="text" placeholder="Name" className="name" />
            <input type="email" placeholder="Email" className="email" />
            <button className="">Subscribe</button>
          </form>
        </div>

        <div className="hover-siblings">
          <h2 className="subtitle">Hover Siblings</h2>
          <div className="container">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>

        <div className="gradients">
          <h2 className="subtitle">Gradients</h2>

          <div className="container">
            <div className="card gradient-fiery-blaze"></div>
            <div className="card gradient-warm-sea"></div>
            <div className="card gradient-dandelion"></div>
            <div className="card gradient-lavender"></div>
            <div className="card gradient-seabird"></div>
            <div className="card gradient-peachy"></div>
            <div className="card gradient-purple-flamingo"></div>
            <div className="card gradient-golden-garden"></div>
          </div>
        </div>

        <div className="analog-button">
          <h2 className="subtitle">Analog Button</h2>
          <button>CLICK HERE</button>
        </div>

        <div className="card-grow-effect">
          <h2 className="subtitle">Card Grow Effect</h2>
          <div className="container">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>

        <div className="card-interaction">
          <h2 className="subtitle">Card Interaction</h2>
          <div className="card">
            <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
          </div>
        </div>

        <div className="autocomplete">
          <h2 className="subtitle">Autocomplete</h2>

          <input list="items" name="items" id="item" />
          <datalist id="items">
            <option value="Apple"></option>
            <option value="Banana"></option>
            <option value="Orange"></option>
            <option value="Mango"></option>
            <option value="Pineapple"></option>
          </datalist>
        </div>

        <div className="gradient-animation">
          <h2 className="subtitle">Gradient Animation</h2>

          <div className="background"></div>
        </div>

        <div className="slanted-shape">
          <h2 className="subtitle">Slanted Shape</h2>

          <div className="container">
            <div className="shape"></div>
          </div>
        </div>

        <div className="button-shimmer">
          <h2 className="subtitle">Button Shimmer</h2>
          <button className="shimmer-btn">Buy Now</button>
        </div>
        <div className="underline-hover-effect">
          <h2 className="subtitle">Underline Hover Effect</h2>
          <ul className="container">
            <li>
              <p>Link</p>
            </li>
            <li>
              <p>Link</p>
            </li>
            <li>
              <p>Link</p>
            </li>
          </ul>
        </div>

        <div className="simple-overlay">
          <h2 className="subtitle">Simple Overlay</h2>
          <div className="container"></div>
        </div>

        <div className="conditional-display">
          <h2 className="subtitle">Conditional Display</h2>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>

        {/* <div className="spline-3d">
          <canvas id="canvas3d" className="container">
            <Spline3D />
          </canvas>
        </div> */}



        <div className="invalid-input">
          <h2 className="subtitle">Invalid Input</h2>
          <div className="container">
            <input type="text" placeholder="Name" pattern="[a-z]*"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
