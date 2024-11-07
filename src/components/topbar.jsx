function Topbar() {

    return (
        <div className="flex justify-center bg-gray-800 bg-opacity-75 sticky top-1 font-mono  shadow-lg  shadow-gray-800  xl:w-full lg:w-full sm:w-2/3 md:w-full  ">
            <div className=" flex justify-around  rounded px-4 py-2  xl:w-1/3  sm:w-2/3 md:w-2/3   ">
                <button className="  gradients ml-4  text-white rounded-lg p-[1px]  " >

                    <span className="block bg-gray-800 rounded-lg px-4 py-2 ">Home</span>
                </button>
                <button className="gradients  ml-4 text-white rounded-lg p-[1px]  " >

                    <span className=" block bg-gray-800 rounded-lg px-4 py-2 ">About</span>
                </button>
                <button className=" gradients  ml-4 text-white rounded-lg p-[1px]  " >

                    <span className="block bg-gray-800 rounded-lg px-4 py-2 ">Projects</span>
                </button>
                <button className=" gradients ml-4 text-white rounded-lg p-[1px]  " >
                    <span className="block bg-gray-800 rounded-lg px-4 py-2 ">Contacts</span>
                </button>


            </div>
        </div>
    );
}

export default Topbar