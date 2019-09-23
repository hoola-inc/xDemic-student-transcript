import React from 'react'
import { PageHeader, Col, Row } from 'antd';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    title = <h1> Transcript </h1>

    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={4}>
                    <PageHeader title={this.title} subTitle="High School" />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Header;