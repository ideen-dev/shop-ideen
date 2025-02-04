import React, { useContext, useState, useEffect } from 'react'
import Search from '../components/Search'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'

function Collection() {

    const { products, search } = useContext(ShopContext)

    const [category, setCategory] = useState("")
    const [sortType, setSortType] = useState("relevant")
    const [filteredProducts, setfilteredProducts] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const itemsPerPage = 10


    const toggleFilter = (value, setState) => {

        setState((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]

        );
    };

    const applyFilter = () => {

        let filtred = [...products]

        // if (search) {
        //     filtred = filtred.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
        //  }


        if (typeof search === "string" && search.trim() !== "") {
            filtred = filtred.filter((product) =>
                product.name && product.name.toLowerCase().includes(search.toLowerCase())
            );
        }


        if (category.length) {

            filtred = filtred.filter((product) =>
                category.includes(product.category)
            );

        }


        if (category.length) {
            filtred = filtred.filter((product) => category.includes(product.category));
        }


        return filtred;

    };

    const applySorting = (productList) => {
        switch (sortType) {
            case "low":
                return productList.sort((a, b) => a.price - b.price)
            case "high":
                return productList.sort((a, b) => b.price - a.price)
            default:
                return productList;
        }
    };

    useEffect(() => {

        let filtered = applyFilter()
        let sorted = applySorting(filtered)
        setfilteredProducts(sorted)
        setcurrentPage(1)

    }, [category, sortType, products, search])


    const getPaginatedProducts = () => {

        const starIndex = (currentPage - 1) * itemsPerPage
        const endIndex = starIndex + itemsPerPage

        return filteredProducts.slice(starIndex, endIndex);

    };

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)




    return (

        <div className='max-padd-container !px-0'>
            <div className='flex flex-col sm:flex-row gap-8 mb-16'>
                {/* FILTERS  */}
                <div className='min-w-72 bg-primary p-4 pt-8  pl-6 lg:pl-12   '>
                    <Search />
                    <div className='pl-5 py-3 mt-4 bg-white rounded-xl '>
                        <h5 className='h5 mb-4 '>Categories</h5>
                        <div className='flex flex-col gap-2 text-sm font-light'>
                            {[
                                "Headphones",
                                "Cameras",
                                "Mobiles",
                                "Speakers",
                                "Mouse",
                                "Watches"
                            ].map((cat) => (
                                <label className='flex gap-2 medium-14 text-gray-30 ' key={cat} >
                                    <input
                                        className='w-3'
                                        type="checkbox"
                                        value={cat}
                                        onChange={(e) => toggleFilter(e.target.value, setCategory)}
                                    />
                                    {cat}

                                </label>
                            ))}
                        </div>

                    </div>
                    <div className='px-4 py-3 mt-6 bg-white rounded-xl'>
                        <h5 className='h5 mb-4 '>Sort By</h5>
                        <select
                            onChange={(e) => setSortType(e.target.value)}
                            className='border border-slate-900/5 outline-non h-8 w-full text-gray-30 medium-14 rounded px-2   '

                        >
                            <option value="relevant">Relevant</option>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                </div>
                {/* RIGH SIDE  */}
                <div className='pr-5 rounded-l-xl'>
                    <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>

                        {getPaginatedProducts().length > 0 ? getPaginatedProducts().map((product) => (<Item product={product} key={product.name} />)) : (<p> No product found for selected filter </p>)}

                    </div>

                    {/* PAGINATION  */}
                    <div className='flexCenter flex-wrap gap-4 mt-14 mb-10'>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setcurrentPage((prev) => prev - 1)}
                            className={`${currentPage === 1 && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
                        >
                            Previous
                        </button>
                        {/* PAGE NUMBERS  */}

                        {Array.from({ length: totalPages }, (_, index) => (

                            <button
                                key={index + 1}
                                onClick={() => setcurrentPage(index + 1)}
                                className={`${currentPage === index + 1 && "!bg-tertiary text-white"} btn-light !py-1 !px-3 `}
                            >

                                {index + 1}

                            </button>
                        ))}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setcurrentPage((prev) => prev + 1)}
                            className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} btn-secondary !py-1 !px-3`}
                        >
                            Next
                        </button>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection