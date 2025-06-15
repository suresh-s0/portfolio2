const imgs = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"

]

function Skills() {
    return (
        <div className="flex justify-center items-center h-[50vh] border-b-4 border-gray-800 p-10 ">
            <div className="border flex flex-col justify-center items-center mt-8 w-[700px] ">
                <span className=" text-white"> Knowledges in:</span>

                <div className="flex flex-wrap justify-center items-center justify-between  p-8 gap-3">
                    {imgs.map((img, ind) => {
                        let url = img
                        // console.log(url.length)
                        return (
                            <div className="border rounded-lg flex gap">  
                                <img src={url} alt="html5" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                            </div>
                        )
                    })}

                </div>


            </div>
        </div>
    )
}

export default Skills
