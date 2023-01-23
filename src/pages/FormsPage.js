
import NavBar from "../componenets/Navbar";
import Forms from "../containers/Forms";
import '../App.scss';
import FormsView from "../containers/FormsView";

function FormsPage() {
  return (
    <div className='container'>
      <NavBar></NavBar>
      <div className='col'>
        <Forms></Forms>
      </div>
      <div className='col'>
        <FormsView></FormsView>
      </div>
    </div>
  );
}

export default FormsPage;
