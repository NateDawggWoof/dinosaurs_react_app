use dinos

db.dropDataBase()

/ //Version 2.0

// //weight easier than size to use for quiz question
// //size = length head to tail
// //diplodoculus is not a species I could find?

db.dinosaurs.insertMany(

  [
      {
        "name": "Tyrannosaurus",
        "nickname": "Tyra",
        "diet": "Carnivore",
        "size": "3.7 - 6.1. metres",
        "img": "02.png",
        "period": "Cretaceous Period",
        "weight": "4,500 - 8,000 kg",
        "fact": {
            "1": "The name Tyrannosaurus Rex comes from Greek and Latin and means 'Tyrant Lizard King'.",
            "2": "They had 50-60 teeth, which were each the size of a banana!",
            "3": "Their huge tail helped to keep them balanced - just like a pet cat!"
          }
      },
      {
        "name": "Triceratops",
        "nickname": "Tricky",
        "diet": "Herbivore",
        "size": "2.9 - 3 metres",
        "img": "03.png",
        "period": "Cretaceous Period",
        "weight": "6,000 - 12,000 kg",
        "fact": {
            "1": "Triceratops means 'three-horned face'.",
            "2": "Some triceratops had as many as 800 teeth!",
            "3": "The horns of a triceratops reached over 1 metre in length. These horns helped them to defend themselves against predators such as the T.Rex."
          }
      },
      {
        "name": "Pterodactyl",
        "nickname": "Terry",
        "diet": "Carnivore",
        "size": "1.83 metres",
        "wingspan": "6 metres",
        "img": "04.png",
        "period": "Jurassic Period",
        "weight": "40 kg",
        "fact": {
            "1": "The name Pterodactyl means 'winged finger'.",
            "2": "Pterodactyls are not actually dinosaurs, but flying reptiles.",
            "3": "A young Pterodactyl is called a flapling."
          }
      },
      {
        "name": "Brontosaurus",
        "nickname": "Emily",
        "diet": "Herbivore",
        "size": "20.1 metres",
        "img": "01.png",
        "period": "Jurassic Period",
        "weight": "16,000 - 22,000 kg",
        "fact": {
            "1": "The name Brontosaurus means 'thunder lizard'.",
            "2": "Their nostrils were on the top of their head!",
            "3": "Scientists think that they may have lived until they were 100 years old."
          }
      },
      {
        "name": "Stegosaurus",
        "nickname": "Stig",
        "diet": "Herbivore",
        "size": "6.5 - 9 metres",
        "img": "06.png",
        "period": "Jurassic Period",
        "weight": "1,800 kg",
        "fact": {
            "1": "The name Stegosaurus means 'roofed lizard'.",
            "2": "Their brains were about the size of a ping-pong ball!",
            "3": "The Stegosaurus was about the size of a bus."
          },
      },
      {
        "name": "Diplodocus", 
        "nickname": "Dippie",
        "diet": "Herbivore",
        "size": "6.5 - 9 metres",
        "size": "27 metres",
        "img": "05.png",
        "period": "Jurassic Period",
        "weight": "22,680 kg",
        "fact": {
            "1": "The name Diplodocus means 'double-beamed lizard'.",
            "2": "They are the longest known dinosaur.",
            "3": "Scientists argue about why the Diplodocus had such a long neck. Some think it was to feed on underwater plants, others think it was to battle rivals."
          },
      }
    ]
  )
// db.dinosaurs.insertMany(

// [
//     {
//       "name": "Tyrannosaurus",
//       "nickname": "Terry",
//       "diet": "Carnivore",
//       "img": "02.png"
//     },
//     {
//       "name": "Triceratops",
//       "nickname": "Tricky",
//       "diet": "Herbivore",
//       "img": "03.png"
//     },
//     {
//       "name": "Pterodactyl",
//       "nickname": "Terry",
//       "diet": "Carnivore",
//       "img": "04.png"
//     },
//     {
//       "name": "Brontosaurus",
//       "nickname": "Bobby",
//       "diet": "Herbivore",
//       "img": "01.png"
//     },
//     {
//       "name": "Stegosaurus",
//       "nickname": "Stig",
//       "diet": "Herbivore",
//       "img": "06.png"
//     },
//     {
//       "name": "Diplodoculus",
//       "nickname": "Dipi",
//       "diet": "Herbivore",
//       "img": "05.png"
//     }
//   ]


