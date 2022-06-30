import  {SideProject} from "./SideProject";

export function Sidebar() {
    return (
        <div className="flex flex-col min-h-screen">
            <SideProject name="projeto-1"/>
            <SideProject name="projeto-2"/>
        </div>
    )
}