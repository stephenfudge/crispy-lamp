// import router from express and music from models
const router = require('express').Router();
const { Music } = require('../models');

// get all music
router.get('/', async (req, res) => {
    try {
        const movieData = await Music.findAll();
        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all dvds
router.get('/dvd', async(req,res) => {
    try{
        const dvdData = await Music.findAll({
            where: {
                music_format: "DVD"
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
        const brdData = await Music.findAll({
            where: {
                music_format: "BRD"
            }
        });
        res.status(200).json(brdData);
    }catch (err) {
        res.status(500).json(err);
    }
});

// post a new music film
router.post('/', async (req, res) => {
    try{
        const movieData = await Music.create(req.body);
        res.status(200).json(movieData);
    }catch (err){
        res.status(400).json(err);
    }
});

// delete a music film by id
router.delete('/:id', async (req, res) => {
    try{
        const movieData = await Music.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!movieData) {
            res.status(404).json({ message: 'No movie found with this id!' });
            return;
        }
        res.status(200).json(movieData);
        
    } catch(err){
        res.status(500).json(err);
    }
});   

// export router
module.exports = router;