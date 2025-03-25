import { Link } from "react-router-dom";

const GendersTable = () => {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Male</td>
                    <td>
                        <Link to={'/gender/edit'}className="btn btn-success">Edit</Link >
                        <Link to={'/gender/delete'}className="btn btn-danger">Delete</Link >
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Female</td>
                    <td>
                        <button className="btn btn-success">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default GendersTable;
