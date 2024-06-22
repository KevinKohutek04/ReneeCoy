import React from "react";
import './FrontPage.css';

function FrontPage() {
    return (
        <div className="MainBox">
            <header className="Header">
                <h1 className="Title">Our Fish</h1>
                <h2 className="SubTitle">Explore our variety of fish</h2>
            </header>
            <main className="MainContent">
                <section className="FishSection">
                    <div className="FishCard">
                        <img src="path/to/fish1.jpg" alt="Fish 1" className="FishImage"/>
                        <h3 className="FishTitle">Fish 1</h3>
                        <p className="FishDescription">Description of Fish 1.</p>
                    </div>
                    <div className="FishCard">
                        <img src="path/to/fish2.jpg" alt="Fish 2" className="FishImage"/>
                        <h3 className="FishTitle">Fish 2</h3>
                        <p className="FishDescription">Description of Fish 2.</p>
                    </div>
                    {/* Add more fish cards as needed */}
                </section>
            </main>
        </div>
    );
}

export default FrontPage;

//Title SubTitle SubText
//background oof main body  238, 231, 221