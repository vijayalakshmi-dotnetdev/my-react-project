import { useState } from "react";

export default function SearchBoxEvent() {

    const fruitsData = ["apple", "orange", "grapes"];

    const [fruit, setFruitList] = useState(fruitsData);
    const [searchText, setSearchText] = useState("");

   

    const handleSearch = () => {

        if (searchText.length === 0) {
            setFruitList(fruitsData);
            return;
        }

        /*
        const filterFruits = fruitsData.filter(
            (value) => value.toLowerCase() === searchText.toLowerCase()
        );
        */

         const filterFruits = fruitsData.filter(
            (value) => value.startsWith(searchText.toLowerCase())
        );

        setFruitList(filterFruits);
    };


    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={(event) => setSearchText(event?.target?.value)}
                    value={searchText}
                />

                <button onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div>
                <h3>Fruit List</h3>

                {fruit.map((value, index) => (
                    <p key={index}>{value}</p>
                ))}
            </div>
        </div>
    );
}