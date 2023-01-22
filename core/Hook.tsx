import React from "react";

export const withHook = (hook:any, Component:any) => {
    return (props:any) => {
        return <Component {...hook(props)} />
    }
}