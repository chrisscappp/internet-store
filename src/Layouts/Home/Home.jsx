import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/Actions/productAction";
import {Spinner} from '../../Components/Spinner/Spinner'
import ReactPaginate from "react-paginate";

const Home = () => {
    const dispatch = useDispatch()
    const {products, pages, isLoading} = useSelector(({productsReducer}) => productsReducer)
    const [value, setValue] = React.useState('')

    React.useEffect(() => {
        dispatch(getProducts(1))
    }, [pages])

    const navPage = (data) => {
        let page = data.selected + 1
        dispatch(getProducts(page))
    }

    const filteredProducts = products?.product?.filter(product => {
        return product.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu
                    value={value}
                    setValue={setValue}
                />
            </Grid>
            <Grid>
                {
                    isLoading ?
                    <Grid>
                        <Spinner/>
                    </Grid>
                    :
                    <Grid>
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
                        <ReactPaginate
                            previousLabel={'previous'}
                            breakLabel={'...'}
                            nextLabel={'next'}
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
                }
            </Grid>
        </Grid>
    )
}

export default Home