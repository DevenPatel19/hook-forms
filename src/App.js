import './App.css';
import Header from './components/Header'
import UserForm from './views/UserForm';


function App() {
  return (
    <div className="App">
      <Header title={"Hook Form"}/>
      <UserForm></UserForm>
      {/* <MyButtonComponent></MyButtonComponent> */}
    </div>
  );
}

export default App;
