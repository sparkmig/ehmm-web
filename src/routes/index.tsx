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
  const [text2, setText2] = useState<string>("");

  function handleInputChange(
    _: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
  ) {
    setText(data.value);
  }
  function handleMiavChange(
    _: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
  ) {
    setText2(data.value);
  }
  function showAlert() {
    alert(text + " " + text2);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
      <Label>Dialogtext</Label>
      <Input onChange={handleInputChange}></Input>
      <p>Du har tastet {text.length} tegn</p>
      <br></br>
      <Label>Miav</Label>
      <Input onChange={handleMiavChange}></Input>
      <p>Du har tastet {text2.length} tegn</p>
      <br></br>
      <Button onClick={showAlert}>KISS HUSBAND</Button>
    </div>
  );
}
