
const Blog = require("../models/BlogModel");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        await res.status(200).json({
            data: blog,
            message: "Blog créer avec succès"
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({ _id: req.params.id },req.body);
        await blog.save();
        await res.status(200).json({data:blog , message:"Modifier avec succès"});
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET SCHOOL ID
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id });
        await res.status(200).json({ data: blog, message: "recupérer !" });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de Modification" });
    }
});

// GET ALL TEST
router.get("/get/all", async (req, res) => {
    try {
        const blog = await Blog.find({});
        await res.status(200).json({ data: blog.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});

router.get("/get/all/visible", async (req, res) => {
    try {
        const blog = await Blog.find({visible:true});
        await res.status(200).json({ data: blog.reverse() });
    } catch (error) {
        res.status(405).json({ message: "Erreur lors de récuperation" });
    }
});
// VALID
router.put("/show/:id", async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({_id:req.params.id },req.body);
        await blog.save();
        await res.status(200).json({ data: blog, message: "Débloqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " });
    }
})
// DELETE 
router.get("/delete/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ data: blog, message: "Deboqué" });
    } catch (error) {
        res.status(405).json({ message: "Error  " })
    }
})


module.exports = router;
