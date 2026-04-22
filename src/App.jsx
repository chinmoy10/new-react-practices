import LineCharts from "./components/LineCharts"
import NavbarCopy from "./components/NavbarCopy"
import PriceOptions from "./components/PriceOptions"

function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}
      <NavbarCopy></NavbarCopy>
      <h1 className='text-teal-500 font-extrabold text-3xl'>Get started our mission</h1>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
    </>
  )
}

export default App
