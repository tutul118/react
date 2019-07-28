import React from 'react';

 const Info =(props) =>{
    console.log(props)
    return(
        <div>
            <table className ="hi">
                <tr>
                    <th>S.N</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>CONTACT</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>puja</td>
                    <td>sontuspur</td>
                    <td>9754327812</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>anirban</td>
                    <td>baghajatin</td>
                    <td>7009527267</td>
                </tr>
            </table>
        </div>
    )
}

export default Info;
