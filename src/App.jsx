import { NameProvider } from "./NameContext";
import Parent from "./Parent";

function App() {
  return (
    <NameProvider>
      <Parent></Parent>
    </NameProvider>
  );
}

export default App;
