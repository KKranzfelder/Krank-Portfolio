const Project = function (title: string, gifSrc: string, description: string, link: string) {
    this.title = title;
    this.gifSrc = gifSrc;
    this.description = description;
    this.link = link;
};

Project.prototype.playGif = function () {
    console.log('GIF played')
};

const pharos = new Project(
    'Pharos', 
    'https://user-images.githubusercontent.com/71243281/201701645-a91dd79b-2348-41b0-a79f-a068592e489b.gif', 
    'Online retail page designed for a given Business Requirement Document that came with a fully built backend. I was challenged with designing and implementing the ratings and reviews section of the page. The page was built with Styled Components and React', 
    'https://github.com/Team-Pharos/FEC_Lighthouse'
);

const sdc = new Project(
    'SDC',
    '',
    'Backend focused project. Was given CRV data for the catalog of an entire online retail catalog with over one million entries. The goal was to successfully get the response time to below 1000ms on any given request with a less than 2% error rate. Utilizing Postegres, indexing, and microservices, was able to accomplish the goal.',
    'https://github.com/Flamingoes-SDC/Products-Database'
);

const gamesCollective = new Project(
    'Games Collective',
    'https://user-images.githubusercontent.com/97041979/177774974-72f06ebd-7f0e-4300-9aa4-477955807416.gif',
    'An app designed as a game catalog with social integration. The project utilized React, Redux, and Sass for styling in the frontend and Postgres and Express in the backend.',
    'https://github.com/Jelly-Donut-Fish/GamesCollective'
);

modules.exports= {
    pharos,
    sdc,
    gamesCollective,
}