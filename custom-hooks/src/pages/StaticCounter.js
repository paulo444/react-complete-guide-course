import useCounter from "../hooks/usecounter";
import Card from "./Card";

function StaticCouter(){
    const counter = useCounter(0);

    return <Card>{counter}</Card>;
};

export default StaticCouter;