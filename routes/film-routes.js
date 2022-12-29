// import router from express and films from models
const router = require('express').Router();
const { Films } = require('../models');

// get all films
router.get('/', async (req, res) => {
    try {
        const filmData = await Films.findAll();
        res.status(200).json(filmData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all dvds
router.get('/dvd', async(req,res) => {
    try{
        const dvdData = await Films.findAll({
            where: {
                film_format: "DVD"
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
        const brdData = await Films.findAll({
            where: {
                film_format: "BRD"
            }
        });
        res.status(200).json(brdData);
    }catch (err){
        res.status(500).json(err);
    }
})

// post a new film
router.post('/', async (req, res) => {
    try {
        const filmData = await Films.create(req.body);
        res.status(200).json(filmData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a film
router.delete('/:id', async (req, res) => {
    try {
        const filmData = await Films.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!filmData) {
            res.status(404).json({ message: 'No film found with this id!' });
            return;
        }

        res.status(200).json(filmData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// export router
module.exports = router;