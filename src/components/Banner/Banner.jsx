

const Banner = () => {
    return (

        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[600px] w-full px-4 md:px-8 bg-gray-100">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="font-bold text-4xl md:text-4xl mb-4 leading-tight">
                    Books to freshen <br /> up your bookshelf
                </h1>
                <button className="btn btn-success mt-4">View The List</button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                    src="/src/logo/playbook.png"
                    alt="Bookshelf"
                    className="w-60 md:w-80 h-auto object-contain"
                />
            </div>
        </div>

    );
};

export default Banner;