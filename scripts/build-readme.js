const fs = require("fs");
const path = require("path");

const sectionsDir = path.join(__dirname, "../sections");

const sectionOrder = [
  "hero.md",
  "about.md",
  "achievements.md",
  "techstack.md",
  "projects.md",
  "experience.md",
  "socials.md",
  "analytics.md",
  "snake.md",
];

let finalReadme = "";

sectionOrder.forEach((file) => {
  const filePath = path.join(sectionsDir, file);

  if (fs.existsSync(filePath)) {
    finalReadme += fs.readFileSync(filePath, "utf8") + "\n";
  }
});

fs.writeFileSync(
  path.join(__dirname, "../README.md"),
  finalReadme
);

console.log("README.md generated successfully!");