const assert = require('assert');
const smt = require('../index');

function main() {
    let solver = new smt.LocalCVC4Solver('QF_ALL_SUPPORTED');
    solver.add(smt.DeclareFun('x', [], 'Bool'))
    solver.add(smt.DeclareFun('y', [], 'Bool'))
    solver.assert(smt.And(smt.Or('x', 'y'), smt.Not('x'), smt.Not('y')));
    solver.checkSat().then(([sat, assignment]) => assert(!sat)).catch((e) => {
        console.error('FAILED: ' + e.message);
    });
}
main();
