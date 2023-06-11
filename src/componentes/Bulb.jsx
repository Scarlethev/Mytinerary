import React from "react";
import { useState, useEffect } from 'react';
// import "../App.css"

function Bulb() {

    const [isON, setIsON] = useState(false)

    useEffect(
        setIsON =(true),
        [isON])

    return (
        <>
            <div className="bulbs">
                <span className="bulb"></span>
            </div>
        </>
    )

}