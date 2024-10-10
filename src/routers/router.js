const { Router } = require('express');

const router = Router();
const userRoutes = require("./userRouter");

router.use('/user', userRoutes );

module.exports = router;