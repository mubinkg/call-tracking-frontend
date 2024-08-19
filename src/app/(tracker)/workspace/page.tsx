import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function page() {
    return (
        <div>
            <div className="m-[2rem] flex items-center justify-center">
                <Card className="lg:w-6/12 md:w-12/12">
                    <CardTitle>
                        <div className="m-4">
                            SETUP YOUR WORKSPACE
                        </div>
                        <hr />
                    </CardTitle>
                    <CardContent>
                        <div className="my-3 flex justify-between items-center">
                            <div>
                                <h4 className="text-lg mb-1">Name</h4>
                                <p className="text-sm text-slate-300">Everyone in your workspace can see this</p>
                            </div>
                            <Input className="w-4/12" value="Hello World" />
                        </div>
                        <hr />
                        <div className="my-3">
                            <div className="flex justify-end">
                                <div className="flex items-center gap-4">
                                    <SearchIcon />
                                    <Button className="px-[30px]">Invite</Button>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm">Members</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="m-[2rem] flex items-center justify-center">
                <Card className="lg:w-6/12 md:w-12/12">
                    <CardContent>
                        <div className="my-3 flex justify-between items-center">
                            <div>
                                <h4 className="text-xxl mb-1">DESTROY WORKSPACE</h4>
                                <p className="text-sm text-slate-300">Everyone in your workspace can see this</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center mt-3">
                            <h2 className="text-xs">
                            By deleting account you will loose all your data and access to any workspaces that you have created
                            </h2>
                            <Button>Destroy this workspace</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}