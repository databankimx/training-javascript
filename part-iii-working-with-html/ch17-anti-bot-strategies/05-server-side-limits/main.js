const comment = document.getElementById("comment");
const personButton = document.getElementById("person");
const botButton = document.getElementById("bot");
const status = document.getElementById("status");
const log = document.getElementById("log");

// The server. It keeps its own records, and it does not believe what the browser says about itself beyond the request.
const server = {
    windowMilliseconds: 10000,
    limit: 3,
    recentByClient: {},

    handle(request) {
        const now = Date.now();
        const recent = (this.recentByClient[request.clientId] ?? []).filter(time => now - time < this.windowMilliseconds);
        recent.push(now);
        this.recentByClient[request.clientId] = recent;

        // Counted before the content is checked, so a flood of empty requests is still limited.
        if (recent.length > this.limit) {
            return { accepted: false, reason: "Too many requests. Wait and try again." };
        }
        if (request.comment.trim() === "") {
            return { accepted: false, reason: "The comment was empty." };
        }
        return { accepted: true, reason: "Comment saved." };
    },
};

// The browser sends this. The clientId is whatever the page says it is, which is exactly why it cannot be trusted alone.
function send(clientId, text) {
    const result = server.handle({ clientId, comment: text });
    const entry = document.createElement("li");
    entry.textContent = result.reason;
    log.append(entry);
    return result;
}

personButton.addEventListener("click", () => {
    const result = send("ada-browser", comment.value);
    status.textContent = result.accepted ? "Saved." : result.reason;
    if (result.accepted) {
        comment.value = "";
    }
});

// Five requests in a row from one client. The server accepts the first three, then starts refusing.
botButton.addEventListener("click", () => {
    let last = null;
    for (let attempt = 0; attempt < 5; attempt++) {
        last = send("bot-1", "Cheap watches, click here");
    }
    status.textContent = last.reason;
});
