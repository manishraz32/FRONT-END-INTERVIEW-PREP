import React from 'react'
import '../App.css';
const Card = ({ tasks, allData, setAllData }) => {
    const handleTaskClick = (id) => {
        const modifiedAllData = allData.map((data) => {
            if (data.id === id) {
                return { ...data, selected: true }
            }
            return data;
        })
        setAllData(modifiedAllData);
    }
    return (
        <div className="card">
            {
                tasks?.map((data) => (
                    <div
                        key={data.id}
                        className="task"
                        style={{
                            backgroundColor: data.selected ? "black" : "",
                            color: data.selected ? "white" : "black",
                        }}
                        onClick={() => handleTaskClick(data.id)}
                    >
                        {data.name}
                    </div>

                ))

            }
        </div >
    )
}

export default Card