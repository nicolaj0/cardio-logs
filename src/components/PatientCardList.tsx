import {IPatient} from "../model/IPatient";
import {PatientCard} from "./PatientCard";
import React from "react";

export function PatientCardList({cards, header}: { header: string, cards: IPatient[] }) {
    return (
        <div>
            <div className="m-[12px]">
                <h1 className="text-xl">{header}</h1>
                <hr className="my-4"/>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {cards?.map((todo: IPatient) => (<PatientCard card={todo} key={todo.id}/>))}
            </div>
        </div>
    );
}
