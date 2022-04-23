import base from "./assets/flights.json"
import FlightList from "./components/flight-list/flight-list";
import FilterForm from "./components/filter-form/filter-form";

function App() {

    // let  state = {
    //    flights: base,
    //  }
    //  console.log(state)
    return (
        <div className="App">
            <FilterForm/>
            <FlightList/>
        </div>
    );
}

export default App;
