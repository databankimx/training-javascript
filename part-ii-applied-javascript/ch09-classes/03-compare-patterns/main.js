function ClassicTimer(label) {
  this.label = label;
}
ClassicTimer.prototype.describe = function () { return `Classic: ${this.label}`; };

class ModernTimer {
  constructor(label) { this.label = label; }
  describe() { return `Modern: ${this.label}`; }
}

console.log(new ClassicTimer("legacy code").describe());
console.log(new ModernTimer("new code").describe());
