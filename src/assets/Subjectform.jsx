import { useState } from "react";
function SubjectForm(){
    const [name,setName]=useState("");
    const handleAdd=({addSubject})=>{
        if(!name){
            return;
        }
        addSubject(name);
        setName("");
    }
    return(
        <div className="form">
            <input type="text" placeholder="Enter the subject" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={handleAdd}>Add Subject</button>
        </div>
    );
}
export default SubjectForm;