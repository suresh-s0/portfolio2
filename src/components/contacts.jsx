function Contacts() {
    return (
        <div id="Contacts" className=" flex flex-col justify-center items-center border-2 p-6">

             <h1 className="text-white">Contacts:</h1>   
            <div className=" flex flex-col justify-center items-center ">
                <h1 className="text-white">
                    Mail ID: 
                    <a href="mailto:sureshaster09@gmail.com" className="text-white p-1 mr-1">
                    sureshaster09@gmail.com
                    </a>   
                </h1>

                <a href="https://www.linkedin.com/in/suresh-s0/" target="_blank" className="text-white p-1 mr-1">
                    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="suresh-s003" height="10" width="20" />
                </a>

                <a href="https://github.com/suresh-s0" target="_blank" className="text-white p-1 mr-1">
                    <img align="center" src="https://github.githubassets.com/favicons/favicon-dark.svg" alt="suresh-s0" height="6" width="20" />
                </a>
            </div>
        </div>



    )
}

export default Contacts;