import AddGenderForm from "../../forms/AddGenderForm";
import MainLayout from "../../layout/MainLayout";
import GendersTable from "../../tables/GendersTable";

const Gender = () => {
    const content = (
         <>
            <div className="row">
                <div className="col-md-4">
                    <AddGenderForm />
                </div>
                <div className="col-md-8">
                    <GendersTable />
                </div>
            </div>
        </>  
    );
    return<MainLayout content ={content}/>;
}

export default Gender;