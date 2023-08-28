import useCounter from '../hooks/usecounter';
import Card from "./Card";

function BackwardCounter() {
  const counter = useCounter(-1);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;