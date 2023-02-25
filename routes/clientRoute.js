const Client = require('../models/ClientModel');
const router = require('express').Router()
const bcrypt = require('bcryptjs');



// CREATE 
router.post('/', async (req, res) => {
    try {
        const client = new Client(req.body);
        client.save();
        res.status(200).json({
            data: client,
            message: 'Client créer avec succès'
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// EDIT client
router.put('/:id', async (req, res) => {
    try {
        const client = await Client.findOneAndUpdate({ _id: req.params.id }, req.body)
        client.save();
        await res.status(200).json({ data: client, message: 'Modifier avec succès' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET SCHOOL ID
router.get('/:id', async (req, res) => {
    try {
        const client = await Client.findOne({ _id: req.params.id })
        await res.status(200).json({ data: client, message: 'recupérer !' })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de Modification' })
    }
})

// GET ALL TEST
router.get('/get/all', async (req, res) => {
    try {
        const client = await Client.find({})
        await res.status(200).json({ data: client.reverse() })
    } catch (error) {
        res.status(405).json({ message: 'Erreur lors de récuperation' })
    }
})

module.exports = router;
