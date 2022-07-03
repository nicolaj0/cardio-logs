import {IPatient} from "../model/IPatient";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {AiOutlineCheck} from "react-icons/ai";
import React from "react";
import {queryClient} from "../App";
import {useCards} from "../utils/UseCards";

export function PatientCard({card}: { card: IPatient }) {
    const {data} = useCards();

    function changeStatus() {
        card.status === 'DONE' ? card = {...card, status: 'REJECTED'} : card = {...card, status: 'DONE'};
        queryClient.setQueryData(['cards'], [...(data || []).filter(d => d.id !== card.id), card]);
    }

    function stringAvatar(name: string) {
        return {
            children: `${name[0]}`,
        };
    }

    return (
        <Card className="h-50 bg-green-400 m-3 shadow-md" sx={{minWidth: 275}}>
            <CardContent>
                <div className="flex flex-row gap-2 items-center">
                    <Avatar {...stringAvatar(card.patient_name)} />
                    <Typography sx={{fontSize: 30}} color="text.secondary" gutterBottom>
                        {card.patient_name}
                    </Typography>
                </div>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {card.arrhythmias.join(', ')}
                </Typography>
            </CardContent>
            <div className="flex justify-end m-2">
                <Button startIcon={card.status === 'DONE' ? <DeleteIcon/> : <AiOutlineCheck/>} variant="outlined"
                        color={card.status === 'DONE' ? 'error' : 'success'} onClick={changeStatus}
                        size="small">{card.status === 'DONE' ? 'Reject' : 'Done'}</Button>
            </div>
        </Card>
    );
}
