import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Add(){



const hand=(event)=>{
      event.preventDefault();
}
    return(
        <>
        <div className='container bg-warning'>
            <div className='row'>
               <div className='col-lg-3'>&nbsp;</div>
               <div className='col-lg-6'>
              <form onSubmit={hand}>
                  <div className='table-responsive'>
                    <div className='table table-bordered'>
                        <thead>
                            <tr>
                                <th colSpan={2}>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               
                        </tr>
                    <tr>
                        <td>User Name</td>
                             
                                        <td>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </td>
                        </tr>
                    <tr>
                         <td>User Email</td>
                             <td>
                                <input type="email" name='email' id='email' className="form-control"/>
                            </td>
                    </tr>
                           
                     <tr>
                         <td>Phonenumber</td>
                         <td>
                            <input type="number" name='phone' id='phone' className="form-control" />
                        </td>
                     </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    <input type="text" name='address' id='address' className="form-control"/>
                                </td>
                            </tr>
                   
                            <td><Link to='/list'><input type="button" value="list" className='btn btn-primary'/></Link></td>
                        </tbody>
                        </div>
                        <div className='col-lg-3'>&nbsp;</div>
                    </div>
                    </form>
                 </div>  
              
            </div>

        </div>
        </>
    )
}