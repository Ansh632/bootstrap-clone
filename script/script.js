
  const sectionHeaders = [
   
    {
      number: "O2",
      badgeText: "Portfolio",
      title: "Featured projects",
      desc: "A glimpse into our creativity—exploring innovative designs."
    },
   {
    number: "03",
    badgeText: "Services",
    title: "What we do",
    desc: "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences.",
    lightTitle: true,
    lightBadge: true
},
    {

      number: "05",
      badgeText: "Testimonial",
      title: "Stories from clients",
      desc: "Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses."
    },

    {
      number: "06",
      badgeText: "The team",
      title: "Meet our team",
      desc: "Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment."
    },

    {
    
    number: "07",
    badgeText: "Pricing",
    title: "Affordable pricing",
    desc: "A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences."
  
  },


  {
    number: "08",
    badgeText: "FAQs",
    title: "Frequently asked questions",
    desc: "Discover how we tailor our solutions to meet unique needs, delivering impactful strategies, personalized branding, and exceptional customer experiences."
  },


    {
       number: "09",
      badgeText: "Resources",
      title: "Recent Newz",
      desc: "Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment."
    },

  ];

  // document
  //   .querySelectorAll(".section-header")
  //   .forEach((el, index) => {

    
  //     if (!sectionHeaders[index]) return;

  //     const section = sectionHeaders[index];

  //     el.innerHTML = `
  //           <div class="row-holder">
  //             <div class="layout-control">

  //               <div class="box-1 px-16">
  //                 <div class="stats-facts flex-start py-16 gap-24">
  //                   <span class="circle-tag">${section.number}</span>
  //                   <hr class="hr-line">
  //                   <div class="span-badge">${section.badge}</div>
  //                 </div>
  //               </div>

  //               <div class="box-2 px-16">
  //                 <div class="stats-intro px-16 gap-24">
  //                   <h1>${section.title}</h1>
  //                   <p>${section.desc}</p>
  //                 </div>
  //               </div>

  //             </div>
  //           </div>
 
  //     `;
  //   });

  document.querySelectorAll(".section-header").forEach((el, index) => {
  if (!sectionHeaders[index]) return;

  const section = sectionHeaders[index];
  const titleClass = section.lightTitle ? "white-color" : "";
  const badgeClass = section.lightBadge ? "badge" : "";


  el.innerHTML = `
    <div class="row-holder">
      <div class="layout-control">

        <div class="box-1 px-16">
          <div class="stats-facts flex-start py-16 gap-24">
           <span class="circle-tag">${section.number}</span>
<hr class="hr-line">
<div class="span-badge ${badgeClass}">${section.badgeText}</div>
          </div>
        </div>

        <div class="box-2 px-16">
          <div class="stats-intro px-16 gap-24">
            <h1 class="${titleClass}">${section.title}</h1>
            <p class="${titleClass}">${section.desc}</p>
          </div>
        </div>

      </div>
    </div>
  `;
});



const menu = document.querySelector(".menu");

const items = [
  {
    title: "Brand identity",
    img: "images/portfolio-img-1.jpg",
    desc: "When selecting a web design agency, it's essential to consider its reputation..."
  },
  {
    title: "Web development",
    img: "images/portfolio-img-2.jpg",
    desc: "We focus on user-centered design to enhance your brand’s digital presence."
  },
  {
    title: "Content creation",
    img: "images/portfolio-img-3.jpg",
    desc: "Our responsive websites adapt to any screen size beautifully."
  },
  {
    title: "Motion & 3D modeling",
    img: "images/portfolio-img-4.jpg",
    desc: "Collaborate with our creative team to bring your ideas to life."
  }
];

items.forEach(item => {
  menu.innerHTML += `
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <button class="btn-design"
          onclick="document.getElementById('mainImg').src='${item.img}'">
          ${item.title}
        </button>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
});



// Full team
const teamMembers = [
  { name: "Martha Finley", role: "Creative Director", img: "images/team-img-1.jpg" },
  { name: "John Smith", role: "UI Designer", img: "images/team-img-2.jpg" },
  { name: "Sarah Lee", role: "UX Researcher", img: "images/team-img-3.jpg" },
  { name: "Alex Brown", role: "Frontend Developer", img: "images/team-img-4.jpg" }
];

// Featured team (different data, only 3 members)
const featuredTeam = [
  { name: "Emma Wilson", role: "Brand Strategist", img: "images/resources-1.jpg" },
  { name: "Daniel Park", role: "Motion Designer", img: "images/resources-2.jpg" },
  { name: "Liam Chen", role: "Product Designer", img: "images/resources-3.jpg" }
];

function renderedTeams(parameter, secondParam) {
  const team_members = document.querySelector(secondParam);

  let team_member_html = "";

  parameter.forEach((teamMember) => {
    team_member_html += `
      <article class="team-card">
        <img src="${teamMember.img}" alt="${teamMember.name}">
        <div class="team-info">
          <h3>${teamMember.name}</h3>
          <p>${teamMember.role}</p>
        </div>
      </article>
    `;
  });

  team_members.innerHTML = team_member_html;
}

renderedTeams(teamMembers, ".team-members");
renderedTeams(featuredTeam,'.featured-team')