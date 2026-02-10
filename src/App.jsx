import "./App.css";
import PreserveState from "./Components/PreserveState.jsx";
import ResetState from "./Components/ResetState.jsx";
import ResetStateSamePositonConditionBased from "./Components/ResetStateSamePositonConditionBased.jsx";
import RendringComponentsDifferentPosition from "./Components/RendringComponentsDifferentPosition";
import ResettingStateWithKey from "./Components/ResettingStateWithKey";
import ResettingFormWithKey from "./Components/ResettingFormWithKey";
import FixedDisappearingInputText from "./Components/FixedDisappearingInputText";
import SwapTwoFormFields from "./Components/SwapTwoFormFields";
import ResetDetailForm from "./Components/ResetDetailForm";
import ClearImageWhileLoading from "./Components/ClearImageWhileLoading";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-4">
        Preserving and Resetting State
      </h1>
      <PreserveState />
      <ResetState />
      <ResetStateSamePositonConditionBased />
      <RendringComponentsDifferentPosition />
      <ResettingStateWithKey />
      <ResettingFormWithKey />
      <FixedDisappearingInputText />
      <SwapTwoFormFields />
      <ResetDetailForm />
      <ClearImageWhileLoading />
    </>
  );
}

export default App;
