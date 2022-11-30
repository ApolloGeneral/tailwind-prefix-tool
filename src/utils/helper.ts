const addPrefix = (twClass: string, prefix: string) => {
  // if it's start with negative "-"
  if (twClass.indexOf('-') === 0) {
    return twClass[0] + prefix + twClass.slice(1);
  }
  // covering the case of important !
  if (twClass.indexOf('!') === 0) {
    // important with negative value
    if (twClass.indexOf('-') === 1) {
      return twClass.slice(0, 2) + prefix + twClass.slice(2);
    }
    return twClass[0] + prefix + twClass.slice(1);
  }
  return prefix + twClass;
};

const generatePrefixedClass = (tokens: string[], prefix: string) => {
  return tokens.map((token: string) => {
    // token start with variant modifier such as hover | sm
    if (token.indexOf(':') !== -1) {
      const [variantModifier, twClass] = token.split(':');
      const prefixClass = addPrefix(twClass, prefix);
      return variantModifier + ':' + prefixClass;
    }
    return addPrefix(token, prefix);
  });
};

export { generatePrefixedClass };
