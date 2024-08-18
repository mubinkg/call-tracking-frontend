'use client'

import CampaignTable from "@/app-component/campaign/CampaignTable";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

type CallFlows = {
    name: string
    status: string
}

const data: CallFlows[] = [
    {
        name: "Mubin",
        status: "active"
    }
]

export default function page() {
    const columns: ColumnDef<CallFlows>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "name",
            header: "NAME",
            cell: ({ row }) => <div>{row.getValue("name")}</div>,
        },
        {
            accessorKey: "status",
            header: "STATUS",
            cell: ({ row }) => <div>{row.getValue("status")}</div>,
        },
        {
            header: "ACTION",
            cell: ({ row }) => <div>Action</div>,
        },
    ]
    return (
        <div>
            <div className="m-[2rem]">
                <h1 className="text-lg font-semibold md:text-2xl">Campaing</h1>
                <CampaignTable columns={columns} data={data} />
            </div>
        </div>
    )
}