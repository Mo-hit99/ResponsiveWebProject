// footer Year Display
let date =new Date();
let year = date.getFullYear();
document.getElementById('currentYear').innerHTML=year;
// toggle

let togglebutton=document.getElementById('togglebutton');
let navlinks=document.getElementById('navlinks');
togglebutton.addEventListener('click', ()=>{
    navlinks.classList.toggle('active');
    
})


// serviescs cards dynmaical display
const cardInfo = [
    {
         imgUrl:'#',
         title : 'Full Stack',
         description: 'A full-stack developer is an IT professional who develops a software applications client and server side. They apply a wide range of coding skills and help other programmers solve problems. Full-stack developers also test and debug software and optimize the code',
     },
     {
         imgUrl:'#',
         title : 'Java Developer',
         description: 'Some responsibilities of a Java Developer include designing, planning, developing, and managing Java-based software and applications.',
     },
     {
         imgUrl:'#',
         title : 'Web Developer',
         description: ' Web developers build and maintain websites and web applications using programming, design tools and languages such as HTML, CSS, and JavaScript to meet both client and end-user needs',
     },
    
    ];

    // get cards container
    const sectionContainer = document.querySelector('.sec-cards');
  // create func form create elements
    const cardFunction = (imgUrlValue, titleValue, descriptionValue)=>{
      const card =document.createElement('div');
      card.classList.add('card');

     // create card elements
      const cardImg=document.createElement('div');
      cardImg.classList.add('image');

      const contentCard = document.createElement('div');
      contentCard.classList.add('content');

      const a =document.createElement('a');
      a.setAttribute('href', imgUrlValue);

      const span = document.createElement('span');
      span.classList.add('title');
      span.innerHTML=titleValue;

      const p = document.createElement('p');
      p.classList.add('desc');
      p.innerHTML=descriptionValue;

      // apppen child 

      sectionContainer.appendChild(card);
      card.appendChild(cardImg);

      contentCard.appendChild(a);
      a.appendChild(span);
      card.appendChild(a)
      card.appendChild(p)

    }

    const genreate = ()=>{  // iterator cards 
      cardInfo.map((e)=>{
        cardFunction(e.imgUrl,e.title,e.description)
      })
    }

    genreate();



    // // Project cards dynamic display


// const project =[
      
//     {
//       img:"./bg-image/pagescroll.png",
//       link:'https://pagescrollindicator.netlify.app/',
//       text: 'PageScroll'
//     },
//     {
//       img:"./bg-image/hoverEffect.jpg",
//       link:'https://hovercard22.netlify.app/',
//       text: 'HoverEffect'
//     },
  
//     {
//       img:"./bg-image/temperature-converter.webp",
//       link:'https://tempconverter0099.netlify.app/',
//       text: 'tempConvert'
//     }
  
//   ];


//   const projectContainer =document.querySelector('.project-container');


//   function createProjectCard(imgValue,linkValue , textValue){
//       const projectCard = document.createElement('div');
//       projectCard.classList.add('project-card');

//       const imgContainer =document.querySelector('img');
//       imgContainer.setAttribute('src', imgValue);


//       const Atag = document.querySelector('a');
//       Atag.classList.add('atag');
//       Atag.setAttribute('href',linkValue);
//       Atag.innerHTML = textValue;


//       projectContainer.appendChild(projectCard);
//       projectCard.appendChild(imgContainer);
//       projectCard.appendChild(Atag);
//   }


//   const create = ()=>{
//     project.map((e)=>{
//       createProjectCard(e.img ,e.link,e.text);
//     })
//   }
//   create();
