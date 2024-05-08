//const headset=document.querySelector(".heads")


//let x=10;



//console.log(x);
//function myFunction(){
   // document.getElementById("demo").innerHTML="paragraph changed"
//}
const accessKey="YCqC7dFj7SBtFbtKPaIz-CJfWMtjPO0yd_4IUTLrCEA";

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const changeBtn=document.getElementById("change-btn");


let keyword="";
let page=1;

async function searchImages(){
keyword= searchBox.value;
const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
const response= await fetch(url);
const data=await response.json();
if(page!==1)
 {
   searchResult.innerHTML=""
  }

const results=data.results;

results.map((result)=>{
    const image= document.createElement("img");
    image.src= result.urls.small;
    const imageLink= document.createElement("a");
    imageLink.href= result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})
changeBtn.style.display="block"
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page= 1;
    searchImages();
})

//showMoreBtn.addEventListener("click", ()=>{
   // page++;
   // searchImages();
//})


//function myComponent(useState){
 // const[count, setCount]=
  //count=1
  //setCount=2
  //useState=(0)
//}

changeBtn.addEventListener("click", (
)=>
  {
    for(x=1; x<10; x++)
      {
      console.log(`${page++}`)
      searchImages();
      }

  
  }
)

