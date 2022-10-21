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

    type ProfileProps = {
        name: string;
        role: string;

export default function Profile(props: ProfileProps) {

  return (
    <ProfileContainer>
    <Avatar alt={props.name} src="" sx={{ width: 200, height:100 }} />
    <h2>Thais NAscimento</h2>
    <h3></h3>
  )
}
