import React from "react";
import {useRecoilValue} from "recoil";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import {styled} from "styled-components";

const Wrap_box = styled.div`
    display: flex; gap: 30px;
    padding: 20px;
`;

const Box = styled.div`
    position: relative;
    padding: 20px;
    width: calc((100% - 60px) / 3); min-height: 150px;
    overflow: hidden;

    &:nth-of-type(1) {background-color: #b8e994}
    &:nth-of-type(2) {background-color: #78e08f}
    &:nth-of-type(3) {background-color: #38ada9}

    &:after {
        content: ''; 
        position: absolute; right: 0; top: 0;
        border-top: 20px solid #fff;
        border-right: 20px solid #fff;
        border-left: 20px solid transparent;
        border-bottom: 20px solid transparent;
        box-shadow: -2px 2px 6px rgba(0,0,0,.3)
    }

    h2 {
        margin-bottom: 20px;    
    }

    ul > li {
        position: relative;
        margin-bottom: 8px;

        &:last-child {margin-bottom: 0}

        span {
            display: block;
            width: 65%;
        }

        button {
            position: absolute; top: 0px;
            width: 50px; height: 20px;
            color: #fff;
            background-color: #0a3d62;
            border: none;
            cursor: pointer;
            
            &:nth-of-type(1) {right: 55px}
            &:nth-of-type(2) {right: 0px}

            &:hover {background-color: #000}
        }
    }
`;

function ListBox(){
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return <>
        <Wrap_box>
            <Box>
                <h2>To Do</h2>
                <ul>
                    {toDo.map(todo => 
                        <ToDo key={todo.id} text={todo.text} id={todo.id} category={todo.category} />
                    )}
                </ul>
            </Box>
            <Box>
                <h2>Doing</h2>
                <ul>
                    {doing.map(doing => 
                        <ToDo key={doing.id} text={doing.text} id={doing.id} category={doing.category} />
                    )}
                </ul>
            </Box>
            <Box>
                <h2>DONE</h2>
                <ul>
                    {done.map(done => 
                        <ToDo key={done.id} text={done.text} id={done.id} category={done.category} />
                    )}
                </ul>
            </Box>
        </Wrap_box>
    </>
}

export default ListBox;