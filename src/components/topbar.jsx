function Topbar() {

    return (
       <div className="bg-gray-700  sticky top-0 font-mono">
           <div className="flex justify-end border-4 border-gray-500 p-4 ">
            <button className="mr-4 border-2 border-gray-300 p-2 text-white rounded-lg">home</button>
            <button className="mr-4 border-2 border-gray-300 p-2 text-white rounded-lg">about</button>
            <button className="mr-4 border-2 border-gray-300 p-2 text-white rounded-lg">project</button>
            <button className="mr-4 border-2 border-gray-300 p-2 text-white rounded-lg">contacts</button>

        </div>
       </div>
    );
}

export default Topbar