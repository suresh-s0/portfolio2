const projects = [
  {
    Title: "sign up",
    img: "src/asset/todolist.png",
    desc: "",
    link: ["https://github.com/suresh-sterna","https://todo-list-05s.netlify.app/"],
    lan: ["react","go","sql"],
  },
  {
    Title: "todo ",
    img: "",
    desc: "",
    link: [""],
    lan: [""],
  },
];

function Projects() {
  return (
    <div className="flex flex-row p-3 justify-center border-2 border-red-900 p-4 ">
      {projects.map((pro,index) => {
        let title = pro.Title;
        let img = pro.img;
        let desc = pro.desc;
        let link = pro.link;
        let lan = pro.lan;
        return(

            <div className="border mr-4  " key={index}>
                <h1>{title}</h1>
                <img src={img} alt={title}  width="400" height="200"/>
                <p>{desc}</p>

                <div>
                {link.map((url,ind) => (
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
        )
      })}
     
    </div>
  );
}

export default Projects;
