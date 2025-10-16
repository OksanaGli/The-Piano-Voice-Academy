const getAnimateAboutSection = () => {
  const aboutTitle = document.querySelector('.about__title');
  if (aboutTitle) {
    aboutTitle.setAttribute('data-aos', 'fade-up');
    aboutTitle.setAttribute('data-aos-duration', '800');
    aboutTitle.setAttribute('data-aos-delay', '200');
  }

  const aboutItems = document.querySelectorAll('.about__item');
  if (aboutItems.length > 0) {
    aboutItems.forEach((item) => {
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-duration', '800');
      item.setAttribute('data-aos-delay', '400'); 
    });
  }
}

const getAnimateTrainingSection = () => {
  const trainingTitle = document.querySelector('.training__title');
  if (trainingTitle) {
    trainingTitle.setAttribute('data-aos', 'fade-up');
    trainingTitle.setAttribute('data-aos-duration', '800');
    trainingTitle.setAttribute('data-aos-delay', '200');
  }

  const trainingDescription = document.querySelector('.training__description');
  if (trainingDescription) {
    trainingDescription.setAttribute('data-aos', 'fade-up');
    trainingDescription.setAttribute('data-aos-duration', '800');
    trainingDescription.setAttribute('data-aos-delay', '400'); 
  }
}

const getAnimateContactsSection = () => {  
  const contactsDesc = document.querySelector('.contacts__description');
  if (contactsDesc) {
    contactsDesc.setAttribute('data-aos', 'fade-up');
    contactsDesc.setAttribute('data-aos-duration', '800');
    contactsDesc.setAttribute('data-aos-delay', '200');
  }

  const contactsTitle = document.querySelector('.contacts__title');
  if (contactsTitle) {
    contactsTitle.setAttribute('data-aos', 'fade-up');
    contactsTitle.setAttribute('data-aos-duration', '800');
    contactsTitle.setAttribute('data-aos-delay', '300');
  }

  const contactsMap = document.querySelector('.contacts__container-map');
  if (contactsMap) {
    contactsMap.setAttribute('data-aos', 'fade-up');
    contactsMap.setAttribute('data-aos-duration', '800');
    contactsMap.setAttribute('data-aos-delay', '400'); 
  }

  const contactsList = document.querySelector('.contacts__list');
  if (contactsList) {    
    contactsList.setAttribute('data-aos', 'fade-up');
    contactsList.setAttribute('data-aos-duration', '800');
    contactsList.setAttribute('data-aos-delay', '400'); 
  }
}

getAnimateAboutSection();
getAnimateTrainingSection();
getAnimateContactsSection()
  
AOS.init({
  duration: 800,         
  offset: 100,  
});
