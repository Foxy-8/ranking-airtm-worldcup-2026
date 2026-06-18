async function extractNames(files){

const uniqueNames = new Set();

for(const file of files){

const result =
await Tesseract.recognize(
file,
"eng"
);

const text =
result.data.text;

const lines =
text.split("\n");

for(let line of lines){

line = line.trim();

if(line.length < 3)
continue;

if(
line.includes("Online")
||
line.includes("Offline")
||
line.includes("Members")
)
continue;

line = line
.replace(/[^\w\s]/g,"")
.trim();

if(line.length > 2){

uniqueNames.add(line);

}

}

}

return [...uniqueNames];

}
