module.exports = (app) => {
      const Error = {
            addHelpers: (req, res) => {
                  res.locals.__ = () => {
                        return i18n.__.apply(req, arguments);
                  };
            },

            logErrors: (err, req, res, next) => {
                  console.error(err.stack);
                  next(err);
            },

            clientErrorHandler: (err, req, res, next) => {
                  if(req.xhr) {
                        res.status(500).send({ error: 'Something failed!' });
                  } else {
                        next(err);
                  }
            },

            errorHandler: (err, req, res, next) => {
                  res.status(500);
                  res.render('error', { error: err });
            }
      };
      return Error;
};