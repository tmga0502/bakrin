import React, {ReactNode} from 'react';

const HomeProductGrid = (props: {children: ReactNode}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {props.children}
        </div>
    );
};

export default HomeProductGrid;
