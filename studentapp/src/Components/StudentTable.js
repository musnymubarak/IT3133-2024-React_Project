import '../Assets/css/compo.css'

export default function StudentTable(props) {
    return (
        <div className="outerDiv">
            <div className='leftDiv'>
                <table border="1">
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.students.map(student =>
                                <tr>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.address.country}</td>
                                    <td><button>View</button></td>
                                </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}