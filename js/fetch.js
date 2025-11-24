function fetchJson(url) {
  return fetch(url).then(response => response.json());
}

function fetchCsv(url) {
  return fetch(url).then(response => response.text()).then(parseCsv);
}

function parseCsv(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length === 0) return [];
  
  // Parse headers, strip quotes
  const headers = lines[0].split(',').map(h => h.replace(/^"|"$/g, ''));
  
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.replace(/^"|"$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.replace(/^"|"$/g, ''));
    
    // Create object
    const obj = {};
    for (let k = 0; k < headers.length; k++) {
      obj[headers[k]] = values[k] || '';
    }
    rows.push(obj);
  }
  
  return rows;
}