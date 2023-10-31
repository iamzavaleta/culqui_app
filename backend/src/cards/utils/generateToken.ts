export const randomString = (len: number) => {
    var s = '';
  
    while (s.length < len) {
      s += Math.random().toString(36).substr(2);
    }
  
    return s.substr(0, len);
}