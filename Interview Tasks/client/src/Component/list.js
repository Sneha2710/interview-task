import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


export default function List() {
return(
    <>
    <div className="container mt-3">
    <div className="row">
        <h1>Table</h1>
    </div>
    </div>


    <div className="container mt-5">
    <div className="table-responsive">
        <table className="table table-bordered ">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Addres</th>
                    <th>phonenumber</th>

                </tr>
                <tr>
                    <td>sneha</td>
                    <td>snehapk2710@gmail.com</td>
                    <td>coimbatore</td>
                    <td>9514196992</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    </div>
    </>
)

}

