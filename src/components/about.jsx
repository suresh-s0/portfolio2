function About() {

    return (           
         <div className="flex flex-col justify-center items-center mt-5  border-b-4 border-gray-800 ">
            <h1 className="text-white">About me</h1>
            <div className="flex w-[50%] mt-8">
               
                <h2 className="text-white">
                    Hello! I'm an up-and-coming Full Stack Developer .
                    With a solid foundation in both front-end and back-end technologies, I'm passionate about crafting 
                    dynamic and responsive web applications that deliver seamless user experiences.
                </h2>
            </div>



            <div className="text-white flex flex-col w-[50%] justify-center border  py-8">
                <h1>Experience:</h1>
                <div className="px-6 py-3">
                    <h2>Company: Sterna Devices</h2>
                    <h2>Role: Junior Software Developer</h2>
                    <h2>Duration: Apirl-2024 to present </h2>
                </div>
                
                <h1>Responsibilities:</h1>
                <div className="px-6 py-2">
                    <h2 className="py-2">** Working on projects involving GO,Gin,Gorm and  SQL to develop and maintain applications.</h2>
                    <h2 className="py-2">** Collaborated with cross-functional teams to implement  user authentication, API integrations AND CRUD functions.</h2>
                    
                </div>
            </div>
            </div>
    )
}

export default About;