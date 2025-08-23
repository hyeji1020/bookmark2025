"use server";

import { createTransport } from "nodemailer";

const { google_user: user, google_app_apssword: pass } = process.env;

const TRANS = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: { user, pass },
});

const FROM = '"BookMark" <hyejilee@gmail.com>';

export const sendRegistCheck = async (to: string, authKey: string) => {
  const subject = "[북마크] 가입 인증 메일";
  const html = `
  <div style="display: grid; place-items: center; height: 200px;">
    <h1>북마크 가입을 환영합니다</h1>
    <h3 style="margin: 10px; 0;">가입을 완료하시려면 아래 링크를 클릭해 주세요</h3>
    <a href="${process.env.NEXT_PUBLIC_URL}/registCheck/${authKey}?email=${to}">가입 인증</a>
  </div>
  `;

  sendMail(to, subject, html);
};

export const sendPasswordReset = async (to: string, authKey: string) => {
  const subject = "[북마크] 비밀번호 찾기";
  const html = `
  <div style="display: grid; place-items: center; height: 200px;">
    <h1>비밀번호 찾기</h1>
    <h3 style="margin: 10px; 0;">아래 링크를 클릭하면 암호 변경 화면으로 이동합니다.</h3>
    <a href="${process.env.NEXT_PUBLIC_URL}/passwdcheck/${authKey}">암호 찾기</a>
  </div>
  `;

  sendMail(to, subject, html);
};

type Attachments = {
  filename: string;
  path: string;
}[];

const sendMail = async (
  to: string,
  subject: string,
  html: string,
  attachments?: Attachments
) => {
  TRANS.sendMail({
    from: FROM,
    to,
    bcc: "hyejilee100@gmail.com",
    subject,
    html,
    attachments,
  });
};
