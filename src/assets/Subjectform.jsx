import { useState } from "react";
import "./Subjectform.css";
function SubjectForm({addSubject}){
    const [name,setName]=useState("");
    const handleAdd=()=>{
        if(!name.trim()){
            return;
        }
        addSubject(name);
        setName("");
    }
    return(
        <div className="form">
            <input type="text" placeholder="Enter the subject" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
export default SubjectForm;