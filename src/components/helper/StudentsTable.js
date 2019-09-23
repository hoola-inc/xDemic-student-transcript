import React from 'react';
import { Table, Divider, Tag, Card } from 'antd';

const columns = [
    {
        title: 'Course Code',
        dataIndex: 'code',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Course Name',
        dataIndex: 'name',
        key: 'age',
    },
    {
        title: 'Link to Course Details',
        dataIndex: 'courseDetail',
        key: 'address',
    },
    {
        title: 'Status',
        key: 'tags',
        dataIndex: 'status',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Credit Hours',
        key: 'action',
        dataIndex: 'creditHours'
    },
    {
        title: 'Percentage',
        dataIndex: 'percentage',
        key: 'address',
    },
    {
        title: 'Grade',
        dataIndex: 'grade',
        key: 'address',
    },
];

const data = [
    {
        key: '1',
        code: '1234561',
        name: 'Physics 101',
        courseDetail: '123123123132',
        status: ['complete'],
        creditHours: '2.0',
        percentage: '1',
        grade: '2.00'
    }
];


class Studenttable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <Card>
                    <Table columns={columns} dataSource={data} title={() => 'Spring 2019'} pagination={false} bordered={true}/>
                </Card>
            </div>
        );
    }
}

export default Studenttable;