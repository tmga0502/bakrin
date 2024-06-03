type ShowTdProps = {
    title: string,
    data: string | number,
}

const ShowTd = (props: ShowTdProps) => {
    return (
        <tr className="border-2">
            <td className="w-0 whitespace-nowrap px-2 py-1 bg-dark text-white">{props.title}</td>
            <td className="px-2 py-1">{props.data}</td>
        </tr>
    );
};

export {
    ShowTd,
}
