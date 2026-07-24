const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 50);

});

new Typed("#typing",{

strings:[

"Frontend Developer",

"Commercial Web Designer",

"UI / UX Designer",

"Freelancer"

],

typeSpeed:70,

backSpeed:45,

loop:true

});

const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-250+"px";

glow.style.top=e.clientY-250+"px";

});

const card=document.querySelector(".profile-card");

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/25);

const rotateX=((rect.height/2-y)/25);

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0)";

});


const pricingCards = document.querySelectorAll(".price-card");

pricingCards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.setProperty("--x", `${x}px`);
card.style.setProperty("--y", `${y}px`);

});

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(i => {

            if(i !== item){

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


const topBtn = document.querySelector(".scroll-top");

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loader").classList.add("hide");

},1200);

});

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});

const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

section.classList.add("active");

}

});

});

const websiteType=document.getElementById("websiteType");

const pages=document.getElementById("pages");

const features=document.querySelectorAll(".feature");

const total=document.getElementById("totalPrice");

function calculatePrice(){

let base=Number(websiteType.value);

let pageCost=(Number(pages.value)-1)*1200;

let featureCost=0;

features.forEach(feature=>{

if(feature.checked){

featureCost+=Number(feature.value);

}

});

let finalPrice=base+pageCost+featureCost;

total.innerHTML="₹"+finalPrice.toLocaleString("en-IN");

let delivery=7;

if(finalPrice>15000) delivery=15;

if(finalPrice>25000) delivery=25;

if(finalPrice>40000) delivery=30;

document.getElementById("deliveryDays").innerHTML=delivery+" Days";

}

websiteType.addEventListener("change",calculatePrice);

pages.addEventListener("input",calculatePrice);

features.forEach(feature=>{

feature.addEventListener("change",calculatePrice);

});

calculatePrice();

const quoteBtn=document.getElementById("generateQuote");

quoteBtn.addEventListener("click",generateQuote);

function generateQuote(){

const { jsPDF }=window.jspdf;

const pdf=new jsPDF("p","mm","a4");

const clientName=document.getElementById("clientName").value || "Client";

const clientEmail=document.getElementById("clientEmail").value || "-";

const company=document.getElementById("clientCompany").value || "-";

const website=document.getElementById("websiteType");

const websiteName=website.options[website.selectedIndex].text;

const pages=document.getElementById("pages").value;

const total=document.getElementById("totalPrice").innerText;

const delivery=document.getElementById("deliveryDays").innerText;

let selected=[];

document.querySelectorAll(".feature").forEach(feature=>{

if(feature.checked){

selected.push(feature.parentElement.innerText.trim());

}

});

const quoteID="VK-"+Date.now();

const today=new Date().toLocaleDateString("en-IN");

pdf.setFillColor(246,196,69);

pdf.rect(0,0,210,18,"F");

pdf.setTextColor(20);

pdf.setFontSize(20);

pdf.text("VK STUDIO",15,12);

pdf.setFontSize(10);

pdf.text("Premium Website Development Proposal",15,17);

pdf.setTextColor(0);

let y=30;

pdf.setFontSize(12);

pdf.text("Quote ID : "+quoteID,15,y);

y+=8;

pdf.text("Date : "+today,15,y);

y+=15;

pdf.setFontSize(16);

pdf.text("Client Information",15,y);

y+=8;

pdf.setFontSize(12);

pdf.text("Name : "+clientName,15,y);

y+=7;

pdf.text("Email : "+clientEmail,15,y);

y+=7;

pdf.text("Company : "+company,15,y);

y+=15;

pdf.setFontSize(16);

pdf.text("Project Details",15,y);

y+=8;

pdf.setFontSize(12);

pdf.text("Website Type : "+websiteName,15,y);

y+=7;

pdf.text("Pages : "+pages,15,y);

y+=10;

pdf.text("Selected Features :",15,y);

y+=8;

if(selected.length===0){

pdf.text("None",20,y);

y+=8;

}else{

selected.forEach(item=>{

pdf.text("• "+item,20,y);

y+=7;

});

}

y+=8;

pdf.setFontSize(16);

pdf.text("Quotation Summary",15,y);

y+=10;

pdf.setFontSize(12);

const amount = total.replace("₹","Rs.")

pdf.text("Estimated Cost : "+amount,15,y);

y+=8;

pdf.text("Estimated Delivery : "+delivery,15,y);

y+=8;

pdf.text("Free Support : 30 Days",15,y);

y+=18;

pdf.setDrawColor(246,196,69);

pdf.line(15,y,195,y);

y+=12;

pdf.setFontSize(18);

pdf.text("Prepared By",15,y);

y+=8;

pdf.setFontSize(12);

pdf.text("Vishnu Kasi",15,y);

y+=6;

pdf.text("Frontend Developer",15,y);

y+=6;

pdf.text("Premium Website Designer",15,y);

y+=15;

pdf.setFontSize(10);

pdf.setTextColor(120);

pdf.text("Thank you for choosing VK Studio.",15,y);

pdf.save("VK-Website-Proposal.pdf");

emailjs.send(
    "service_iyjr20i",
    "template_us82dze",
    {
        client_name: clientName,
        client_email: clientEmail,
        company: company,
        website_type: websiteName,
        pages: pages,
        features: selected.join(", "),
        price: total,
        delivery: delivery,
        quote_id: quoteID,
        date: today
    }
)
.then(() => {

    console.log("Quote email sent.");

})
.catch((error) => {

    console.error(error);

});

}


const track=document.querySelector(".testimonial-track");

const cards=document.querySelectorAll(".testimonial-card");

const next=document.getElementById("next");

const prev=document.getElementById("prev");

const dots=document.querySelectorAll(".dots span");

let index=0;

function updateSlider(){

    track.style.transform=
    `translateX(-${index*(cards[0].offsetWidth+40)}px)`;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[index].classList.add("active");

}

next.onclick=()=>{

    index++;

    if(index>=cards.length){

        index=0;

    }

    updateSlider();

};

prev.onclick=()=>{

    index--;

    if(index<0){

        index=cards.length-1;

    }

    updateSlider();

};

setInterval(()=>{

    next.click();

},5000);

window.addEventListener("resize",updateSlider);

const timelineCards=document.querySelectorAll(".timeline-card");

window.addEventListener("scroll",()=>{

timelineCards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-120){

card.style.transform="translateY(0)";
card.style.opacity="1";

}else{

card.style.opacity=".4";

}

});

});

const featuredCard=document.querySelector(".featured-card");

featuredCard.addEventListener("mousemove",(e)=>{

const rect=featuredCard.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

featuredCard.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(246,196,69,.12),
#171717 45%)`;

});

featuredCard.addEventListener("mouseleave",()=>{

featuredCard.style.background="#171717";

});

