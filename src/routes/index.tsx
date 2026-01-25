import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import {
  Button,
  Input,
  Label,
  Switch,
  Image,
  type InputOnChangeData,
  useId,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
  Link,
  Toaster,
} from "@fluentui/react-components";
import { useCallback, useState } from "react";
import { Checkbox } from "@fluentui/react-components";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [text, setText] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [YES, setYES] = useState(false);
  const [NO, setNO] = useState(false);
  const [checked, setChecked] = useState(false);
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
    dispatchToast(
      <Toast>
        <ToastTitle>KYS SENDT!</ToastTitle>
        <ToastBody subtitle="Jeg elsker dig!">DU HAR SENDT ET KYS!!</ToastBody>
      </Toast>,
      { intent: "success" },
    );

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
      <br></br>
      <p>WILL U BE MY VALENTINE?</p>
      <Checkbox
        checked={YES}
        onChange={() => setYES((checked) => !checked)}
        size="large"
        required
        label="YES"
      />
      <Checkbox
        checked={NO}
        onChange={() => setNO((checked) => !checked)}
        disabled
        label="NO"
      />
      <Switch
        checked={checked}
        onChange={(ev) => setChecked(ev.currentTarget.checked)}
        label="Slå til, hvis du elsker din kæreste"
        labelPosition="above"
      />
      <Image
        shadow
        alt="kitty"
        src="https://kattens-vaern.dk/wp-content/uploads/2023/02/Katte-kan-ogsaa-have-nytaarsangst1-1536x1024.webp"
      />
      <br></br>
      <Toaster toasterId={toasterId} />
      <Button onClick={notify}>Send kys til din mega seje kæreste</Button>
    </div>
  );
}
