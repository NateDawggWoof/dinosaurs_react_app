import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../styles/DragDrop.css'

const DragDrop = ({allDinosaurs, handleOnDragEnd}) => {
    

    return (
        <>
        <h1 className="drag-drop">Drag the dinosaurs into alphabetical order by name</h1>
        <div className="App">
          <header className="header">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="dinosaurs">
                {(provided) => (
                  <ul className="dinosaurs" {...provided.droppableProps} ref={provided.innerRef}>
                    {allDinosaurs.map(({name, nickname, img}, index) => {
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
        </>
    )
}

export default DragDrop;