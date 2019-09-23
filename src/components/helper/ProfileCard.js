import React from 'react';
import { Card, Icon, Avatar, Tooltip } from 'antd';

const { Meta } = Card;

class ProfileCard extends React.Component {

    constructor(props) {
        super(props);
    }

    reactNode = <div> <li> did:ethr:0xd88052df067cf3633fdc0e284ab087d654dae9c7 </li>
        <li> <h3> Graduation </h3> </li>
        <li> <h4> June 2020 </h4> </li> </div>;

    render() {
        return (
            <div>
                <Card
                    style={{ width: 520 }}
                    actions={[
                        <Tooltip title="Phone Number" arrowPointAtCenter>
                            <Icon type="phone" key="phone"></Icon>
                        </Tooltip>,
                        ,
                        <Tooltip title="Hamza Ikram" arrowPointAtCenter>
                            <Icon type="user" key="user"></Icon>
                        </Tooltip>,
                        <Tooltip title="Male" arrowPointAtCenter>
                            <Icon type="smile" key="smile"></Icon>
                        </Tooltip>
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Hamza Ikram"
                        description={this.reactNode}
                    />
                </Card>,
            </div>
        )
    }
}

export default ProfileCard;

