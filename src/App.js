import logo from './logo.svg';
import './App.css';
import { MdEdit } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css'
import { COLORS } from "./constants/Colors"
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState({
    backgroundImage: COLORS.gradientOne.image,
    backgroundColor: COLORS.gradientOne.color
  })
  const [notes, setNotes] = useState([])
const [noteInput, setNoteInput] = useState("")

  // pour la modification
const [selectedNote, setSelectedNote] = useState(null)

  const addNote = (e) => {
    e.preventDefault()

    let newNote = { id: Math.floor(Math.random() * 1000), title: noteInput, date: new Date() }
    setNotes([newNote, ...notes])
    setNoteInput("");

    // fonction modifier

  }
  const updateNote = (event) => {
    event.preventDefault()
    const notesCopy = [...notes]
    const note = notes.find(note => note.id === selectedNote.id);
    const noteIndex = notes.findIndex(note => note.id === selectedNote.id);
    let updateNote = { ...note, title: noteInput };
    notesCopy[noteIndex] = updateNote;
    setNotes(notesCopy);
    setNoteInput("");

    setSelectedNote(null);

    // console.log(setSelectedNote);
  }
  return (
    <div style={{ ...theme, height: '100vh' }}>
      <div className='container py-3'>
        {/* =============header==== */}

        <header className='bg-white d-flex  justify-content-between align-items-center rounded p-2'>
          <h1 className="fs-5 fw-normal ">NoteHack</h1>
          <div className='d-flex gap-2'>
            <span onClick={() => {
              setTheme({
                backgroundImage: COLORS.gradientOne.image,
                backgroundColor: COLORS.gradientOne.color
              })
              console.log(theme);
            }}
              style=
              {
                {
                  display: "inline-block",
                  cursor: "pointer",
                  width: 25,
                  height: 25,
                  borderRadius: "100%",
                  backgroundColor: COLORS.gradientOne.color,
                  backgroundImage: COLORS.gradientOne.image


                }
              }
            >


            </span >

            <span onClick={() => {
              setTheme({
                backgroundImage: COLORS.gradientTwo.image,
                backgroundColor: COLORS.gradientTwo.color
              })
              console.log(theme);
            }}
              style=
              {
                {
                  display: "inline-block",
                  cursor: "pointer",
                  width: 25,
                  height: 25,
                  borderRadius: "100%",
                  backgroundColor: COLORS.gradientTwo.color,
                  backgroundImage: COLORS.gradientTwo.image


                }
              }
            >


            </span>
            <span onClick={() => {
              setTheme({
                backgroundImage: COLORS.gradientThree.image,
                backgroundColor: COLORS.gradientThree.color
              })
              console.log(theme);
            }}
              style=
              {
                {
                  display: "inline-block",
                  cursor: "pointer",
                  width: 25,
                  height: 25,
                  borderRadius: "100%",
                  backgroundColor: COLORS.gradientThree.color,
                  backgroundImage: COLORS.gradientThree.image


                }
              }
            >


            </span>
            <span onClick={() => {
              setTheme({
                backgroundImage: COLORS.gradientFour.image,
                backgroundColor: COLORS.gradientFour.color
              })
              console.log(theme);
            }}
              style=
              {
                {
                  display: "inline-block",
                  cursor: "pointer",
                  width: 25,
                  height: 25,
                  borderRadius: "100%",
                  backgroundColor: COLORS.gradientFour.color,
                  backgroundImage: COLORS.gradientFour.image


                }
              }
            >


            </span>
            <span onClick={() => {
              setTheme({
                backgroundImage: COLORS.gradientFive.image,
                backgroundColor: COLORS.gradientFive.color
              })
              console.log(theme);
            }}
              style=
              {
                {
                  display: "inline-block",
                  cursor: "pointer",
                  width: 25,
                  height: 25,
                  borderRadius: "100%",
                  backgroundColor: COLORS.gradientFive.color,
                  backgroundImage: COLORS.gradientFive.image


                }
              }
            >


            </span>
            <span onClick={() => {
              setTheme({
                backgroundImage: COLORS.gradientThree.image,
                backgroundColor: COLORS.gradientThree.color
              })
              console.log(theme);
            }}
              style=
              {
                {
                  display: "inline-block",
                  cursor: "pointer",
                  width: 25,
                  height: 25,
                  borderRadius: "100%",
                  backgroundColor: COLORS.gradientSix.color,
                  backgroundImage: COLORS.gradientSix.image


                }
              }
            >


            </span>
          </div>

        </header>


        <div style={{ marginTop: '100px' }}>
          <form className='py-4 px-3 bg-white rounded'>
            <div className='d-flex gap-3'>
              <input type='text' className='form-control' placeholder="Add note" aria-label='note' value={noteInput} onChange={(e) => { console.log(noteInput); setNoteInput(e.target.value) }} />
              {
                selectedNote ? <button className='btn btn-warning' onClick={updateNote}>Update</button> :
                  <button className='btn btn-success' onClick={addNote}>Add</button>
              }


            </div>
          </form>

        </div>
        {/* ===========NotForm========== */}
        <footer className='bg-white rounded mt-3 p-3' style={{ minheight: '300px' }}>

          {/* =======NotesContainer========= */}
          <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className='d-flex align-items-center gap-2'>
              <span className='fw-bold fs-6'>Notes</span>
              <span style=
                {
                  {
                    display: "inline-block",
                    width: 25,
                    height: 25,
                    borderRadius: "100%",
                    backgroundColor: "#dfdfdf",
                    textAlign: "center"

                  }
                }
              >


                3</span>
            </div>
            <button className='btn btn-primary'>Clear All</button>

          </div>
          <div className='mt-3 d-flex flex-wrap gap-2'>

            {
              notes.map((note, index) => {
                return <div key={index} className=" p-3 rounded border-5 border-start border-primary" style={{ height: 100, minWidth: 300, backgroundColor: "#dfdfdf" }}>
                  <div className='d-flex justify-content-end' style={{ cursor: "pointer" }}><MdEdit onClick={() => {
                    setNoteInput(note.title)

                    setSelectedNote(note)
                  }} /></div>
                  <div>
                    <p className='fw-normal m-0'>{note.title}</p>
                    <span className='fw-light ' style={{ fontSize: 12 }}>10/23/2024 10:20</span>
                  </div>
                </div>
              })
            }
          </div>
          {/*===================== Notelist=================== */}

          {/* <div>

          </div> */}
        </footer>

      </div>
    </div>
  );
}

export default App;
// pour pouvoir identifier de facon unique chaque id
