import axios from 'axios';
import './App.css';
import ChallengeList from './components/ChallengeList';
import { useState,useEffect } from 'react';
import AddChallenge from './components/AddChallenge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [challenges,setChallenges] = useState([]);

  useEffect(()=>{

    fetchChallenges();

  },[])

  const fetchChallenges = async () => {
    try{
      const response = await axios.get('http://localhost:8080/challenges');
      setChallenges(response.data)
    }
    catch(error){
      console.error("Error Fetching Challenges: ",error);
    }
   
  };

  const handleChallengeAdded= () =>{
    fetchChallenges();
  }

  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Monthly Challenges</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded}/>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App;
