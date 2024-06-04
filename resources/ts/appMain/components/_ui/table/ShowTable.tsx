import {ReactElement} from "react";

type ShowTdProps = {
    title: string,
    data: string | number | ReactElement,
}

const ShowTd = (props: ShowTdProps) => {
    return (
        <tr className="border-2">
            <td className="w-0 whitespace-nowrap px-2 py-1 bg-bakDark text-white">{props.title}</td>
            <td className="px-2 py-1">{props.data}</td>
        </tr>
    );
};

export {
    ShowTd,
}
