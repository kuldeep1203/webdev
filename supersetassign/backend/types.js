const zod = require('zod');

const movieSchema = zod.object({
  name: zod.string(),
  img: zod.string(),
  summary: zod.string()
});

module.exports = {
  movieSchema
};
