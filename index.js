const deepClone = function(obj) {
  return typeof obj === 'object' && !Array.isArray(obj)
    ? JSON.parse(JSON.stringify(obj))
    : Array.isArray(obj)
    ? obj.map(o => deepClone(o))
    : obj;
};

exports.deepClone = deepClone;
