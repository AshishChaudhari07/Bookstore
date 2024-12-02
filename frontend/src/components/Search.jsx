import React from 'react'

function Search() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Bookstore</h1>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-6">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {/* Display books */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="bg-white p-4 rounded shadow-md">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-64 object-cover"
                            />
                            <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-lg font-bold mt-2">${book.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    )
}

export default Search
