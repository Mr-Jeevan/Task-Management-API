const Task = require('../models/task.model');
const createCrudRouter = require('../utils/createCrudRouter');

// This one line creates GET, POST, PUT, DELETE for the Task model!
const taskRouter = createCrudRouter(Task);

// You will need to override or modify these routes slightly to handle
// user-specific data. For example, ensure a user can only see their own tasks.

module.exports = taskRouter;