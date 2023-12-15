import Main from "@/layout/Main";
import { fetchCommonStudent } from "@/redux/studentSlice/studentSlice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the fetchUser thunk on component mount
    dispatch(fetchCommonStudent());
  }, [dispatch]);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
