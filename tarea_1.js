
// use students;
//contar  cuantos doucmentos hay
db.grades.countDocuments();
//800

//Encontrar todas las calificaciones del estudiante con el id numero 4
db.grades.find({student_id:4})
/*
students> db.grades.find({student_id:4})
[
  {
    _id: ObjectId("50906d7fa3c412bb040eb587"),
    student_id: 4,
    type: 'exam',
    score: 87.89071881934647
  },
  {
    _id: ObjectId("50906d7fa3c412bb040eb588"),
    student_id: 4,
    type: 'quiz',
    score: 27.29006335059361
  },
  {
    _id: ObjectId("50906d7fa3c412bb040eb589"),
    student_id: 4,
    type: 'homework',
    score: 5.244452510818443
  },
  {
    _id: ObjectId("50906d7fa3c412bb040eb58a"),
    student_id: 4,
    type: 'homework',
    score: 28.656451042441
  }
]
*/



//cuantos registros hay de tipo exam
db.grades.countDocuments({type:"exam"});
//students> db.grades.countDocuments({type:"exam"});
//200



//cuantos registros hay de tipo homework
db.grades.countDocuments({type:"homework"})
//students> db.grades.countDocuments({type:"homework"});
//400



//Cuantos registros hay de tipo quiz
db.grades.countDocuments({type:"quiz"});
//students> db.grades.countDocuments({type:"quiz"});
//200

//eliminar todas las calificaciones del estudiante con el id 3
db.grades.deleteMany({student_id:3})
/*
{
  acknowledged: true,
  deletedCount: 4
}
*/

//que estudiantes obtubieron 75.29561445722392 en una tarea ?
db.grades.find({type:"homework",score:75.29561445722392});
/*{
  _id: ObjectId("50906d7fa3c412bb040eb59e"),
  student_id: 9,
  type: 'homework',
  score: 75.29561445722392
}
*/

//Actualiza las calificaciones del registro
//con el uuid 50906d7fa3c412bb040eb591 por 100
db.grades.updateOne({uuid:"50906d7fa3c412bb040eb591"},{$set:{score:100}});
/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
*/

