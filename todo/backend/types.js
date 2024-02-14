const zod  = require('zod');

const push_todo=zod.object({
    title:zod.string(),
    description:zod.string(),
    completed:zod.boolean()
});

const mark_todo=zod.object({
    id:zod.string(),
})
module.exports={
    push_todo : push_todo,
    mark_todo : mark_todo
}