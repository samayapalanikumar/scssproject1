// import './App.css';
import Card from './components/card/card';
import '../src/style.scss'


function App() {

  let data = [
    {
      Name : "Mahesh Kumar",
      Role : "Jr.Software Developer",
      User: "Add User 1",
    },
    {
      Name : "Dhinesh kumar",
      Role : "Software Developer",
      User: "Add User 2",
    },
    {
      Name : "Ajith Kumar",
      Role : "Sr.Software Developer",
      User: "Add User 3",
    },
  ]
  return( <>
  <div className='section'>

    <Card data={data[0]} />
    <Card data={data[1]}/>
    <Card data={data[2]}/>
   
    </div>
    </>)
  
}

export default App;