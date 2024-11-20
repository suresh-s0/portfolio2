const projects = [
  {
    Title: "sign up",
    img: "src/asset/todolist.png",
    desc: "",
    link: [
      "https://github.com/suresh-sterna",
      "https://todo-list-05s.netlify.app/",
    ],
    lan: ["react", "go", "sql"],
  },
  {
    Title: "todo ",
    img: "",
    desc: "",
    link: [""],
    lan: [""],
  },
  {
    Title: "go game ",
    img: "",
    desc: "",
    link: [""],
    lan: [""],
  },
];

function Projects() {
  return (
    <div id="Projects" className=" border-b-4 border-gray-800 p-5 mt-3 flex justify-center">
      <div className="scrollable-container flex overflow-x-auto   p-3  border-2 border-red-900 p-4 w-[1000px] ">
        {projects.map((pro, index) => {
          let title = pro.Title;
          let img = pro.img;
          let desc = pro.desc;
          let link = pro.link;
          let lan = pro.lan;
          return (
            <div
            className="flex-shrink-0 border mr-4 w-[400px] p-4 bg-gray-800 rounded-lg"
            key={index}
          >
              <h1 className="text-white">{title}</h1>
              <img src={img} alt={title} width="400" height="200" />
              <p>{desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">

                {link.map((url, ind) => (
                  <a
                    key={ind}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                ))}
              </div>
              <h2 className="">{lan.join(", ")}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
