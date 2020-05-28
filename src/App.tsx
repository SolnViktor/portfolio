import React from 'react';
import './App.css';
import MyProjects from "./myProjects/MyProjects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Title from "./title/Title";
import MySkills from './mySkills/MySkills';



function App() {
    return (

        <div className="App">

            <Title />
            <MySkills />
            <MyProjects />
            <Contacts />
            <Footer />




        </div>

    );
}

export default App;
