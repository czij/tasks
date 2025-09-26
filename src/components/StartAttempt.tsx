import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inprogress, setInprogress] = useState<boolean>(false);
    return (
        <div>
            <div>attempts left{attempts}</div>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setInprogress(true);
                }}
                disabled={attempts === 0 || inprogress}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInprogress(false);
                }}
                disabled={!inprogress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inprogress}
            >
                Mulligan
            </Button>
        </div>
    );
}
