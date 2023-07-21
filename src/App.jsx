import './App.css'

function App() {

  return (
    <>
      <header>
        <h3>My Tinerary</h3>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Cities</a>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Find the perfect destination</h1>
          <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button className="callToAction">View More</button>
        </section>
        <img className="heroImg" src="" alt="" />
      </main>
      <footer>
        <p className="copyright">Copyright 2022© Lorenzo Carlos Sebastian - All Rights Reserved</p>
      </footer>
    </>
  )
}

export default App
