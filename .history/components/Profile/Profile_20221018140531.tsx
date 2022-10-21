import React from 'react'
import styled from '@emotion/styled'

cont ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400%;
    background-color: #242424;
    color: #f8f8f8;
    h2, h3 {
        margin: 0;
    }

    const Account = styled.div`
        display: flex;
        width: 80%;
        border: solid 0.5px #888;
        border-radius: 2px;
        

    type ProfileProps = {
        name: string;
        role: string;

export default function Profile(props: ProfileProps) {

  return (
    <ProfileContainer>
    <Avatar alt={props.name} src="https://avatars.githubusercontent.com/u/97450843?v=4" sx={{ 
        width: 100, height:100 }} />
    <h2>{props.name}</h2>
    <h3>{props.role}</h3>
  )
}
