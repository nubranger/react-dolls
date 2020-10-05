import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';
import Goods from "./components/Goods";
import {ITEMS} from './shared/Items';


const Header = styled.section`
  width: 100%;
    max-width: 100%!important;
    box-sizing: border-box;
    top: 0;
    margin-top: 0;
    margin-bottom: 0;
    z-index: 150;
    background-color: #000;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    height: 84px;
    display: inline-block;
      position: fixed;
  top: 0;
  width: 100%
`;

const Menu = styled.section`
    // position: relative;
    padding-top: 20px;
    background-color: #000;
    padding: 0px;
    float: left;
    display: inline-block;
`;

const Logo = () =>
    (
        <div className="logo">
            <img src="assets/images/dollskill_logo.png"/>
        </div>
    )

const MenuList = props =>
    (
        <div className="menu">
            <ul>
                {
                    props.list.map(menu => (
                        <li key={menu}><a href="#">{menu}</a></li>
                    ))
                }
            </ul>
        </div>
    )

const Search = () =>
    (
        <div className="search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <span>Search...</span>
        </div>
    )

const HeaderRight = () =>
    (
        <div className="headerright">
            <img className="heart" src="assets/images/heart.png"/>
            <img className="bag" src="assets/images/bag.png"/>
        </div>
    )


class App extends Component {

    constructor(props) {
        super();

        this.state = {
            items: ITEMS
        }
        this.imgHover = this.imgHover.bind(this)
    }

    imgHover(item) {
        let wa = this.state.items
        if (item.selected === false) {
            wa[item.id].selected = true
        } else {
            wa[item.id].selected = false
        }
        this.setState({
            items: wa
        })
    }


    render() {
        return (
            <div>
                <Header>
                    <Menu>
                        <Logo></Logo>
                        <MenuList list={['What\'s New', 'Shop', 'Dolls', 'Halloween', 'Clearance']}/>
                        <Search></Search>
                    </Menu>
                    <HeaderRight/>
                </Header>
                <Goods items={ITEMS} imgHover={this.imgHover}/>
            </div>

        )
    }
}

export default App;
