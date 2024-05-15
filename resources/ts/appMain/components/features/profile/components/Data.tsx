import React from 'react';

const Data = () => {
    return (
        <>
            <table className="w-full bg-white">
                <tbody>
                <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">法人名・団体名</td>
                    <td className="text-right p-2">〇〇農園</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">代表者名</td>
                    <td className="text-right p-2">山田太郎</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">住所</td>
                    <td className="text-right p-2">埼玉県〇〇市xx町1-2-3</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">電話番号</td>
                    <td className="text-right p-2">080-1234-5678</td>
                </tr>
               <tr className="border-b-2">
                    <td className="w-0 text-nowrap p-2">メールアドレス</td>
                    <td className="text-right p-2">exxample@example.com</td>
                </tr>
                </tbody>
            </table>
            <p className="mt-2 text-sm">※上記情報に変更があった場合は、お問い合わせよりご連絡ください</p>
        </>
    );
};

export default Data;
