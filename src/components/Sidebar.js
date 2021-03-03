import React from 'react';
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItemsData } from "../data/SidebarData";
import { useHistory } from 'react-router-dom';

import db from "../firebase";

const Sidebar = ({ rooms }) => {
    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            console.log(id);
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if(promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    XYZ Company
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelIem>
                            {item.icon}
                            {item.text}
                        </MainChannelIem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>Channels</div>
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                    
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    background: #3f0e40;
`

const WorkSpaceContainer = styled.div`
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #533753
`
const Name = styled.div`

`
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: #fff;
    border-radius: 50%;
    color: #3f0e40;
    fill: #3f0e40;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelIem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
    
`

const ChannelsList = styled.div`

`
const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`