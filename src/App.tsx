import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is header text Zijun Chen from CISC275</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <img
                    src="/homepage/logo192.png"
                    alt="A pic of logo"
                    style={{ width: "200px", height: "auto" }}
                />
            </div>
            <div>
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100%",
                                    height: "120px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100%",
                                    height: "120px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
