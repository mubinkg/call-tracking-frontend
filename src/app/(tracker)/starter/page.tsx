import LinkContainer from "@/app-component/starter/LinkContainer";
import { BookText, Fence, Lightbulb, MessageCircleIcon, SearchIcon } from "lucide-react";

export default function page() {
    return (
        <div>
            <div className="flex items-center justify-center my-[40px]">
                <div className="lg:w-8/12 md:w-11/12">
                    <h1 className="text-[30px] my-4">Welcome to Dialics</h1>
                    <p className="text-xs text-slate-300">This is a page with some helpful tips and resources to start using Dialics</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="lg:w-8/12 md:w-11/12">
                    <h1>STEP-BY-STEP GUIDE</h1>
                </div>
            </div>
            <div className="flex items-center justify-center my-4">
                <div className="lg:w-8/12 md:w-11/12">
                    <h1 className="my-4">Useful Links</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <LinkContainer
                            icon={<SearchIcon/>}
                            title="Help Center"
                            body="The ultimate resource for all queries and answer"
                        />
                        <LinkContainer
                            icon={<MessageCircleIcon/>}
                            title="Help Center"
                            body="The ultimate resource for all queries and answer"
                        />
                        <LinkContainer
                            icon={<Fence/>}
                            title="Help Center"
                            body="The ultimate resource for all queries and answer"
                        />
                        <LinkContainer
                            icon={<Fence/>}
                            title="Help Center"
                            body="The ultimate resource for all queries and answer"
                        />
                        <LinkContainer
                            icon={<Lightbulb/>}
                            title="Help Center"
                            body="The ultimate resource for all queries and answer"
                        />
                        <LinkContainer
                            icon={<BookText/>}
                            title="Help Center"
                            body="The ultimate resource for all queries and answer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}