import FlightList from "./components/flight-list/flight-list";
import FilterForm from "./components/filter-form/filter-form";

function App() {

    return (
        <div className="container d-flex page">
            <FilterForm/>
            <FlightList/>
        </div>
    );
}

export default App;
