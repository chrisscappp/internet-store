import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/Actions/productAction";
import {Spinner} from '../../Components/Spinner/Spinner'

const Home = () => {
    const dispatch = useDispatch()
    const {products, pages} = useSelector(({productsReducer}) => productsReducer)
    const [countPages, setCountPages] = React.useState([])

    React.useEffect(() => {
        dispatch(getProducts(1))
        pag(pages)
    }, [pages])

    console.log('prdocuts', products)

    const pag = (pagValue) => {
        const pagesArray = []
        for (let i = 1; i<= pagValue; i++) {
            pagesArray.push(i)
        }
        setCountPages(pagesArray)
    }

    const navPage = (page) => {
        dispatch(getProducts(page))
    }


    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu/>
            </Grid>
                <Grid item container spacing={1} className = "products_container">
                    <Grid container item spacing={3}>
                        {
                            products?.product?.map((product, index) => {
                                return (
                                    <ProductCard key = {index + product.id} product = {product}/>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            <ul className="paginateUl">
                {countPages?.map((page) => {
                    return (
                        <li
                            onClick={() => navPage(page)}
                            key={page}
                            className="paginateLi"
                        >
                            <button className="paginateButton">
                                <a href="javascript:scroll(0,0)" className="paginateA">
                                    <h5>{page}</h5>
                                </a>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </Grid>
    )
}

export default Home