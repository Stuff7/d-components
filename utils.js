import "./style.css";
function r(e) {
  return Object.keys(e);
}
function o(e) {
  const t = typeof e;
  return t === "string" || t === "number" || t === "symbol";
}
export {
  o as isIndexable,
  r as keysOf
};
