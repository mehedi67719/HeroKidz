"use client"

import { signIn } from 'next-auth/react';
import { redirect, useSearchParams } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialButton = () => {

    const params = useSearchParams();

    // console.log(params.get("callbackUrl") || "/")

    const handlelogin = async () => {
        const result = await signIn("google", {
            callbackUrl: params.get("callbackUrl") || "/",
            redirect: false
        });
        console.log(result)
    }


    return (
        <div>
            <button onClick={handlelogin} className="w-full flex items-center justify-center gap-3 btn btn-primary py-3 rounded-xl shadow hover:scale-105 transition">
                <FcGoogle size={24} />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialButton;