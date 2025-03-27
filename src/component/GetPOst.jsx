import GetData from "./GetData";
import Post from "./Post";
import { Context } from "../../store/DataStore";
import { useContext } from "react";
import Wellcome from "./Wellcome";
const GetPost = () => {
  const { getData } = useContext(Context);
  console.log(getData);
  return (
    <>
      <GetData />;
      {getData == 1006 ? (
        <p>Enter Right name</p>
      ) : getData == undefined ? (
        <Wellcome />
      ) : (
        <Post />
      )}
    </>
  );
};
export default GetPost;
