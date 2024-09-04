const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const swaggerAutogen = require('swagger-autogen');


// Create - Criar um novo estudante


router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});


// Read - Obter todos os estudantes
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read - Obter um estudante por ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update - Atualizar um estudante por ID
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).send('Student not found');
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete - Deletar um estudante por ID
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    res.status(200).send('Student deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
