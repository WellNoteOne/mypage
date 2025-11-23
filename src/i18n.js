import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        projectsTitle: "My Projects",
        projects: "Projects",
        open: "Open →",
        contact: "Contact",
        aboutText:
          "I’m a passionate software developer focused on building efficient, user-friendly, and scalable web applications. I work with both front-end and back-end technologies, including React, JavaScript, C#, and ASP.NET, and enjoy bringing ideas to life through clean and functional code. I love solving complex problems, learning new tools, and exploring how technology can make everyday tasks simpler and smarter. My goal is to create software that not only works well but also feels natural and intuitive for users. Beyond development, I value clear communication, teamwork, and continuous growth. I’m always open to new challenges and opportunities to contribute to meaningful projects that have real-world impact.",
        about: "About",
        downloadCV: "Download My CV",
        webDev: "WEB Developer",
      },
    },
    ru: {
      translation: {
        projectsTitle: "Мои проекты",
        open: "Открыть →",
        about: "Обо мне",
        projects: "Проекты",
        contact: "Контакты",
        aboutText:
          "Я увлеченный разработчик программного обеспечения который создает эффективные удобные и масштабируемые веб приложения. Я работаю с фронтендом и бэкендом использую React JavaScript C# и ASP.NET и мне нравится превращать идеи в жизнь с помощью чистого и функционального кода. Мне нравится решать сложные задачи изучать новые инструменты и находить способы как технологии могут сделать повседневные задачи проще и умнее. Моя цель создавать программные продукты которые хорошо работают и ощущаются естественными и интуитивными для пользователей. Я ценю четкую коммуникацию командную работу и постоянное развитие. Я всегда открыт новым вызовам и возможностям участвовать в значимых проектах которые приносят реальную пользу.",
        downloadCV: "Скачать мое резюме",
        webDev: "WEB Разработчик",
      },
    },
  },
});

export default i18n;
