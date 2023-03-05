
const Solution = require("../models/SolutionModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const solution = new Solution(req.body);
        await solution.save();
        await res.status(200).json({
            data: solution,
            message: "Solution créer avec succès"
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// EDIT
router.put("/:id", async(req, res) => {
    try {
        const solution = await Solution.findOneAndUpdate({ _id: req.params.id },req.body);
        await solution.save();
        await res.status(200).json({data:solution , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});


// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const solution = await Solution.findOne({ _id: req.params.id });
        await res.status(200).json({ data: solution, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});


// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const solution = await Solution.find({});
        await res.status(200).json({ data: solution.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});


router.get("/get/all/visible", async (req, res) => {
    try {
        const solution = await Solution.find({visible:true});
        await res.status(200).json({ data: solution.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});


// VALID
router.put("/show/:id", async (req, res) => {
    try {
        const solution = await Solution.findOneAndUpdate({_id:req.params.id },req.body);
        await solution.save();
        await res.status(200).json({ data: solution, message: "Débloqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
});


// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const solution = await Solution.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: solution, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
});


module.exports = router;
