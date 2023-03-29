import styles from "./Sort.module.scss";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
const Sort = ({ sortByPrice, sortByHighPrice, sortByDefault }) => {
  const [price, setPrice] = useState("");
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={styles.sortBlock}>
      <FormControl sx={{ marginRight: 10, minWidth: "150px" }}>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          color="primary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Price"
          value={price}
          onChange={handleChangePrice}
        >
          <MenuItem onClick={sortByPrice} value={"price: low to high"}>
            price: low to high
          </MenuItem>
          <MenuItem onClick={sortByHighPrice} value={"price: high to low"}>
            price: high to low
          </MenuItem>
          <MenuItem onClick={sortByDefault} value={"Default"}>
            Default
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
