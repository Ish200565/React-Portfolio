/*The main assembler*/

import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React Portfolio project.</p>
        <UserProfileCard />
      </header>
    </div>
  );
}

export default App;
