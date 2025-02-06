import React from 'react';
import './Bulb.css'

const Bulb = ({ color }) => {

    return (
        <>
            <div
                class="outer"
                style={{
                    backgroundColor: color,
                }}
            >

            </div>
        </>
    )
}

export default Bulb;