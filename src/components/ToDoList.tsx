import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import CreateToDo from "./CreateToDo";
import ListBox from "./ListBox";
import styled from "styled-components";

const Layout = styled.div`
    margin: 0 auto;
    width: 1200px;
`;

const Title = styled.h1`
    padding: 10px 0 15px;
    font-size: 32px; text-align: center;
    border-bottom: 1px dashed #000;
`;

function ToDoList(){

    return <Layout>
        <Title>To Dos</Title>
        <CreateToDo />
        <ListBox />
    </Layout>
}


export default ToDoList;