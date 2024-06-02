import React from 'react';
import {ProducerType} from "@/ts/types/ProducerType";
import {createPhoneNumber, createPostalCode} from "@/ts/functions/formatter";

const Data = (props:{data: ProducerType}) => {
    return (
        <>
            <table className="w-full bg-white">
                <tbody>
                <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">法人名・団体名</td>
                    <td className="text-right p-2">{props.data.organizationName}</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">代表者名</td>
                    <td className="text-right p-2">{props.data.presidentName}</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2 align-middle">住所</td>
                    <td className="text-right p-2">
                        {createPostalCode(props.data.postalCode)}<br/>
                        {`${props.data.address1}${props.data.address2}${props.data.address3}${props.data.address4}`}
                    </td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">電話番号</td>
                    <td className="text-right p-2">{createPhoneNumber(props.data.tel)}</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">メールアドレス</td>
                    <td className="text-right p-2">{props.data.email}</td>
                </tr>
                </tbody>
            </table>
            <p className="mt-2 text-sm">※上記情報に変更があった場合は、お問い合わせよりご連絡ください</p>
        </>
    );
};

export default Data;
