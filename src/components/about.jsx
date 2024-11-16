function About() {

    return (
        <div id="About" className=" flex mt-5 h-[70vh] justify-center items-center  border-b-4 border-gray-800 px-20">
            <div className=" border-gray-800 w-[50%] flex flex-col justify-center items-center">

                <h1 className="text-white text-lg">About me</h1>
                <div className="flex mt-8">

                    <h2 className="text-white text-wrap">
                        Hello! I'm an up-and-coming Full Stack Developer .
                        With a solid foundation in both front-end and back-end technologies, I'm passionate about crafting
                        dynamic and responsive web applications that deliver seamless user experiences.
                    </h2>
                </div>

            </div>


            <div className="  border-l-2 border-gray-800 text-white flex flex-col  w-[50%] px-4 py-8">
                <h1 className="text-lg">Experience:</h1>
                <div className="px-6 py-3">
                    <h2>Company: Sterna Security Devices</h2>
                    <h2>Role: Junior Software Developer</h2>
                    <h2>Duration: Apirl-2024 to present </h2>
                </div>

                <h1 className="text-lg">Responsibilities:</h1>
                <div className="px-6 py-2">
                    <h2 className="py-2">** Working on projects involving GO,Gin,Gorm and  SQL to develop and maintain applications.</h2>
                    <h2 className="py-2">** Collaborated with cross-functional teams to implement  user authentication, API integrations AND CRUD functions.</h2>

                </div>
            </div>

        </div>
    )
}

export default About;