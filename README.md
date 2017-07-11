# Node.js API for SMT-LIB 2.0

SMT-LIB 2.0 is an interoperability format to communicate with
different SMT solvers, such as CVC4 or Z3.

The syntax of SMT-LIB is similar to Lisp:

```
(set-logic QF_ALL_SUPPORTED)
(declare-fun x () Bool)
(declare-fun y () Bool)
(assert (and (or x y) (not x) (not y))
(check-sat)
```

This package provides an high-level API to construct SMT-Lib
expressions, taking care of escaping:

```
const smt = require('smtlib');
let solver = new smt.LocalCVC4Solver('QF_ALL_SUPPORTED');
solver.add(smt.DeclareFun('x', [], 'Bool'))
solver.add(smt.DeclareFun('y', [], 'Bool'))
solver.assert(smt.And(smt.Or('x', 'y'), smt.Not('x'), smt.Not('y')));
solver.checkSat().then(([sat, assignment]) => ...).catch((e) => ...);
```

The solver also includes code to interact with a locally installed
CVC4, as an external process.
