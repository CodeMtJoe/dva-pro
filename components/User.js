import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd'
const User = (props) => {
    // console.log(props);
    const { data } = props
    // console.log(data);
    return (
        <div>
            <Button onClick={props.handleOnSubmit}>{props.title}</Button>
            <h3>远程获取数据展示</h3>
            <div>{data.map(((item,index) => {
               return <div key={index}>{item.title}</div>
             }))}</div>
        </div>
    );
};
User.propTypes = {
    title: PropTypes.string, //按钮标题
}

export default User;