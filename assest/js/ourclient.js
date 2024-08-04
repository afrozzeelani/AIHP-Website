const testimonials = [
  {
    name: "Vijay K Gupta ( CEO )",
    title: "Think Future Technologies Pvt Ltd",
    image: "/assest/img/ellipse_82.png",
    stars: 4,
    testimonial:
      "I want to thank AIHP for their continuous support over the past six years. A big shout out to the AIHP team for their prompt execution of instructions and constant help with various tasks, such as parking arrangements, additional seating, temporary storage, and maintaining clean facilities. We are proud to be associated with AIHP."
  },
  {
    name: "Sahil Chalana (Founder)",
    title: "College Dunia Web Pvt. Ltd.",
    image: "/assest/img/ellipse_8.png",
    stars: 5,
    testimonial:
      "AIHP impressed us from the start with their attention to detail and understanding of our needs. In just three months, they delivered exactly what we envisioned. Their high-quality team and professional staff guided us through the design process seamlessly. Undoubtedly, it was one of the best office experiences we've had."
  },
  {
    name: "Sudhir Sharma (Regional Head)",
    title: "State Bank of India",
    image: "/assest/img/ellipse_81.png",
    stars: 3,
    testimonial:
      "At AIHP, excellence is not just a goal – it's the standard. Every aspect exceeds expectations, from their state-of-the-art offices to impeccable services and amenities. Choosing AIHP as our location was an easy decision. Their tailored designs perfectly suit our needs, and their flexibility in creating space is unparalleled. "
  }
];

function changeTestimonial(index) {
  const testimonialSection = document.getElementById("testimonial");
  testimonialSection.style.opacity = 0;
  setTimeout(() => {
    document.getElementById("person-name").innerText = testimonials[index].name;
    document.getElementById("person-title").innerText =
      testimonials[index].title;
    document.getElementById("person-image").src = testimonials[index].image;
    document.getElementById("person-testimonial").innerText =
      testimonials[index].testimonial;
    const stars = document.getElementById("person-stars");
    stars.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.className =
        "fa fa-star" + (i >= testimonials[index].stars ? " star-empty" : "");
      stars.appendChild(star);
    }
    testimonialSection.style.opacity = 1;
  }, 500);
}
