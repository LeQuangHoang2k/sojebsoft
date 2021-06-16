import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Index() {
    const [x, setX] = useState([]);

    useEffect(() => {
        LoadData();
    }, []);

    const LoadData = async () => {
        const res = await axios.get("/api");
        setX(res.data);
    };

    return (
        <div className="container" style={{ backgroundColor: "red" }}>
            {x.map((item) => {
                return (
                    <div key={item.id}>
                        {item.name}, {item.email}
                    </div>
                );
            })}
        </div>
    );
}

export default Index;

// if (document.getElementById('app')) {
//     ReactDOM.render(<Index />, document.getElementById('app'));
// }
