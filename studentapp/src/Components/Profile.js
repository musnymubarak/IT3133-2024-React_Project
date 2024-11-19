import '../Assets/css/compo.css';

export default function Profile(props){
    return(
        <>  
        <table>
            <tr>
                <td rowSpan={7}>
                <img className="profile" src={require('../Assets/img/' + props.stu.profilePic)} alt={`${props.stu.firstName}'s profile`} />

                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
            <tr>
                <td>Full Name : {props.stu.firstName+" "+props.stu.lastName}</td>
            </tr>
            <tr>
                <td>Age : {props.stu.age}</td>
            </tr>
            <tr>
                <td>Course : {props.stu.course}</td>
            </tr>
            <tr>
                <td>Address : {props.stu.city+","+props.stu.country}</td>
            </tr>
            <tr>
                <td>Skills : {props.stu.skills.map(skill=>skill+=", ")}</td>
            </tr>
        </table>
        </>
    );
}