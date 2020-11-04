import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import TheContent from "./containers/content";
import { fetchVideos, setLoading } from "./state/actions";

export async function loadData(dispatch: Dispatch) {
  dispatch(setLoading(true));
  // load data
  await dispatch(fetchVideos() as any);
  dispatch(setLoading(false));
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadData(dispatch);

    return () => {};
  }, []);

  return (
    <div className="App">
      <TheContent />
    </div>
  );
}

export default App;
