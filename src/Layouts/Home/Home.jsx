import React from 'react'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/Actions/productAction";
import {Spinner} from '../../Components/Spinner/Spinner'
import ReactPaginate from "react-paginate";
import Container from '@mui/material/Container';
import {Error} from '../../Components/Error/Error'

const Home = ({value}) => {
    const dispatch = useDispatch()
    const {products, pages, isLoading, isError} = useSelector(({productsReducer}) => productsReducer)
    const [selectedPage, setSelectedPage] = React.useState(0)

    React.useEffect(() => {
        dispatch(getProducts(selectedPage + 1))
    }, [selectedPage])

    const navPage = (data) => {
        setSelectedPage(data.selected)
    }

    const filteredProducts = products?.product?.filter(product => {
        return product.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <>
            <Container maxWidth="lg">
                <Grid container
                      direction="column"
                      rowSpacing={3}
                >
                    <Grid>
                        {
                            isLoading ?
                                    <Spinner/>
                                :
                                isError ? 
                                <Error/>
                                :
                                <Grid>
                                    <Grid className="products-wrapper">
                                        <Grid item container spacing={1} className="products_container">
                                            <Grid container item spacing={3}>
                                                {
                                                    filteredProducts?.map((product, index) => {
                                                        return (
                                                            <ProductCard key={index + product.id} product={product}/>
                                                        )
                                                    })   
                                                }
                                            </Grid>
                                        </Grid>
                                        {
                                            filteredProducts?.length == 0 ? 
                                            <div className = "noFindProduct">
                                                <h3 className = "noFindProduct-text">Совпадений не найдено. Попробуйте поискать на другой странице</h3>
                                            </div>  
                                            :
                                            null
                                        }
                                        <ReactPaginate
                                            initialPage={selectedPage}
                                            previousLabel={'Назад'}
                                            breakLabel={'...'}
                                            nextLabel={'Далее'}
                                            pageCount={pages}
                                            marginPagesDisplayed={3}
                                            pageRangeDisplayed={3}
                                            onPageChange={navPage}
                                            containerClassName={'pagination justify-content-center mt-4'}
                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}
                                            previousClassName={'page-item'}
                                            previousLinkClassName={'page-link'}
                                            nextClassName={'page-item'}
                                            nextLinkClassName={'page-link'}
                                            breakClassName={'page-item'}
                                            breakLinkClassName={'page-link'}
                                            activeClassName={'active'}
                                        />
                                    </Grid>
                                    <Grid className="footer-wrapper">
                                        <div className="footer-container">
                                            <p className="footer-text">Этот интернет магазин был создан для портфолио. Разрабы крутые, можете не сомневаться</p>
                                        </div>
                                    </Grid>
                                </Grid>
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home