const Responsable = require('../models/ResponsableModel');
const router = require('express').Router()
const bcrypt = require('bcryptjs');



// CREATE 
router.post('/', async (req, res) => {
    try {
        const responsable = new Responsable(req.body);
        responsable.save();
        res.status(200).json({
            data: responsable,
            message: 'Responsable créer avec succès'
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// EDIT responsable
router.put('/:id', async (req, res) => {
    try {
        const responsable = await Responsable.findOneAndUpdate({ _id: req.params.id }, req.body)
        responsable.save();
        await res.status(200).json({ data: responsable, message: 'Modifier avec succès' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET SCHOOL ID
router.get('/:id', async (req, res) => {
    try {
        const responsable = await Responsable.findOne({ _id: req.params.id })
        await res.status(200).json({ data: responsable, message: 'recupérer !' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET ALL TEST
router.get('/get/all', async (req, res) => {
    try {
        const responsable = await Responsable.find({})
        await res.status(200).json({ data: responsable.reverse() })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de récuperation' })
    }
})

module.exports = router;
