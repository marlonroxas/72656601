import styled from 'styled-components'
import {Col, Row} from 'antd'
// import section1bg from './assets/gallery/frv-sample-truck-bg.jpg'

export const Wrapper = styled.div`
    margin: 0;
    scroll-behavior: smooth;

    h1, h2{
        font-weight: 600;
    }
`
export const WrapperSection1 = styled(Wrapper)`
    background-image: url("https://cdn.pixabay.com/photo/2016/11/18/23/04/cleaning-1837328_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    h1{
        color: #fff;
    }
    .ant-menu-horizontal > .ant-menu-item{
        font-weight: 500;
        color: #fff;
    }
    .ant-menu-horizontal > .ant-menu-item-active,
    .ant-menu-horizontal > .ant-menu-item-selected
    {
        border-bottom: 2px solid #009A9A !important;
        color: #009A9A !important;
    }
    .ant-menu-horizontal{
        background: transparent;
        border: 0;
        margin-top: 10px;
    }
`
export const Navigation = styled(Row)`
    img{
        height: 60px;
    }
`
export const Content1 = styled(Col)`
    margin-top: 150px;
    img{
        height: 50px;
        margin-right: 20px;
    }
    h1{
        margin-top: 100px;
        font-size: 48px;
        font-weight: 300;
    }
    p{
        font-size: 16px;
    }
`
export const Content2 = styled(Col)`
    margin-top: 150px;
    img{
        height: 600px;
    }
    
`
export const WrapperSection2 = styled(Wrapper)`
    background: #1C3B53;
    background-image: url("https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 100px;
`
export const Content3 = styled(Col)`
    font-weight: 800;
    text-align: center;
    h1{
        color: #009A9A;
    }
    h2, span, p{
        color: #fff;
    }
    .ant-divider-horizontal{
        min-width: 80px;
        max-width: 80px;
        margin: 30px auto;
        background: #009A9A;
        height: 2px;
    }
`
export const Content4 = styled(Col)`
    margin-top: 40px;
    padding-left: 10px !important;
    padding-right: 10px !important;
    color: #fff;
    h1, h2, p{
        color: #fff;
    }
    .ant-divider-horizontal{
        min-width: 40px;
        max-width: 40px;
        margin: 20px auto;
        background: #009A9A;
        height: 2px;
    }

`
export const WrapperSection3 = styled(Wrapper)`
    background: #fff;
    padding-top: 100px;
    padding-bottom: 100px;

    img{
        width: 100%;
    }
    h1, h2, span, p, span{
        color: #444;
    }
`
export const WrapperSection4 = styled(Wrapper)`
    background: #fff;
    background-image: url("https://cdn.pixabay.com/photo/2018/05/02/10/33/computer-3368242_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 100px;

    img{
        width: 100%;
    }
    h1, h2, span, p, span{
        color: #444;
    }
`
export const WrapperSection5 = styled(Wrapper)`
    background-image: url("https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_1280.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 100px;
`
export const WrapperSection6 = styled(Wrapper)`
    background: #bbb;
`
export const WrapperSection7 = styled(Wrapper)`
    background: #1C3B53;
    padding-top: 100px;
    padding-bottom: 100px;
`