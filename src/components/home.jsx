
document.getElementById('downloadBtn').addEventListener('click', function() {
    const text = "This is a sample text file.";
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sample.txt';
    link.click();
});


function Home() {
    return (
        <div id="Home" className="Home mt-3 flex flex-col justify-center items-center h-screen border-b-4 border-gray-800 font-mono">
            <h2 className="text-white text-6xl p-2">Suresh</h2>
            <h2 className="text-white text-3xl">Full-stack Developer</h2>
            <h2 className="text-white text-xl">Coimbatore, TamilNadu</h2>
            <div className="flex flex-row mt-5">
                <a href="https://www.linkedin.com/in/suresh-s0/" target="_blank" className="text-white p-1 mr-1">
                    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="suresh-s003" height="20" width="30" />
                </a>
                <a href="https://github.com/suresh-s0" target="_blank" className="text-white p-1 mr-1">
                    <img align="center" src="https://github.githubassets.com/favicons/favicon-dark.svg" alt="suresh-s0" height="20" width="30" />
                </a>
               
            </div>
            <a className="text-white p-1 mr-1" target="_blank" href="https://www.example.com/files/example.pdf" download="example.pdf">
                    Resume
                </a>
            <button id="downloadBtn" className="text-white  p-2">Download</button>

        </div>
    );
}

export default Home;

