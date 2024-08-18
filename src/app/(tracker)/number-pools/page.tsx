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
            accessorKey: "country",
            header: "COUNTRY",
            cell: ({ row }) => <div>{row.getValue("country")}</div>,
        },
        {
            accessorKey: "poolSize",
            header: "POOL SIZE",
            cell: ({ row }) => <div>{row.getValue("poolSize")}</div>,
        },
        {
            accessorKey: "closedBrowserDaily",
            header: "CLOSED BROWSER DAILY",
            cell: ({ row }) => <div>{row.getValue("closedBrowserDaily")}</div>,
        },
        {
            accessorKey: "idealLimit",
            header: "IDEAL LIMIT",
            cell: ({ row }) => <div>{row.getValue("idealLimit")}</div>,
        },
        {
            header: "ACTION",
            cell: ({ row }) => <div>Action</div>,
        },
    ]
    return (
        <div>
            <div className="m-[2rem]">
                <h1 className="text-lg font-semibold md:text-2xl">Number Pools</h1>
                <CampaignTable columns={columns} data={data} />
            </div>
        </div>
    )
}