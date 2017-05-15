const _ = require('lodash');

function setup(comparator) {
  function middleware(req, res, next) {
    // do nothing if there's nothing to do
    if (_.isEmpty(_.get(res, 'data', []))) {
      return next();
    }

    res.data = res.data.sort(comparator);

    next();
  }

  return middleware;

}

module.exports = setup;
