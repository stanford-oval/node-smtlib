// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// Copyright 2017 Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See LICENSE for details
"use strict";

const smt = require('./smtlib');

module.exports = class BaseSmtSolver {
    constructor(logic) {
        this._statements = [
            smt.SetLogic('QF_ALL_SUPPORTED')
        ];

        this.withAssignments = false;
        this.timeLimit = 180000;
    }

    enableAssignments() {
        this.withAssignments = true;
        this.add(smt.SetOption('produce-assignments'));
        this.add(smt.SetOption('produce-models'));
    }

    dump() {
        for (let stmt of this._statements)
            console.log(stmt.toString());
    }

    forEachStatement(callback) {
        this._statements.forEach(callback);
    }

    checkSat() {
        throw new Error('checkSat not implemented for this solver');
    }

    add(stmt) {
        this._statements.push(stmt);
    }

    assert(expr) {
        this.add(smt.Assert(expr));
    }

    setOption(opt, value = true) {
        this.add(smt.SetOption(opt, value));
    }

    declareFun(name, args, type) {
        this.add(smt.DeclareFun(name, args, type));
    }
};
