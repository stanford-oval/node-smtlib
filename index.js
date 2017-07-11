// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// Copyright 2017 Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See LICENSE for details
"use strict";

module.exports = require('./lib/smtlib');

module.exports.BaseSolver = require('./lib/base_solver');
module.exports.LocalCVC4Solver = require('./lib/local_cvc4');
