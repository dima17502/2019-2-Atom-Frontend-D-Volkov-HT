function nonUniqueElements(data) {
  let res = [];
  let frequency = new Object();
  let size = data.length;
  for(let i = 0; i < size; i++)
  {
    frequency[data[i]] = (frequency[data[i]] + 1) || 1;
  }
  for(let i = 0; i < size; i++)
  {
    if(frequency[data[i]] > 1){
      res.push(data[i]);
    }
  }
  return res;
}

module.exports = nonUniqueElements;
