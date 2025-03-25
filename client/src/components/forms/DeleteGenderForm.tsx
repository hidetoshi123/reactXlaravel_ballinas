import { Link } from "react-router-dom";

const DeleteGenderForm = () => {
    const handleDelete = () => {
        console.log('Delete action triggered');
    };

    return (
        <>
            <div className="form-group">
                <div className="mb-3">
                    <label htmlFor="gender">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>
                        Yes
                    </button>
                    <Link to={'/'}type="submit" className="btn btn-primary">No</Link>
                </div>
            </div>
        </>
    );
};

export default DeleteGenderForm;