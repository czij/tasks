import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [giveAnswer, setGivenAnswer] = useState<string>("");
    function updateAanswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control value={giveAnswer} onChange={updateAanswer} />
            </Form.Group>
            {giveAnswer === expectedAnswer ? " ✔️" : "❌"}
        </div>
    );
}
