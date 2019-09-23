import React from 'react';
import { PageHeader, Tabs, Button, Statistic, Descriptions, Icon, Card } from 'antd';

const { TabPane } = Tabs;



const renderContent = (column = 2) => (
    <Descriptions size="small">
        <Descriptions.Item label="Email"> <a href="#"> roots@gmail.com  </a></Descriptions.Item>
        <Descriptions.Item label="Website"> <a href="#"> www.roots.com </a> </Descriptions.Item>
        <Descriptions.Item label="Address"> <Icon tyoe="address" /> <a href="#"> 0x250bF185Ad0938258758A1360BBb118fc323c817 </a></Descriptions.Item>
    </Descriptions>
);

const extraContent = (
    <div
    >
    </div>
);

const Content = ({ children, extra }) => {
    return (
        <div className="content">
            <div className="main">{children}</div>
            <div className="extra">{extra}</div>
        </div>
    );
};


class PageTopCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <PageHeader
                        title="Roots"
                        subTitle="Roots School E11/4 Islamabad"
                        footer={
                            <Tabs>
                                <TabPane tab="" key="1" />
                                <TabPane tab="" key="2" />
                            </Tabs>
                        }
                    >
                        <Content extra={extraContent}>{renderContent()}</Content>
                    </PageHeader>
                </div>

                <div>
                    <Card title="K -12" bordered={false}>
                        <h4> Description </h4>
                        <p>
                            ISB is an extraordinary school, made so by a tradition of educational excellence spanning almost 40 years.
                            <br />
                            Establishing, nurturing and growing such an exceptional learning community has been and remains intentional.
                            <br />
                            We work hard to build strong relationships so our learning is at its best.
                            <br />
                            <br />
                            The foundations of our school are our aspirational Mission, Vision and Core Values, These are brought to life 
                            <br />
                            and made meaningful by passionate, hight experienced and well-qualified teachers and leaders
                        </p>
                    </Card>
                </div>
            </div>
        );
    }
}

export default PageTopCard;
