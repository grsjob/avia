import base from "./assets/flights.json"
import FiltersForm from "./components/filters-form/filters-form";

function App() {

    // let  state = {
    //    flights: base,
    //  }
    //  console.log(state)
    return (
        <div className="App">
            <FiltersForm/>
        </div>
    );
}

export default App;
