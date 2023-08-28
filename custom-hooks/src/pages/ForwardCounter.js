import useCounter from '../hooks/usecounter'
import Card from "./Card";

function ForwardCounter () {
  const counter = useCounter(1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
