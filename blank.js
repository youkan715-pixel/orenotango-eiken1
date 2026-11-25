// 例文のどこを空所にするかを決める。4択テスト（index.html）と検査の道具（words.js）が同じ決め方を使う。
// 返すのは [始まり, 終わり]。見つからなければ null。
function blankOf(en, ex){
  const toks = []; ex.replace(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g, (m, i) => { toks.push([m.toLowerCase(), i, i + m.length]); return m; });
  const ws = en.toLowerCase().split(/\s+/), head = ws[0];
  const pre = (a, b) => { let n = 0; while (n < a.length && n < b.length && a[n] === b[n]) n++; return n; };
  const need = Math.min(head.length, Math.max(3, head.length - 3));
  let best = null, bestN = 0;
  toks.forEach((t, i) => {
    const n = pre(head, t[0]);
    if (n < need || t[0].length > head.length + 4) return;
    if (ws.slice(1).some((w, k) => !toks[i + 1 + k] || toks[i + 1 + k][0] !== w)) return;
    if (n > bestN || (n === bestN && best && t[0].length < best[0][0].length)){ best = [t, toks[i + ws.length - 1]]; bestN = n; }
  });
  return best ? [best[0][1], best[1][2]] : null;
}
if (typeof module !== 'undefined') module.exports = blankOf;
