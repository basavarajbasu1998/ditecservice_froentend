import { Button } from "@mui/material";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const CustomButton = ({ to, backgroundColor, title }) => {
    const navigate = useNavigate();

    const handlePress = () => {
        navigate(to);
    };
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyles = {
        width: "150px",
        height: "38px",
        backgroundColor: isHovered ? "#1f5385" : backgroundColor || "#2a75bb",
        color: "white",
        border: "none",
        borderRadius: "20px",
        fontSize: "14px",

    };

    return (
        <Button
            variant="contained"

            sx={{ boxShadow: "none" }}
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handlePress}
        >
            {title}
        </Button>
    );
};

export default CustomButton;
