import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function Login({onLoginSubmit}) {

    const [pseudoInput, setPseudoInput] = useState("");

    return (
        <>
            <header>
                <h1>Login</h1>
            </header>
            <main>
                <label>Votre Pseudo : </label>
                <input type="text"
                       value={pseudoInput}
                       onChange={
                           (e) => setPseudoInput(e.target.value)
                       }/>
                <div>
                    <button onClick=
                                {
                                    () => onLoginSubmit(pseudoInput)
                                }
                    >ACCEDER
                    </button>
                </div>
            </main>
        </>
    );
}