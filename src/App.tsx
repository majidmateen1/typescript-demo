import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloTypescript from "./HelloTypescript";
import UnderstandingTypes from "./UnderstandingTypes";
import ArraysAndTuples from "./ArraysAndTuples";
import LiteralsAndEnums from "./LiteralsAndEnums";
import NullvoidAndUndefined from "./NullvoidAndUndefined";
import AnyAndUnknown from "./AnyAndUnknown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HelloTypescript" element={<HelloTypescript />} />
        <Route path="/UnderstandingTypes" element={<UnderstandingTypes />} />
        <Route path="/ArraysAndTuples" element={<ArraysAndTuples />} />
        <Route path="/LiteralsAndEnums" element={<LiteralsAndEnums />} />
        <Route
          path="/NullvoidAndUndefined"
          element={<NullvoidAndUndefined />}
        />
        <Route path="/AnyAndUnknown" element={<AnyAndUnknown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
