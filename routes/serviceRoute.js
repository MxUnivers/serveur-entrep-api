
const Service = require("../models/ServiceModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        await res.status(200).json({
            data: service,
            message: "Service créer avec succès"
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const service = await Service.findOneAndUpdate({ _id: req.params.id },req.body);
        await service.save();
        await res.status(200).json({data:service , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const service = await Service.findOne({ _id: req.params.id });
        await res.status(200).json({ data: service, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const service = await Service.find({});
        await res.status(200).json({ data: service.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});

router.get("/get/all/visible", async (req, res) => {
    try {
        const service = await Service.find({visible:true});
        await res.status(200).json({ data: service.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});
// VALID
router.put("/show/:id", async (req, res) => {
    try {
        const service = await Service.findOneAndUpdate({_id:req.params.id },req.body);
        await service.save();
        await res.status(200).json({ data: service, message: "Débloqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
})
// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: service, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
})


module.exports = router;
