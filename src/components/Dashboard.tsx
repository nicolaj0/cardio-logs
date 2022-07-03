import {useCards} from "../utils/UseCards";
import {IPatient} from "../model/IPatient";
import {PatientCardList} from "./PatientCardList";
import React from "react";

export function Dashboard({filter}: { filter: string }) {
    const {data} = useCards();

    function filterPatient(d: IPatient) {
        return d.patient_name.toLowerCase().includes(filter.toLowerCase()) || d.arrhythmias.some(a => a.toLowerCase().includes(filter.toLowerCase()));
    }

    return (
        data ? <div className="grid grid-cols-2 gap-8 m-20">
            <PatientCardList header="TODO" cards={data.filter(d => filterPatient(d) && d.status !== 'DONE')}/>
            <PatientCardList header="DONE" cards={data.filter(d => filterPatient(d) && d.status === 'DONE')}/>
        </div> : null
    )
}
