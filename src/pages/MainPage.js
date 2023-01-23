import FormCreator from "../containers/FormCreator";
import FormCreated from "../containers/FormCreated";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import CollapsibleExample from "../componenets/Navbar";

function MainPage() {
  return (
    <div className='container'>
      <CollapsibleExample></CollapsibleExample>
      <div className='col'>
        <FormCreator></FormCreator>
      </div>
      <div className='col'>
        <FormCreated></FormCreated>
      </div>
    </div>
  );
}

export default MainPage;
