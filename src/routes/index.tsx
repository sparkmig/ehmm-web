import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import {
  Button,
  Input,
  Label,
  type InputOnChangeData,
} from "@fluentui/react-components";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [text, setText] = useState<string>("");

  function handleInputChange(
    _: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
  ) {
    setText(data.value);
  }
  function showAlert() {
    alert(text);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
      <Label>Dialogtext</Label>
      <Input onChange={handleInputChange}></Input>
      <br></br>
      <Button onClick={showAlert}>KISS HUSBAND</Button>
    </div>
  );
}
