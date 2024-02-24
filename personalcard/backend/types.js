const zod  = require('zod');

const push_pr=zod.object({
    Name:zod.string(),
    description:zod.string(),
    interests: zod.array(zod.string()),
    Linkedin : zod.string(),
    Twitter  : zod.string(),
    Email : zod.string().email()

})

module.exports = {
    push_pr : push_pr
}