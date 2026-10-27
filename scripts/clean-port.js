const { execSync } = require("child_process");

// Ensures port 3000 is clean before Next.js starts up
try {
  if (process.platform === "win32") {
    const output = execSync("netstat -ano", { encoding: "utf8" });
    const lines = output.split("\n");
    const pids = new Set();
    for (const line of lines) {
      if (line.includes(":3000") && line.includes("LISTENING")) {
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        if (pid && pid !== "0" && pid !== String(process.pid)) {
          pids.add(pid);
        }
      }
    }
    for (const pid of pids) {
      try {
        console.log(`[predev] Clearing stale listener PID ${pid} on port 3000...`);
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
      } catch {
        // Process might have exited already
      }
    }
  }
} catch {
  // Silent fallback if command fails or port is already clear
}
