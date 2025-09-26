import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftdie, setLeftdie] = useState<number>(2);
    const [rightdie, setRightdie] = useState<number>(3);
    return (
        <div>
            <span data-testid="left-die">{leftdie}</span>
            <span data-testid="right-die">{rightdie}</span>
            <Button
                onClick={() => {
                    setLeftdie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightdie(d6());
                }}
            >
                Roll Right
            </Button>
            {leftdie === rightdie && leftdie === 1 && <span>Lose</span>}
            {leftdie === rightdie && leftdie !== 1 && <span>Win</span>}
        </div>
    );
}
