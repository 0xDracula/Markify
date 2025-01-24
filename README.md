# Markify: CSV and JSON to Markdown Table Converter

**Markify** is a simple and efficient Node.js tool that converts CSV and JSON files into beautifully formatted Markdown tables. This tool streamlines the process of transforming CSV and JSON data into a clean, readable format that can be easily integrated into documentation, reports, or other Markdown-supported platforms.

## Key Features:
- **CSV Parsing:** Efficiently reads and processes CSV files with various delimiters.
- **JSON Parsing:** Converts JSON data into a Markdown table.
- **Markdown Conversion:** Converts both CSV and JSON data into a well-structured Markdown table.

## Example Usage:

### For CSV Files:

Given the following input CSV (`data.csv`):
```csv
Login email;Identifier;First name;Last name
laura@example.com;2070;Laura;Grey
craig@example.com;4081;Craig;Johnson
mary@example.com;9346;Mary;Jenkins
jamie@example.com;5079;Jamie;Smith
```
Markify will convert it into this Markdown table:

| Login email        | Identifier | First name | Last name |
|--------------------|------------|------------|-----------|
| laura@example.com | 2070       | Laura      | Grey      |
| craig@example.com | 4081       | Craig      | Johnson   |
| mary@example.com  | 9346       | Mary       | Jenkins   |
| jamie@example.com | 5079       | Jamie      | Smith     |


### For JSON Files:


Given the following input JSON (data.json):

```json
[
  { "name": "Alice", "email": "alice@example.com", "age": 30 },
  { "name": "Bob", "email": "bob@example.com", "age": 25 }
]
```

Markify will convert it into this Markdown table:

| name  | email               | age |
|-------|---------------------|-----|
| Alice | alice@example.com    | 30  |
| Bob   | bob@example.com      | 25  |
