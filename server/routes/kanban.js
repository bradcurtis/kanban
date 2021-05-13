var express = require('express');
var router = express.Router();

const KanbanColumnEntry = require('../models/kanbancolumn');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const kanbanColumnEntry = await KanbanColumnEntry.find();
    res.json(kanbanColumnEntry);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    // eslint-disable-next-line no-console
    console.log(req.body);
    const kanbanColumnEntry = new KanbanColumnEntry(req.body);
    const createdColumnEntry= await kanbanColumnEntry.save();
    res.json(createdColumnEntry);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
