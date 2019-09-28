function correctSentence(text) {
  let res = text[0].toUpperCase() + text.slice(1);
  if(/\d|\w/.exec(res[res.length - 1]))
  {
    res += '.';
  }
  return res;
}

module.exports = correctSentence;
