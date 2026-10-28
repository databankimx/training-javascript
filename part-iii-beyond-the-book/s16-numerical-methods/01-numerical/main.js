function root(f, low, high, tolerance = 1e-8) {
  if (f(low) * f(high) > 0) throw new Error('Root must be bracketed');
  for (let i=0; i<100 && high-low>tolerance; i++) {
    const mid=(low+high)/2;
    if (f(low)*f(mid)<=0) high=mid;
    else low=mid;
  }
  return (low+high)/2;
}
console.log(root(x => x*x-2,0,2).toFixed(6));
