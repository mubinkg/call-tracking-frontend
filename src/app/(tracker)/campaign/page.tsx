import CampaignTable from "@/app-component/campaign/CampaignTable";

export default function page(){
    return (
        <div className="m-[2rem]">
            <h1 className="text-lg font-semibold md:text-2xl">Campaing</h1>
            <CampaignTable/>
        </div>
    )
}