module.exports = function(babel) {
  const { types: t } = babel;

  const opMap = [{ key: '&&', val: '&amp;&amp;' }, { key: '>', val: '&gt;' }, { key: '>=', val: '&gt;=' }, { key: '<', val: '&lt;' }, { key: '<=', val: '&lt;=' }];

  const replOp = (y) => opMap.reduce((obj, curr) => (obj = curr.key === y ? curr.val : obj), y);

  const replStr = (x) =>
    opMap.reduce((str, curr) => {
      let re = new RegExp(curr.key);
      return (str = str.replace(re, replOp(curr.key)));
    }, x);

  return {
    name: 'ast-transform', // not required
    visitor: {
      LogicalExpression(path) {
        path.node.operator = replOp(path.node.operator);
      },

      BinaryExpression(path) {
        path.node.operator = replOp(path.node.operator);
      },

      NumericLiteral(path) {
        path.node.operator = replOp(path.node.operator);
      },

      StringLiteral(path) {
        path.node.value = replStr(path.node.value);
      }
    }
  };
};
