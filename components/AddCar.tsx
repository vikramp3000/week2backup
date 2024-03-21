// import React from "react";

// const AddCar = () => {
//   return <div>Add car</div>;
// };

// export default AddCar;

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Slider,
  Button,
  SelectChangeEvent,
} from "comp-library-vt-vp";

const AddCar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState(0);
  const [trees, setTrees] = useState(0);

  const handleMakeChange = (event: SelectChangeEvent) => {
    setMake(event.target.value);
  };

  const handleModelChange = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };

  const handleMileageChange = (event: Event, newValue: number | number[]) => {
    setMileage(newValue as number);
  };

  useEffect(() => {
    setTrees(mileage * 0.009);
  }, [mileage]);

  return (
    <Card sx={{ width: "33.33vw", margin: "auto" }}>
      <CardContent>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="make-label">Make</InputLabel>
          <Select labelId="make-label" value={make} onChange={handleMakeChange}>
            {/* Replace with your options */}
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="model-label">Model</InputLabel>
          <Select
            labelId="model-label"
            value={model}
            onChange={handleModelChange}
          >
            {/* Replace with your options */}
            <MenuItem value="Corolla">Corolla</MenuItem>
            <MenuItem value="Civic">Civic</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography id="mileage-slider" gutterBottom>
            Mileage
          </Typography>
          <Slider
            aria-labelledby="mileage-slider"
            value={mileage}
            onChange={handleMileageChange}
            valueLabelDisplay="auto"
            step={1000}
            marks
            min={0}
            max={200000}
          />
        </Box>
        <Typography variant="h6" gutterBottom>
          Trees to offset mileage: {trees.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Buy Trees
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddCar;
