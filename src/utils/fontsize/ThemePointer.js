import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Button } from '@mui/material';



const ThemePointer = () => {
    const [fontSize, setFontSize] = useState(16); // Initial font size

    const theme = createTheme({
        typography: {
            fontSize: fontSize,
            h1: { fontSize: `${fontSize * 2}px` },
            h2: { fontSize: `${fontSize * 1.75}px` },
            h3: { fontSize: `${fontSize * 1.5}px` },
            h4: { fontSize: `${fontSize * 1.25}px` },
            h5: { fontSize: `${fontSize * 1}px` },
            h6: { fontSize: `${fontSize * 0.875}px` },
            body1: { fontSize: `${fontSize}px` },
            body2: { fontSize: `${fontSize * 0.875}px` },
            caption: { fontSize: `${fontSize * 0.75}px` },
            button: { fontSize: `${fontSize * 0.875}px` },
            overline: { fontSize: `${fontSize * 0.75}px` },
        },
    });

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => prevSize - 2);
    };

    const resetFontSize = () => {
        setFontSize(16); // Reset to default size
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
               
            </Container>
        </ThemeProvider>
    );
};

export default ThemePointer;


