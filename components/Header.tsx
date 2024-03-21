import React from "react";
import { Box } from "comp-library-vt-vp";
import Link from "next/link";

interface HeaderProps {
  counter: number;
}

const Header: React.FC<HeaderProps> = ({ counter }) => {
  return (
    <>
      <Box
        sx={{
          //   backgroundImage: `url('/bg.svg')`, // Reference your SVG background here
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "100% 100%", // Stretch the SVG to cover the full width and height of the Box
          //   backgroundPosition: "center", // Center the background image
          //   width: "100vw", // Set the width to the full viewport width
          //   height: "100%", // Set the height to 100%
          backgroundColor: "#FBFBFB",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: "normal",
            paddingTop: "15px",
            paddingBottom: "15px",
            backgroundColor: "#98C05E",
            color: "#15361e",
          }}
        >
          Done in partnership with{" "}
          <Box
            component="a"
            href="https://www.heyauto.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              cursor: "pointer",
              fontWeight: "bold", // make the font bold
              textDecoration: "underline", // underline the text
              color: "#15361e", // change the color to green
            }}
          >
            Hey Auto
          </Box>{" "}
          the worlds first carbon-neutral car marketplace
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "40px",
            backgroundColor: "#FBFBFB",
            // position: "relative", // Make sure the Box is positioned
            // zIndex: -1, // Set the zIndex to -1 to make it appear behind other elements
          }}
        >
          <img src="/carlogo.svg" height={200} alt="Car Logo" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10rem", // adjust as needed
            fontWeight: "bold", // make the font bold
            color: "#15361e", // change the color to green
            backgroundColor: "transparent",
            marginTop: "0px", // adjust as needed
          }}
        >
          {counter.toLocaleString()}
        </Box>
      </Box>
    </>
  );
};

export default Header;
