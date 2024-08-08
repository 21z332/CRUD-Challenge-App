import { useState } from "react";
import axios from "axios";

function AddChallenge({onChallengeAdded}){

    const [month,setMonth]=useState('');
    const [description,setDescription]=useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:8080/challenges',{month,description});
            setMonth('');
            setDescription('');
            onChallengeAdded();
        }
        catch(error){
            console.error("Error adding Challenges: ", error);
        }

    };

    return(
        <div className="card my-5">
        <div className="card-header">Add New Challenge</div>
        <div className="card-body">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="month" className="form-label">Month</label>
        <input type="text" className="form-control" placeholder="e.g., January" id="month" value={month} onChange={(e)=>setMonth(e.target.value)}></input>
        </div>
        <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea type="text" className="form-control" id="description" placeholder="Describe the challenge" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    )

}

export default AddChallenge;