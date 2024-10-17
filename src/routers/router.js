const { Router } = require('express');

const router = Router();
const userRoutes = require("./userRouter");
const admRoutes = require("./admRouter");


router.use('/user', userRoutes );
router.use('/adm', admRoutes);


module.exports = router;