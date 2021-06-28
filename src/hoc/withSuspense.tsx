import React, {ComponentType, Suspense} from 'react';
import Preloader from "../component/common/Preloader";



export function withSuspense<T>(Component: React.ComponentType<T>) {

    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }


}