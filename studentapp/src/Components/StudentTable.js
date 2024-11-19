import '../Assets/css/compo.css'

export default function StudentTable(props) {
    return (
        <div className="outerDiv">
            <div className='leftDiv'>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Course</td>
                        <td>Country</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map(student =>
                            <tr>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.course}</td>
                                <td>{student.address.country}</td>
                            </tr>
                        )

                    }

                </tbody>
            </div>
        </div>
    );
}