import { WidgetGrid } from "@/src/components";

export const metadata = {
    title: 'Admin Dashboard',
    description: 'Un dashboard administrativo'
}

export default function MainPAge () {
    return(
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Informacion general</span>
            <WidgetGrid/>
        </div>
    )
}