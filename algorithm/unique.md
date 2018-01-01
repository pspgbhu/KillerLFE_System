
```javascript
// ES6
function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
// or
function unique (arr) {
  return Array.from(new Set(arr))
}
```

#### 拓展：
* 相邻数组去重


