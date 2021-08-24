process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const [x, y] = data.split(" ");
    console.log(`${"*".repeat(x)}\n`.repeat(y));
});
