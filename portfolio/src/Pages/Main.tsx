import { Body } from "../Components/Body";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { Collapse } from 'react-collapse';

export function Main(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Body />
                <Collapse isOpened = {true}>
                    <Sidebar />
                </Collapse>
                
            </main>
        </div>
    )
}