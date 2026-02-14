
const data=[
{title:"loader x32 investigation",tag:"analise"},
{title:"sample 9f3a dissection",tag:"crackme"},
{title:"static analysis workflow",tag:"tutorial"}
];

const postsDiv=document.getElementById("posts");
const search=document.getElementById("search");
const checks=document.querySelectorAll("input[type=checkbox]");

function render(){
let text=search.value.toLowerCase();
let active=[...checks].filter(c=>c.checked).map(c=>c.value);
postsDiv.innerHTML="";
data.forEach(p=>{
if(p.title.includes(text)&&active.includes(p.tag)){
let el=document.createElement("div");
el.className="post";
el.innerHTML="<span class='tag'>"+p.tag+"</span><h3>"+p.title+"</h3>";
postsDiv.appendChild(el);
}
});
}
search.oninput=render;
checks.forEach(c=>c.onchange=render);
render();
