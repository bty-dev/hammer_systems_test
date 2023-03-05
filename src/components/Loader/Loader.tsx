import React from 'react';
import {Space, Spin} from "antd";

import classes from './Loader.module.scss';

const Loader = () => {
    return (
        <Space direction="vertical" style={{ width: '100%', textAlign: 'center', marginTop: 50 }}>
            <Space>
                <Spin tip="Loading" size="large">
                    <div className={classes.content} />
                </Spin>
            </Space>
        </Space>
    );
};

export default Loader;