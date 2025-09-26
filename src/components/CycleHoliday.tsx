import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Spring Festival"
    | "Qingming Festival"
    | "Dragon Boat Festival"
    | "Mid-Autumn Festival"
    | "Double Ninth Festival";

export const emoji: Record<Holiday, string> = {
    "Spring Festival": "🧧",
    "Qingming Festival": "🕯️",
    "Dragon Boat Festival": "🛶",
    "Mid-Autumn Festival": "🌕",
    "Double Ninth Festival": "🌼",
};

export const byYear: Record<Holiday, Holiday> = {
    "Spring Festival": "Qingming Festival",
    "Qingming Festival": "Dragon Boat Festival",
    "Dragon Boat Festival": "Mid-Autumn Festival",
    "Mid-Autumn Festival": "Double Ninth Festival",
    "Double Ninth Festival": "Spring Festival",
};

export const byAlphabet: Record<Holiday, Holiday> = {
    "Double Ninth Festival": "Dragon Boat Festival",
    "Dragon Boat Festival": "Mid-Autumn Festival",
    "Mid-Autumn Festival": "Qingming Festival",
    "Qingming Festival": "Spring Festival",
    "Spring Festival": "Double Ninth Festival",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Spring Festival");
    return (
        <div>
            <div>Holiday: {emoji[holiday]}</div>
            <Button
                onClick={() => {
                    setHoliday(byAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(byYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
