const SearchPage = () => {
    return (
        <main>
            <section className="main-header">
                <div className="w-full text-center">Search</div>
            </section>
            <section className="main-content">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Hello, Tailwind CSS!
                </h1>
                <p className="text-lg text-gray-700">
                    This text is styled with Tailwind classes.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                    Click Me
                </button>
            </section>
        </main>
    )
}

export default SearchPage