
import Countries from './components/Countries/Countries'
import Person from './components/Person/Person'
import Header from './components/Header/Header'
import ArrayEvent from './components/Events/ArrayEvent'
import ObjectEvent from './components/Events/ObjectEvent'
import UseEffect from './components/Events/UseEffect'
import Gun from './components/Others/Gun'
import Watch from './components/Watch/Watch'


function App() {
  return (
    <div className="App">
      <Watch/>
      {/* <Header></Header>
      <ArrayEvent />
      <ObjectEvent />
      <UseEffect/>
      <Gun/> */}
      {/* <Countries></Countries> */}
      {/* <Person></Person> */}


    </div>
  )

}
// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all`)
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Visiting Every Country Of the World</h2>
//       <p>Coutries : {countries.length}</p>
//     </div>
//   )
// }
export default App
