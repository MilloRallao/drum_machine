import { React, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Contenedor() {
    const keyCodes = {
        Q: 81,
        W: 87,
        E: 69,
        A: 65,
        S: 83,
        D: 68,
        Z: 90,
        X: 88,
        C: 67
    }

    const [displayText, setDisplayText] = useState("Click any button!");

    const handleClick = (e) => {
        const audioElement = document.getElementById(e.target.name);
        audioElement.currentTime = 0;
        audioElement.play();
        setDisplayText(e.target.id)
    }

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress);
    })

    const onKeyPress = (e) => {
        for (const i in keyCodes) {
            if (e.keyCode === keyCodes[i]) {
                const audioElement = document.getElementById(i)
                audioElement.currentTime = 0;
                audioElement.play();
                const elementId = document.getElementsByName(i)[0].id
                setDisplayText(elementId)
            }
        }
    }

    return (
        <Container sx={{ mx: 'auto', width: 200 }}>
            <Box sx={{
                textAlign: 'center',
                fontWeight: 'bold'
            }}>
                <h4>{displayText}</h4>
            </Box>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                <Button name="Q" id="effect1" variant="contained" onClick={handleClick}>
                    Q
                    <audio className="clip" id="Q" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-D.wav" />
                </Button>
                <Button name="A" id="effect4" variant="contained" onClick={handleClick}>
                    A
                    <audio className="clip" id="A" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-Em.wav" />
                </Button>
                <Button name="Z" id="effect7" variant="contained" onClick={handleClick}>
                    Z
                    <audio className="clip" id="Z" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-E.wav" />
                </Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                <Button name="W" id="effect2" variant="contained" onClick={handleClick}>
                    W
                    <audio className="clip" id="W" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-F.wav" />
                </Button>
                <Button name="S" id="effect5" variant="contained" onClick={handleClick}>
                    S
                    <audio className="clip" id="S" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-A.wav" />
                </Button>
                <Button name="X" id="effect8" variant="contained" onClick={handleClick}>
                    X
                    <audio className="clip" id="X" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-G.wav" />
                </Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                <Button name="E" id="effect3" variant="contained" onClick={handleClick}>
                    E
                    <audio className="clip" id="E" src="http://whyyouhearwhatyouhear.com/chapterfiles/Problems/soundfiles/AHDN-chord.wav" />
                </Button>
                <Button name="D" id="effect6" variant="contained" onClick={handleClick}>
                    D
                    <audio className="clip" id="D" src="http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-C.wav" />
                </Button>
                <Button name="C" id="effect9" variant="contained" onClick={handleClick}>
                    C
                    <audio className="clip" id="C" src="http://www.guitarsecrets.com/scales/fmajor.wav" />
                </Button>
            </Stack>
        </Container>
    )
}

export default Contenedor;