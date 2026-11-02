const date = new Date('2026-01-15T12:00:00Z');
console.log(new Intl.DateTimeFormat('en-US',{timeZone:'UTC',year:'numeric',month:'2-digit',day:'2-digit'}).format(date));
console.log(new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(1234.5));
