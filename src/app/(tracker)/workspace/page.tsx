import { Card, CardTitle } from "@/components/ui/card";

export default function page(){
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
                </Card>
            </div>
        </div>
    )
}