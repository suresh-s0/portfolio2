function Topbar() {

    return (
        <div className="bg-gray-800  sticky top-0 font-mono">
            <div className="flex justify-end border-4 border-gray-500 rounded p-2 ">
                <button className="mr-4  text-white  gradients " >

                    <span className="block bg-gray-800 rounded-lg p-2 ">Home</span>
                </button>
                <button className="mr-4  text-white gradients">

                    <span className="block bg-gray-800 rounded-lg p-2">About</span>
                </button>
                <button className="mr-4  text-white  gradients" >

                    <span className="block bg-gray-800 rounded-lg p-2">Projects</span>
                </button>
                <button className="mr-4  text-white  gradients ">

                    <span className="block bg-gray-800 rounded-lg  p-2">Contacts</span>
                </button>


            </div>
        </div>
    );
}

export default Topbar