import { HomeChart } from "@/app-component/chart/HomeChart"
import { TotalCalls } from "@/app-component/chart/TotalCalls"
import { CallChart } from "@/app-component/reporting/CallChart"

export default function Page() {
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
            </div>
        </div>
    )
}
