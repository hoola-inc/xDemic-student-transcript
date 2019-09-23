import React from 'react';
import Header from "./helper/Header";
import ProfileCard from './helper/ProfileCard';
import PageTop from './helper/PageTopCard';
import StudentTable from './helper/StudentsTable';
import { Row, Col, Card, Layout } from "antd";

const { Footer } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>


                <div>
                    <Header />
                </div>

                <div>
                    <Row>
                        <Col span={12} offset={2}>
                            <Card>
                                <PageTop />
                            </Card>

                            <StudentTable />
                        </Col>

                        <Col span={5} offset={2} >

                            <ProfileCard />

                        </Col>

                    </Row>
                </div>

            </div>
        );
    }
}

export default Home;