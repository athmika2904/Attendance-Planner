import { useState,useEffect } from 'react';
import SubjectForm from './assets/Subjectform';
import Subjectcard from './assets/Subjectcard';
import "./App.css";

function App() {
  const [subject,setSubject]=useState(()=>{
  const saved=localStorage.getItem("subject");
  return saved?JSON.parse(saved):[]});
  useEffect(()=>{
    localStorage.setItem("subject",JSON.stringify(subject));
  },[subject]);
  const addSubject=(name)=>{
    const newSubject={
      id:Date.now(),
      name,
      attended:0,
      total:0
    }
    setSubject(prev=>[...prev,newSubject]);
  }
  const MarkPresent=(id)=>{
    setSubject(subject.map((sub)=>{
      return sub.id===id?{...sub,attended:sub.attended+1,total:sub.total+1}:sub
    }));
  }
  const MarkAbsent=(id)=>{
    setSubject(subject.map((sub)=>{
      return sub.id===id?{...sub,total:sub.total+1}:sub
    }));
  }
  const DeleteSubject=(id)=>{
    setSubject(subject.filter((sub)=>
      sub.id!==id
    ));
  }
  return (
    <div className='Plannercard'>
      <h1>Attendance Planner</h1>
      <SubjectForm addSubject={addSubject}/>
      {subject.map((sub)=>(
        <Subjectcard key={sub.id} subject={sub} MarkPresent={MarkPresent} MarkAbsent={MarkAbsent} DeleteSubject={DeleteSubject}/>
      ))}
    </div>
  );
}

export default App;
