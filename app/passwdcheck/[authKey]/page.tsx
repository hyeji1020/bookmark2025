'use client';
import { Button } from "@/components/ui/button";
import LabelInput from "@/components/ui/label-input";
import { use } from "react";
import z from "zod";

type Props = {
    params: Promise<{authKey: string}>;
}

export default function PasswdCheck({params}:Props) {
    const {authKey} = use(params);
    // Todo: member.emailcheck의 authKey 일치 여부 확인하기
    // 일치하지 않으면 메세지 보이기

    const changePasswd = async(formData: FormData) => {
        const entries = Object.fromEntries(formData.entries());
        console.log("entries!!!!!!!", entries);

        const validator = z.object({
            passwd: z.string().min(6, "비밀번호는 6글자 이상만 가능합니다."),
            passwd2: z.string().min(6, "비밀번호는 6글자 이상만 가능합니다."),
        })
        .refine(({passwd, passwd2}) => passwd === passwd2, "일치하지 않습니다.")
        .safeParse(entries);

        if(!validator.success){
            // if(formData.get('passwd') !== formData.get('passwd2')){
            //     return alert('비밀번호가 일치하지 않습니다.');
            // }
        // } else{
            const msgs = JSON.parse(validator.error.message);
            console.log(msgs[0].message);
            return alert(msgs[0].message);
        } 

        //Todo: update Member set passwd.. & goto login
    };

    return (
    <div className="grid place-items-center">
        <div>
        <h1 className="text-2xl">비밀번호 변경</h1>
            <form action={changePasswd} className='flex flex-col gap-5'>
                <LabelInput
                label="new password"
                name="password"
                type="password" 
                placeholder="new password..."
                />
                <LabelInput
                label="confirm password"
                name="password2"
                type="password" 
                placeholder="confirm password..."
                />
                <Button type="submit" className="w-full">
                    Change Password
                </Button>
            </form>
        </div>
    </div>
    );
};
