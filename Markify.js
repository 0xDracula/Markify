const fs = require("fs");
const readlineSync = require("readline-sync");

const parseCSV = (csv) => {
  const rows = csv.split("\n").filter((row) => row.trim() !== "");
  return rows.map((row) => row.split(";"));
};

const generateMarkdownTableJson = (data) => {
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const rows = data;
  const table = [];

  table.push(`| ${headers.join(" | ")} |`);

  table.push(`| ${headers.map(() => "---").join(" | ")} |`);

  rows.forEach((row) => {
    table.push(`| ${headers.map((header) => row[header] || "").join(" | ")} |`);
  });

  return table.join("\n");
};

const generateMarkdownTableCsv = (data) => {
  const headers = data[0];
  const rows = data.slice(1);
  const table = [];

  table.push(`| ${headers.join(" | ")} |`);

  table.push(`| ${headers.map(() => "---").join(" | ")} |`);

  rows.forEach((row) => {
    table.push(`| ${row.join(" | ")} |`);
  });

  return table.join("\n");
};

const readFileContent = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading the file:", error);
    process.exit(1);
  }
};

const processFile = () => {
  const filePath = readlineSync.question("Enter the file path: ");
  const fileContent = readFileContent(filePath);

  let parsedData;

  if (filePath.endsWith(".csv")) {
    parsedData = parseCSV(fileContent);
    console.log(generateMarkdownTableCsv(parsedData));
  } else if (filePath.endsWith(".json")) {
    try {
      parsedData = JSON.parse(fileContent);
      console.log(generateMarkdownTableJson(parsedData));
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      process.exit(1);
    }
  } else {
    console.log("Unsupported file format.");
    process.exit(1);
  }
};

processFile();
