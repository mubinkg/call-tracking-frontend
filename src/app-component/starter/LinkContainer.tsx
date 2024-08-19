import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const LinkContainer = ({ icon, title, body }: any) => {
    return (
        <Card className='pointer'>
            <CardContent>
                <div className='flex flex-col items-center mt-4 gap-2'>
                    {icon}
                    <h1 className='text-xl'>
                        {title}
                    </h1>
                    <p className='text-xs'>{body}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default LinkContainer
