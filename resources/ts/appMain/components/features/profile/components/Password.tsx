import React from 'react';
import {TextInput} from "@/ts/appMain/components/_ui/form/Form";
import {SubmitButton} from "@/ts/appMain/components/_ui/button/Button";

const Password = () => {
    return (
        <div className="w-full bg-white p-4 mt-6">
            <p className="border-b-2 pb-2 mb-4">パスワード変更</p>

            <form action="" method="POST">
                <TextInput label={'現在のパスワード'} id={'nowPassword'} type={'password'} name={'nowPassword'} placeholder={''}/>
                <TextInput label={'新しいパスワード'} id={'newPassword'} type={'password'} name={'newPassword'} placeholder={''}/>
                <TextInput label={'新しいパスワード(確認用)'} id={'newPasswordConfirm'} type={'password'} name={'newPasswordConfirm'} placeholder={''}/>

                <div className="text-center">
                    <SubmitButton value={'変更'}/>
                </div>
            </form>
        </div>
    );
};

export default Password;
