import React from 'react';

type TabsType  = {
    mode:boolean,
    setMode: React.Dispatch<any>
}

const Tabs = (props: TabsType) => {
    const BaseClass = "border rounded-tl-xl rounded-tr-xl px-4 py-2 hover:cursor-pointer hover:opacity-80"
    const normalClass = `${BaseClass} bg-white`
    const activeClass = `${BaseClass} bg-mainGreen text-white`
    return (
        <div className="border-b flex gap-4 mb-6">
            <div
                className={props.mode ? activeClass : normalClass}
                onClick={()=>{props.setMode(!props.mode)}}
            >
                アイテム
            </div>

            <div
                className={!props.mode ? activeClass : normalClass}
                onClick={()=>{props.setMode(!props.mode)}}
            >
                農家
            </div>
        </div>
    );
};

export default Tabs;
