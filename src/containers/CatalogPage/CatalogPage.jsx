
import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { CATALOG, API_ROOT } from '../../constans/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import CatalogList from '../../components/CatalogPage/CatalogList';

import styles from './CatalogPage.module.css';

const CatalogPage = ({ setErrorApi }) => {
    const [catalog, setCatalog] = useState([]);
    // the commented code is used for dynamic pagination, because there is only one page on the server
    // const [currentPage, setCurrentPage] = useState(1);
    // const [fetching, setFetching] = useState(true);
    // const [totalCount, setTotalCount] = useState(0);    
    
    const getResource = async (url) => {        
        const res = await getApiResource(url);
                     
        if (res) {  
            setCatalog([...catalog, ...res])                    
            // setTotalCount(res.total);
            // setCurrentPage(prevState => prevState + 1);    
                        
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }
    useEffect(() => {              
        getResource(API_ROOT);
    }, []);
         
    // useEffect(() => {
    //     if (fetching) {       
    //         getResource(CATALOG + currentPage);
    //         setFetching(false);
    //     }
    // }, [fetching]);

    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //       document.removeEventListener('scroll', scrollHandler)
    //     }
    //   }, [])
    
    //   const scrollHandler = (e) => {
    //     if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && catalog.length === totalCount ) {
    //       setFetching(true)
    //     }    
    //   }
            
    return (
        <>
            {catalog && <CatalogList catalog={catalog} />}            
        </>
    )
}

export default withErrorApi(CatalogPage);

