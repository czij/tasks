import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-mode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {!editMode ?
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}.
                </div>
            :   <div>
                    <Form.Group controlId="edit-name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>

                    <Form.Group controlId="edit-student">
                        <Form.Check
                            type="checkbox"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>
                </div>
            }
        </div>
    );
}
