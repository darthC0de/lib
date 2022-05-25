const { execFile } = require("child_process");

(async () => {
  await execFile(
    "cp",
    [
      process.env.OS === "Windows_NT" ? "-r" : "-r -f",
      "./src/assets/*",
      "./lib/assets",
    ],
    (error, stdout, stderr) => {
      if (error) {
        return;
      }
      if (stderr) {
        return;
      }
    }
  );
})();
