import axios from "axios";
import React, { useEffect, useState } from "react";
import { Filters } from "./filters";
import { Lists } from "./lists";
function SearchPage(props) {
    const [searchCarList, setSearchCarList] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [allPage, setAllPage] = useState(0);
    let linkUrl = props.linkUrl;
    let setLinkUrl = props.setLinkUrl;
    let searchlinkfref = props.searchlinkfref;
    let setPrice = props.setPrice;
    let searchString = props.searchString;
    useEffect(() => {
        let searchurl = '';
        if (searchString !== '') {
            searchurl = 'https://twoguys.pl/vinsearch.php?searchstring=' + searchString;
        } else {
            if (searchlinkfref !== '') {
                searchurl = 'https://twoguys.pl/pagenation.php?page=' + pageNum + '&make=' + searchlinkfref;
            }
            else {
                searchurl = 'https://twoguys.pl/qqq.php?page=' + pageNum;
            }
        }

        axios.get(searchurl)
            .then(res => {
                setAllPage(res.data[0].count);
                setSearchCarList(res.data);
            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }, [pageNum])
    return (
        <div className='container w-full flex flex-col'>
            <div className="searchstring sticky top-0  drop-shadow justify-items-center">
                <input type="text" placeholder="Search By VIN" className="inputstring" />
                <div className=" btnt  ">
                    <button className="bg-[#3182CE] hover:bg-[#2B6CB0] rounded text-white text-base text-bold font-['inherit'] p-1 w-24">search</button>
                </div>
            </div>
            <p className="text-4xl font-bold text-black decoration-8 decoration-dashed decoration-white pt-10">
                Check history of cars sold at Copart and IAAI auctions
            </p>
            <p className="text-black decoration-8 decoration-dashed decoration-white">
                Our website provides you with information about bidding history and statistics of vehicles sales from Copart and IAAI. The website’s user-friendly interface allows you to quick and efficient search for a vehicle's history by a VIN and LOT number. You can also use a handy filter by make, model, year, and price.
            </p>
            <div className='w-full flex flex-col md:flex-row md:-mx-3 md:w-auto'>
                <div className='w-full max-sm:mb-5 md:px-3 md:w-1/4'>
                    <Filters />
                </div>
                <div className="w-full flex flex-col max-md:w-3/4 md:px-3">
                    <Lists setPrice={setPrice} showData={searchCarList} pageNum={pageNum} allPage={allPage} setPageNum={setPageNum} linkUrl={linkUrl} setLinkUrl={setLinkUrl} />
                </div>
            </div>
        </div>
    );
}
export default SearchPage;
