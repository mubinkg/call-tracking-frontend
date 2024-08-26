'use client'

import CampaignTable from "@/app-component/campaign/CampaignTable"
import { HomeChart } from "@/app-component/chart/HomeChart"
import { TotalCalls } from "@/app-component/chart/TotalCalls"
import { CallChart } from "@/app-component/reporting/CallChart"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"

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


export default function Page() {
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
        <div className="m-[2rem]">
            <div className="flex items-center mb-4">
                <h1 className="text-lg font-semibold md:text-2xl">Reporting</h1>
            </div>
            <div   
            >
                <div className="flex flex-row max-md:flex-col gap-4">
                    <div className="w-8/12 max-md:w-full">
                        <HomeChart/>
                    </div>
                    <div className="w-4/12 max-md:w-full">
                        <TotalCalls/>
                    </div>
                </div>
                <div className="my-[30px]">
                    <h1 className="text-xxl">CALL SUMMARY</h1>
                    <CampaignTable columns={columns} data={data} />
                </div>
                <div className="my-[30px]">
                    <h1 className="text-xxl">CALL LOGS</h1>
                    <CampaignTable columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}
