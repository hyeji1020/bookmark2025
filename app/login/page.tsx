import { Button } from '@/components/ui/button';
import { GithubLoginButton } from '@/components/ui/github-button';
import { GoogleLoginButton } from '@/components/ui/google-login-button';
import { KakaoLoginButton } from '@/components/ui/kakao-login-button';
import LabelInput from '@/components/ui/label-input';
import { NaverLoginButton } from '@/components/ui/naver-login-button';

export default function Login() {
  return (
    <div className='bg-sky-100 grid place-items-center h-full'>
      <div className='flex [&>div]:p-4 rounded-lg shadow-md border'>
        <div className='flex-1'>
          <div className=''>
            <h3 className='text-2xl text-center'>Login</h3>
          </div>
          <div>
            <form className=''>
              <LabelInput
                label='email'
                type='email'
                placeholder='example@gmail.com'
              />
              <LabelInput
                label='password'
                type='password'
                placeholder='Your password...'
              />
            <div className='grid grid-cols-1 gap-2 margin-5px'>
              <KakaoLoginButton/>
              <NaverLoginButton/>
              <GoogleLoginButton/>
              <GithubLoginButton/>
            </div>
              <div className='flex justify-between my-2'>
                <label className='cursor-pointer hover:text-white-600'>
                  <input type='checkbox' className='mr-1 translate-y-[1px]' />
                  Remember me
                </label>
                <a href='#'>Forgot password?</a>
              </div>
              <Button className='w-full bg-sky-400'>
                Login with your account
              </Button>
            </form>
          </div>
        </div>

        <div className='flex-1 bg-slate-200'>
          <h1 className='text-3xl text-sky-400  '>Book & Mark</h1>
          <div className='x'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            ullam in repudiandae ipsa natus, debitis, laboriosam exercitationem
            incidunt inventore voluptate velit! Libero dolores corrupti minus
            reprehenderit blanditiis suscipit, soluta iusto?
          </div>
        </div>
      </div>
    </div>
  );
}