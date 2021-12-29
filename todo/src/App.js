import './App.css';
import './fontello-bddbbf1a/css/fontello.css';
import React, {useState} from 'react';

const App = ()=> {
  const [tasks, setTasks] = useState([]);
  

  const addTask = ()=>{
  
    const value1 = document.getElementById("left-input1").value;
    const value2 = document.getElementById("left-input2").value;
  
  function getRandomColor(){
    var colors = ["#B0D0FFff", "#FA9746ff", "#BAE9E3ff", "#BC8E76ff", "#7796CDff"];
    var color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }

    if(value1==="" || value2===""){
      alert('pola nie mogą być puste!')
    }

    else{
      {setTasks(prevState => 
          [...prevState,
          <div id={value1} style={{"backgroundColor": getRandomColor()}} className="task-div" key={value1.toString()}> 
            <div id='value1-div'>{value1}</div>
            <div id='value2-div'>{value2}</div>
            <button className='delete-button' onClick={deleteFunction}><i className='icon-trash-empty'></i></button>
          </div>]
          
      )}
    }

    const deleteFunction =() =>{
      tasks.slice(value1,1)
      setTasks(tasks);
    };
  }

  return (
    <div className="app">
      <div className="left-container">
          <h1 className='h1'>Wpisz zadanie <br/>do wykonania:</h1>
          <form className="inputs">
            <p className='p-left'>Zadanie do wykonania:<input id="left-input1" type="text" maxLength="100"></input></p>           
            <p className='p-left'>Termin wykonania:<input id="left-input2"  type="text"></input></p>
            <button className='add-button' onClick={addTask} type="reset">Dodaj</button>
          </form>
      </div>
      <div className="right-container">
        {tasks}
      </div>
    </div>
  );
}
export default App;