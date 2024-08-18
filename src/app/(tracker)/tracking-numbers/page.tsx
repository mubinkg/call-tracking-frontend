'use client'

import CampaignTable from "@/app-component/campaign/CampaignTable";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

type PropType = {
    number: string
    name: string
    country: string
    type: string
    region: string
    campaign: string
    allocated:string
    renew: string
    vendor: string 
    live: string 
    hourly: string 
    daily: string 
    monthly: string 
    global: string 
    status: string 
}

const data: PropType[] = [
    {
        number: "111",
        name: "mubin",
        country: "Bd",
        type: 'default',
        region: "Dhaka",
        campaign: "First Camp",
        allocated: "Test",
        renew: "yes",
        vendor: "test", 
        live: "test",
        hourly: "0", 
        daily: "0",
        monthly: "0",
        global: "0",
        status: "0"
    }
]

export default function page() {
    const columns: ColumnDef<PropType>[] = [
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
            accessorKey: "number",
            header: "NUMBER",
            cell: ({ row }) => <div>{row.getValue("number")}</div>,
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
            accessorKey: "type",
            header: "TYPE",
            cell: ({ row }) => <div>{row.getValue("type")}</div>,
        },
        {
            accessorKey: "region",
            header: "REGION",
            cell: ({ row }) => <div>{row.getValue("region")}</div>,
        },
        {
            accessorKey: "campaign",
            header: "CAMPAIGN",
            cell: ({ row }) => <div>{row.getValue("campaign")}</div>,
        },
        {
            accessorKey: "allocated",
            header: "ALLOCATED",
            cell: ({ row }) => <div>{row.getValue("allocated")}</div>,
        },
        {
            accessorKey: "renew",
            header: "RENEW",
            cell: ({ row }) => <div>{row.getValue("renew")}</div>,
        },
        {
            accessorKey: "vendor",
            header: "VENDOR",
            cell: ({ row }) => <div>{row.getValue("vendor")}</div>,
        },
        {
            accessorKey: "live",
            header: "LIVE",
            cell: ({ row }) => <div>{row.getValue("live")}</div>,
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
            header: "ACTION",
            cell: ({ row }) => <div>Action</div>,
        },
    ]
    return (
        <div>
            <div className="m-[2rem]">
                <h1 className="text-lg font-semibold md:text-2xl">Tracking Numbers</h1>
                <CampaignTable columns={columns} data={data} />
            </div>
        </div>
    )
}