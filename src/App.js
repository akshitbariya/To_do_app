import './Components/CSS/app.css';
import Grid from '@mui/material/Grid';
import TopBar from './Components/JS/TopBar';
import Card from './Components/JS/Card';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [id, setId] = useState(0);

  const [allNotes, setAllNotes] = useState([
    {
        "heading": "heading 1",
        "description": "desc 1",
        "color": "#cf5bfd",
        "date": "24 Dec",
        "time": "18:48",
        "id": 2
    },
    {
        "heading": "heading 2",
        "description": "desc 2",
        "color": "#30abfd",
        "date": "24 Dec",
        "time": "18:48",
        "id": 3
    },
    {
        "heading": "heading 3",
        "description": "desc 3",
        "color": "#30fd56",
        "date": "24 Dec",
        "time": "18:49",
        "id": 4
    }
]);

  const addNewNote = (newNote) => {
    const tempNotes = [...allNotes];
    setId(id+1);
    newNote['id'] = id;
    tempNotes.push(newNote);
    setAllNotes(tempNotes);
  }

  const deleteNote = (id) => {
    const newList = allNotes.filter((item, index)=>{
      return item.id !== id;
    })
    setAllNotes(newList);
    console.log('newList ', newList);
  }

  const searchNote = (e) => {
    console.log(e.target.value);

    const tempList = [...allNotes];

    const finalList = tempList.find(o => o.heading === e.target.value);
    setAllNotes(finalList?finalList:[]);
    console.log('finalList', finalList);

    if(e.target.value === ''){
      setAllNotes(tempList);
    }
  }

  useEffect(()=>{
    console.log('allNotes changed', allNotes);
  }, [allNotes]);

  return (
    <Grid className='app-container '>
        <TopBar addNewNote={addNewNote} searchNote={searchNote} />
       <Grid className='app-cards'>
        {
          allNotes.map((item, index) => {
            return <Card id={item.id} color={item.color} heading={item.heading} description={item.description} time={item.time} date={item.date} deleteNote={deleteNote} key={index} />
          })
        }
          <Card />
          <Card />
          <Card />
        </Grid>      
    </Grid>
  );
}


export default App;
