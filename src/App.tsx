import "./App.css";
import Button from "./components/html/Button";

import List from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import Text from "./components/polymorphic/Text";

function App() {
  return (
    <div className="App">
      <h1>React With Typescript</h1>
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(number) => console.log(number)} /> */}
      {/* <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, first: "Diana", last: "Princess" },
        ]}
        onClick={(name) => console.log(name.first)}
      /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position="center" /> */}
      {/* <Button variant="primary" onClick={() => console.log("Button clicked")}>
        Primary Button
      </Button> */}
      <Text as="h3" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someid" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
