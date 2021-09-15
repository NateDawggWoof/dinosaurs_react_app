import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { withRouter } from 'react-router-dom';
import '../styles/DragDrop.css'

const DragDrop = ({allDinosaurs}) => {

  const [dragDinosaurs, setDragDinosaurs] = useState([])

  useEffect(() => {
    const newArray = [...allDinosaurs];

  setDragDinosaurs(newArray)
  }, [allDinosaurs])


  if (allDinosaurs.length === 0) {
    return 'Loading'
  }

//DragDropContext should be wrapped around the bit of the app you want to use Drag and Drop e.g. the list of dinosaurs. Nested is not supported.

//Dropable sets the area where items can be moved around

//Draggable component makes items draggable

//placeholder should stop the footer from moving, added at the end of the list

const handleOnDragEnd = (result) => {
    //to stop an error if the item is dragged outside the droppable area  
  if (!result.destination) return;
    //remove the item being moved from the original array
    const [reorderedItem] = dragDinosaurs.splice(result.source.index, 1);
    //find the destination index so that we can put the item back into the array but at the index it's being moved to
    dragDinosaurs.splice(result.destination.index, 0, reorderedItem);
    //update the state
    setDragDinosaurs(dragDinosaurs);
  }

  
//get the nicknames into an array
    const findNicknames = () => {
        const items = Array.from(dragDinosaurs)
        return items.map(({nickname}) => {
          return nickname
        }
        )}

  //sort the nicknames alphabetically, giving the winning array
    const getAlphabeticalNicknames = () => {
      return findNicknames().sort()
    }
  
    console.log(`getAlphabeticalNames function`, getAlphabeticalNicknames())

  //compare the array where items are being dragged to the array returned from the getAlphabeticalNicknames function

    const correctAnswer = () => {
      if (getAlphabeticalNicknames() == findNicknames) {
        console.log("Congratulations. You're an alphabet whiz!")
      } else {
        console.log(`first` , getAlphabeticalNicknames())
        console.log(`second` , dragDinosaurs)
        console.log("The names are still not in alphebetical order. Try again.")
      }
    }

    console.log(correctAnswer())

    // const handleClic = () => {
    //   return correctAnswer()
    // }
    

  
    

    return (
        <>
        <h1 className="drag-drop">Drag the dinosaurs into alphabetical order by name</h1>
        <div className="App">
          <header className="header">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="dinosaurs">
                {(provided) => (
                  <ul className="dinosaurs" {...provided.droppableProps} ref={provided.innerRef}>
                    {dragDinosaurs.map(({name, nickname, img}, index) => {
                      return (
                        <Draggable key={name} draggableId={name} index={index}>
                          {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="dinosaurs-image">
                                <img src={`../image/${img}`} alt={`${name} Image`} />
                              </div>
                              <p>
                                {nickname} the { name }
                              </p>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </header>
        </div>

        <div id="dinoList-button-wrapper">
          <button id="dinoList-button">SUBMIT ANSWERS</button>
        </div>
        </>
    )
}

export default withRouter(DragDrop);