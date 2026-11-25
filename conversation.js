"use strict";
// Preview only. No network requests, persistence or public posting.
const examples = [
 {id:8, text:"Regarding #003, I think Neutral Days could also be useful for families.", date:"25 Nov 2026", reference:3},
 {id:7, text:"I would love to see a comparison with other calendar reforms.", date:"24 Nov 2026"},
 {id:3, text:"Could Neutral Days give children more time to play freely?", date:"22 Nov 2026"}
];
const ordered = [...examples].sort((a,b)=>b.id-a.id);
const reference = ordered[0]?.reference;
const position = ordered.findIndex((c,i)=>i>0 && c.id===reference);
if(position>1) ordered.splice(1,0,ordered.splice(position,1)[0]);
function element(tag, className, text){const el=document.createElement(tag);el.className=className;el.textContent=text;return el;}
const timeline=document.getElementById("timeline");
for(const c of ordered){const bubble=element("article","speech","");const meta=element("div","comment-meta","");meta.append(element("span","comment-number",`#${String(c.id).padStart(3,"0")}`));if(c.id===reference)meta.append(element("span","","Referenced above"));bubble.append(meta,element("p","comment-body",c.text),element("div","comment-meta",c.date));timeline.append(bubble);}
const input=document.getElementById("comment");
input.addEventListener("input",()=>{document.getElementById("counter").textContent=`${input.value.length} / 1000`;});
document.getElementById("comment-form").addEventListener("submit",event=>event.preventDefault());
