import { Drop } from "./Drop";
import "./App.css";
import { CurrencyProvider } from "./context";
import "./index.css";

function App() {
  return (
    <>
      <CurrencyProvider>{<Drop />}</CurrencyProvider>
    </>
  );
}

export default App;
