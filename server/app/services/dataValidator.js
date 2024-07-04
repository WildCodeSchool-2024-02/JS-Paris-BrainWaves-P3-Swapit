const validateData = (schema) => (
    async (req, res, next) => {
      try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
    }
  );
  
  module.exports = validateData;