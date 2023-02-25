const Temoin = require('../models/TemoinModel');
const router = require('express').Router()



// CREATE 
router.post('/', async (req, res) => {
    try {
        const temoin = new Temoin(req.body);
        temoin.save();
        res.status(200).json({
            data: temoin,
            message: 'Temoin créer avec succès'
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// EDIT temoin
router.put('/:id', async (req, res) => {
    try {
        const temoin = await Temoin.findOneAndUpdate({ _id: req.params.id }, req.body)
        temoin.save();
        await res.status(200).json({ data: temoin, message: 'Modifier avec succès' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET SCHOOL ID
router.get('/:id', async (req, res) => {
    try {
        const temoin = await Temoin.findOne({ _id: req.params.id })
        await res.status(200).json({ data: temoin, message: 'recupérer !' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET ALL TEST
router.get('/get/all', async (req, res) => {
    try {
        const temoin = await Temoin.find({})
        await res.status(200).json({ data: temoin.reverse() })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de récuperation' })
    }
})

module.exports = router;
