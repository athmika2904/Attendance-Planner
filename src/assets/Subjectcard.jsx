function Subjectcard({subject,MarkPresent,MarkAbsent,DeleteSubject}){
    const required=0.85;
    const percentage=subject.total===0?0:((subject.attended/subject.total)*100).toFixed(1);
    let message="";
    if(subject.total===0){
        message="No classes attended yet"
    }
    else{
        const ratio=subject.attended/subject.total;
        if(ratio>=required){
            let bunk=0;
            while((subject.attended/(subject.total+bunk+1))>required){
                bunk++;
            }
            message=`You can bunk ${bunk} classes`;
        }
        else{
            let attended=0;
            while(((subject.attended+attended+1)/(subject.total+attended+1))<required){
                attended++;
            }
            message=`Attend ${attended+1} classes`;
        }
    }
    return(
        <div className="subjectcard">
            <h3>Subject:{subject.name}</h3>
            <p>Attendance:{percentage}%</p>
            <p>{message}</p>
            <button onClick={()=>MarkPresent(subject.id)}>Present</button>
            <button onClick={()=>MarkAbsent(subject.id)}>Absent</button>
            <button onClick={()=>DeleteSubject(subject.id)}>Delete Subject</button>
        </div>
    );
}
export default Subjectcard;