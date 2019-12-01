import React from 'react'
import { Card, Col, Row } from 'antd';
import { Tag } from 'antd';
import { Input } from 'antd';
import { Column, Notification } from 'rbx'
const { Search } = Input;
const { Meta } = Card;
export default function Cargos() {
    return (<>
        <div style={{ background: '#ECECEC', padding: '30px' }}>

            <Search
                placeholder="Buscar un cargo ..."
                onSearch={value => console.log(value)}
                style={{ width: "100%" }}
            />
            <Tag color="#f50">Delegación</Tag>
            <Column.Group>

            <Column >
                    <Notification color="primary" textAlign="centered">
                        <Card
                            hoverable
                            
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Notification>
                </Column>
                <Column >
                    <Notification color="primary" textAlign="centered">
                        <Card
                            hoverable
                            
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Notification>
                </Column>
                <Column >
                    <Notification color="primary" textAlign="centered">
                        <Card
                            hoverable
                            
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Notification>
                </Column>

            </Column.Group>

            <Tag color="#A980E2">Servicio y Vigilancia</Tag>
            <Column.Group>

<Column >
        <Notification color="primary" textAlign="centered">
            <Card
                hoverable
                
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Notification>
    </Column>
    <Column >
        <Notification color="primary" textAlign="centered">
            <Card
                hoverable
                
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Notification>
    </Column>
    <Column >
        <Notification color="primary" textAlign="centered">
            <Card
                hoverable
                
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Notification>
    </Column>

</Column.Group>
        </div>
    </>)
}