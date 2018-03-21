// 数组去重
export function unique(array, key) {
  if (!key) {
    array = [...new Set(array)];
  } else {
    const hash = {};
    array = array.reduce((item, next) => {
      if (!hash[next[key]]) hash[next[key]] = true && item.push(next);
      return item;
    }, []);
  }
  return array;
}

// 对象深复制，简单粗暴
export function cloneObject(obj) {
  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
}
