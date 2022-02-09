import './App.css';
import React from "react";
import News from "./routes/News/News";
import {Route, Routes} from "react-router-dom";
import Shop from "./routes/Shop/Shop";
import General from "./routes/General/General";
import Courses from "./routes/Courses/Courses";

function App() {
    return (
        <Routes>

            <Route exact path="/" element={<General/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/courses" element={<Courses/>}/>


        </Routes>
    );
}

export default App;
