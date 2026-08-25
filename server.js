const http = require("http");

const PORT = 3000;
const VERSION = "v3";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    // Main application endpoint
    if (req.url === "/cicd/" || req.url === "/") {
        res.writeHead(200);

        return res.end(
            JSON.stringify({
                message: "Hello from CI/CD Pipeline 🚀",
                version: VERSION
            })
        );
    }

    // Health check endpoint
    if (req.url === "/health") {
        res.writeHead(200);

        return res.end(
            JSON.stringify({
                status: "healthy",
                version: VERSION
            })
        );
    }

    // Application information
    if (req.url === "/info") {
        res.writeHead(200);

        return res.end(
            JSON.stringify({
                application: "CI/CD Real Project",
                version: VERSION,
                environment: "production",
                platform: "Docker"
            })
        );
    }

    // 404
    res.writeHead(404);

    res.end(
        JSON.stringify({
            error: "Route not found"
        })
    );
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});