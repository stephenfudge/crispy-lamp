// import router from express, Op from sequelize and wrestling from models
const router = require('express').Router();
const { Op } = require('sequelize');
const { Wrestling } = require('../models');

// get all wrestling
router.get('/', async (req, res) => {
    try {
        const wrestlingData = await Wrestling.findAll();
        res.status(200).json(wrestlingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all dvds
router.get('/dvd', async(req,res) => {
    try{
        const dvdData = await Wrestling.findAll({
            where: {
                wrestling_format: "DVD"
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
        const brdData = await Wrestling.findAll({
            where: {
                wrestling_format: "BRD"
            }
        });
        res.status(200).json(brdData);
    }catch (err){
        res.status(500).json(err);
    }
});

// get all compilations
router.get('/compilation', async(req,res) => {
    try{
        const compilationData = await Wrestling.findAll({
            where: {
                wrestling_presentation: "Compilation"
            }
        });
        res.status(200).json(compilationData);
    }catch(err){
        res.status(500).json(err);
    }
});

// get all ppvs
router.get('/ppv', async(req,res) => {
    try{
        const ppvData = await Wrestling.findAll({
            where: {
                wrestling_presentation: "PPV"
            }
        });
        res.status(200).json(ppvData);
    }catch(err){
        res.status(500).json(err);
    }
});

// get all documentaries
router.get('/documentary', async (req,res) => {
    try{
        const documentaryData = await Wrestling.findAll({
            where: {
                wrestling_presentation: "Documentary"
            }
        });
        res.status(200).json(documentaryData);
    }catch(err){
        res.status(500).json(err);
    }
});

// get all wwe
router.get('/wwe', async(req,res) => {
    try{
        const wweData = await Wrestling.findAll({
            where: {
                wrestling_promotion: "WWE"
            }
        });
        res.status(200).json(wweData);
    }catch(err){
        res.status(500).json(err);
    }
});

// get non wwe
router.get('/other-promotions', async(req, res) => {
    try{
        const otherPromotionsData = await Wrestling.findAll({
            where: {
                wrestling_promotion: {
                    [Op.ne]: "WWE"}
            }
        });
        res.status(200).json(otherPromotionsData);
    }catch(err){
        res.status(500).json(err);
    }
});

// post a new wrestling film
router.post('/', async (req, res) => {
    try {
        const wrestlingData = await Wrestling.create(req.body);
        res.status(200).json(wrestlingData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete a wrestling film by id
router.delete('/:id', async (req, res) => {
    try {
        const wrestlingData = await Wrestling.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!wrestlingData) {
            res.status(404).json({ message: 'No wrestling found with this id!' });
            return;
        }
        res.status(200).json(wrestlingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// export router
module.exports = router;
