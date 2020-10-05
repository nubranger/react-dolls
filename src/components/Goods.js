import React, {Component} from 'react';
import './Goods.css';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {compose} from 'recompose';

class Goods extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const withInStock = (Component) => (props) =>
            props.instock === 0
                ?
                <div className="stock">
                    <Grid item key={props.item.id}>
                        <div
                            onMouseEnter={() => this.props.imgHover(props.item)}
                            onMouseLeave={() => this.props.imgHover(props.item)}
                        >
                            <img src={props.item.selected ? props.item.image[0] : props.item.image[1]}/>
                            <h5>OUT OF STOCK</h5>
                        </div>
                        <div className="itembottom">
                            <div>
                                <h4>{props.item.title}</h4>
                                <p> ${props.item.price.toFixed(2)}</p>
                            </div>

                        </div>
                    </Grid>
                </div>
                : <Component {...props} />


        const withDiscount = (Component) => (props) =>
            props.discount > 0
                ?
                <div className="discount">
                    <Grid item key={props.item.id}>
                        <div
                            onMouseEnter={() => this.props.imgHover(props.item)}
                            onMouseLeave={() => this.props.imgHover(props.item)}
                        >
                            <img src={props.item.selected ? props.item.image[0] : props.item.image[1]}/>
                        </div>
                        <div className="itembottom">
                            <div className="disc">
                                <h4>{props.item.title}</h4>
                                <p> ${props.item.price.toFixed(2)}</p>
                                <h3> ${props.item.discount}</h3>
                            </div>
                            <div className="button">
                                <button>Buy now</button>
                            </div>
                        </div>
                    </Grid>
                </div>
                : <Component {...props} />


        const withNormal = (Component) => (props) =>
            !(props.todoList > 0) && !(props.loading === 0)
                ?
                <div className="normal">
                    <Grid item key={props.item.id}>
                        <div
                            onMouseEnter={() => this.props.imgHover(props.item)}
                            onMouseLeave={() => this.props.imgHover(props.item)}
                        >
                            <img src={props.item.selected ? props.item.image[0] : props.item.image[1]}/>
                        </div>
                        <div className="itembottom">
                            <div>
                                <h4>{props.item.title}</h4>
                                <p> ${props.item.price.toFixed(2)}</p>
                            </div>
                            <div className="button">
                                <button>Buy now</button>
                            </div>
                        </div>
                    </Grid>
                </div>
                : <Component {...props} />

        const ComposeNice = compose(
            withInStock,
            withDiscount,
            withNormal
        );


        const DoNice = ComposeNice();


        const shop = this.props.items.map((item) => {
            return (
                <div>
                    <DoNice item={item} discount={item.discount} instock={item.instock}/>
                </div>
            )
        });


        return (
            <Container className="goods" maxWidth="xl">
                <Grid container>
                    <Grid container justify="center">
                        {shop}
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Goods;