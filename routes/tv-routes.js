// import router from express and tv from models
const router = require('express').Router();
const { Tv } = require('../models');

// get all tv
router.get('/', async (req, res) => {
    try{
        const tvData = await Tv.findAll();
        res.status(200).json(tvData);
    }catch (err){
        res.status(500).json(err);
    }
});

// get all dvds
router.get('/dvd', async(req,res) => {
    try{
        const dvdData = await Tv.findAll({
            where: {
                tv_format: "DVD"
            }
        });
        res.status(200).json(dvdData);
    }catch (err){
        res.status(500).json(err);
    }
});

// get all blurays
router.get('/brd', async(req,res) => {
    try{
        const brdData = await Tv.findAll({
            where: {
                tv_format: "BRD"
            }
        });
        res.status(200).json(brdData);
    }catch (err){
        res.status(500).json(err);
    }
});

// post a new tv show
router.post('/', async (req, res) => {
    try{
        const tvData = await Tv.create(req.body);
        res.status(200).json(tvData);
    }catch (err){
        res.status(400).json(err);
    }
});

// delete a tv show
router.delete('/:id', async (req, res) => {
    try{
        const tvData = await Tv.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!tvData) {
            res.status(404).json({ message: 'No tv show found with this id!' });
            return;
        }
        res.status(200).json(tvData);
    }catch (err){
        res.status(500).json(err);
    }
});

// export router
module.exports = router;