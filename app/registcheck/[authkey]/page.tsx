import { findMemberByEmail } from "@/actions/sign";
import SendEmailCheck from "@/app/login/send-emailcheck";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Link } from "lucide-react";
import { redirect } from "next/navigation";


type Props = {
    params: Promise<{authKey: string}>;
    searchParams: Promise<{email:string}>;
};
export default async function RegistCheck({params, searchParams}:Props) {
    const {authKey} = await params
    const {email} = await searchParams;

    const mbr = await findMemberByEmail(email);
    // Todo: check the eamilcheck read from db
    if(authKey !== mbr?.emailcheck) {
        redirect('/login/error?error=InvalidToken');
    }

    // 일치한다면 emailCheck 지우고, 로그인으로 보내기!
    await prisma.member.update({
        data: { emailcheck: null },
        where: { email },
    });

    return 
    <>
        <div className='grid place-items-center h-full'>
        <div className='border p-5 text-center rounded-md'>
            <h1 className='text-xl mb-5'>가입 승인 완료</h1>
            <div className='flex justify-center items-center gap-2'>
            <Button variant={'outline'} asChild={true}>
                <Link href='/login'>Goto Login</Link>
            </Button>
            </div>
        </div>
        </div>
    </>
};
