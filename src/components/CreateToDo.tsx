import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
    display: flex; justify-content: center;
    padding: 10px;
    border-bottom: 1px dashed #000
`;

const Input = styled.input`
    padding: 0 10px;
    width: 250px; height: 30px;   
    border: 1px solid #222; border-radius: 5px;
`
const BtnToDo = styled.button`
    margin-left: 10px;
    width: 50px; 
    color: #fff;
    background-color: #38ada9;
    border: none; border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #079992;
    }
`

interface IFrom{
    toDo : string;
}

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState)
    const {register, handleSubmit, setValue} = useForm<IFrom>();
    const onSubmit = ({toDo}:IFrom) => {
        setToDos(oldToDos => [{id: Date.now(), text: toDo, category:"TO_DO"}, ...oldToDos])
        setValue("toDo", "");
    }  

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("toDo", {
                required: "Please write a To Do"
            })} 
                type="text" 
                placeholder="Write a to do" 
            />
            <BtnToDo>Add</BtnToDo>
        </Form>
    )
}

export default CreateToDo;