import React from "react";
import dynamic from "next/dynamic";
//@ts-ignore
const Dashboard:React.FC<MfeProps> = dynamic(() => import("remote2/Dashboard"), {ssr: false});

type MfeProps = {
    appName: string
}

const AppDashboard:React.FC<any> = () => {

    return (
        <>
            <Dashboard appName="Host/Container App"/>
        </>
    )
}

export default AppDashboard;