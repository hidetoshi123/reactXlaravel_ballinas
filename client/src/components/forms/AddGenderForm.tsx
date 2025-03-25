import { Link } from "react-router-dom"


const AddGenderForm = () => {
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
        <button type="submit" className="btn btn-success">Save</button>
        <Link to={'/'} type="submit" className="btn btn-dark">Back</Link>
        </div>
    </div>
    </>
  )
}

export default AddGenderForm