import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './dragdrop.css';

//DragDropContext should be wrapped around the bit of the app you want to use Drag and Drop e.g. the list of dinosaurs. Nested is not supported.

//Dropable sets the area where items can be moved around

//Draggable component makes items draggable

//placeholder should stop the footer from moving, added at the end of the list



// const dinosaurCharacters =
// [
//     {
//       name: "Tyrannosaurus",
//       nickname: "Tyra",
//       diet: "Carnivore",
//       size: "3.7 - 6.1. metres",
//       img: "02.png",
//       period: "Cretaceous Period",
//       weight: "4,500 - 8,000 kg",
//       fact: [
//           "The name Tyrannosaurus Rex comes from Greek and Latin and means 'Tyrant Lizard King'.",
//           "They had 50-60 teeth, which were each the size of a banana!",
//           "Their huge tail helped to keep them balanced - just like a pet cat!"
//         ]
//     },
//     {
//       name: "Triceratops",
//       nickname: "Tricky",
//       diet: "Herbivore",
//       size: "2.9 - 3 metres",
//       img: "03.png",
//       period: "Cretaceous Period",
//       weight: "6,000 - 12,000 kg",
//       fact: [
//           "Triceratops means 'three-horned face'.",
//           "Some triceratops had as many as 800 teeth!",
//           "The horns of a triceratops reached over 1 metre in length. These horns helped them to defend themselves against predators such as the T.Rex."
//         ]
//     },
//     {
//       name: "Pterodactyl",
//       nickname: "Terry",
//       diet: "Carnivore",
//       size: "1.83 metres",
//       wingspan: "6 metres",
//       img: "04.png",
//       period: "Jurassic Period",
//       weight: "40 kg",
//       fact: [
//         "The name Pterodactyl means 'winged finger'.",
//         "Pterodactyls are not actually dinosaurs, but flying reptiles.",
//         "A young Pterodactyl is called a flapling."
//       ]
//     },
//     {
//       name: "Brontosaurus",
//       nickname: "Emily",
//       diet: "Herbivore",
//       size: "20.1 metres",
//       img: "01.png",
//       period: "Jurassic Period",
//       weight: "16,000 - 22,000 kg",
//       fact: [
//         "The name Brontosaurus means 'thunder lizard'.",
//         "Their nostrils were on the top of their head!",
//         "Scientists think that they may have lived until they were 100 years old."
//       ]
//     },
//     {
//       name: "Stegosaurus",
//       nickname: "Stig",
//       diet: "Herbivore",
//       size: "6.5 - 9 metres",
//       img: "06.png",
//       period: "Jurassic Period",
//       weight: "1,800 kg",
//       fact: [
//         "The name Stegosaurus means 'roofed lizard'.",
//         "Their brains were about the size of a ping-pong ball!",
//         "The Stegosaurus was about the size of a bus."
//       ]
//     },
//     {
//       name: "Diplodocus", 
//       nickname: "Dippie",
//       diet: "Herbivore",
//       size: "6.5 - 9 metres",
//       size: "27 metres",
//       img: "05.png",
//       period: "Jurassic Period",
//       weight: "22,680 kg",
//       fact: [
//         "The name Diplodocus means 'double-beamed lizard'.",
//         "They are the longest known dinosaur.",
//         "Scientists argue about why the Diplodocus had such a long neck. Some think it was to feed on underwater plants, others think it was to battle rivals."
//       ]
//     }
//   ]


const DragDrop = ({allDinosaurs, handleOnDragEnd}) => {
    // const [dinosaurs, setDinosaurs] = useState(dinosaurCharacters);

    // const handleOnDragEnd = (result) => {
    //   //to stop an error if the item is dragged outside the droppable area  
    //   if (!result.destination) return;
    //     //create a new array from the dinosaurs array
    //     const items = Array.from(alldinosaurs);
    //     //remove the item being moved from the original array
    //     const [reorderedItem] = items.splice(result.source.index, 1);
    //     //find the destination index so that we can put the item back into the array but at the index it's being moved to
    //     items.splice(result.destination.index, 0, reorderedItem);

    //     //update the state
    //     setDinosaurs(items);
    //   }

    return (
        <>
        <h1 className="drag-drop">Drag and Drop Game</h1>
        <div className="App">
          <header className="header">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="dinosaurs">
                {(provided) => (
                  <ul className="dinosaurs" {...provided.droppableProps} ref={provided.innerRef}>
                    {allDinosaurs.map(({name, img}, index) => {
                      return (
                        <Draggable key={name} draggableId={name} index={index}>
                          {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="dinosaurs-image">
                                <img src={img} alt={`${name} Image`} />
                              </div>
                              <p>
                                { name }
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