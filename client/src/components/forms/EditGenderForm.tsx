import { Link } from "react-router-dom"

const EditGenderForm = () => {
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
        <div className="d-flex jsutify-content-end">
        <Link  to={'#'} type="submit" className="btn btn-success">Edit</Link>
        <Link to={'/'}type="submit" className="btn btn-primary">Back</Link>
        </div>
    </div>
    
    </>
  )
}

export default EditGenderForm