import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black",
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={updateColor}
                    style={{
                        backgroundColor: c,
                        color: c === "black" ? "white" : "black",
                    }}
                />
            ))}
            <div></div>
            <div
                data-testid="colored-box"
                style={{
                    height: "50px",
                    backgroundColor: color,
                    color: color === "black" ? "white" : "black",
                    padding: "10px",
                    marginTop: "10px",
                    display: "inline-block",
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
