// 'use client';

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { use } from "react";
import SendEmailCheck from "../send-emailcheck";

// import { useSearchParams } from "next/navigation";

type Props = {
    searchParams: Promise<{
        error: string; 
        email?: string
        emailcheck?: string;
    }>;
}

const getErrorMessage = (error:string) => {
    if(error === 'CheckEmail') return "Check your regist email for approve";
    if(error === 'NotMatchPassword') return "You are wrong pasword";
    if(error === 'NotFound') return "Not exists email addrees";
    if(error === 'WithdrawMember') return "You are alreday withdraw";
    if(error === 'InvalidToken') return "Invalid approve";
    return error;
}
// 'use client에서 '서버' 주소 URL에서 읽고, 브라우저로 렌더링 해주기 때문에 비동기로 useSearchParamas()를 써야함.
// 그래서 비동기로 하지 않으면 빌드 문제 발생(크립토?)
export default function LoginError({searchParams}:Props) {
    // const searchParams = useSearchParams();
    // const error = searchParams.get('error');
    const { error, email, emailcheck } = use(searchParams);
  return (
    <div className="grid place-items-center h-full">
        <div className="border p-5 text-center">
            <h1 className="text-xl">{getErrorMessage(error)}</h1>
            {/* BUtton에 OnClick을 주면 useRouter로 client 컴포넌트가 되버리니까 LInk 사용 */}
            <Button variant={'outline'} asChild={true}>
                <Link href='/login'>{email || 'OK'}</Link>
            </Button>
            {email && emailcheck && error === 'CheckEmail' && (
                <SendEmailCheck email={email} emailcheck={emailcheck} />
            )}
        </div>
    </div>
  );
};
