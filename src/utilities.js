// Replaces spaces non breaking spaces
const avoidWrapping = value => value.replace(/\s/g, '\xa0');

const createHmtlTag = (tag, body = '', attr = {}) => {
  const props = Object.keys(attr)
    .map(key => `${key}="${attr[key]}"`)
    .join(' ');

  return `<${tag}${props && ` ${props}`}>${body}</${tag}>`;
};

// Recursively flatten a parser token into dot notation
const flattenTokenDotNotation = token => {
  const extractValue = node => {
    if (node.target && node.val) {
      return `${extractValue(node.target)}.${node.val.value}`;
    }
    return node.value;
  };
  return extractValue(token);
};

const isNodeNumber = node => {
  if (node && node.value) {
    const number = parseFloat(node.value);
    return String(number) === node.value;
  }

  return false;
};

const normalize = (value, defaultValue) => {
  if (value === null || value === undefined || value === false) {
    return defaultValue;
  }
  return value;
};

const translateMap = (value, map) => {
  const targets = Object.keys(map)
    .join('|')
    .replace('\\', '\\\\');
  const regex = new RegExp(`(${targets})`, 'g');
  return value.replace(regex, char => map[char]);
};

export {
  avoidWrapping,
  createHmtlTag,
  flattenTokenDotNotation,
  isNodeNumber,
  normalize,
  translateMap
};