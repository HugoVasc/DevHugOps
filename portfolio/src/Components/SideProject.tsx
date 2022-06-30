import {CheckCircle} from 'phosphor-react'

interface Props {
    name: string,
}

export function SideProject ({name}: Props) {
    return (
        <a href="">
            <span className = "text-grey-600"> 
                Terça • 22 de junho • 19h00 
            </span>
            <div className = "rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    <span className ="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20} />
                        {name}
                    </span>
                    <span className ="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                        Ao Vivo
                    </span>
                </header>
                <strong className="text-grey-200 mt-5 block">
                    Abertura do evento Ignite labs
                </strong>
            </div>
        </a>
    )
}