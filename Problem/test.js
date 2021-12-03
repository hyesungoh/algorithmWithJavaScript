function gcd(n, m) {
  return n % m === 0 ? m : gcd(m, n % m);
}

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}
