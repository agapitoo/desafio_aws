const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  nota_primeiro_semestre: { type: Number, required: true },
  nota_segundo_semestre: { type: Number, required: true },
  nome_professor: { type: String, required: true },
  numero_sala: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
