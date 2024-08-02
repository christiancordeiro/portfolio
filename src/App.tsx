import Connect from "./Pages/Connect"
import Header from "./Pages/Header"
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import QuemSou from "./Pages/QuemSou"

function App() {
  return (
    <>
      <div className="md:px-24 lg:px-44 xl:px-60 py-8 px-12 w-full ">
        <Header />
        <Home />
        <Portfolio />
        <QuemSou />
        <Connect />
      </div>
    </>
  )
}

export default App
