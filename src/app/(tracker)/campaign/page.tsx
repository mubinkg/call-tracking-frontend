'use client'

import CampaignTable from "@/app-component/campaign/CampaignTable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      progress: "success",
      email: "ken99@yahoo.com",
      campaign: 'first',
      live: 0,
      hourly: 0,
      daily: 0,
      monthly: 0,
      global: 0
    }
  ]
  
type Payment = {
    id: string
    amount: number
    progress: "pending" | "processing" | "success" | "failed"
    email: string,
    campaign: string,
    live: number,
    hourly: number,
    daily: number,
    monthly: number,
    global: number
  }

export default function page(){
    const columns: ColumnDef<Payment>[] = [
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
          accessorKey: "progress",
          header: "PROGRESS",
          cell: ({ row }) => <div>{row.getValue("progress")}</div>,
        },
        {
          accessorKey: "campaign",
          header: "CAMPAIGN",
          cell: ({ row }) => <div>{row.getValue("campaign")}</div>,
        },
        {
          accessorKey: "live",
          header: "LIVE",
          cell: ({ row }) => <div className="lowercase">{row.getValue("live")}</div>,
        },
        {
          accessorKey: "hourly",
          header: "HOURLY",
          cell: ({ row }) => <div className="lowercase">{row.getValue("hourly")}</div>,
        },
        {
          accessorKey: "daily",
          header: "DAILY",
          cell: ({ row }) => <div className="lowercase">{row.getValue("daily")}</div>,
        },
        {
          accessorKey: "monthly",
          header: "MONTHLY",
          cell: ({ row }) => <div className="lowercase">{row.getValue("monthly")}</div>,
        },
        {
          accessorKey: "global",
          header: "GLOBAL",
          cell: ({ row }) => <div className="lowercase">{row.getValue("global")}</div>,
        },
        {
          accessorKey: "status",
          header: ({ column }) => {
            return (
              <Button
                variant="ghost"
              >
                STATUS
              </Button>
            )
          },
          cell: ({ row }) => (<div className="lowercase">Change Status</div>),
        },
        {
          id: "actions",
          header: "Action",
          cell: ({ row }) => {
            return (
              <div>
                  Action 
              </div>
            )
          },
        },
      ]
    return (
        <div className="m-[2rem]">
            <h1 className="text-lg font-semibold md:text-2xl">Campaing</h1>
            <CampaignTable columns={columns} data={data}/>
        </div>
    )
}