import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {TextAreaBox} from "@/ts/appMain/components/_ui/form/Form";
import {SubmitButton} from "@/ts/appMain/components/_ui/button/Button";

const ContactFeatures = () => {
    return (
        <MainLayout>
            <Breadcrumb/>
            <PageTitle en={'CONTACT'} jp={'お問い合わせ'}/>
            <div className="max-w-2xl mx-auto mt-10">
                <form action="" method="POST">
                    <TextAreaBox id={"contact"} name={"contact"} label={"お問い合わせ内容"} rows={12} />

                    <p>※お問い合わせに対する回答は、ご登録いただいていますメールアドレスへ返信させていただきます。</p>
                    <div className="text-center mt-8">
                        <SubmitButton value={'送信'} color={'mainGreen'} type={'submit'}/>
                    </div>
                </form>
            </div>
        </MainLayout>

    );
};

export default ContactFeatures;
