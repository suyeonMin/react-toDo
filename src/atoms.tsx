import {atom, selector} from "recoil"

export interface IToDo{
    text: string;
    id: number,
    category: "TO_DO" | "DOING" | "DONE"; //이 세가지 중 하나를 가져야한다
}

export const categoryState = atom({
    key: "category",
    default: "TO_DO"
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState)
        return [
            toDos.filter(toDo => toDo.category === "TO_DO"), 
            toDos.filter(toDo => toDo.category === "DOING"), 
            toDos.filter(toDo => toDo.category === "DONE")
        ]
    }
})