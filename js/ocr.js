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

const bannedWords = [
"online",
"offline",
"members",
"member",
"roles",
"channels",
"voice",
"text",
"discord",
"united",
"states",
"paraguay",
"draw",
"empate"
];

const cleanLine = line.toLowerCase();

const isBanned =
bannedWords.some(word =>
cleanLine.includes(word)
);

const hasManyNumbers =
(line.match(/\d/g) || []).length >= 3;

const hasVS =
line.toLowerCase().includes("vs");

const hasVotes =
line.toLowerCase().includes("voto");

const looksLikeDiscordId =
/_[0-9]/.test(line);

if(
!isBanned &&
!hasManyNumbers &&
!hasVS &&
!hasVotes &&
!looksLikeDiscordId &&
line.length >= 3 &&
line.length <= 30
){
    uniqueNames.add(line);
}

}

}

return [...uniqueNames];

}
