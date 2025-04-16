
import './App.css'
import UserCard from './UserCard';



function App() {


  return (
    <div className="App">
    <h1>Profil Listesi</h1>
    <UserCard
      name="Emre Yılmaz"
      email="emre@example.com"
      age={25}
    />
    <UserCard
      name="Ayşe Demir"
      email="ayse@example.com"
      age={30}
    />
  </div>
);
}

export default App;