import React from "react";
import Swal from "sweetalert2";
import { GiDiplodocus } from "react-icons/gi";
import { withRouter } from 'react-router-dom';

const Home = ({history}) => {

    const onClickHome = () => history.push('/')
    const onClickTab = (e) => {
        const stringURL = e.target.innerHTML.toLowerCase();
        history.push(`/${stringURL}`)
    }

    const HandleButton = () => {
        Swal.fire({
            icon: "info",
            iconColor: "#fff",
            title: "<h3 style='color:white'>Guess the dino's nickname</h3>",
            confirmButtonColor: "#5e40cb",
            background: "#83c313",
            target:"text" | "#fff"
        });
        }
    return (
        <>
        <h1>Guess Dino's Name</h1>
        <button onClick={onClickHome}><GiDiplodocus size='40' />&nbsp;DinoApp</button>
        <button onClick={onClickTab}>Dinosaurs</button>
        <button onClick={onClickTab}>Quiz</button>
        <button onClick={HandleButton}>Rules</button>
        </>
    );
};

export default withRouter(Home);