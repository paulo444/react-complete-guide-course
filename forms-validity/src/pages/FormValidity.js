import Card from "./Card";
import styles from "../styles/formvalidity.module.css"
import { useState } from "react";

function FormValidity(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isTouchedName, setIsTouchedName] = useState(false);
    const [isTouchedEmail, setIsTouchedEmail] = useState(false);

    const isInvalidName = name.trim() === "" && isTouchedName;
    const isInvalidEmail = !email.includes("@") && isTouchedEmail;

    let isFormValid = false;

    if((!isInvalidName && !isInvalidEmail) && (isTouchedName && isTouchedEmail)){
        isFormValid = true;
    }

    function submitHandler(event){
        event.preventDefault();

        if(isInvalidEmail || isInvalidEmail){
            return;
        }

        setName("");
        setEmail("");
        setIsTouchedEmail(false);
        setIsTouchedName(false);
    }

    function onChangeHandler(event){
        if(event.target.id === "name"){
            setName(event.target.value);
        }else{
            setEmail(event.target.value);
        }
    }

    function onBlurHandler(event){
        if(event.target.id === "name"){
            setIsTouchedName(true);
        }else{
            setIsTouchedEmail(true);
        }
    }

    return (<Card>
        <form onSubmit={submitHandler}>
            <label>Name: </label>
            <input type="text" id="name" onChange={onChangeHandler} value={name} onBlur={onBlurHandler}></input>
            {isInvalidName && <p className={styles.error}>Enter a valid name</p>}
            <br/>
            <label>Email: </label>
            <input type="email" id="email" onChange={onChangeHandler} value={email} onBlur={onBlurHandler}></input>
            {isInvalidEmail && <p className={styles.error}>Enter a valid email address</p>}
            <br/>
            <button disabled={!isFormValid} className={styles["submit-button"]} type="submit">Submit</button>
        </form>
    </Card>)
}

export default FormValidity;