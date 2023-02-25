const ManagerPage = require('../models/ManagerPageModel');
const router = require('express').Router()



// CREATE 
router.post('/', async (req, res) => {
    try {
        const parameter = new ManagerPage(req.body);
        parameter.save();
        res.status(200).json({
            data: parameter,
            message: 'ManagerPage créer avec succès'
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// EDIT parameter
router.put('/:id', async (req, res) => {
    try {
        const parameter = await ManagerPage.findOneAndUpdate({ _id: req.params.id }, req.body)
        parameter.save();
        await res.status(200).json({ data: parameter, message: 'Modifier avec succès' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET SCHOOL ID
router.get('/:id', async (req, res) => {
    try {
        const parameter = await ManagerPage.findOne({ _id: req.params.id })
        await res.status(200).json({ data: parameter, message: 'recupérer !' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET ALL TEST
router.get('/get/all', async (req, res) => {
    try {
        const parameter = await ManagerPage.find({})
        await res.status(200).json({ data: parameter.reverse() })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de récuperation' })
    }
})

module.exports = router;



