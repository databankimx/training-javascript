new Vue({
  el: "#app",
  data: {
    lines: [{ poNumber: "81991", glCode: "24", amount: 300, description: "Furnace Filters" }],
    notes: [],
    noteDraft: ""
  },
  computed: {
    total() { return this.lines.reduce((sum, line) => sum + Number(line.amount || 0), 0); }
  },
  methods: {
    addLine() { this.lines.push({ poNumber: "", glCode: "", amount: 0, description: "" }); },
    removeLine(index) { this.lines.splice(index, 1); },
    addNote() {
      const text = this.noteDraft.trim();
      if (!text) return;
      this.notes.push(text);
      this.noteDraft = "";
    }
  }
});
