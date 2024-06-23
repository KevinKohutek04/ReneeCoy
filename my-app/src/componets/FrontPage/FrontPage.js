import React from "react";
import './FrontPage.css';
import Spacer from "../Utility/Spacer";
import IntroSection from "../IntroSection/IntroSection";

function FrontPage() {
    return (
        <div className="Background">
             <div className="CenteredContent">
                <IntroSection />
                <Spacer amount={20}/>
            </div>
        </div>
    );
}

export default FrontPage;

//Title SubTitle SubText
//background oof main body  238, 231, 221
/*
             <div className="MainContent">
                <Spacer amount={20}/>
             </div>
*/