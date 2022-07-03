import {useQuery} from "react-query";
import {IPatient} from "../model/IPatient";
import {get} from "./Get";

export function useCards() {
    return useQuery<IPatient[]>(['cards'],
        () => get(`http://localhost:3000/cards`).then((data) => data), {staleTime: Infinity});
}
