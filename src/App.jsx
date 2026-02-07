import { useState } from 'react';
import SubjectForm from './assets/Subjectform';
import Subjectcard from './assets/Subjectcard';
import './App.css'

function App() {
  const [subject,setubject]=useState([]);
  const addSubject=(name)=>{
    const newSubject={
      id:Date.now(),
      name,
      attended:0,
      total:0
    }
    setubject([...subject,newSubject]);
  }
  const MarkPresent=(id)=>{
    setubject(subject.map((sub)=>{
      sub.id===id?{...sub,attended:sub.attended+1,total:sub.total+1}:sub
    }));
  }
  const MarkAbsent=(id)=>{
    setubject(subject.map((sub)=>{
      sub.id===id?{...sub,total:sub.total+1}:sub
    }));
  }
  const DeleteSubject=(id)=>{
    setubject(subject.filter((sub)=>{
      sub.id!==id;
    }));
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

export default App
