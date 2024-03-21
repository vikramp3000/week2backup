import React from "react";
import { Card, CardContent, Typography } from "comp-library-vt-vp";

const leaderboardData = [
  { make: "Toyota", model: "Corolla", trees: 90 },
  { make: "Honda", model: "Civic", trees: 80 },
  { make: "Acura", model: "TL", trees: 70 },
  { make: "Audi", model: "A4", trees: 60 },
];

const Leaderboard = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
        paddingTop={8}
        paddingBottom={6}
      >
        Leaderboard
      </Typography>
      <div>
        {leaderboardData.map((data, index) => (
          <Card key={index} sx={{ width: "33.33vw", margin: "auto", mt: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {data.make} {data.model}
              </Typography>
              <Typography variant="body2">
                Total trees bought: {data.trees}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Leaderboard;
