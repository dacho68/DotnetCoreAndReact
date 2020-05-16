import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps{
    openCreateform: ()=> void;
}

export const NavBar :React.FC <IProps>= (p) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}} />
                    Reactivites
                </Menu.Item>
         
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={p.openCreateform} positive content='Create Activity'/>
                </Menu.Item>
            </Container>

        </Menu>
    )
}
