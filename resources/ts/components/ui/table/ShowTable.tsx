import React, {ReactElement} from "react";
import { ShowTdType } from "./_type";

const ShowTd: React.FC<ShowTdType> = ({title, data}) => {
    return (
        <tr className="border-2">
            <td className="w-0 whitespace-nowrap px-2 py-1 bg-bakDark text-white">{title}</td>
            <td className="px-2 py-1">{data}</td>
        </tr>
    );
};

export {
    ShowTd,
}
