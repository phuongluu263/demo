import React from 'react'
import _ from 'lodash'

const Paginations = ({items, pageSize, currentPage, onPageChange}) => {
    const pageProducts = items / pageSize;
    if(Math.ceil(pageProducts === 1)){
        return null;
    }

    const pages = _.range(1, pageProducts + 1);
  return (
    <div>
        <nav>
            <ul className="pagination">
                {pages.map(page =>
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a style={{cursor: 'pointer'}} onClick={() => onPageChange(page)} className="page-link">{page}</a>
                    </li>   
                )}
            </ul>
        </nav>
    </div>
  )
}



export default Paginations
