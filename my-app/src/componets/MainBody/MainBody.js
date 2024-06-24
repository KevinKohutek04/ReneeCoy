import React from "react";
import './MainBody.css';
import GreyLine from "../Utility/GreyLine";
import Spacer from "../Utility/Spacer";

function MainBody () {
    return (
        <div className="MainBody-Main">
            <div className="MainBody-Title">
                <span className="Title">OUR KOI FISH</span>
                <span className="SubText">Renee's Fish Farm is a local, newly established koi farm focused on providing healthy,
                     vibrant koi. We use high-quality heaters and coolers to maintain optimal water temperatures and have an advanced
                      filtration system to ensure clean and safe water for our fish. Our farm is dedicated to raising koi in the best
                       possible environment, ensuring their well-being and quality.</span>
            </div>
            <Spacer amount={1} />
            <GreyLine />
            <div className="MainBody-Table">

            </div>
        </div>

    );
}

export default MainBody;
////Title SubTitle SubText