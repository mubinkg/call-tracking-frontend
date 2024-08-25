import { HomeChart } from "@/app-component/chart/HomeChart"
import { CallChart } from "@/app-component/reporting/CallChart"

export default function Page() {
    return (
        <div className="p-4">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Reporting</h1>
            </div>
            <div   
            >
                <div className="flex flex-row max-md:flex-col">
                    <div className="w-9/12 max-md:w-full">
                        <HomeChart/>
                    </div>
                    <div className="w-3/12 max-md:w-full">
                        hello
                    </div>
                </div>
            </div>
        </div>
    )
}
