const user = { signedIn: true, role: "admin" };
const canAccess = user.signedIn === true && user.role === "admin";

console.log(canAccess ? "Access granted" : "Access denied");
console.log(canAccess);
