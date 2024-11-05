function About() {

    return (           
         <div className="border flex flex-col justify-center items-center mt-5 h-screen ">
            <h1 className="text-white">About me</h1>
            <div className="flex w-[50%] mt-8">
               
                <h2 className="text-white">
                    Hello! I'm an up-and-coming Full Stack Developer .
                    With a solid foundation in both front-end and back-end technologies, I'm passionate about crafting 
                    dynamic and responsive web applications that deliver seamless user experiences.
                </h2>
            </div>


            <div className="border flex flex-col justify-center items-center mt-8 ">
                <span className=" text-white"> Knowledges in:</span>
                <div className="flex flex-row m-8">
                  
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" style={{  display: 'block', marginRight: '10px' }} />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                
              
                  
                        <img src="https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" alt="vite" width="37" height="37" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                        <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" style={{ display: 'block', marginRight: '10px' }} />
                   
                </div>
            </div>
        </div>
    )
}

export default About;