import React from 'react';
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {TextInput} from "@/ts/appMain/components/_ui/form/Form";
import {AuthButton} from "@/ts/appMain/components/_ui/button/Button";

const LoginFeatures = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-darkGreen">
            <div className="bg-white sm:flex justify-between items-center w-3/4 max-w-4xl max-h-3/4 sm:h-1/2">
                <div className="w-full flex flex-col items-center order-1 sm:w-1/2 sm:order-2 sm:h-full">
                    <div className="w-full h-full relative">
                        <img src={loginImage} className="w-full h-full object-cover"/>
                        <img src={logo} className="absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    </div>
                </div>
                <div className="w-full p-8 order-2 sm:w-1/2 sm:order-1">
                    <h1 className="text-xl  sm:text-2xl font-bold mb-6 text-center">ログイン</h1>
                    <form>
                        <TextInput label={'メールアドレス'} id={'email'} type={'email'} placeholder={''}/>
                        <TextInput label={'パスワード'} id={'password'} type={'password'} placeholder={''}/>
                        <AuthButton name={'ログイン'}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginFeatures;
