import './App.css';
import './fontello-bddbbf1a/css/fontello.css';
import React from 'react';

let counter = 0;

const getUniqueId = () => {
  	return ++counter;
};



const App = ()=> {
  const [tasks, setTasks] = React.useState([]);

    const taskNameRef = React.useRef();
    const taskDeadlineRef = React.useRef();
    const taskPlaceRef = React.useRef();
    


    const addTask = () => {
        const taskName = taskNameRef.current.value;
        const taskDeadline = taskDeadlineRef.current.value;
        const taskPlace = taskPlaceRef.current.value;



        if (taskName === '' || taskDeadline === '' || taskPlace === '') {
          	alert('pola nie mogą być puste!');
        } else {
            taskNameRef.current.value = '';
            taskDeadlineRef.current.value = '';
            taskPlaceRef.current.value = '';
            

            const task = {
                id: getUniqueId(),
                name: taskName,
                deadline: taskDeadline,
                place: taskPlace
            };
            if(task.place==="House"){
              task.color = 'rgba(177, 211, 255, 0.95)'
            }
            else if(task.place==="Work"){
              task.color = 'rgba(186, 233, 227, 0.95)'
            }
            else if(task.place==="School"){
              task.color = 'rgba(250, 151, 70, 0.95)'
            }
            setTasks([...tasks, task]);
        }
    }

    const sortArray = type => {
      const types = {
        Date: 'deadline',
        Alphabet: 'name',
        Place: 'place',
        Time: 'id'
      };
      const sortProperty = types[type];
      const sorted = [...tasks].sort((a, b) => {
        if(sortProperty==='id'){
          return b[sortProperty] - a[sortProperty]
        }
        else{
          return ((a[sortProperty]).localeCompare(b[sortProperty]))
        };
          
      });
      setTasks(sorted);
    };



    return (
      <div className='container-app'>
        <div className='form-container'>
          <div className='task-form'>Wpisz zadanie do wykonania:
            <div className='colors-div'>
              <div className='house-color'></div>Dom
              <div className='work-color'></div>Praca
              <div className='school-color'></div>Szkoła
            </div>
          </div>
          <form className='form' onSubmit={e => e.preventDefault()}>
            <div className='input-div'>
              Zadanie do wykonania: <input className='input' ref={taskNameRef} type="text" maxLength="100" />
            </div>           
            <div className='input-div'>
              Termin wykonania: <input className='input' ref={taskDeadlineRef} type="date" />
            </div>
            <div className='input-div'>
              Miejsce wykonania: 
              <select className='input' name="place" id="place" ref={taskPlaceRef}>
                <option  value="House">Dom</option>
                <option  value="Work">Praca</option>
                <option  value="School">Szkoła</option>
              </select>
            </div>
            <button className='add-button' onClick={addTask}>Dodaj</button>
          </form>
          <div className='sort-div'>
              Sortuj: 
              <select className='sort' name="sort" id="sort" onChange={(e) => sortArray(e.target.value)}>
                <option  value="Date">Datami</option>
                <option  value="Alphabet">Alfabetycznie</option>
                <option  value="Place">Miejscem</option>
                <option  value="Time">Czasem dodania</option>
              </select>
          </div>
        </div>
        
        <div className='all-tasks'>
        
            
          {tasks.map(task => {
              const handleDeleteTaskClick = () => {
                  setTasks(tasks.filter(item => item !== task));
              };
              return (
                <div className='task-div' key={task.id} style={{backgroundColor: task.color}}> 
                  <div className='task-name-div'>{task.name}</div>
                  <div className='task-deadline-div'>{task.deadline}</div>
                  <button className='delete-button' onClick={handleDeleteTaskClick}><i className='icon-trash-empty'></i></button>
                </div>
              );
          })}
        </div>
        <div className='footer'>
          <a className='link' href="https://pl.freepik.com/wektory/ludzie">Ludzie plik wektorowy utworzone przez pch.vector - pl.freepik.com</a>
        </div>
      </div>
  );
}
export default App;