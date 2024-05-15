import React, {ReactNode} from 'react';

const HomeProductRow = (props: {children:ReactNode}) => {
    return (
        <div className="mb-14">
            {props.children}
        </div>
    );
};

export default HomeProductRow;
