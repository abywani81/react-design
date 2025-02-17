import React, { useState } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import "@fontsource/unbounded"; // Defaults to weight 400
import profile from "../../assets/profile.jpg";
// import { FormatAlignJustifyOutlined } from "@mui/icons-material";

const IntroSection = () => {
  const [state, setState] = useState("Product design");


  

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection : {sm : "row" ,  xs : "column"},
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: { md: "10px", sm: "10px" },
          backgroundColor: "#121212",
          color: "#ffffff",
          minHeight: "50vh",
        }}
      >
     
        <Box
          width={"xs"}
          sx={{
            marginLeft: "0px",
          }}
        >
          <Typography
            // variant="h1"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "rgba(0, 0, 0, 0.1)", // Black color with 20% opacity
                WebkitTextStroke: "3px white", // White stroke
                WebkitTextFillColor: "rgba(0, 0, 0, 0.2)", // Ensures fill respects the opacity
                fontSize: "5vw",
                margin: "0 0 0 0", // Add a small margin for spacing
              }}
            >
              Hi
            </p>
            <p
              style={{
                fontFamily: "'Unbounded', sans-serif", // Apply the Unbounded font
                margin: "0 0 0 10px", // Add a small margin for spacing,
                fontSize: "5vw",
              }}
            >
              , I'm Abid Wani
            </p>
          </Typography>

          <Typography
            // variant="h4"
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              color: "#cfcfcf",
              fontFamily: "Unbounded",
              fontSize: "2vw",
            }}
          >
            Crafting Intuitive and Impactful
          </Typography>

          <Typography
            // variant="h4"
            sx={{
              marginBottom: "20px",
              color: "#cfcfcf",
              fontFamily: "Unbounded",
              fontSize: "2vw",
            }}
          >
            Digital Experiences
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                marginLeft: "20px",
                fontWeight: "800",
                color: "white",
                border: "2px solid green",
                fontSize: "1vw",
                // padding : "5px 10px"
              }}
            >
              {state}
            </Button>
          </Typography>

          <Typography
            sx={{
              marginTop: "20px",
              color: "#a0a0a0",
              fontSize: "calc(0.25rem + 1vw)",
            }}
          >
            UI/UX | Product Design Lead | 5+ Years Experience
          </Typography>

        </Box>

     

        <Box width={"xs"}>
          <Avatar
            src={profile} 
            alt="Abid"
            sx={{
              width: "30vw",
              height: "35vw",
              borderRadius: "10px",
              // marginRight :"200px"
            }}
          />
        </Box>


      </Box>



      
    </Box>
  );
};

export default IntroSection;
