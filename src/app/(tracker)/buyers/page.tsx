'use client'

import CampaignTable from "@/app-component/campaign/CampaignTable";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

type CallFlows = {
    name: string
    status: string
}

const data: CallFlows[] = [
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
            accessorKey: "hourly",
            header: "HOURLY",
            cell: ({ row }) => <div>{row.getValue("hourly")}</div>,
        },
        {
            accessorKey: "daily",
            header: "DAILY",
            cell: ({ row }) => <div>{row.getValue("daily")}</div>,
        },
        {
            accessorKey: "monthly",
            header: "MONTHLY",
            cell: ({ row }) => <div>{row.getValue("monthly")}</div>,
        },
        {
            accessorKey: "global",
            header: "GLOBAL",
            cell: ({ row }) => <div>{row.getValue("global")}</div>,
        },
        {
            accessorKey: "status",
            header: "STATUS",
            cell: ({ row }) => <div>{row.getValue("status")}</div>,
        },
        {
            header: "Actions",
            cell: ({ row }) => <div>Action</div>,
        },
    ]
    return (
        <div>
            <div className="m-[2rem]">
                <h1 className="text-lg font-semibold md:text-2xl">Buyers</h1>
                <CampaignTable columns={columns} data={data} />
            </div>
        </div>
    )
}