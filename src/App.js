import './App.css';
import React from "react";
import News from "./routes/News/News";
import {Route, Routes} from "react-router-dom";
import Shop from "./routes/Shop/Shop";
import General from "./routes/General/General";
import Courses from "./routes/Courses/Courses";
import ContextData from "./context/Data/ContextData";
import ReducerData from "./context/Data/ReducerData";
import StateData from "./context/Data/StateData";

function App() {

    const [stateData, dispatchData] = React.useReducer(ReducerData, StateData);

    return (

        <ContextData.Provider value={{stateData, dispatchData}}>

            <Routes>
                <Route exact path="/" element={<General/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/courses" element={<Courses/>}/>
            </Routes>

        </ContextData.Provider>


    );
}

export default App;
