import { useContext, useRef, useState } from "react";
import { Context } from "../../store/DataStore";
import "bootstrap/dist/css/bootstrap.min.css";

const GetData = () => {
  const { funCall } = useContext(Context);
  const setname = useRef();

  return (
    <form action="">
      <div className="mb-3 post">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Enter Your City Name To Check Weather
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="City Name"
          ref={setname}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            funCall(setname.current.value);
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default GetData;
