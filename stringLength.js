const stringLength = (string) => { 
    if (string.length < 1) {
      throw new Error('String must have from 1 to 5 characters');
    } else if (string.length > 5) {
      throw new Error('String must have from 1 to 5 characters');
    } else {
      return string.length;
    }
  };
  
  module.exports = stringLength;