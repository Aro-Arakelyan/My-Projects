import {useState} from "react";

// noinspection JSCheckFunctionSignatures
export const Pic = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
       return setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div >
            <h2>Application ID:</h2>
            <input className="pic" type="file" onChange={handleChange} />
            <img src={file} height={192} width={192}  alt={""}/>
        </div>

    );
}