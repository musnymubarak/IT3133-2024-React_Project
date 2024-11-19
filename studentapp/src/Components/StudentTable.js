import '../Assets/css/compo.css'

export default function StudentTable(props){
    return(
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
            </div>
        </div>
    );
}