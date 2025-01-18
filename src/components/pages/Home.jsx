import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

import profile from "../../assets/profile.jpg";

const IntroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        paddingTop : "200px",
        backgroundColor: "#121212",
        color: "#ffffff",
        height: "100vh",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          marginLeft: "0px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Hi, I'm Abid
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginTop: "20px", marginBottom: "10px", color: "#cfcfcf" }}
        >
          Crafting Intuitive and Impactful
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", color: "#cfcfcf" }}
        >
          Digital Experiences
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px 10px",
            backgroundColor: "#1e88e5",
            borderRadius: "20px",
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          Product Design
        </Typography>

        <Typography
          variant="body2"
          sx={{ marginTop: "20px", color: "#a0a0a0" }}
        >
          UI/UX | Product Design Lead | 5+ Years Experience
        </Typography>

        {/* Buttons */}
        <Box sx={{ marginTop: "30px" }}>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              color: "#ffffff",
              borderColor: "#ffffff",
              textTransform: "none",
            }}
          >
            View Resume
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1e88e5",
              color: "#ffffff",
              textTransform: "none",
            }}
          >
            Book a Call
          </Button>
        </Box>
      </Box>

      {/* Right Section */}
      <Avatar
        src={profile} // Replace with your image path
        alt="Abid"
        sx={{
          width: "300px",
          height: "300px",
          borderRadius: "5px",
          // marginRight :"200px"
        }}
      />
    </Box>
  );
};

export default IntroSection;
