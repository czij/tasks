import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, steAttemptsLeft] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    function useOne() {
        if (attemptsLeft > 0) {
            steAttemptsLeft((attempts) => attempts - 1);
        }
    }
    function gain() {
        const n = parseInt(request, 10);
        if (!Number.isNaN(n)) {
            steAttemptsLeft((attempts) => attempts + n);
        }
    }
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <Form.Group controlId="formrequest">
                <Form.Label>Request attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button onClick={gain}>gain</Button>
            <Button onClick={useOne} disabled={attemptsLeft <= 0}>
                use
            </Button>
        </div>
    );
}
