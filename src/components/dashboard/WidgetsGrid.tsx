'use client'
import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/src/store"

export const WidgetGrid = () =>{
    const isCart = useAppSelector( state => state.counter.count)
    return (
        <div>
            <SimpleWidget 
                title={`${isCart}`}
                subTitle="Productos agregados"
                label="Contador"
                icon={<IoCartOutline size={70} className="text-blue-600"/>}
                href="/dashboard/counter"/>
            {/* <SimpleWidget/> */}
        </div>
    )
}