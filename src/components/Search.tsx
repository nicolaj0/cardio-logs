import {InputAdornment, TextField} from "@mui/material";
import {FcSearch} from "react-icons/fc";
import React from "react";

export function Search({onChange}: { onChange: (value: string) => void }) {
    return (
        <div className="flex justify-end my-4 mx-10">
            <TextField
                id="input-with-icon-textfield"
                role="search"
                variant='outlined'
                onChange={(e) => onChange(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <FcSearch/>
                        </InputAdornment>
                    ),
                }}
            />
            <hr/>
        </div>
    );
}
