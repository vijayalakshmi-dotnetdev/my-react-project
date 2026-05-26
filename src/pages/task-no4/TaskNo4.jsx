import { useState } from "react";

import Veg from "../../assets/json/vegList.json";
import Nonveg from "../../assets/json/nonvegList.json";

export default function SelectBoxEvents() {

  const [vegList, setVegList] = useState(Veg);
  const [nonvegList, setNonvegList] = useState(Nonveg);

  const [selectedCategory, setSelectedCategory] = useState("Select");

  return (
    <div>

      <h1>Menu List</h1>

      <select
        onChange={(event) =>
          setSelectedCategory(event.target.value)
        }
      >
        <option value="Select">-- Select --</option>

        <option value="Veg">Veg</option>

        <option value="Non Veg">Non Veg</option>
      </select>

      <div>

        {
          selectedCategory === "Select" ?

            <p>Please select a category</p>

            :

            <div>

              <p>
                Your selected category is:
                {selectedCategory}
              </p>

              <h2>{selectedCategory} Menu List</h2>

              <select>

                {
                  selectedCategory === "Veg"

                    ?

                    vegList.map((value, index) => (
                      <option key={index}>
                        {value.name}
                      </option>
                    ))

                    :

                    nonvegList.map((value, index) => (
                      <option key={index}>
                        {value.name}
                      </option>
                    ))
                }

              </select>

            </div>
        }

      </div>

    </div>
  );
}